
import React, { useState, useEffect } from 'react';
import './mousefollwer.css';

interface Position {
  x: number;
  y: number;
}

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const updateCursorPosition = (e: MouseEvent) => {
    setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 130);
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="circle-cursor lg:block hidden" style={{ left: position.x, top: position.y }} />
  );
};

export default MouseFollower;
