import { FormEvent, ReactElement, useState } from 'react';
import './style.css';
import { DiscogsRes } from '../../../shared/types';

const ReleasePage = (): ReactElement => {
  const [releaseNum, setReleaseNum] = useState<string>('');
  const [releaseInfo, setReleaseInfo] = useState<DiscogsRes>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const URL: string = 'http://localhost:3000';

  const handleSearch = () => {
    setIsLoading(true);

    fetch(`${URL}/discogs?releaseNum=${releaseNum}`)
      .then((res) => res.json())
      .then((json) => {
        setReleaseInfo(json);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <>
      <h1>Discogs Release Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="release-num">Discogs Release Number:</label>
        <br />
        <input
          type="text"
          id='release-num'
          name='relese-num'
          value={releaseNum}
          onChange={event => setReleaseNum(event.target.value)}
        />
        <br />
        <button type='submit'>Search Release</button>
      </form>

      <hr />
      {isLoading && <div className='lds-dual-ring'></div>}
      {releaseInfo && !isLoading && (
        <>
          <p>Artist: {releaseInfo.artists[0].name}</p>
          <p>Title: {releaseInfo.title}</p>
          <p>Genre: {releaseInfo.genres.concat(', ')}</p>
          <p>Year: {releaseInfo.year}</p>
        </>
      )}
    </>
  );
};

export default ReleasePage;