
const IndianPlayers = () => {
  const T20Players = ['Virat', 'Rohit', 'Pant', 'Jadeja'];
  const RanjiPlayers = ['Shubman', 'Prithvi', 'Pujara', 'Saha'];

  // 🧠 Merge arrays using spread operator
  const allPlayers = [...T20Players, ...RanjiPlayers];

  // 🧠 Destructure into even and odd indexed players
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Indian Players:</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team:</h3>
      <ul>{evenTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h3>Odd Team:</h3>
      <ul>{oddTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
