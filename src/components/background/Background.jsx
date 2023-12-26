import { useState, useEffect } from "react";
import sunIcon from "/images/sun.png";
import moonIcon from "/images/moon.png";
import { GiButterfly } from "react-icons/gi";

import classes from "./Background.module.scss";

function Background() {
  const [theme, setTheme] = useState("middle");
  const [stars, setStars] = useState([]);
  const [butterflies, setButterflies] = useState(false);

  const handleSunClick = () => {
    setTheme("day");
    setTimeout(() => setButterflies(true), 1000);
  };

  const handleMoonClick = () => {
    setButterflies(false);
    setTheme("night");
  };

  useEffect(() => {
    if (theme === "night") {
      const newStars = Array.from({ length: 50 }, () => ({
        id: Math.random(),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3}px`,
      }));
      setStars(newStars);
    } else {
      setStars([]);
    }
  }, [theme]);

  const generateButterflies = () => {
    return Array.from({ length: 10 }, () => ({
      id: Math.random(),
      style: generateRandomStyle(),
    }));
  };

  const generateRandomStyle = () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    return {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${2 + Math.random() * 3}rem`,
      color: randomColor,
    };
  };

  useEffect(() => {
    let interval;
    if (theme === 'day') {
      setButterflies(generateButterflies());
      interval = setInterval(() => {
        setButterflies(generateButterflies());
      }, 5000); // Crea nuevas mariposas cada 5 segundos
    }
    return () => clearInterval(interval);
  }, [theme]);

  const getBackgroundStyle = () => {
    switch (theme) {
      case "middle":
        return "linear-gradient(80deg, rgb(5, 124, 172), rgb(199, 10, 114))";
      case "day":
        return "linear-gradient(80deg, rgb(199, 10, 114), rgb(255, 255, 255))";
      case "night":
        return "linear-gradient(80deg, rgb(25, 20, 70), rgb(50, 10, 60))";
      default:
        return "linear-gradient(80deg, rgb(5, 124, 172), rgb(199, 10, 114))";
    }
  };

  return (
    <div
      style={{ background: getBackgroundStyle() }}
      className={classes.background__container}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={classes.background__star}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
        ></div>
      ))}
      {butterflies &&
        Array.from({ length: 10 }, (_, index) => (
          <GiButterfly
            key={index}
            className={classes.background__butterfly}
            style={generateRandomStyle()}
          />
        ))}
      <img
        src={sunIcon}
        alt="Sol"
        onClick={handleSunClick}
        className={classes.background__day}
      />
      <img
        src={moonIcon}
        alt="Luna"
        onClick={handleMoonClick}
        className={classes.background__night}
      />
    </div>
  );
}

export default Background;
