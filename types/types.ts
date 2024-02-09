import { Track } from "./classes";


interface ItemProps {
  item: Track
}

interface TableProps {
  tracks: Track[]
}

export {
  type ItemProps,
  type TableProps
};