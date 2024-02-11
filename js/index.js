const [seconds, minutes, hours] = ["seconds", "minutes", "hours"].map(
  (elClass) => document.querySelector("." + elClass)
);

function rotate(el, deg) {
  el.style.transform = `rotate(${deg}deg)`;
}

// Rotacionar o elemento em 45 deg
rotate(seconds, 45);

console.log(seconds, minutes, hours);

setInterval(() => {
  const date = new Date();

  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  console.log({ ss, mm, hh });

  rotate(hours, hh * 30);
  rotate(minutes, mm * 6);
  rotate(seconds, ss * 6);

  hours.innerHTML = hh > 10 ? hh : "0" + hh;
  minutes.innerHTML = mm > 10 ? mm : "0" + mm;
  seconds.innerHTML = ss > 10 ? ss : "0" + ss;
}, 1000);
