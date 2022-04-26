// Dark Mode

let darkMode = localStorage.getItem("darkMode");
let header = document.querySelector(".header");
const themeSwitcher = document.querySelector(".switch-container");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
};

const disabledDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
  themeSwitcher.classList.toggle("active");
  header.classList.toggle("active");
}

themeSwitcher.addEventListener("click", () => {
  themeSwitcher.classList.toggle("active");
  header.classList.toggle("active");

  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disabledDarkMode();
  }
});
