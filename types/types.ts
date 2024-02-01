interface Record {
  artist: string;
  songTitle: string;
  genres: Array<string>;
  bpm: number;
  position: string;
  rpm: number;
  release: string;
  discogsLink: string;
  year: number;
}

interface ItemProps {
  item: Record
}

interface TableProps {
  records: Record[]
}

export {
  type Record,
  type ItemProps,
  type TableProps
};