import { useEffect, useState } from 'react';
import styles from './TipGridSection.module.scss';
import { tips } from './tips';

const TipGridSection = () => {
  const [tip, setTip] = useState(tips[4]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(getRandomTip, 5000);
    return () => {
      clearInterval(timer);
    };
  });

  const getRandomTip = () => {
    const randomNumber = Math.floor(Math.random() * tips.length);
    setAnimate(true);
    setTip(tips[randomNumber]);
    setTimeout(removeAnimationClassName, 3000);
  };

  // this function is called after 3 seconds to remove
  // the animation className. This is required to play the
  // text animation each time a new tip is generated and not
  // just on pageload.
  const removeAnimationClassName = () => {
    setAnimate(false);
  };

  return (
    <span className={styles.section_container}>
      <h3>Food Tip of the Day</h3>
      <p className={animate ? styles.animate : styles.no_animate}>{tip}</p>
    </span>
  );
};

export default TipGridSection;
