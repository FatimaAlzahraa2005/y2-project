import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const University = ({ saved, setSaved, auth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const university = location.state.university;
  const {
    web_pages,
    name,
    alpha_two_code,
    state_province,
    domains,
    country,
    description,
    url,
  } = university;

  const save = () => {
    setSaved((saved) => [...saved, university]);
    window.localStorage.setItem(
      "saved",
      JSON.stringify([...saved, university]),
    );
    navigate("/saved");
  };
  const unsave = () => {
    setSaved((saved) => saved.filter((u) => u.name !== university.name));
    let item = localStorage.getItem("saved");
    window.localStorage.setItem("saved", JSON.stringify(saved));

    navigate("/saved");
    navigate("/saved");
  };
  if (!auth) {
    return (
      <div>
        <h1>You must be logged in to see this page</h1>
      </div>
    );
  }

  return (
    <div>
      <Container className="university__container">
        <Row>
          <Col>
            <a href={web_pages[0]} target="blank">
              <h1 className="university__container__title">{name}</h1>
            </a>
            <p className="university__container__description">{description}</p>
            <p className="university__container__state">
              Location: {country}, {state_province}
            </p>
            <div className="university__container__buttons">
              <button
                className="btn btn-primary university__button"
                onClick={save}
              >
                Save
              </button>
              {saved.find(
                (savedUniversity) => savedUniversity.name === university.name,
              ) && (
                <button
                  className="btn btn-primary university__button"
                  onClick={unsave}
                >
                  Unsave
                </button>
              )}
            </div>
          </Col>
          <Col>
            <div className="university__container__wrapper">
              <img
                className="university__container__wrapper__image"
                src={url}
                alt={name}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default University;