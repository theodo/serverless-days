export const calculateTimeLeft = () => {
  const difference = new Date("2022-03-22") - new Date()

  let timeLeft = { days: 0, hours: 0, minutes: 0, secondes: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}
