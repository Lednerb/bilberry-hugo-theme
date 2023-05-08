/*
 * theme-algoliasearch.js
 */
$(document).ready(function () {
    if ($('#activate-algolia-search').length) {
        let client = algoliasearch($('#algolia-search-appId').val(), $('#algolia-search-apiKey').val());
        let index = client.initIndex($('#algolia-search-indexName').val());
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
                            return '<div class="branding">Powered by <img src="' + $('meta[name=siteBaseUrl]').attr("content") + '/fonts/algolia-logo-light.svg" alt="algolia" /></div>'
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
