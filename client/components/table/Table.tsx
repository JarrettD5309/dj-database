import { ReactElement, useEffect, useState } from 'react';
import './style.css';
import { DJColumn, Direction, ItemProps, TableProps } from '../../../shared/types';

const Table = ({ tracks, handleSort }: TableProps): ReactElement => (
  <div className="grid-container">
    <>
      <div className="grid-item tr">Artist
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.Artist, Direction.Ascend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.Artist, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item tr">Title
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.SongTitle, Direction.Ascend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.SongTitle, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item tr">BPM
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.BPM, Direction.Ascend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.BPM, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item tr">Position</div>
      <div className="grid-item tr">RPM</div>
      <div className="grid-item tr">Details</div>
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
      {isDetailOpen && (<div className="grid-item details" style={{ gridColumn: '1 / -1' }}>
         <div className="details-art">
          <img src="https://i.discogs.com/-cRDCtkYHWq6Fz8FUmZjhBWabtESAg05AGDLVf0bjlI/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODUt/MTQ5Nzc4MjEzMi05/MTk0LnBuZw.jpeg" 
            alt="album art" height="150" width="150" />
         </div>
          <div className="details-list">
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
        
      </div>)}
    </>
  );
};

export default Table;