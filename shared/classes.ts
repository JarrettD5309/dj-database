class Track {
  artist: string;
  songTitle: string;
  genres: Array<string>;
  bpm: number;
  position: string;
  rpm: number;
  release: string;
  discogsLink: string;
  year: number;

  constructor(
    artist: string,
    songTitle: string,
    genres: Array<string>,
    bpm: number,
    position: string,
    rpm: number,
    release: string,
    discogsLink: string,
    year: number
  ) {
    this.artist = artist;
    this.songTitle = songTitle;
    this.genres = genres;
    this.bpm = bpm;
    this.position = position;
    this.rpm = rpm;
    this.release = release;
    this.discogsLink = discogsLink;
    this.year = year;
  }
}

export {
  Track,
};