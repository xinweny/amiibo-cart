import React, { useState } from 'react';

function UsageTable({ usageData }) {
  const consoles = Object.keys(usageData);

  const [activeTab, setActiveTab] = useState(consoles[0]);

  return (
    <div>
      <div className="table-tabs">
        {consoles.map((console) => (
          <button
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
          <div className="row">
            <div className="game-name">{data.gameName}</div>
            <div className="game-usage">
              {data.amiiboUsage.map((use) => (
                <div>{use.Usage}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsageTable;
