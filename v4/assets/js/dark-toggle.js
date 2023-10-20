const dkToggle = document.getElementById("darkToggleLogo");
const darkTheme = document.getElementById("darkTheme");

dkToggle.addEventListener("click", () => {
  if (dkToggle.className === "fa fa-moon") {
    setTheme("dark");
  }
  else if (dkToggle.className === "fa fa-sun") {
    setTheme("light");
  }
});

function setTheme(mode) {
  if (mode === "dark") {
    darkTheme.disabled = false;
    dkToggle.className = "fa fa-sun";
  } else if (mode === "light") {
    darkTheme.disabled = true;
    dkToggle.className = "fa fa-moon";
  }
}
