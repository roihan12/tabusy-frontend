import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  function calculateTimeLeft() {
    const diffrence = +new Date("2023-12-18") - +new Date();
    let timeLeft = {};
    if (diffrence > 0) {
      timeLeft = {
        days: Math.floor(diffrence / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diffrence / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diffrence / 1000/ 60) % 60),
        seconds: Math.floor((diffrence / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span className="text-2xl text-[#475ad2]"  key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-red-500 text-2xl"> Times Up</span>
      )}
    </div>
  );
};

export default CountDown;
