require('jquery');

let moment = require('moment');
require("moment/min/locales.min");

$(document).ready(function () {
    let language = $('html').attr('lang');
    moment.locale(language);

    $('.moment').each(function() {
        date = $(this).text()
        $(this).text(moment(date).format('LL'))
    });
});
