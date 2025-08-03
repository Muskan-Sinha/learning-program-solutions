
function App() {
  const office = {
    name: "SkyTower Workspace",
    rent: 75000,
    address: "4th Floor, Tower B, Mumbai"
  };

  const officeList = [
    { name: "GreenTech Hub", rent: 50000, address: "HSR Layout, Bangalore" },
    { name: "Urban CoWork", rent: 62000, address: "Sector 18, Noida" },
    { name: "SkyTower Workspace", rent: 75000, address: "Mumbai" },
    { name: "StartupBay", rent: 40000, address: "Pune" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
        alt="Office Space"
        style={{ width: '500px', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />

      <h2>Featured Office:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Available Office Spaces:</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.name}</strong> -{' '}
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              ₹{item.rent}
            </span>{' '}
            - {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
