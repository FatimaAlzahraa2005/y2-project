import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
const Artist = ({ allSaved, setAllSaved }) => {
  const artist = useLocation().state.artist;
  const save = () => {
    if (allSaved.includes(artist) === false) {
      setAllSaved([...allSaved, artist]);
      localStorage.Saved = JSON.stringify([...allSaved, artist]);
      alert('Track saved successfully');
    } else {
      alert('Track already saved');
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Link to='/' className='links'>
            <p className='linkText'>Go Back</p>
          </Link>
          <h2 className='text artist__name'>
            Artist Name: {artist.artistName}
          </h2>
          <h3 className='text'>Track Name: {artist.trackName}</h3>
          <h3 className='text'>
            Primary Genre Name: {artist.primaryGenreName}
          </h3>
          <div className='saveDiv'>
            <a href={artist.artistViewUrl} className='links' target='_blank'>
              <p>{artist.artistName}'s Apple Music Account</p>
            </a>
          </div>
          <h3 className='text'>
            Collection Name: {artist.collectionCensoredName}
          </h3>
          <div className='saveDiv'>
            <button className='btn' onClick={save}>
              <span>Save</span>
            </button>
          </div>
        </Col>
        <Col>
          <img
            className='trackImage'
            src={artist.artworkUrl100}
            alt={artist.artistName}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Artist;