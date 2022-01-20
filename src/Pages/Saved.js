import React from 'react';
import ArtistCard from '../components/ArtistCard';
import SubmissionForm from '../Components/SubmissionForm';

const Saved = ({ allSaved }) => {
  return (
    <div style={{ alignText: 'center' }}>
      <div className='artist'>
        {allSaved.map((artist) => (
          <div key={artist.artistId}>
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;