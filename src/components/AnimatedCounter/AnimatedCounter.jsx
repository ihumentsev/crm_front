import React, { useEffect, useState } from 'react';
import { CountWraper, TextWraper } from './AnimatedCounter.styled';

const AnimatedCounter = ({ value, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value > 0) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const increment = Math.ceil(value / 150); // Подберите подходящий шаг инкремента
          const nextCount = prevCount + increment;
          return nextCount >= value ? value : nextCount;
        });
      }, 10); // Интервал обновления, например, каждые 10 миллисекунд

      return () => clearInterval(interval);
    }
  }, [value]);

  return (
    <>
      <TextWraper>{text}</TextWraper>
      <CountWraper>{count} </CountWraper>
    </>
  );
};

export default AnimatedCounter;
