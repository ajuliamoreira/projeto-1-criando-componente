import React, { useState } from 'react';

function MyComponent() {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      Clique aqui
    </button>
  );
}

export default MyComponent