import React from 'react';

function ConsentBanner() {
  return (
    <section className="p-12">
      <div className="header-pill">Performance</div>
      <h1 className="pt-1">
        Consent
        <br />
        Banner
        <br />
        Performance
      </h1>
      <p className="pt-4">
        Every website collects consent for cookies & trackers with different consent banner formats.
        These differences are determined by the various privacy regulations enacted in each country.
        The positive consent rate shows the percentage of users who selected “Agree” in the banner,
        over all the users that have replied to the consent notice.
      </p>
    </section>
  );
}

export default ConsentBanner();
