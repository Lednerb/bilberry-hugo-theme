window.$ = window.jQuery = require('jquery');

require('flexslider');
const hljs = require('highlight.js');

$(document).ready(function() {
    $(".toggler").click(function () {
        $("nav").slideToggle();
        $("#search").autocomplete("val", "");
        $("#search").focus();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $("nav").slideUp();
            $("#search").autocomplete("val", "");
        }
        else if (e.keyCode === 83){
            $("nav").slideDown();
            $("#search").focus();
        }
    })

    $('.flexslider').flexslider({
       animation: "slide",
       prevText: "",
       nextText: "",
       pauseOnHover: true,
    });
});

hljs.initHighlightingOnLoad();
