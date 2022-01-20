import React, { useState } from "react";
import { Container } from "react-bootstrap";
import universitiesData from "../data";
import Card from "../Components/Card";
const Home = () => {
  const [universities, setUniversities] = useState(universitiesData);
  console.log(universities);
  const [search, setSearch] = useState("");
  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);
  const filterUniversities = (e) => {
    setSearch(e.target.value);
    const filteredUniversities = universities.filter((university) => {
      const universityName = university.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const universityState = university.state_province
        .toLowerCase()
        .includes(e.target.value.toLowerCase());

      return universityName ? universityName : universityState;
    });
    setFilteredUniversities(filteredUniversities);
  };
  return (
    <div className="home">
      <Container>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={filterUniversities}
          />
        </div>
        <div className="row home__universities">
          {filteredUniversities.map((university) => (
            <div className="col-md-4" key={university.id}>
              <Card university={university} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;