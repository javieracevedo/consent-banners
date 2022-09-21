import React, { useEffect, useState } from 'react';
import api from '../../api';
import { PillRadioButton } from '../PillRadioButton';

function ConsentBannerSelection() {
  const [banners, setBanners] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState({});

  async function getBanners() {
    try {
      const { data } = await api.get('/banners');
      setBanners(data);
      setSelectedBanner(data[0]);
    } catch (error) {
      throw new Error(`Could not get countries from API \n${error}`);
    }
  }

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <>
      <fieldset className="flex flex-wrap">
        {banners.map((banner) => (
          <PillRadioButton
            key={banner.id}
            onRadioButtonClicked={() => setSelectedBanner(banner)}
            checked={selectedBanner.id === banner.id}
            label={banner.label}
            id={banner.id}
            name="banner-options"
          />
        ))}
      </fieldset>
      <figure className="flex w-10/12">
        <img src={selectedBanner.imagePath} className="basis-8/12 w-full" alt={`${selectedBanner.label} consent banner format`} />
        <figcaption className="basis-4/12 mt-10">{selectedBanner.description}</figcaption>
      </figure>
    </>
  );
}

export default ConsentBannerSelection;
