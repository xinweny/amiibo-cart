import React, { useState } from 'react';

import uniqid from 'uniqid';

function UsageTable({ usageData }) {
  const consoles = Object.keys(usageData);

  const [activeTab, setActiveTab] = useState(consoles[0]);

  return (
    <div>
      <div className="table-tabs">
        {consoles.map((console) => (
          <button
            key={console}
            type="button"
            className={(console === activeTab) ? 'active' : ''}
            onClick={() => setActiveTab(console)}
          >
            {console}
          </button>
        ))}
      </div>
      <div className="usage-table">
        {usageData[activeTab].map((data) => (
          <div className="row" key={data.gameID[0]}>
            <div className="game-name">{data.gameName}</div>
            <div className="game-usage">
              {data.amiiboUsage.map((use) => (
                <div key={uniqid()}>{use.Usage}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsageTable;
