import { ReactElement } from "react";
import './style.css';
import { DJColumn, Direction, ItemProps, TableProps } from "../../../shared/types";

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
    </>
    {tracks.map((item, i) => <TableItem key={i} item={item} />)}
  </div>
);

const TableItem = ({ item }: ItemProps): ReactElement => {
  return (
    <>
      <div className="grid-item">{item.artist}</div>
      <div className="grid-item">{item.songTitle}</div>
      <div className="grid-item">{item.bpm}</div>
      <div className="grid-item">{item.position}</div>
      <div className="grid-item">{item.rpm}</div>
    </>
  );
};

export default Table;