let dateRich = new Date("Oct 26, 2025 23:59:59").getTime();
let counter = setInterval(() => {
  let currentDate = new Date().getTime();

  let dateDiff = dateRich - currentDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mints = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".mins").innerHTML = mints < 10 ? `0${mints}` : mints;
  document.querySelector(".sec").innerHTML = secs < 10 ? `0${secs}` : secs;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
