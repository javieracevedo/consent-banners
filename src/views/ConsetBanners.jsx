import React from 'react';
import ConsentBannerFilters from '../components/ConsentBannerFilters';

function ConsentBanner() {
  return (
    <div className="flex flex-row lg:flex-nowrap lg:gap-y-0 lg:gap-x-24 flex-wrap gap-x-14 gap-y-12">
      <section className="lg:basis-1/5 basis-full">
        <div className="header-pill">Performance</div>
        <h1>
          Consent Banner Performance
        </h1>
        <p className="pt-4">
          Every website collects consent for cookies & trackers with different consent
          banner formats. These differences are determined by the various privacy
          regulations enacted in each country. The positive consent rate shows the
          percentage of users who selected “Agree” in the banner, over all the users
          that have replied to the consent notice.
        </p>
      </section>
      <section className="lg:basis-3/4 basis-full">
        <h3>Choose a consent banner format</h3>
        <ConsentBannerFilters />
      </section>
    </div>
  );
}

export default ConsentBanner();
