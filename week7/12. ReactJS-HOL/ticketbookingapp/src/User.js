import React from 'react';

const User = () => {
  return (
    <div>
      <h2>Welcome Back, User!</h2>
      <p>You are now logged in. Book your flight below:</p>
      <ul>
        <li>
          Flight A - Delhi to Mumbai - ₹4500
          <button style={{ marginLeft: '10px' }}>Book Now</button>
        </li>
        <li>
          Flight B - Bangalore to Kolkata - ₹5200
          <button style={{ marginLeft: '10px' }}>Book Now</button>
        </li>
        <li>
          Flight C - Chennai to Jaipur - ₹6000
          <button style={{ marginLeft: '10px' }}>Book Now</button>
        </li>
      </ul>
    </div>
  );
};

export default User;
