import React, { useMemo } from 'react';
import styles from './AnimatedBackground.module.css';

export const AnimatedBackground = () => {
  const chips = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 4}s`,
    }));
  }, []);

  const particles = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDelay: `${Math.random() *1}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.gradientBackground}>
        <div className="absolute inset-0">
          {chips.map((style, i) => (
            <div
              key={i}
              className={styles.chip}
              style={style}
            >
              <div className={styles.chipOuter}>
                <div className={styles.chipInner}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0">
          {particles.map((style, i) => (
            <div
              key={i}
              className={styles.particle}
              style={style}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
