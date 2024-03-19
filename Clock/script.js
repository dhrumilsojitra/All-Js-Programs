let sec = 0;
let min = 0;
let hour = 0;

displaySec = () => {
  sec++;
  document.getElementById("second").innerHTML = sec.toString().padStart(2, "0");
  if (sec >= 59) {
    min++;
    document.getElementById("miniutes").innerHTML = min
      .toString()
      .padStart(2, "0");
    sec = 0;
  }
  if (min >= 59) {
    hour++;
    document.getElementById("hours").innerHTML = hour
      .toString()
      .padStart(2, "0");
    min = 0;
  }
};
setInterval(displaySec, 1000);
