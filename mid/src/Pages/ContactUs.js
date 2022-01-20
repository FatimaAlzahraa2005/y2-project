import React from "react";
import SubmissionForm from "../Components/SubmissionForm";
import { Container } from "react-bootstrap";

const ContactUs = ({ auth }) => {
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
        <h1></h1>
        <SubmissionForm />
      </Container>
    </div>
  );
};

export default ContactUs;