// TODO
const AMettreEnRouge = document.querySelector("H2");
AMettreEnRouge.style.color = "red";

const button = document.querySelector("button");
const EnRougeSuiteAClick = document.querySelector("button"); // const ajoutée ici

EnRougeSuiteAClick.addEventListener("click", (evt) => {
  EnRougeSuiteAClick.style.color = "red";
});

const collH2 = document.querySelectorAll("H2"); // const ajoutée ici

collH2.forEach((elm) => {
  elm.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
  });
});