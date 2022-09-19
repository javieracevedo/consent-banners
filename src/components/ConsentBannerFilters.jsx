import React from 'react';
import api from '../api';

function ConsentBannerSelection() {
  api.post('/countries')
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return (<div />);
}

export default ConsentBannerSelection;
