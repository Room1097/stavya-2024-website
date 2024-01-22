// // MouseFollower.tsx

// import React, { useState, useEffect } from 'react';

// import './mousefollwer.css'; // Import Tailwind CSS

// const MouseFollower: React.FC = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       // Update the position of the circle with a slight delay
//       setTimeout(() => {
//         setPosition({ x: event.clientX, y: event.clientY + window.scrollY });
//       }, 100);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="mouse-follower" style={{ left: position.x, top: position.y }}>
//       {/* Your circle content */}
//     </div>
//   );
// };

// export default MouseFollower;
// CircleCursor.tsx
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
    <div className="circle-cursor" style={{ left: position.x, top: position.y }} />
  );
};

export default MouseFollower;
