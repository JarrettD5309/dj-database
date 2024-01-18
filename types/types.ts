interface record {
    artist: string;
    songTitle: string;
    genres: Array<string>;
    bpm: number;
    position: string;
    rpm: number;
    release: string;
    discogsLink: string;
    year: number;
};

export { type record };