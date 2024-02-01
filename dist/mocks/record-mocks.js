"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordCollection = exports.recordTwo = exports.recordOne = void 0;
const recordOne = {
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
exports.recordOne = recordOne;
const recordTwo = {
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
exports.recordTwo = recordTwo;
const recordCollection = [recordOne, recordTwo];
exports.recordCollection = recordCollection;