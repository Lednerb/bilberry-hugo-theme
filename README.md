## Bilberry Hugo Theme

[![GitHub downloads](https://img.shields.io/github/downloads/Lednerb/bilberry-hugo-theme/total.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme)
[![GitHub version](https://img.shields.io/github/release/Lednerb/bilberry-hugo-theme/all.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme/releases)
[![License](https://img.shields.io/github/license/Lednerb/bilberry-hugo-theme.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme/blob/master/LICENSE.md)
[![GitHub stars](https://img.shields.io/github/stars/Lednerb/bilberry-hugo-theme.svg?style=social&label=Stars)](https://github.com/Lednerb/bilberry-hugo-theme)


This is a premium theme for [HUGO](https://gohugo.io), inspired by the [Lingonberry WordPress](http://www.andersnoren.se/teman/lingonberry-wordpress-theme/) theme from Anders Norén.

Bilberry is an adaption that comes with different optimizations and little features as listed below.
<br>Click here for a [DEMO / PREVIEW](https://lednerb.github.io/bilberry-hugo-theme).

If you like this theme and/or use it for commercial purposes, please support me!

<a href="https://www.patreon.com/Lednerb" target="_blank"><img src="https://github.com/Lednerb/bilberry-hugo-theme/raw/master/images/patreon-button.png" height="40" alt="Become a Patron"></a>


## Table of Contents

- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Features](#features)
    - [Algolia Search](#algolia-search)
    - [Keyboard Shortcuts](#keyboard-shortcuts)
    - [Post Types](#post-types)
    - [Pages and External Links](#pages-and-external-links)
    - [Manual Summary Breaks](#manual-summary-breaks)
    - [Disqus Comments](#disqus-comments)
    - [Responsive Design](#responsive-design)
- [About the Author](#about-the-author)
- [Credits](#credits)
- [License](#license)
- [Support Me and this Theme](#support-me-and-this-theme)


## Quick Start
- Create a new hugo site
```
hugo new site my-new-blog
```

- Install this theme
```
cd my-new-blog/themes
git clone https://github.com/Lednerb/bilberry-hugo-theme.git

# If you don't use git, you can download and extract this theme
# manually into the themes folder.
# Please ensure that the folder is renamed to "bilberry-hugo-theme"
```

- Copy example content and default config file for a quick start
```
cp -r bilberry-hugo-theme/exampleSite/* ../
```

- Delete the `default.md` file in the `archetypes` folder

- Test and configure your site
```
cd ../
hugo server -D
```


## Configuration
To configure your site according to your needs, just open the `config.toml` file in your project folder and adjust the settings.
All options you can and should customize are commented so it should be no problem for you to get it done.


## Features

### Algolia Search
Bilberry includes a convenient search functionality for your site.
You can test it on the demo site.
Just click on the navigation bar at the top right of the header.

#### Setup
If you do not want to use the search functionality set `algolia_search = false` in your `config.toml` file.

If you want to include the algolia search for your site, you have to follow these steps:

1. Register for a free Algolia Search account at https://www.algolia.com/
2. Add a `New Application`. You can choose the `COMMUNITY` plan.
3. Switch over to `Indices` and create a new one.
4. Switch over to `API Keys` and copy your `Application ID`, `Search-Only API Key` and chosen `Index name` to your `config.toml` file.
5. Ensure that `algolia_search = true` is set.

#### Update the search index
You have to repeat this step every time you change a post or publish a new one to update the search index.

1. Publish your changes via the `hugo` command.
2. Head over to `http://your-site.com/index.json` and copy everything in there
3. Login to your algolia account, open your index and click at `Add records manually`
4. Paste the copied text from the `index.json` file.
5. Done.

### Keyboard Shortcuts
If you want to start a search on your blog simply type `s` and the search menu will open.

To close it again you can enter `esc` at any time.

### Post Types
Bilberry comes with a bunch of predefined post types.
Available post types are `article`, `audio`, `code`, `gallery`, `link`, `page`, `quote` and `video`.

To use a post type, just create new content via the hugo command.<br>
For example:
```
hugo new quote/edward-snowden-about-privacy.md
```

`article` is the default post type if you want to use another type of content as the predefined.

Just discover the entries from the `exampleSite` folder to get an overview of the great possibilities Bilberry provides ;-)

### Pages and External Links
The post type `page` is the only one that appears in the top navigation (when you click on the navigation button on the top right).

A `page` can be a static page (about me or impress site) or a link to another page as it is used in the demo to link to the Bilberry GitHub repository.

The post type `link` always links to an external site and can be used with or without a background image.


### Manual Summary Breaks
You can influence the summary outpot on the listing pages (such as the home page or the category or tag pages) in three ways:

- You don't set a manual summary break. <br>
Hugo will care for you and generates a summary as well as a _Continue reading_ link.

- You set a manual break via `<!--more-->` <br>
Just write your content and if you want to break use the code snippet to tell Hugo to break here.

- You want to display the full article without a _Continue reading_ link <br>
In this case, set the option `noSummary: true` in the header area (Front Matter) of your `.md` file.


### Disqus comments
If you want to enable the functionality for your users to write comments below your articles, you can register for a free [Disqus](https://disqus.com) account.

Just create a new site and copy your site's short name to the `config.toml` file at `disqusShortname`.

You can manage and moderate the comments either on your website or at the disqus management panel.

### Responsive Design
Bilberry is optimized for desktop and mobile devices (tablets and smartphones).


## Credits
Bilberry is inspired by the [WordPress theme Lingonberry](http://www.andersnoren.se/teman/lingonberry-wordpress-theme/), created by Anders Norén.

Bilberry is a theme for the great [HUGO static site generator](https://gohugo.io).

A big thank you goes to [@Ipstenu](https://github.com/Ipstenu) for his help in [this thread](https://discourse.gohugo.io/t/search-index-json-file-for-lunr-js/6286/5?u=lednerb) that helped me to create the `index.json` for the algolia export.

## License
The Bilberry Theme for HUGO is licensed under the MIT license.

## Support Me and This Theme
If you enjoy this theme (and especially if you make money with your blog) and want to use it for your site, please consider a small or generous monthly support towards me so I can keep up supporting and maintaining this theme in the future.

<a href="https://www.patreon.com/Lednerb" target="_blank"><img src="https://github.com/Lednerb/bilberry-hugo-theme/raw/master/images/patreon-button.png" height="40" alt="Become a Patron"></a>

You don’t want to use Patreon? <br>
Just write me a short mail and we’ll find a solution: code@lednerb.de
