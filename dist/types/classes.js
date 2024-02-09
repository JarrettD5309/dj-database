"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
class Track {
    constructor(artist, songTitle, genres, bpm, position, rpm, release, discogsLink, year) {
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
exports.Track = Track;
