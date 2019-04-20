import moviesData from './components/movies/movies';
import locationsData from './components/locations/locations';
import '../styles/main.scss';

const init = () => {
  moviesData.initializeMovies();
  locationsData.initializeLocations();
};

init();
