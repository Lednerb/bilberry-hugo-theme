# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.13.0] - 2018-10-13
### Added
- Functionality to automatically resize and crop images.

### Fixed
- A bug where the `customImage` is not displayed on multi-language sites. #137
- Style for the gallery slider controls so they are visible on white backgrounds. #138


## [1.12.0] - 2018-10-08
### Fixed
- Bug #128 that prevent to build the site.
- Deprecation warning with SCSS, thanks to @nnja
- README.md for the latest instructions
- Font path issues

### Added
- Feature for a Pinned Post, thanks to @nnja
- Feature to customize the post icon, also by @nnja
- Feature to exclude an post from the main page, @nnja again!
- Hungarian Language, provided by @davidsarkany
- Turkish Language, provided by @hycakir


## [1.11.1] - 2018-09-15
### Fixed
- Broken font path since Version 1.10.0 (#114, #115)

## [1.11.0] - 2018-09-14
### Added
- Language Brazilian Portuguese, thanks to @marcelocg (#112)
- Updated Korean language

## [1.10.0] - 2018-09-10
### Fixed
- Incorrect rendering of task lists (#108)
- Displaying the RSS line in the footer

### Added
- Support for hugo pipes, no longer need for `npm` dependencies (#102)
- Option to configure the overlayIcon (#56)
- Option to configure the date format (#53)
- Option to display the Reading Time (#51)


## [1.9.1] - 2018-08-30
### Fixed
- Issues with the GoHugo Theme's requirements for the themes.gohugo.io site


## [1.9.0] - 2018-08-30
### Added
- All-Contributors list to README.md
- Chinese language, thanks to @AgennyBrof
- Korean language, thanks to @hithat (user at poeditor.com)

## [1.8.1] - 2018-08-16
### Added
- Africans language

### Changed
- Removed Patreon example content and introduced the new Discord server: <br> [![Discord](https://img.shields.io/discord/479643633814077465.svg?style=for-the-badge&label=Discord%20Chat&colorB=7289da)](https://discord.gg/vZVHJ4j)
- Language files from `.yaml` to `.toml` and switched to [POEditor](https://poeditor.com/projects/view?id=202795) for translations.


## [1.8.0] - 2018-08-09
### Added
- Vietnamese language, thanks to @anhchungite
- Danish language, thanks to @GMpet
- Open Graph meta data, thanks to @anhchungite again!
- RSS support, contributed by @NickBusey

### Fixed
- Displaying custom image (#96 and #103), by @Embraser01 and @gigovich
- Responsive images in posts


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


[Unreleased]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.13.0...development
[1.13.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.12.0...1.13.0
[1.12.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.11.1...1.12.0
[1.11.1]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.11.0...1.11.1
[1.11.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.10.0...1.11.0
[1.10.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.9.1...1.10.0
[1.9.1]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.9.0...1.9.1
[1.9.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.8.1...1.9.0
[1.8.1]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.8.0...1.8.1
[1.8.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.7.1...1.8.0
[1.7.1]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.7.0...1.7.1
[1.7.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.6.0...1.7.0
[1.6.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.5.0...1.6.0
[1.5.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.4.0...1.5.0
[1.4.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/Lednerb/bilberry-hugo-theme/compare/1.2.2...1.3.0

