import React from 'react';

const SubmissionForm = () => {
  return (
    <div className='center'>
      <form>
        <div>
          <label for='email'>Email address</label>
          <br />
          <input
            type='email'
            aria-describedby='emailHelp'
            placeholder='example@gmail.com'
            tabIndex='3'
            name='email'
            id='email'
          />
        </div>
        <br />
        <div>
          <label for='massage'>Massage</label>
          <br />
          <input
            type='text'
            aria-describedby='emailHelp'
            placeholder='Start typing...'
            tabIndex='3'
            name='massage'
            id='email'
          />
        </div>
        <br />
        <button type='submit' className='btn btn-primary'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;