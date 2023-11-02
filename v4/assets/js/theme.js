/*
 * theme.js
 */

// Add copy button functionality
new ClipboardJS('.copy-button', {
    target: function(trigger) {
        return trigger.previousElementSibling;
    }
}).on('success', function(e) {
    e.clearSelection()
});

$(document).ready(function () {

    // Add copy button and tooltip to each code-block
    $('pre').each(function () {
        $(this).append('<button class="copy-button tooltip" title="Copied!"><i class="far fa-fw fa-copy"></i></button>')
    });

    $('.tooltip').tooltipster({
        animationDuration: 1,
        theme: 'tooltipster-light',
        side: 'bottom',
        delay: [200, 0],
        distance: 0,
        trigger: 'custom',
        triggerOpen: {
            click: true,
            tap: true
        },
        triggerClose: {
            click: true,
            tap: true,
            mouseleave: true
        }
    });

    // Nav-Toggle
    $(".toggler").click(function () {
        $("nav").slideToggle();
        $("#search").autocomplete("val", "");
    });

    // Keyboard-Support
    $(document).keyup(function (e) {
        // Clear and/or close search on ESC
        if (e.code === 'Escape' && $("#search")[0] == $(e.target)[0]) {
            if (!$("nav").hasClass('permanentTopNav')) {
                $("nav").slideUp();
            }
            $("#search").autocomplete("val", "").blur();
            return;
        }

        // Ignore event if we're inside a input field
        let targetType = (e.target.tagName ?? "").toLowerCase();
        if (targetType == "textarea" || targetType == "input") {
            return;
        }

        // Else we listen for "s" to active out search box
        if (e.code === 'KeyS') {
            if (!$("nav").hasClass('permanentTopNav')) {
                $("nav").slideDown();
            }
            $("#search").focus();
        }
    })

    // Flexslider
    $('.flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        pauseOnHover: true,
    });

    dimbox.setConfig({
        showDownloadButton: false
    });
    dimbox.init();

    // Back to top button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#back-to-top-button').addClass('show');
        } else {
            $('#back-to-top-button').removeClass('show');
        }
    });

    $('#back-to-top-button').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Light dark theme mode switcher
    const lightDarkToggle = document.getElementById("light-dark-toggle");
    const lightThemeCss = document.getElementById("light-theme-css");
    const darkThemeCss = document.getElementById("dark-theme-css");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    lightDarkToggle.addEventListener("click", () => {
        if (lightDarkToggle.className === "fa fa-sun") {
            setThemeMode("light");
        } else {
            setThemeMode("dark");
        }
    });

    function setThemeMode(mode) {
        if (mode === "dark") {
            lightThemeCss.disabled = true;
            darkThemeCss.disabled = false;
            lightDarkToggle.className = "fa fa-sun";
        } else {
            lightThemeCss.disabled = false;
            darkThemeCss.disabled = true;
            lightDarkToggle.className = "fa fa-moon";
        }
    }

    const themeModeListener = (event) => {
        if (event.matches) {
            setThemeMode("dark");
        } else {
            setThemeMode("light");
        }
    };

    themeModeListener(prefersDark);
});
