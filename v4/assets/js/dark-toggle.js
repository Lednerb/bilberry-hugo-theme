const dkToggle = document.getElementById("darkToggleLogo");
const darkTheme = document.getElementById("darkTheme");
const PCS = window.matchMedia("(prefers-color-scheme: dark)");

dkToggle.addEventListener("click", () => {
  if (dkToggle.className === "fa fa-sun") {
    setTheme("dark");
  }
  else {
    setTheme("light");
  }
});

function setTheme(mode) {
  if (mode === "dark") {
    darkTheme.disabled = false;
    dkToggle.className = "fa fa-moon";
  } else {
    darkTheme.disabled = true;
    dkToggle.className = "fa fa-sun";
  }
}

const listener = (event) => {
  if (event.matches) {
    setTheme("dark");
  }
  else {
    setTheme("light");
  }
};

// PCS.addEventListerner("change", listener);
listener(PCS);

