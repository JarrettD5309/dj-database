import { Track } from "./classes";

interface ItemProps {
  item: Track
}

interface TableProps {
  tracks: Track[],
  handleSort: (column: string, direction: string) => void,
}

enum Direction {
  Acsend = 'ascend',
  Descend = 'descend'
}

enum DJColumn {
  Artist = 'artist',
  SongTitle = 'songTitle',
  BPM = 'bpm'
}

export {
  type ItemProps,
  type TableProps,
  DJColumn,
  Direction
};