import React from 'react';

import { format } from 'date-fns';

import '../styles/ReleaseInfo.css';

function ReleaseInfo({ releases }) {
  const formatDate = (strDate) => {
    const date = strDate.split('-').map((val) => Number(val));
    return format(new Date(...date), 'd LLL yyyy');
  };

  return (
    <div className="release-info">
      {Object.keys(releases).map((region) => (
        <React.Fragment key={region}>
          <img src="#" alt={region} />
          {(releases[region])
            ? <p>{formatDate(releases[region])}</p>
            : <p>-</p>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ReleaseInfo;
