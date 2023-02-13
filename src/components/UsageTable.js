import React, { useState } from 'react';
import uniqid from 'uniqid';

import '../styles/UsageTable.css';

function UsageTable({ usageData }) {
  const consoles = Object.keys(usageData);
  const [activeTab, setActiveTab] = useState(consoles[0]);

  const formatUsages = (uData) => {
    const usages = [];
    const allGames = [];

    for (const data of uData) {
      const { gameName } = data;
      if (allGames.includes(gameName)) {
        const index = usages.findIndex((u) => u.game === gameName);
        usages[index].uses = usages[index].uses
          .concat(data.amiiboUsage.map((u) => u.Usage));
      } else {
        allGames.push(data.gameName);

        const usage = {
          id: data.gameID[0],
          game: data.gameName,
          uses: data.amiiboUsage.map((u) => u.Usage),
        };

        usages.push(usage);
      }
    }

    return usages;
  };

  return (
    <div className="usage-table">
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
      {(usageData[activeTab].length > 0)
        ? (
          <div className="usage-table-contents">
            {formatUsages(usageData[activeTab]).map((data) => (
              <React.Fragment key={data.id}>
                <div className="game-name">{data.game}</div>
                <div className="game-usage">
                  {data.uses.map((use) => (
                    <div key={uniqid()}>{use}</div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        )
        : (
          <div>No uses found.</div>
        )}
    </div>
  );
}

export default UsageTable;
