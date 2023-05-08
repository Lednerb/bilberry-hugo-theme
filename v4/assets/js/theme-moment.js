/*
 * theme-moment.js
 */
$(document).ready(function () {
    let language = $('html').attr('lang');
    moment.locale(language);

    $('.moment').each(function() {
        let date = $(this).text()
        $(this).text(moment(date).format('LL'))
    });
});
