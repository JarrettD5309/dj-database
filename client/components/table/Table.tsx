import { ReactElement } from "react";
import './style.css';
import { ItemProps, TableProps } from "../../../types/types";

const Table = ({records}: TableProps): ReactElement => (
    <>
    {records.map((item, i) => <TableItem key={i} item={item}/>)}
    </>
);

const TableItem = ({item}: ItemProps): ReactElement => {
    return (
        <div className="grid-container">
            <div className="grid-item">{item.artist}</div>
            <div className="grid-item">{item.songTitle}</div>
            <div className="grid-item">{item.bpm}</div>
            <div className="grid-item">{item.position}</div>
            <div className="grid-item">{item.rpm}</div>
        </div>
    );
};

export default Table;