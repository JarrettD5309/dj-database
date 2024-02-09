import { ReactElement } from "react";
import './style.css';
import { ItemProps, TableProps } from "../../../types/types";

const Table = ({ tracks }: TableProps): ReactElement => (
    <div className="grid-container">
        <>
            <div className="grid-item">Artist</div>
            <div className="grid-item">Title</div>
            <div className="grid-item">BPM</div>
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