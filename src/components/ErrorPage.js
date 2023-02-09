import React from 'react';

function ErrorPage({ code, message }) {
  return (
    <div>
      <div>
        <p>{code}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
