import React, { useState } from 'react';
import character from '../assets/Ikbal3.png';

const Character = () => {
  const [charStyle, setCharStyle] = useState('');
  const THRESHOLD = 15;
  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    setCharStyle(
      `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
    );
  };

  const resetStyles = (e) => {
    // TODO
    setCharStyle(
      `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`
    );
  };
  return (
    <div
      className="character"
      onMouseLeave={resetStyles}
      onMouseMove={handleHover}
      style={{ transform: charStyle }}
    >
      <div>
        <img src={character} alt="character" />
      </div>
    </div>
  );
};

export default Character;
