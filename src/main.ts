import { Movie } from './movie';
import 'bootstrap/dist/css/bootstrap.css'

let movies: Movie[] = [
  new Movie("Inception", 148, ["Sci-Fi", "Thriller"]),
  new Movie("The Godfather", 175, ["Crime", "Drama"]),
  new Movie("Pulp Fiction", 154, ["Crime", "Drama", "Comedy"]),
];

function displayMovies(movies: Movie[]) {
  const tableBody = document.getElementById('movie-table-body');

  if (tableBody) {
    tableBody.innerHTML = '';

    movies.forEach((movie) => {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      titleCell.textContent = movie.title;
      row.appendChild(titleCell);

      const durationCell = document.createElement('td');
      durationCell.textContent = movie.duration.toString();
      row.appendChild(durationCell);

      const genresCell = document.createElement('td');
      genresCell.textContent = movie.genres.join(', ');
      row.appendChild(genresCell);

      tableBody.appendChild(row);
    });
  }
}

function addMovie() {
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const durationInput = document.getElementById('duration') as HTMLInputElement;
  const genresInput = document.getElementById('genres') as HTMLInputElement;

  const title = titleInput.value;
  const duration = parseInt(durationInput.value);
  const genres = genresInput.value.split(',').map(genre => genre.trim());

  if (title && !isNaN(duration) && genres.length > 0) {
    const newMovie = new Movie(title, duration, genres);
    movies.push(newMovie);
    displayMovies(movies);
  }
}

window.onload = () => {
  displayMovies(movies);

  const movieForm = document.getElementById('movie-form');
  if (movieForm) {
    movieForm.addEventListener('submit', (event) => {
      event.preventDefault();
      addMovie();
    });
  }
};
