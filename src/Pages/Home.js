import React, { useState } from 'react';
// Artist Card Component
import ArtistCard from './components/ArtistCard';
import SubmissionForm from '../Components/SubmissionForm';
// Data
import Data from '../artists';
const Home = () => {
  console.log(Data);
  const [filterdArtist, setFilterdArtists] = useState(Data);
  const [query, setQuery] = useState('');
  const handleValueChange = (e) => {
    setQuery(e.target.value);
    const filterdArtists = Data.filter((artist) => {
      const Name = artist.artistName
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const Track = artist.trackName
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      return Name ? Name : Track;
    });
    setFilterdArtists(filterdArtists);
  };
  return (
    <div>
      <form className='search__form'>
        <input
          placeholder='Search Bar'
          type='text'
          className='search__btn'
          onChange={handleValueChange}
          value={query}
          id='search_bar'
          aria-label='Search'
        />
      </form>
      <div className='artist'>
        {filterdArtist &&
          filterdArtist.map((artist) => (
            <div key={artist.artistId}>
              <ArtistCard artist={artist} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;