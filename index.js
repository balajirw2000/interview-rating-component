const mainContainer = document.querySelector(".container");
const thankContainer = document.querySelector(".thank-container");
const rating = document.getElementById("rate");
const rates = document.querySelectorAll(".ratings span");
const submitButton = document.querySelector(".button");

submitButton.addEventListener("click", () => {
  thankContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    rating.innerHTML = rate.innerText;
  });
});
