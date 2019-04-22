import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += '<div class="card" style="width: 18rem;">';
    domString += `<h3>${movie.name}</h3>`;
    domString += '<div class="movies-body">';
    domString += `<h5 class="movie-genre">Movie ${movie.genre}</h5>`;
    domString += `<h6 class="movie-releaseDate">${movie.releaseDate}</h6>`;
    domString += `<p class="movie-description">${movie.description}.</p>`;
    domString += `<h6 class="movie-locations"> ${movie.locations.length} </h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
