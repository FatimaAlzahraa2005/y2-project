import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  return (
    <Link
      to={`/artist/${artist.artistId}`}
      state={{
        artist: artist,
      }}
      className='links'
    >
      <div className='artist__card2'>
        <div className='artist__card'>
          <img src={artist.artworkUrl100} alt={artist.artistName} />
        </div>
        <div className='artist__card3'>
          <h3>Artist Name : {artist.artistName}</h3>
          <h4>Track Name : {artist.trackName}</h4>
          <p>primary Genre Name: {artist.primaryGenreName}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;