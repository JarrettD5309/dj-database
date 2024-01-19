import { Record } from '../types/types';

const recordOne: Record = {
    artist: 'Joey Beltram',
    songTitle: 'Energy Flash',
    genres: ['house', 'techno'],
    bpm: 126,
    position: 'A1',
    rpm: 45,
    release: 'Vol. 1',
    discogsLink: 'https://www.discogs.com/release/2085-Joey-Beltram-Beltram-Vol-1',
    year: 1990
};

const recordTwo: Record = {
    artist: 'Black Riot',
    songTitle: 'A Day In The Life (Club Mix)',
    genres: ['house'],
    bpm: 122,
    position: 'A1',
    rpm: 45,
    release: 'A Day In The Life',
    discogsLink: 'https://www.discogs.com/release/8843-Black-Riot-A-Day-In-The-Life',
    year: 1988
};

const recordCollection: Record[] = [recordOne, recordTwo];

export { recordOne, recordTwo, recordCollection };