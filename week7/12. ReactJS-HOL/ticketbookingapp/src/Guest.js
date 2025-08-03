import React from 'react';

const Guest = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Browse available flights below.</p>
      <ul>
        <li>Flight A - Delhi to Mumbai - ₹4500</li>
        <li>Flight B - Bangalore to Kolkata - ₹5200</li>
        <li>Flight C - Chennai to Jaipur - ₹6000</li>
      </ul>
      <p>Please login to book your tickets.</p>
    </div>
  );
};

export default Guest;
