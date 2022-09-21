import React, { useEffect, useState } from 'react';
import api from '../../api';
import { PillRadioButton } from '../PillRadioButton';
import { ImageRadioButton } from '../ImageRadioButton';

function ConsentBannerSelection() {
  const [banners, setBanners] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({});

  function findBannerByCountry(country) {
    return banners.find(banner => banner["Banner format"] === country["Banner format"]);
  }

  async function getBanners() {
    try {
      const { data } = await api.get('/banners');
      setBanners(data);
      setSelectedBanner(data[0]);
    } catch (error) {
      throw new Error(`Could not get banners from API \n${error}`);
    }
  }

  async function getCountries() {
    try {
      const { data } = await api.get('/countries');
      setCountries(data);
    } catch (error) {
      throw new Error(`Could not get countries from API \n${error}`);
    }
  }

  useEffect(() => {
    getBanners();
    getCountries()
  }, []);

  return (
    <>
      <fieldset className="flex flex-wrap mb-2">
        {banners.map((banner) => (
          <PillRadioButton
            id={`banner-${banner.id}`}
            key={banner.id}
            onRadioButtonClicked={() => {
              setSelectedBanner(banner);
              setSelectedCountry({});
            }}
            checked={selectedBanner.id === banner.id}
            name="banner-options"
          >
            <span>{banner.label}</span>
          </PillRadioButton>
        ))}
      </fieldset>

      <figure className="flex 2xl:flex-row flex-col w-10/12">
        <img src={selectedBanner.imagePath} className="2xl:basis-8/12 basis-full w-full" alt={`${selectedBanner.label} consent banner format`} />
        <figcaption className="2xl:basis-4/12 2xl:mt-10 mb-10">{selectedBanner.description}</figcaption>
      </figure>

      <fieldset className="flex flex-wrap">
        {countries.map((country) => (
          <ImageRadioButton
            id={`country-${country.id}`}
            key={country.id}
            imagePath={country.FlagImagePath}
            imageAlt={`${country.Country} flag`}
            onRadioButtonClicked={() => {
              setSelectedBanner(findBannerByCountry(country));
              setSelectedCountry(country);
            }}
            checked={country.id === selectedCountry.id}
            name="country-options"
          >
            {country.Country}
          </ImageRadioButton>
        ))}
      </fieldset>
    </>
  );
}

export default ConsentBannerSelection;
