import React from 'react';

import spinner from '../assets/spinner.svg';

import '../styles/LoadingPage.css';

function LoadingPage() {
  return (
    <div className="loading-page">
      <img src={spinner} alt="Spinner" />
    </div>
  );
}

export default LoadingPage;
