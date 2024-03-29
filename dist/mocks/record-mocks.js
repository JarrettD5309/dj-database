"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackCollection = exports.trackFour = exports.trackThree = exports.trackTwo = exports.trackOne = void 0;
const classes_1 = require("../shared/classes");
const trackOne = new classes_1.Track('Joey Beltram', 'Energy Flash', ['house', 'techno'], 126, 'A1', 45, 'Vol. 1', 'https://www.discogs.com/release/2085-Joey-Beltram-Beltram-Vol-1', 1990);
exports.trackOne = trackOne;
const trackTwo = new classes_1.Track('Black Riot', 'A Day In The Life (Club Mix)', ['house'], 122, 'A1', 45, 'A Day In The Life', 'https://www.discogs.com/release/8843-Black-Riot-A-Day-In-The-Life', 1988);
exports.trackTwo = trackTwo;
const trackThree = new classes_1.Track('X-101', 'Sonic Destroyer', ['techno'], 120, 'A3', 45, 'X-101', 'https://www.discogs.com/release/88441-X-101-X-101', 1991);
exports.trackThree = trackThree;
const trackFour = new classes_1.Track('T Connection', 'At Midnight', ['disco'], 117, 'A1', 45, 'At Midnight', 'https://www.discogs.com/release/202135-T-Connection-At-Midnight', 1978);
exports.trackFour = trackFour;
const trackCollection = [trackOne, trackTwo, trackThree, trackFour];
exports.trackCollection = trackCollection;
