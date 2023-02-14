import React, { useRef } from 'react';
import { format } from 'date-fns';

import jp from '../assets/jp.png';
import eu from '../assets/eu.png';
import na from '../assets/na.png';
import au from '../assets/au.png';

import '../styles/ReleaseInfo.css';

function ReleaseInfo({ releases }) {
  const icons = useRef({
    jp, eu, na, au,
  });

  const formatDate = (strDate) => {
    const date = strDate.split('-').map((val) => Number(val));
    return format(new Date(...date), 'd LLL yyyy');
  };

  return (
    <div className="release-info">
      {Object.keys(releases).map((region) => (
        <React.Fragment key={region}>
          <img className="country-icon" src={icons.current[region]} alt={region} />
          {(releases[region])
            ? <p>{formatDate(releases[region])}</p>
            : <p>-</p>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ReleaseInfo;
