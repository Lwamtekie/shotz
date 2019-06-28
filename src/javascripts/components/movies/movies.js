import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = (movieArray) => {
  let domString = '';
  movieArray.forEach((movie) => {
    domString += `<div id=${movie.id} class="card movie col-3">`;
    domString += `<div class="card-header">${movie.name}</div>`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${movie.genre}</h5>`;
    domString += `<h5 class="card-title">${movie.releaseDate}</h5>`;
    domString += `<h5 class="card-title">${movie.description}</h5>`;
    domString += `<p class="card-text">${movie.locations.length} Locations</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

// the indexFromId gets the slot in the
// clicked movies array and proved what position its in sub-(slot number)
const filterMovies = () => {
  const movieCards = Array.from(document.getElementsByClassName('movie'));
  movieCards.forEach((movieCard) => {
    movieCard.addEventListener('click', () => {
      const indexOfClickedMovie = util.indexFromId(movies, movieCard.id);
      domStringBuilder([movies[indexOfClickedMovie]]);
    });
  });
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder(movies);
      filterMovies();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
