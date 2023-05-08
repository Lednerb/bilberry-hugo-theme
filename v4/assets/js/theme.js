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

    // Magnific Popup for images within articles to zoom them
    // Rendered with Markdown
    $('p img, figure img').not('p a img').magnificPopup({
        type: "image",
        image: {
            verticalFit: true,
            titleSrc: 'alt'
        },
        zoom: {
            enabled: true
        },
        callbacks: {
            // Get the src directly from the img-tag instead of an additional tag
            elementParse: function(item) {
              // Function will fire for each target element
              // "item.el" is a target DOM element (if present)
              // "item.src" is a source that you may modify

              item.src = item.el.attr('src')
            }
        },
        // https://github.com/dimsemenov/Magnific-Popup/pull/1017
        // Enabled popup only when image size is greater than content area
        disableOn: function(e) {
            let img = e.target;
            return img.naturalWidth > img.clientWidth;
        }
    });

    // Magnific Popup for images within articles to zoom them
    // Rendered with Asciidoc
    $('.image-block>img').magnificPopup({
        type: "image",
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.parent().find('figcaption').text();
            }
        },
        zoom: {
            enabled: true
        },
        callbacks: {
            elementParse: function(item) {
                item.src = item.el.attr('src')
            }
        },
        // https://github.com/dimsemenov/Magnific-Popup/pull/1017
        // Enabled popup only when image size is greater than content area
        disableOn: function(e) {
            let img = e.target;
            return img.naturalWidth > img.clientWidth;
        }
    });

    // Magnific Popup for images within articles to zoom them
    // Rendered with Asciidoc
    $('.image-block').magnificPopup({
        type: "image",
        delegate: "a",
        image: {
            titleSrc: function (item) {
                return item.el.parent().find('figcaption').text();
            },
            verticalFit: true
        },
        zoom: {
            enabled: true
        }
    });

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

});
