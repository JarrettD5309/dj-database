import { ReactElement } from 'react';
import './style.css';
import { GenreButtonsProps } from '../../../shared/types';

const GenreButtons = ({ genres, handleGenreClick }: GenreButtonsProps): ReactElement => {
  return (
    <>
      {genres.map((genre) => (<button key={genre} className="genre-button" onClick={() => handleGenreClick(genre)}>{genre}</button>))}
    </>
  );
};

export default GenreButtons;