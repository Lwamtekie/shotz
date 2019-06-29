import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = (movieArray) => {
  let domString = '';
  movieArray.forEach((movie) => {
    domString += `<div id=${movie.id} class="card movie col-2">`;
    domString += `<div class="card-header">${movie.name}</div>`;
    domString += '<div class="card-body">';
    domString += `<img class="card-img-top" src="${movie.imgUrl}" alt="image">`;
    domString += `<h5 class="card-title">${movie.genre}</h5>`;
    domString += `<h5 class="card-title">${movie.releaseDate}</h5>`;
    domString += `<h5 class="card-title">${movie.description}</h5>`;
    domString += `<p class="card-text">${movie.locations.length} Locations</p>`;
    domString += '<button type="button" id="click"class="btn btn-light">Movie Viewings</button>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};


const filterMovies = () => {
  const movieCards = Array.from(document.getElementsByClassName('movie'));
  movieCards.forEach((movieCard) => {
    movieCard.addEventListener('click', () => {
      const indexOfClickedMovie = util.indexFromId(movies, movieCard.id);
      domStringBuilder([movies[indexOfClickedMovie]]);
    });
  });
};
const cardClicked = (e) => {
  console.error('cardClicked');
  const movieTitle = e.getElementsByClassName('card-title').innerHTML;
  domStringBuilder(movieTitle);
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
const allCards = document.getElementsByClassName('card');
const newCards = Array.from(allCards);
console.error('allCards');
console.error(allCards.length);
newCards.forEach((card, index) => {
  console.error(index);
  card.addEventListener('click', cardClicked);
});

export default { initializeMovies };
