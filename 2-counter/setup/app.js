// set initail count
let count = 0;

// select value & buttons
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "blue";
    }
    if (count === 0) {
      value.style.color = "#000";
    }
    value.textContent = count;
  });
});
