# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.7.1] - 2018-06-17 | Hotfix
### Fixed
- Broken links in favicon, algolia-logo and `theme.css`


## [1.7.0] - 2018-06-17 | :tada: Multi-Language Support :tada:
### Added
- __Multi-Language Support__ <br>
  You can now have your blog and blog posts in many languages. <br>
  The algolia search does also support a multi-language site.
- Support for [Page Resources](http://gohugo.io/content-management/page-resources/)
- Increased privacy by removing dependencies from CDNs and Google Fonts
- Japanese language file, contributed by @chibikun
- Easier `gallery` and `featuredImage` handling. See announcement in [1.6.0]
- Instructions to customize `404.html` site (#46)
- Default values to prevent rendering issues when `config.toml` variables are not set (#65)

### Fixed
- URLs for posts, categories, tags, and authors, thanks to @anhchungite
- CSS import with different baseURL (#68)
- Space for top-nav (#80)
- Pages for the taxonomy overviews (categories, tags and authors) (#59)


## [1.6.0] - 2018-06-11
### Deprecated
- `featuredImage: "/absolute/url/to/image"` parameter <br>
   The next version will support [Page Resources](http://gohugo.io/content-management/page-resources/) so you should have a better folder structure and you change:
   ```
   # OLD Structure / deprecated
   content/article/support-me-and-this-theme.md
   static/images/patreon.png

   # NEW structure
   content/article/support-me-and-this-theme/index.md
   content/article/support-me-and-this-theme/featuredImage.png
   ```

- `gallery: []` parameter <br>
   The next version will support [Page Resources](http://gohugo.io/content-management/page-resources/) so you should have a better folder structure and you change:
   ```
   # OLD Structure / deprecated
   content/gallery/my-trip-to-scotland.md
   static/images/scotland1.jpg
   static/images/scotland2.jpg
   ...

   # NEW structure
   content/gallery/my-trip-to-scotland/index.md
   content/article/my-trip-to-scotland/scotland1.jpg
   content/article/my-trip-to-scotland/scotland2.jpg
   ...
   ```
   You don't have to add the images manually to an array, instead all images in the content folder will be used automatically.


### Fixed
- Relative URLs fo taxonomy author, categories, tags - contributed by @anhchungite

### Added
- Customizable copyright and credits footer - big thanks to @nnja!
- LinkedIn social media support, contributed by @pdoro
- Support for Twitter meta data specification, contributed by @nisargap

## [1.5.0] - 2018-05-13
### Fixed
- Broken links #72

### Added
- Support for Polish language, provided by @lkorzen

### Changed
- The site's subtitle will be used in the title on the homepage. Contributed by @marcelkraus

## [1.4.0] - 2018-05-05
### Added
- Support for Ukrain language
- Support for CSS / JS extensions, submitted by @cripplet
- Support for Xing as a social media link in the footer, contributed by @marcelkraus
- `excludeFromTopNav` option for the `page` content type, requested in #60 by @AshleyByeUK

### Fixed
- Broken links to the repo, thx to @meAmidos
- Mobile view, thx to @cripplet
- Issue with Algolia export (Record too long), thanks for submitting #62 @lebarde

### Changed
- Improved README.md

### Removed
- `exampleSite/archetype` directory so the theme's archetypes can be used

## [1.3.0] - 2017-11-28
### Added
- Support for MathJax, contributed by @rabarar
- Support for a `target=""` attribute for the `page` post type as requested by @ajolo2ky
- Support for a favicon

### Changed
- Improved README.md

### Fixed
- Some typos


[Unreleased]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.7.1...master
[1.7.1]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.7.0...1.7.1
[1.7.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.6.0...1.7.0
[1.6.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.5.0...1.6.0
[1.5.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.4.0...1.5.0
[1.4.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.2.2...1.3.0

