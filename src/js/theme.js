window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
    $(".toggler").click(function () {
        $("nav").slideToggle();
    })
});
