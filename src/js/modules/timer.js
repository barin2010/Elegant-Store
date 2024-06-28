function timer() {
  const endDate = new Date("jun 28, 2024,23:59:59");

  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  function updateTimer() {
    const now = new Date();
    const dateDiferense = endDate - now;

    if (dateDiferense <= 0) {
      daysElement.innerText = "0";
      hoursElement.innerText = "0";
      minutesElement.innerText = "0";
      secondsElement.innerText = "0";
    }
    const days = Math.floor(dateDiferense / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (dateDiferense % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (dateDiferense % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((dateDiferense % (1000 * 60)) / 1000);

    daysElement.innerText = days < 10 ? "0" + days : days;
    hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

export default timer;
