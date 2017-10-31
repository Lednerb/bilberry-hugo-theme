window.$ = window.jQuery = require('jquery');

require('flexslider');
const hljs = require('highlight.js');

$(document).ready(function() {
    $(".toggler").click(function () {
        $("nav").slideToggle();
    })

    $('.flexslider').flexslider({
       animation: "slide",
       prevText: "",
       nextText: "",
       pauseOnHover: true,
    });
});

hljs.initHighlightingOnLoad();
