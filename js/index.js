const [seconds, minutes, hours, logs] = [
  "seconds",
  "minutes",
  "hours",
  "logs",
].map((elClass) => document.querySelector("." + elClass));

/**
 * Rotates an element by the specified degree.
 * @param {HTMLElement} el - The element to rotate.
 * @param {number} deg - The degree to rotate the element by.
 */
function rotate(el, deg) {
  el.style.transform = `rotate(${deg}deg)`;
}

let mmPrev = 0;
let hhPrev = 0;

let ssDeg = 0;
let mmDeg = 0;
let hhDeg = 0;

setInterval(() => {
  const date = new Date();
  const ss = date.getSeconds();
  const mm = date.getMinutes();
  const hh = date.getHours();

  seconds.innerHTML = ss > 9 ? ss : "0" + ss;
  minutes.innerHTML = mm > 9 ? mm : "0" + mm;

  // seconds
  if (ssDeg == 0) {
    ssDeg = ss * 6;
    rotate(seconds, ssDeg);
  } else {
    ssDeg = ssDeg + 6;
    rotate(seconds, ssDeg);
  }

  // minutes
  if (mmDeg == 0) {
    mmDeg = mm * 6;
    rotate(minutes, mmDeg);
    mmPrev = mm;
  } else {
    if (mmPrev != mm) {
      mmPrev = mm;
      mmDeg = mmDeg + 15;
      rotate(minutes, mmDeg);
    }
  }

  // hours
  if (hhDeg == 0) {
    hhPrev = hh;
    hhDeg = hh * 30;
    rotate(hours, hhDeg);
  } else {
    if (hhPrev != hh) {
      hhPrev = hh;
      hhDeg = hhDeg + 30;
      rotate(hours, hhDeg);
    }
  }

  logs.innerHTML = JSON.stringify(
    {
      seconds: {
        value: ss,
        deg: ssDeg,
      },
      minutes: {
        value: mm,
        deg: mmDeg,
      },
      hours: {
        value: hh,
        deg: hhDeg,
      },
    },
    null,
    2
  );
}, 1000);

// rotate(seconds, ss * 6);
// rotate(minutes, mm * 6);
// rotate(hours, hh * 30);

// rotate(minutes, mmDeg);
// minutes.innerHTML = mm > 9 ? mm : "0" + mm;
// rotate(hours, hhDeg);
// hours.innerHTML = hh > 9 ? hh : "0" + hh;
