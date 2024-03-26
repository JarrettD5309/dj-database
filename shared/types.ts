import { Track } from "./classes";

interface DiscogsRes {
  id: number,
  status: string,
  year: number,
  resource_url: string,
  uri: string,
  artists: {
    name: string,
    id: number,
    resource_url: string
  }[],
  labels: {
    name: string,
    catno: string,
    id: number
  }[],
  master_id: number,
  master_url: string,
  title: string,
  country: string,
  released: string,
  genres: string[],
  styles: string[],
  tracklist: {
    position: string,
    title: string,
    duration: string
  }[]
}

interface ItemProps {
  item: Track
}

interface TableProps {
  tracks: Track[],
  handleSort: (column: string, direction: string) => void,
}

enum Direction {
  Ascend = 'ascend',
  Descend = 'descend'
}

enum DJColumn {
  Artist = 'artist',
  SongTitle = 'songTitle',
  BPM = 'bpm'
}

export {
  type DiscogsRes,
  type ItemProps,
  type TableProps,
  DJColumn,
  Direction
};