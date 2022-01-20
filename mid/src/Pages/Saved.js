import React, { useState } from "react";
import Card from "../Components/Card";
import { Container, Row, Col } from "react-bootstrap";

const Saved = ({ saved, auth }) => {
  if (!auth) {
    return (
      <div>
        <h1>You must be logged in to see this page</h1>
      </div>
    );
  }
  return (
    <div>
      <Container>
        <h1>Saved</h1>
        <div className="row home__universities">
          {saved.map((university) => (
            <div className="col-md-4" key={university.id}>
              <Card university={university} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Saved;