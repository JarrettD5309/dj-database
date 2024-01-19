import { ReactElement } from "react";
import './style.css';
import { ItemProps, TableProps } from "../../../types/types";

const Table = ({ records }: TableProps): ReactElement => (
    <div className="grid-container">
        {records.map((item, i) => <TableItem key={i} item={item} />)}
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