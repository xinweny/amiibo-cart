import React from 'react';

import { format } from 'date-fns';

function ReleaseInfo({ releases }) {
  const formatDate = (strDate) => {
    const date = strDate.split('-').map((val) => Number(val));
    return format(new Date(...date), 'd LLL yyyy');
  };

  return (
    <div className="release-info">
      {Object.keys(releases).map((region) => (
        <div key={region}>
          <img src="#" alt={region} />
          <p>{formatDate(releases[region])}</p>
        </div>
      ))}
    </div>
  );
}

export default ReleaseInfo;
