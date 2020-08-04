// dependencies
require('jquery');
require('flexslider');
require('algoliasearch/dist/algoliasearch.jquery');
require('autocomplete.js/dist/autocomplete.jquery');
require('magnific-popup')
let hljs = require('highlight.js');

$(document).ready(function () {
    // Nav-Toggle
    $(".toggler").click(function () {
        $("nav").slideToggle();
        $("#search").autocomplete("val", "");
    });

    // Commento support to block search focus when hitting the S key
    blockSearchFocus = false;

    $('#commento').focusin(function () {
        blockSearchFocus = true;
    });

    $('#commento').focusout(function () {
        blockSearchFocus = false;
    });

    // Keyboard-Support
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if (!$("nav").hasClass('permanentTopNav'))
                $("nav").slideUp();
            $("#search").autocomplete("val", "");
        } else if (e.keyCode === 83 && !blockSearchFocus) {
            if (!$("nav").hasClass('permanentTopNav'))
                $("nav").slideDown();
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

    // Algolia-Search
    if ($('#activate-algolia-search').length) {
        const client = algoliasearch($('#algolia-search-appId').val(), $('#algolia-search-apiKey').val());
        const index = client.initIndex($('#algolia-search-indexName').val());

        let autocompleteSource = $.fn.autocomplete.sources.hits(index, {hitsPerPage: 10});
        if ($('#algolia-search-currentLanguageOnly').length) {
            autocompleteSource = $.fn.autocomplete.sources.hits(index, {
                hitsPerPage: 5,
                filters: 'language: ' + $('html').attr('lang')
            });
        }

        $('#search').autocomplete({hint: false, autoselect: true, debug: false},
            [
                {
                    source: autocompleteSource,
                    displayKey: function (suggestion) {
                        return suggestion.title || suggestion.author
                    },
                    templates: {
                        suggestion: function (suggestion) {
                            return "<span class='entry " + suggestion.type + "'>"
                                + "<span class='title'>" + suggestion.title + "</span>"
                                + "<span class='fas fa-fw " + suggestion.iconClass + "'></span>"
                                + "</span>"
                                ;
                        },
                        empty: function () {
                            return "<span class='empty'>" + $('#algolia-search-noSearchResults').val() + "</span>"
                        },
                        footer: function () {
                            return '<div class="branding">Powered by <img src="' + $('meta[name=siteBaseUrl]').attr("content") + '/algolia-logo-light.svg"  alt=""/></div>'
                        }
                    },
                }
            ])
            .on('autocomplete:selected', function (event, suggestion, dataset) {
                window.location = (suggestion.url);
            })
            .keypress(function (event, suggestion) {
                if (event.which === 13) {
                    window.location = (suggestion.url);
                }
            });
    }

    $('.image-block').magnificPopup({
        type: "image",
        delegate: "a",
        image: {
            titleSrc: function (item) {
                return item.el.parent().find('figcaption').text();
            },

            verticalFit: true // Fits image in area vertically
        }
    });

    $('p').magnificPopup({
        type: "image",
        delegate: "a",
        image: {
            titleSrc: function (item) {
                return item.el.find('img').attr('alt');
            },

            verticalFit: true // Fits image in area vertically
        }
    });

});

hljs.initHighlightingOnLoad();
