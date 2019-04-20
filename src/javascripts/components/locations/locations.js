import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domstringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<h3>${location.name}</h3>`;
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationsResults = resp.data.locations;
      locations = locationsResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
