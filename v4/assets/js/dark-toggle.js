const lightDarkToggle = document.getElementById("light-dark-toggle");
const darkThemeCss = document.getElementById("dark-theme-css");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

lightDarkToggle.addEventListener("click", () => {
  if (lightDarkToggle.className === "fa fa-sun") {
    setThemeMode("dark");
  } else {
    setThemeMode("light");
  }
});

function setThemeMode(mode) {
  if (mode === "dark") {
    darkThemeCss.disabled = false;
    lightDarkToggle.className = "fa fa-moon";
  } else {
    darkThemeCss.disabled = true;
    lightDarkToggle.className = "fa fa-sun";
  }
}

const listener = (event) => {
  if (event.matches) {
    setThemeMode("dark");
  } else {
    setThemeMode("light");
  }
};

listener(prefersDark);
