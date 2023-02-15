import React from 'react';

import '../styles/ErrorPage.css';

function ErrorPage({ code, message }) {
  return (
    <div className="error-page">
      <div>
        <h1 className="code">{code}</h1>
        <h1 className="msg">{`Oops! ${code === 404 ? 'That page doesn\'t exist.' : 'Something went wrong.'}`}</h1>
        <p className="msg-details">{code === 404
          ? null
          : message}
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
