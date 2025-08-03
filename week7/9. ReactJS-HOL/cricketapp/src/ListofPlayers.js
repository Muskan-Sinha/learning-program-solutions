import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 80 },
    { name: 'Rohit', score: 65 },
    { name: 'Dhoni', score: 75 },
    { name: 'Kohli', score: 90 },
    { name: 'Pant', score: 60 },
    { name: 'Bumrah', score: 72 },
    { name: 'Ashwin', score: 68 },
    { name: 'Shami', score: 95 },
    { name: 'Jadeja', score: 45 },
    { name: 'Rahul', score: 86 },
    { name: 'Ishant', score: 55 },
  ];

  // 🧠 Using map()
  const playerList = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  // 🧠 Filter with arrow function
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>{playerList}</ul>

      <h2>Players with Score below 70:</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
