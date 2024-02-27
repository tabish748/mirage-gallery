import { useEffect, useState } from 'react';

export default function Countdown() {
  const [isClient, setIsClient] = useState(false); // new state to track client-side
  const endTime = 1698044199;
  const [timeLeft, setTimeLeft] = useState<number>(0); // initially set to 0

  useEffect(() => {
    setIsClient(true); // set client state to true as this useEffect runs on client

    // Only start the countdown on the client.
    const now = Math.floor(Date.now() / 1000);
    setTimeLeft(endTime - now);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs on mount and unmount

  const formatTime = () => {
    if (!isClient) {
      return 'Loading...';
    } // if not client show placeholder
    if (timeLeft <= 0) {
      return 'Sale has ended!';
    } // if time left is 0, show time is up
    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <p>{formatTime()}</p>
    </div>
  );
}
