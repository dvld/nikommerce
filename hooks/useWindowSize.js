import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = ({ innerWidth, innerHeight }) => {
    setWindowSize({
      width: innerWidth,
      height: innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        handleResize(window);
      });
      handleResize(window);
      return () =>
        window.removeEventListener('resize', () => {
          handleResize(window);
        });
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
