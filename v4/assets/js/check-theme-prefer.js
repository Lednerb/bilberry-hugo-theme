    const darkStore = localStorage.getItem("dark-store");
    const docEle = document.documentElement;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkStore === "true") {
            docEle.classList.add("dark-mode");
        } else if (darkStore === "false") {
            docEle.classList.remove("dark-mode");
        } else if (prefersDark.matches) {
            docEle.classList.add("dark-mode");
        }
