import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  // Compute initial time left inline
  const [timeLeft, setTimeLeft] = useState(() => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate) - new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [targetDate]); // only rerun if targetDate changes

  return (
  <div className="d-flex justify-content-center gap-4 text-center">
    <div>
      <p className="h1 fw-bold mb-0">{timeLeft.days}</p>
      <small className="text-muted">Days</small>
    </div>
    <div>
      <p className="h1 fw-bold mb-0">{timeLeft.hours}</p>
      <small className="text-muted">Hours</small>
    </div>
    <div>
      <p className="h1 fw-bold mb-0">{timeLeft.minutes}</p>
      <small className="text-muted">Minutes</small>
    </div>
    <div>
      <p className="h1 fw-bold mb-0">{timeLeft.seconds}</p>
      <small className="text-muted">Seconds</small>
    </div>
  </div>
);
}