import { ReactElement, useEffect, useState } from 'react';
import './style.css';
import { DJColumn, Direction, ItemProps, TableProps } from '../../../shared/types';

const Table = ({ tracks, handleSort }: TableProps): ReactElement => (
  <div className="grid-container">
    <>
      <div className="grid-item table-header">Artist
        &nbsp;
        <span
          className="sort-arrow"
          onClick={() => handleSort(DJColumn.Artist, Direction.Ascend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="sort-arrow"
          onClick={() => handleSort(DJColumn.Artist, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item table-header">Title
        &nbsp;
        <span
          className="sort-arrow"
          onClick={() => handleSort(DJColumn.SongTitle, Direction.Ascend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="sort-arrow"
          onClick={() => handleSort(DJColumn.SongTitle, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item table-header">BPM
        &nbsp;
        <span
          className="sort-arrow"
          onClick={() => handleSort(DJColumn.BPM, Direction.Ascend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="sort-arrow"
          onClick={() => handleSort(DJColumn.BPM, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item table-header">Position</div>
      <div className="grid-item table-header">RPM</div>
      <div className="grid-item table-header">Details</div>
    </>
    {tracks.map((item, i) => <TableItem key={i} item={item} />)}
  </div>
);

const TableItem = ({ item }: ItemProps): ReactElement => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsDetailOpen(false);
  }, [item]);

  return (
    <>
      <div className="grid-item">{item.artist}</div>
      <div className="grid-item">{item.songTitle}</div>
      <div className="grid-item">{item.bpm}</div>
      <div className="grid-item">{item.position}</div>
      <div className="grid-item">{item.rpm}</div>
      <div className="grid-item"><button className="details-button" onClick={() => setIsDetailOpen(!isDetailOpen)}>{isDetailOpen ? 'Close' : 'Open'}</button></div>
      {isDetailOpen && (<div className="grid-item details" >
        <div className="details-row">
          <div className="details-art details-column">
            <img className='details-art-img' src="https://i.discogs.com/-cRDCtkYHWq6Fz8FUmZjhBWabtESAg05AGDLVf0bjlI/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODUt/MTQ5Nzc4MjEzMi05/MTk0LnBuZw.jpeg"
              alt="album art" />
          </div>
          <div className="details-list details-column">
            <p>Artist: {item.artist}</p>
            <p>Song: {item.songTitle}</p>
            <p>BPM: {item.bpm}</p>
            <p>Position: {item.position}</p>
            <p>Speed: {item.rpm}</p>
            <p>Genre: {item.genres.join(', ')}</p>
            <p>Release: {item.release}</p>
            <p>Year: {item.year}</p>
            <p>Discogs: <a href={item.discogsLink} target='_blank' rel="noreferrer">{item.discogsLink}</a></p>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Table;