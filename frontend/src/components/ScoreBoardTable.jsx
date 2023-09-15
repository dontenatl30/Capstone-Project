import React from 'react';

const ScoreboardGrid = () => {


  return (
    <>
    <div>
      <h2>Scoreboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{scoreRows}</tbody>
      </table>
    </div>

    </>
  );
};

export default ScoreboardGrid;
