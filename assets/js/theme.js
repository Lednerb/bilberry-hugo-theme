// dependencies
require('jquery');
require('flexslider');
require('algoliasearch/dist/algoliasearch.jquery');
require('autocomplete.js/dist/autocomplete.jquery');
require('tooltipster');

let ClipboardJs = require('clipboard')
let hljs = require('highlight.js');

// Add ClipboardJs to enable copy button functionality
new ClipboardJs('.copy-button', {
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

    // Commento support to block search focus when hitting the S key
    blockSearchFocus = false;

    $('#commento').focusin(function() {
      blockSearchFocus = true;
    });

    $('#commento').focusout(function() {
      blockSearchFocus = false;
    });

    // Keyboard-Support
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if (!$("nav").hasClass('permanentTopNav'))
                $("nav").slideUp();
            $("#search").autocomplete("val", "");
        }
        else if (e.keyCode === 83 && !blockSearchFocus) {
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
        let client = algoliasearch($('#algolia-search-appId').val(), $('#algolia-search-apiKey').val());
        let index = client.initIndex($('#algolia-search-indexName').val());

        let autocompleteSource = $.fn.autocomplete.sources.hits(index, { hitsPerPage: 10 });
        if ($('#algolia-search-currentLanguageOnly').length) {
            autocompleteSource = $.fn.autocomplete.sources.hits(index, { hitsPerPage: 5, filters: 'language: ' + $('html').attr('lang') });
        }

        $('#search').autocomplete({ hint: false, autoselect: true, debug: false },
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
                            return '<div class="branding">Powered by <img src="' + $('meta[name=siteBaseUrl]').attr("content") + '/algolia-logo-light.svg" /></div>'
                        }
                    },
                }
            ])
            .on('autocomplete:selected', function (event, suggestion, dataset) {
                window.location = (suggestion.url);
            })
            .keypress(function (event, suggestion) {
                if (event.which == 13) {
                    window.location = (suggestion.url);
                }
            });
    }
});

hljs.initHighlightingOnLoad();
