import React from "react";

const SubmissionForm = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            placeholder="hassan@hacker.com"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="msg">Message</label>
          <textarea
            className="form-control"
            id="msg"
            rows="3"
            placeholder="ألحقنووووي"
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;