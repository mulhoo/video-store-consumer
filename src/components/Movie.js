import React from 'react';
import './SearchLibraryMovie.css';

const Movie = (props) => {
  const onButtonClick = () => {
    props.setSelectedMovieCallBack(props);
  };
  
  return (
    <div className="movie-container">
      <div className="movie-details">
        <img src={props.image_url} alt="movie-poster"/>
        <p className="movie-title">{props.title}</p>
        <p className="movie-overview">{props.overview}</p>
        <p className="movie-inventory">{props.inventory} Copies Available</p>
      </div>
      <button class="movie-button" onClick={onButtonClick}>
        Select Movie
      </button>
    </div>
  );
};

export default Movie;
