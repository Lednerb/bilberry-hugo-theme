window.$ = window.jQuery = require('jquery');

require('flexslider');
const hljs = require('highlight.js');

$(document).ready(function() {
    $(".toggler").click(function () {
        $("nav").slideToggle();
        $("#search").autocomplete("val", "");
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if ( ! $("nav").hasClass('permanentTopNav') )
                $("nav").slideUp();
            $("#search").autocomplete("val", "");
        }
        else if (e.keyCode === 83){
            if ( ! $("nav").hasClass('permanentTopNav') )
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
