document.getElementById("dot1").addEventListener("click", () => {
  document.getElementById("dot1").style.backgroundColor = "black";
  document.getElementById("dot2").style.backgroundColor = "white";
  document.getElementById("dot3").style.backgroundColor = "white";
});
document.getElementById("dot2").addEventListener("click", () => {
  document.getElementById("dot2");
  document.getElementById("dot1").style.backgroundColor = "white";
  document.getElementById("dot2").style.backgroundColor = "black";
  document.getElementById("dot3").style.backgroundColor = "white";
});
document.getElementById("dot3").addEventListener("click", () => {
  document.getElementById("dot3");
  document.getElementById("dot1").style.backgroundColor = "white";
  document.getElementById("dot2").style.backgroundColor = "white";
  document.getElementById("dot3").style.backgroundColor = "black";
});

const kol = document.getElementById("kol");
const ser = document.getElementById("ser");
const bra = document.getElementById("bra");
const cha = document.getElementById("cha");

kol.addEventListener("click", () => {
  kol.style.backgroundColor = "#303030";
  ser.style.backgroundColor = "#f0f0f0";
  bra.style.backgroundColor = "#f0f0f0";
  cha.style.backgroundColor = "#f0f0f0";
  kol.style.color = "white";
  ser.style.color = "black";
  bra.style.color = "black";
  cha.style.color = "black";
});
ser.addEventListener("click", () => {
  kol.style.backgroundColor = "#f0f0f0";
  ser.style.backgroundColor = "#303030";
  bra.style.backgroundColor = "#f0f0f0";
  cha.style.backgroundColor = "#f0f0f0";
  kol.style.color = "black";
  ser.style.color = "white";
  bra.style.color = "black";
  cha.style.color = "black";
});
bra.addEventListener("click", () => {
  kol.style.backgroundColor = "#f0f0f0";
  ser.style.backgroundColor = "#f0f0f0";
  bra.style.backgroundColor = "#303030";
  cha.style.backgroundColor = "#f0f0f0";
  kol.style.color = "black";
  ser.style.color = "black";
  bra.style.color = "white";
  cha.style.color = "black";
});
cha.addEventListener("click", () => {
  kol.style.backgroundColor = "#f0f0f0";
  ser.style.backgroundColor = "#f0f0f0";
  bra.style.backgroundColor = "#f0f0f0";
  cha.style.backgroundColor = "#303030";
  kol.style.color = "black";
  ser.style.color = "black";
  bra.style.color = "black";
  cha.style.color = "white";
});

const heartBtn = document.getElementById("heartBtn");
const heart = heartBtn.querySelector(".fa-heart");

heartBtn.addEventListener("click", function() {
  heart.classList.toggle("grey");
  heart.classList.toggle("red");
});
const deadline = new Date("2023-02-08T00:00:00");
const timer = document.getElementById("timer");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateTimer() {
  const now = new Date();
  const distance = deadline - now;
  
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  hoursEl.innerHTML = hours.toString().padStart(2, '0');
  minutesEl.innerHTML = minutes.toString().padStart(2, '0');
  secondsEl.innerHTML = seconds.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);

const colorBtns = document.querySelectorAll(".SIZE-BTNS");

for (let btn of colorBtns) {
  btn.addEventListener("click", function() {
    if (this.style.backgroundColor === "") {
      this.style.backgroundColor = "#303030";
      this.style.color = 'white'
    } else {
      this.style.backgroundColor = "";
      this.style.color = 'black'

    }
  });
}
