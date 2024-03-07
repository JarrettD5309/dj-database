import { ReactElement, useEffect, useState } from 'react';
import './style.css';
import { DJColumn, Direction, ItemProps, TableProps } from '../../../shared/types';

const Table = ({ tracks, handleSort }: TableProps): ReactElement => (
  <div className="grid-container">
    <>
      <div className="grid-item">Artist
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.Artist, Direction.Acsend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.Artist, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item">Title
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.SongTitle, Direction.Acsend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.SongTitle, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item">BPM
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.BPM, Direction.Acsend)}>
          &#9650;
        </span>
        &nbsp;
        <span
          className="click-hand"
          onClick={() => handleSort(DJColumn.BPM, Direction.Descend)}>
          &#9660;
        </span>
      </div>
      <div className="grid-item">Position</div>
      <div className="grid-item">RPM</div>
      <div className="grid-item">Details</div>
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
      <div className="grid-item"><button onClick={() => setIsDetailOpen(!isDetailOpen)}>{isDetailOpen ? 'Close' : 'Open'}</button></div>
      {isDetailOpen && (<div className="grid-item" style={{ gridColumn: '1 / -1' }}>
        <p>Artist: {item.artist}</p>
        <p>Song: {item.songTitle}</p>
        <p>BPM: {item.bpm}</p>
        <p>Position: {item.position}</p>
        <p>Speed: {item.rpm}</p>
        <p>Genre: {item.genres.join(', ')}</p>
        <p>Release: {item.release}</p>
        <p>Year: {item.year}</p>
        <p>Discogs: <a href={item.discogsLink} target='_blank' rel="noreferrer">{item.discogsLink}</a></p>
      </div>)}
    </>
  );
};

export default Table;