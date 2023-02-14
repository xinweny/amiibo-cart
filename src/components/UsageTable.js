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
          <table cellSpacing="0">
            <tbody>
              {formatUsages(usageData[activeTab]).map((data) => (
                <tr key={data.id}>
                  <td className="game-name">{data.game}</td>
                  <td className="game-usage">
                    {data.uses.map((use) => (
                      <p key={uniqid()}>{use}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        : (
          <div>No uses found.</div>
        )}
    </div>
  );
}

export default UsageTable;
