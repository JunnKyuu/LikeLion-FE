import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('OFF');

  return (
    <div>
      {light === 'OFF' ? (
        <h1 style={{ backgroundColor: 'yellow' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === 'OFF' ? 'ON' : 'OFF');
        }}
      >
        {light === 'OFF' ? '끄기' : '켜기'}
      </button>
    </div>
  );
};

export default Bulb;
