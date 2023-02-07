function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!#@{}%$*;";

let interval = null;

document.querySelector("h1").onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  dataValue = event.target.getAttribute('data-value');
  var score = 0;

  for (let i = 0; i < dataValue.length; ++i) {
    const char = dataValue[i];
    if (Math.random() > 0.7) {
      char === '_' ? null : score++;
      dataValue = setCharAt(dataValue, i, char.toUpperCase());
    } else {
      dataValue = setCharAt(dataValue, i, char.toLowerCase());
    }
  }

  if (score == 0) console.log("That was pretty lucky...")
  if (score == dataValue.length-1) console.log("That was insanely lucky...")

  event.target.setAttribute('data-value', dataValue);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);


}