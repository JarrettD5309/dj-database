import { Track } from '../shared/classes';

const trackOne: Track = new Track(
  'Joey Beltram',
  'Energy Flash',
  ['house', 'techno'],
  126,
  'A1',
  45,
  'Vol. 1',
  'https://www.discogs.com/release/2085-Joey-Beltram-Beltram-Vol-1',
  1990
);

const trackTwo: Track = new Track(
  'Black Riot',
  'A Day In The Life (Club Mix)',
  ['house'],
  122,
  'A1',
  45,
  'A Day In The Life',
  'https://www.discogs.com/release/8843-Black-Riot-A-Day-In-The-Life',
  1988
);

const trackThree: Track = new Track(
  'X-101',
  'Sonic Destroyer',
  ['techno'],
  120,
  'A3',
  45,
  'X-101',
  'https://www.discogs.com/release/88441-X-101-X-101',
  1991
);

const trackFour: Track = new Track(
  'T Connection',
  'At Midnight',
  ['disco'],
  117,
  'A1',
  45,
  'At Midnight',
  'https://www.discogs.com/release/202135-T-Connection-At-Midnight',
  1978
);

const trackCollection: Track[] = [trackOne, trackTwo, trackThree, trackFour];

export { 
  trackOne, 
  trackTwo,
  trackThree, 
  trackFour,
  trackCollection 
};