# Bilberry Hugo Theme
[![GitHub version](https://img.shields.io/github/release/Lednerb/bilberry-hugo-theme/all.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme/releases)
[![Hugo Version](https://img.shields.io/badge/Hugo-%5E0.77.0-ff4088?style=flat-square&logo=hugo)](https://gohugo.io/)
[![Hugo Themes](https://img.shields.io/badge/Hugo_Themes-@Bilberry-ff4088)](https://themes.gohugo.io/themes/bilberry-hugo-theme/)

[![Build GH-Pages](https://github.com/Lednerb/bilberry-hugo-theme/workflows/Update%20GitHub%20Pages/badge.svg)](https://github.com/Lednerb/bilberry-hugo-theme/deployments/activity_log?environment=github-pages)
[![Contributors](https://img.shields.io/badge/contributors-40-orange.svg?style=flat-square)](#contributors)
[![License](https://img.shields.io/github/license/Lednerb/bilberry-hugo-theme.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme/blob/master/LICENSE.md)

**Bilberry** is a premium [Hugo](https://gohugo.io) theme with many great features. 
This is an adaptation and further optimization of the [Lingonberry WordPress theme](https://en-ca.wordpress.org/themes/lingonberry/) by Anders Norén.

Here's a live [demo site](https://lednerb.github.io/bilberry-hugo-theme) to see this theme in action.

## Support and Discussions

Support for this theme is provided through the [Issues](https://github.com/Lednerb/bilberry-hugo-theme/issues) and [Discussions](https://github.com/Lednerb/bilberry-hugo-theme/discussions) sections of the project. 
Please use the **Issues** section if you would like to report a defect or bug. For any other requests, use the **Discussions** section.

Please use the following guidelines if you want to start a discussion:
- For any questions regarding a specific feature, or if you need help using or customizing the theme, use the **Questions & Answers** (**Q&A**) category.
- To propose a new feature or any other improvements, use the **Ideas** category.
- To showcase your blog or website powered by Bilberry theme, use the **Show and tell** category.
- For any other inquiries, please use the **General** type discussion.
 
## Table of Contents

- [Requirements](#requirements)
- [Quick Start](#quick-start)
  - [Create skeleton site](#create-skeleton-site) 
  - [Route 1 (recommended): use theme as module](#route-1-recommended-use-theme-as-module)
  - [Route 2 (traditional): install theme locally](#route-2-traditional-install-theme-locally)
  - [Start up your site](#start-up-your-site)
- [Configuration](#configuration)
- [Features](#features)
  - [Post Types](#post-types) 
  - [Top Navigation Bar](#top-navigation-bar)
  - [Algolia Search](#algolia-search)
    - [Initial Setup](#initial-setup)
    - [Update Algolia Index](#update-algolia-index)
      - [Manual Upload](#manual-upload)
      - [Automated Upload](#automated-upload)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Reposted Article/Duplicated Content](#reposted-articleduplicated-content)
  - [Calculated Reading Rime](#calculated-reading-time)
  - [Summary Splits](#summary-splits)
    - [Automatic Summary Split](#automatic-summary-split)
    - [Manual Summary Split](#manual-summary-split)
    - [Front Matter Summary Split](#front-matter-summary-split)
    - [No Summary Split](#no-summary-split)
  - [Table of Contents (TOC)](#table-of-contentstoc)
  - [Series Taxonomy](#series-taxonomy)
  - [Comments](#comments)
    - [Commento](#commento)
    - [Disqus](#disqus)
    - [Giscus](#giscus)
    - [Utterances](#utterances)
  - [Responsive Design](#responsive-design)
  - [Automatic Image Resizing](#automatic-image-resizing)
  - [Image Modal Zoom](#image-modal-zoom)
  - [MathJAX Markup](#mathjax-markup)
  - [Disabled Javascript Support](#disabled-javascript-support)
  - [Video](#video)
  - [Audio](#audio)
  - [Raw HTML](#raw-html)
- [Favicons](#favicons)
- [Custom 404 Page](#custom-404-page)
- [Archive Page](#archive-page)
- [Custom Post Types](#custom-post-types)
- [External Images](#external-images)
- [Customizing Individual Posts](#customizing-individual-posts)
- [Custom Colors and Fonts](#custom-colors-and-fonts)
- [CSS and JS modules](#css-and-js-modules)
  - [Add Cookie Disclaimer](#add-cookie-disclaimer)
- [Translations](#translations)
- [Credits](#credits)
- [Contributors](#contributors)
- [License](#license)

## Requirements

**Hugo version >= 0.77.0 required**; see this [guide](https://gohugo.io/getting-started/installing/) on how to install Hugo.  
Only when using theme as Hugo module:  
**Go version >= 1.12 required**; download Go installer [here](https://go.dev/dl/)  
**Git required**; download Git installer [here](https://git-scm.com/downloads)

## Quick Start

### Create skeleton site
 
- Create a new site:
```
hugo new site my-new-blog
```

- Enter site directory:
```
cd my-new-blog
```

There are two routes to associate the `billberry` theme with your site:

### Route 1 (recommended): use theme as module

- Turn your new site into a Hugo module:
```
hugo mod init github.com/me/my-new-blog
```

- Declare the `bilberry` module as a dependency of your site:
```
hugo mod get github.com/Lednerb/bilberry-hugo-theme
```

- Add the following lines at the end of your `config.toml`:

```
[module]
  [[module.imports]]
    path = "github.com/Lednerb/bilberry-hugo-theme"
    disable = false
  [[module.imports.mounts]]
    source = "exampleSite"
    target = "assets/exampleSite"
```

- Vendor the theme into the `_vendor` directory:

```
hugo mod vendor
```

- Copy example site content including the `config.toml` file:
```
cp -r _vendor/github.com/Lednerb/bilberry-hugo-theme/exampleSite/* .
```

- Delete the `_vendor` directory in your site root:

```
rm -rf _vendor/
```

At the top of your config.toml, remove the hash sign at the beginning of the `theme =` line in order to activate your theme as module:

```
# using theme as Hugo module (uncomment to activate)
theme = "github.com/Lednerb/bilberry-hugo-theme"
```

### Route 2 (traditional): install theme locally

- Install the latest version of this theme:
```
cd themes
git clone https://github.com/Lednerb/bilberry-hugo-theme.git
```
If you don't use **Git**, you can download this theme [here](https://github.com/Lednerb/bilberry-hugo-theme/archive/master.zip) and extract it manually into the `themes` folder. 
Make sure the folder containing the extracted theme is named `bilberry-hugo-theme`.

**Important:** Do NOT change the name of the `bilberry-hugo-theme` folder. 
Renaming this folder will break your site.

- Copy example site content including the `config.toml` file:
```
cp -r bilberry-hugo-theme/exampleSite/* ../
cd ../
```

## Start up your site

- Remove the default archetype:
```
rm archetypes/default.md
```

- Configure the necessary properties in the `config.toml` file. Then start the webserver and to publish your website:
```
hugo server
```

Also, check out this [tutorial](https://www.kiroule.com/article/start-blogging-with-github-hugo-and-netlify/) on how to build a Bilberry theme-based website using Hugo, GitHub, and Netlify.

## Configuration
To customize your site according to your needs, simply edit the `config.toml` file in the site's root directory by adjusting the settings. 
All parameters that need to be configured are commented out or disabled.

Also, you can read this [write-up](https://www.kiroule.com/article/manage-environment-specific-settings-for-hugo-based-website/) on how to manage
environment-specific settings for a Hugo-based website.

## Features

### Post Types
Bilberry theme comes with a set of predefined post types, namely `article`, `audio`, `code`, `gallery`, `link`, `page`, `quote`, `status`, and `video` where the `article` type is the default.

To create content of a specific type, use the `hugo new` command. For example:
```
hugo new quote/edward-snowden-about-privacy.md
```

The `page` post type is the only one that can be used in the top navigation bar.
Pages can be ordered using the `weight` front matter variable, which should be set to a non-zero value.
A page with a lower `weight` will be displayed first.

The `page` content can be a static page, such as an **About** page, or a link to another page, internal or external.

The `link` post type always links to an external site and can be used with or without a background image.


### Top Navigation Bar
If you want to permanently display the top navigation bar with the search text field and `page` items, set the `permanentTopNav` parameter to `true` in the `config.toml` file.

Please note that the top navigation bar is minimized by default on mobile devices.


### Algolia Search
Bilberry theme includes built-in content search via [Algolia SAAS](https://www.algolia.com/). 
You can see this in action on the [demo site](https://lednerb.github.io/bilberry-hugo-theme) by clicking on "hamburger" and typing something in the search text field, such as "support."

#### Initial Setup
To enable and configure search functionality for your site, follow these steps:

1. Register for a free Algolia Search account on https://www.algolia.com/.
2. Add a `New Application`. You can choose the `COMMUNITY` plan.
3. Switch over to `Indices` and create a new index.
4. Switch over to `API Keys` and copy your `Application ID`, `Search-Only API Key` and chosen `Index name` to your `config.toml` file.
5. Make sure that the `algolia_search` parameter is set to  `true`.
6. Follow instructions in the section [Update Algolia Index](#update-algolia-index) and proceed to the next step.
7. To complete the initial setup, go to the tab `Configuration` of your newly created indices, select the `Facets` in the section `FILTERING AND FACETING` and add the `language` attribute with the `filter only` modifier in the `Attributes for faceting` option. If, after adding the `language` attribute, the `Unknown attribute` error is shown, ignore it.

#### Update Algolia Index
You have to repeat this step every time you change a post or publish a new one to update the search index.

Execute the `hugo` command in the site's root directory to generate the index file.

##### Manual Upload
1. Head over to the `public/index.json` file and copy its content.
2. Login to your Algolia account, open your index and click at `Add records manually`.
3. Paste the copied text from the `index.json` file.
4. Verify in the `Browse` tab of your index that the index records were uploaded correctly.
5. In case you have a multi-language setup, make sure that you repeat the steps above for all `public/{LANG}/index.json` files.

##### Automated Upload
1. Switch to the `algolia` directory and install required dependencies by executing the following command:
  ```shell script
  cd algolia
  npm install
  ```
2. Run the `data-upload.js` from from the `algolia` directory as follows:
  ```shell script
  npm run data-upload -- -f ../public/index.json -a <algolia-app-id> -k <algolia-admin-api-key> -n <algolia-index-name>
  ```
3. The `algolia-admin-api-key` argument, namely your Algolia account's `Admin API Key`, is used to create, update, and delete indices, and it should be kept secret.
4. Add the `-c` or `--clear-index` option if you want to clear the corresponding Algolia index before starting a new upload.   
5. Login to your Algolia account and verify in the `Browse` tab of your index that the index records were uploaded correctly.
6. In case you have a multi-language setup, make sure that you repeat the steps above for all `public/{LANG}/index.json` files.

Also, you can read this [write-up](https://www.kiroule.com/article/automate-data-upload-to-algolia-index-revisited/) on how to automate
data upload to Algolia index if you host your Bilberry theme-based website on Netlify.


### Keyboard Shortcuts
Type `s` to open the navigation bar and set focus to the search input field. 
To remove focus, press the `Esc` key.


### Reposted Article/Duplicated Content
If you need to repost an article from another website or duplicate content on your site, you should link it to the original URL so it's correctly processed by SEO. 
To do so, define the `original_url` front matter variable in your post, for example:
```
original_url: "https://example.org/path/to/content"
```


### Calculated Reading Time
To override the automatically calculated reading time for a post, you can use the `readingTime` front matter variable, for example:
```
readingTime: 7 # integer value in  minutes
```


### Summary Splits
There are three options for how Hugo can generate summaries of content which will be used as a short version in summary views, such as a home page and tags or categories pages.

#### Automatic Summary Split
Using first 70 words of your content, Hugo automatically generates the summary followed by the _Continue reading_ link.  

#### Manual Summary Split
Add the `<!--more-->` summary divider to your content. 
Any content before the divider will be used by Hugo as a summary of that content. 
The generated summary will also be followed by the _Continue reading_ link.

#### Front Matter Summary Split
To define a summary that differs from the text that starts your article, use the `summary` front matter variable, for example, `summary: "Here goes my summary"`. 
This summary will also be followed by the _Continue reading_ link.

#### No Summary Split
If you want to display the entire article without the _Continue Reading_ link, set the `noSummary` variable to `true` in your content file.


### Table of Contents (TOC)
To enable the automatic creation of a table of contents (TOC), set the `toc` front matter variable to `true` in your article. 
If the article's markdown contains appropriate headings, Hugo will generate a table of content at the beginning of the article. 

By default, a TOC is generated if the content's word count is greater than **400**. 
The `tocMinWordCount` parameter defines this value in the `config.toml` configuration file. 

The headings that are taken into account for a TOC are from _H2_ (##) to _H5_ (#####) inclusive. 
Also, if you want to display a TOC at a specific point in your article, set the `toc` front matter variable to `false`, and use the `toc` shortcode like this:
```markdown
{{< toc >}}
```


### Series Taxonomy 
In case you want to group some articles as a series, you have to add the `series` front matter variable to each article and set its value to the name of the series, for example, `series: "My New Super Series"`.

The page at `<site-base-url>/series/` will list all the series. To list all articles for a particular series within markdown, you can use the `series` shortcode with the series name in question, for instance: 
```markdown
{{< series "My New Super Series" >}}
```


### Comments
To allow readers to comment under your articles, you can use either [Commento](https://commento.io/), [Disqus](https://disqus.com/), [Giscus](https://giscus.app/), or [Utterances](https://utteranc.es/).

#### Commento
Follow this [guide](https://docs.commento.io/installation/cloud-service/) if you want to use Commento Cloud Service which is not free of cost.

In case you want to use Self-hosting Commento, follow these [instructions](https://docs.commento.io/installation/self-hosting/).

Then uncomment the `commentoJsURL` parameter in the `config.toml` file:
```toml
#[...]
[params]
    #[...]

    # Commento
    commentoJsURL = "http://localhost:8080/js/commento.js"
```

#### Disqus
To allow readers to leave comments under your articles, sign up for free on [Disqus](https://disqus.com) website. 
Then create a new site and set the `disqusShortname` parameter to your site's short name in the `config.toml` file:
```toml
#[...]
[params]
    #[...]

    # Disqus
    disqusShortname = "lednerb"
```

You can manage and moderate the comments either on your website or using the Disqus management panel.

#### Giscus
Follow instructions on [Giscus](https://giscus.app/) website. 
Once you complete the prerequisites for your GitHub repository and select a discussion category, values for `giscusRepositoryId` and `giscusCategoryId` will be automatically generated. 
Then, in the `config.toml` file, set the `giscus` parameter to `true` and the properties mentioned above, respectively: 
```toml
#[...]
[params]
    #[...]

    # Giscus
    giscus              = true
    giscusJsUrl         = "https://giscus.app/client.js"
    giscusRepository    = "Lednerb/bilberry-hugo-theme"
    giscusRepositoryId  = "R_kgDOGX153A" # generated by Giscus website
    giscusMapping       = "pathname"
    giscusCategory      = "General"
    giscusCategoryId    = "DIC_kwDOGX153M4B_2Vz" # generated by Giscus website
    giscusTheme         = "light"
    giscusReactions     = "1"
    giscusEmitMetadata  = "0"
    giscusLanguage      = "en"
    giscusCrossOrigin   = "anonymous"
```

#### Utterances
Follow instructions on [Utterances](https://utteranc.es/) website. 
Once you complete the prerequisites for your GitHub repository, set the `utterances` parameter to `true` in the `config.toml` file:
```toml
#[...]
[params]
    #[...]

    # Utterances
    utterances            = true
    utterancesJsUrl       = "https://utteranc.es/client.js"
    utterancesRepository  = "Lednerb/bilberry-hugo-theme"
    utterancesIssueTerm   = "pathname"
    utterancesLabel       = "Comment"
    utterancesTheme       = "github-light"
    utterancesCrossOrigin = "anonymous"
```

### Responsive Design
Bilberry theme is optimized to look good on all devices, namely desktops, tablets and smartphones.

### Automatic Image Resizing
Bilberry theme includes built-in automatic cropping and image resizing, activated by default.
However, if you want to disable it, set the `resizeImages` parameter to `false` in the `config.toml` file.
Also, this feature can be disabled at the post level by setting the `resizeImages` front matter variable to `false`. 


### Image Modal Zoom
When you include an image that is larger than the content area, the image becomes interactive and a larger version can be opened in a lightbox.


### MathJAX Markup
To enable the [MathJAX](https://www.mathjax.org) markup support, set the `enable_mathjax` parameter to `true` in the `config.toml` file.


### Disabled Javascript Support
Although this theme has a lot of features that only work with enabled JavaScript, it also fully supports disabled JavaScript. 
Disabled Javascript will not break any styling or essential functionalities of your website.

You can test the behavior of the [demo site](https://lednerb.github.io/bilberry-hugo-theme) by disabling JavaScript in your browser.


### Video
The following video hosting providers are supported: [YouTube](https://www.youtube.com/), [Vimeo](https://vimeo.com/),  [Prezi](https://prezi.com/), [Bilibili](https://www.bilibili.com), and [PeerTube](https://joinpeertube.org).
Videos in the `MP4` format, either stored externally or within the site's `static` folder, are also supported. 
There are two options to display video embeds. 

The first option is to use a post of the `video` type. Use the following command to create your video post:
```bash
hugo new video/<post-name>.md
```

Then set the corresponding front matter variable:
```markdown
youtube: "<youtube-video-id>"            # https://www.youtube.com/watch?v=M7IjJiZUutk -> "M7IjJiZUutk"
vimeo: "<vimeo-video-id>"                # https://vimeo.com/239830182 -> "239830182"
prezi: "<prezi-video-id>"                # https://prezi.com/v/5z9shnq7jzxs/what-to-study/ -> "5z9shnq7jzxs"
bilibili: "<bilibili-video-id>"          # https://www.bilibili.com/video/BV1Sx411T7QQ -> "BV1Sx411T7QQ"
peertube: "<peertube-video-id>"          # https://vids.tekdmn.me/w/w7WGHX7Lb6mCrbrpF3Xb8V (entire URL)
mp4video: "<video-file-url>"             # location of video file (only mp4) 
mp4videoImage: "<image-video-file-url>"  # location of poster image 
```

For example, if an `MP4` video and its image are stored in the `static` folder, you can set corresponding front matter variables as follows:
```markdown
mp4video: "/<video-file-name>.mp4"
mp4videoImage: "/<image-video-file-name>.png"
```

The second option is to use the `video` shortcode within markdown content in a post of the `article` type as follows:
```markdown
<!-- YouTube -->
{{< video type="youtube" id="<youtube-video-id>" >}}

<!-- Vimeo -->
{{< video type="vimeo" id="<vimeo-video-id>" >}}

<!-- Prezi -->
{{< video type="prezi" id="<prezi-video-id>" >}}

<!-- bilibili -->
{{< video type="bilibili" id="<bilibili-video-id>" >}}

<!-- PeerTube -->
{{< video type="peertube" id="<peertube-video-id>" >}} 

<!-- MP4 external -->
{{< video type="mp4" url="<video-file-url>" imageUrl="<image-video-file-url>" >}}

<!-- MP4 in site's static folder -->
{{< video type="mp4" url="/<video-file-name>.mp4" imageUrl="/<image-video-file-name>.png" >}}

```

#### PeerTube Configuration
Because there is no *one* PeerTube site, you need to indicate which ones your videos use, meaning you can't use just the video ID.
Instead, copy in the entire watch URL, and it'll be transformed into the correct embed URL to use.

There is an [instance finder](https://joinpeertube.org/instances#instances-list) if you want to start hosting your videos on PeerTube but don't know which instance to join.

### Audio
The following audio streaming providers are supported: [Mixcloud](https://www.mixcloud.com/), [SoundCloud](https://soundcloud.com/), [Spotify](https://www.spotify.com/), and [TuneIn](https://tunein.com/). 
Audio files in the `Ogg`, `MP3`, or `WAV` formats, either stored externally or within the site's `static` folder, are also supported. 
There are two options to display audio embeds.

The first option is to use a post of the `audio` type. Use the following command to create your audio post:
```bash
hugo new audio/<post-name>.md
```

Then set the corresponding front matter variable:
```markdown
spotify: "<spotify-track-id>"        # https://open.spotify.com/track/3W2lz1sg6m4sEzjmoTjmdE?si=0659fd12179840dd --> 3W2lz1sg6m4sEzjmoTjmdE
soundcloud: "<soundcloud-track-url>" # https://soundcloud.com/lightbooks/alchemist-08-new-world-order-snip
tunein: "<tunein-track-id>"          # https://tunein.com/embed/player/t117894382/" --> t117894382
mixcloud: "<mixcloud-track-id>"      # https://www.mixcloud.com/scienceforthepeople/445-ai-ant-intelligence/ --> scienceforthepeople/445-ai-ant-intelligence
audiofile: "<audio-file-url>"        # location of audio file (only ogg, mp3, or wav formats)
```

For example, if an `MP3` audio file is stored in the `static` folder, you can set the `audiofile` front matter variable as follows:
```markdown
audiofile: "/<audio-file-name>.mp3"
```

The second option is to use the `audio` shortcode within markdown content in a post of the `article` type as follows:
```markdown
<!-- Mixcloud -->
{{< audio type="mixcloud" id="<mixcloud-track-id>" >}}

<!-- SoundCloud -->
{{< audio type="soundcloud" id="<soundcloud-track-url>" >}}

<!-- Spotify -->
{{< audio type="spotify" id="<spotify-track-id>" >}}

<!-- TuneIn -->
{{< audio type="tunein" id="<tunein-track-id>" >}}

<!-- MP3 external -->
{{< audio type="audiofile" url="<audio-file-url>" >}}

<!-- MP3 in site's static folder -->
{{< audio type="audiofile" url="/<audio-file-name>.mp3" >}}
```

### Raw HTML
If you want to include raw HTML in your markdown content, set the `unsafe` setting in the `config.toml` file to `true`:
```toml
[markup.goldmark]
  [markup.goldmark.renderer]
    unsafe = true
```

## Favicons
To add favicons, proceed with the following steps:
1. Visit https://realfavicongenerator.net/ website, and generate favicons according to your needs.
2. Copy and paste the generated files into your site's `/static` folder.
3. Edit the `/layouts/partials/favicon.html` file, then copy and paste the HTML code from the generated instruction.

**Important:** You have to follow the [Quick Start](#Quick-Start) instructions or manually copy the `/layouts/partials/favicon.html` file from the theme to your site's `/layouts` directory.

Also, check out this [tutorial](https://www.kiroule.com/article/add-favicon-to-hugo-based-website/) on how to add favicons to Bilberry theme-based website.


## Custom 404 Page
To customize your 404 page, copy the `themes/bilberry-hugo-theme/layouts/404.html` file to your site's `layouts/404.html` and edit the file according to your needs, for example, change the message, icon class etc.

## Archive Page
The archive page will be available at `<site-base-url>/archive/` as soon as you copy the `themes/bilberry-hugo-theme/exampleSite/content/archive.md` file to `content` directory of your site. 
By default, the published content is grouped by year. 
To group the content by year and month, set the `archiveDateGrouping` parameter to the `2006-01` value.

To display the archive link in the footer, set the `showArchive` parameter to `true`. 

To add the archive link to the top navigation bar, create a new page with the following command:
```shell
hugo new page/archive.md
```

Then, in the newly created `content/page/archive.md` file, set the `link` front matter variable to the `/archive/` value and completely remove the `target` variable.


## Custom Post Types
With Bilberry theme, you can create new post types easily. 
For example, suppose you want to create a new type named `book`.
Then you should do the following:

1. Copy the default `themes/bilberry-hugo-theme/layouts/partials/content-type/article.html` to your site's `layouts/partials/content-type/` folder.
2. Rename the file to your custom post type, namely `book.html`.
3. Customize the newly created file, for instance, change the icon in the bubble to `fa-book` that is available on [Font Awesome Icon](http://fontawesome.io/icons/) website: 
```html
<i class="fas fa-fw fa-book"></i>
```
4. To create new posts, use the `book` post type prefix:
```shell
hugo new book/my-favorite-book.md`
```
If you want to use custom front matter variables, create a `book.md` archetype in your site's `archetypes/` directory.

## External Images
If you would like to use external images, such as those stored on another server or in the cloud, as a featured image for your article or in the `gallery` post type, you can use them by setting the appropriate front matter variables with the full-path URL values:

```markdown
# /content/article/my-external-featured-image-post.md
featuredImage: "https://example.org/images/my-image.jpg"
```

```markdown
# /content/gallery/my-external-gallery-post.md
gallery: [
    "https://example.org/images/gallery-image1.jpg",
    "https://example.org/images/gallery-image2.jpg",
    "https://example.org/images/gallery-image3.jpg"
]
```

## Individual Posts Customization
You can customize your posts as follows:

1. To exclude posts from your blog's index but still show up in categories, add `excludeFromIndex: true` to your post's front matter.

2. To pin one or more posts to the top of the index page, uncomment the `pinnedPost` parameter in the `config.toml` file. 
Then set its value to the post's relative URL, for example, `/article/installing-bilberry-theme/`. 
When pinning multiple posts, the relative URL values should be separated by a comma. 
The `pinOnlyToFirstPage` parameter allows you to choose whether to display pinned posts on the index page only or on all pages.

3. A custom icon can be declared per post, by specifying a font-awesome icon in the post's front matter, such as `icon: fa-thumb-tack` for a pinned post.

4. If you want to change the default post types(e.g., replace the pencil icon for the `article` post type another one) copy the original content type file to your site's `layouts/partials/content-type/` directory and edit it there. 
Otherwise, your changes will be overwritten when you update the theme to the latest version.


## Custom Colors and Fonts
Bilberry uses SCSS for styling and NPM with [Laravel Mix](https://laravel-mix.com/) for the dependency management.

To change any colors or fonts, you have to follow these steps:

1. In your site's `cd themes/bilberry-hugo-theme` directory, execute `npm install`.
2. Modify the `assets/sass/_variables.scss` file to customize your colors. 
If you want to change the header's color, only edit the `$base-color` variable.
3. Use `npm run dev` for development and preview purposes and `npm run production` when you're done with the changes.


## CSS and JS modules
This theme supports hot-swappable CSS and JavaScript extensions. 
Modules can be specified using the `(css|js)_modules` list parameter. 
Modules can be specified either relative to the `static` directory (e.g. `exampleSite/static/css/custom.css`) or as a URL.

Modules are imported in the order they appear in the list, and immediately after the default Bilberry CSS and JS files are imported.

## Add Cookie Disclaimer
You can use the [cookie consent](https://cookieconsent.insites.com/) solution to add cookie consent information by loading the needed resources as external CSS and JS modules.

Use the configurator on the [cookie consent website](https://cookieconsent.insites.com/) to generate the required initialization code and add it to a local `static/init-cookieconsent.js` file, for example:

```javascript
// https://cookieconsent.insites.com/download/#
window.addEventListener('load', function () {
  window.cookieconsent.initialise({
    'palette': {
      'popup': {
        'background': '#cc0033'
      },
      'button': {
        'background': '#fff'
      }
    }
  })
})
```

Then you only need to modify the `config.toml` file to load the local init script and the libraries. 
You can either download the files and put them in your site's `/static` directory or reference them directly using a CDN.
Storing these files on your website reduces external dependencies, increases privacy, and allows you to develop your website in an offline environment.

```toml
css_modules = ["..", "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"]
js_modules = ["..", "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js", "init-cookieconsent.js"]
```


## Translations
Bilberry theme has built-in support for multi-language sites, and currently supports translations for more than 20 languages.

Feel free to submit a request for a new language translation or improve existing ones!

## Credits
Bilberry theme was inspired by the [WordPress theme Lingonberry](https://en-ca.wordpress.org/themes/lingonberry/) created by Anders Norén.

Bilberry is a theme for the great [HUGO static site generator](https://gohugo.io).

Special thank-you goes to [@Ipstenu](https://github.com/Ipstenu) for his help in [this thread](https://discourse.gohugo.io/t/search-index-json-file-for-lunr-js/6286/5?u=lednerb) that helped to create the `index.json` for the Algolia index.

## Contributors

Many thanks go to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/2056876?v=4" width="100px;"/><br /><sub><b>Sascha Brendel</b></sub>](https://sascha-brendel.de)<br />[💬](#question-Lednerb "Answering Questions") [📝](#blog-Lednerb "Blogposts") [💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=Lednerb "Code") [🎨](#design-Lednerb "Design") [📖](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=Lednerb "Documentation") [🌍](#translation-Lednerb "Translation") | [<img src="https://anna-brendel.de/images/background1.jpg" width="100px;"/><br /><sub><b>Anna Brendel</b></sub>](https://anna-brendel.de)<br />[🤔](#ideas "Ideas, Planning, & Feedback") [🌍](#translation "Translation") | [<img src="https://avatars2.githubusercontent.com/u/1560404?v=4" width="100px;"/><br /><sub><b>Givi Khojanashvili</b></sub>](https://www.linkedin.com/in/khojanashvili/)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=gigovich "Code") | [<img src="https://avatars2.githubusercontent.com/u/28822504?v=4" width="100px;"/><br /><sub><b>Chung Tran Anh</b></sub>](https://github.com/anhchungite)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=anhchungite "Code") [🌍](#translation-anhchungite "Translation") | [<img src="https://avatars0.githubusercontent.com/u/3048682?v=4" width="100px;"/><br /><sub><b>Minke Zhang</b></sub>](http://blogzhang.com)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=cripplet "Code") |
| :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/16353578?v=4" width="100px;"/><br /><sub><b>Pavel Kanyshev</b></sub>](https://github.com/aerohub)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=aerohub "Code") [🌍](#translation-aerohub "Translation") | [<img src="https://avatars3.githubusercontent.com/u/3541050?v=4" width="100px;"/><br /><sub><b>Marcel Kraus</b></sub>](https://www.marcelkraus.de)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=marcelkraus "Code") | [<img src="https://avatars2.githubusercontent.com/u/280825?v=4" width="100px;"/><br /><sub><b>Nick Busey</b></sub>](http://nickbusey.com/)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=NickBusey "Code") | [<img src="https://avatars1.githubusercontent.com/u/4789253?v=4" width="100px;"/><br /><sub><b>lkorzen</b></sub>](https://github.com/lkorzen)<br />[🌍](#translation-lkorzen "Translation") | [<img src="https://avatars1.githubusercontent.com/u/12019608?v=4" width="100px;"/><br /><sub><b>Chris Stayte</b></sub>](http://www.chrisstayte.com)<br />[🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author%3AChrisStayte "Bug reports") |
| [<img src="https://avatars0.githubusercontent.com/u/405277?v=4" width="100px;"/><br /><sub><b>Dmitry Matrosov</b></sub>](https://twitter.com/amidos_me)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=meAmidos "Code") | [<img src="https://avatars2.githubusercontent.com/u/8802277?v=4" width="100px;"/><br /><sub><b>Marc-Antoine</b></sub>](https://marca.finch4.xyz/)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=Embraser01 "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author%3AEmbraser01 "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/2030983?v=4" width="100px;"/><br /><sub><b>Nina Zakharenko</b></sub>](http://nnja.io)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nnja "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author%3Annja "Bug reports") [📖](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nnja "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/7719018?v=4" width="100px;"/><br /><sub><b>Nisarga</b></sub>](https://github.com/nisargap)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nisargap "Code") | [<img src="https://avatars2.githubusercontent.com/u/2817480?v=4" width="100px;"/><br /><sub><b>Pablo Domingo Rojo</b></sub>](https://github.com/pdoro)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=pdoro "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/4433144?v=4" width="100px;"/><br /><sub><b>Rob Baruch</b></sub>](https://github.com/rabarar)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=rabarar "Code") | [<img src="https://avatars0.githubusercontent.com/u/9339576?v=4" width="100px;"/><br /><sub><b>Taoshi</b></sub>](https://github.com/GMpet)<br />[🌍](#translation-GMpet "Translation") | [<img src="https://avatars1.githubusercontent.com/u/11535575?v=4" width="100px;"/><br /><sub><b>nonumeros</b></sub>](https://github.com/nonumeros)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nonumeros "Code") | [<img src="https://avatars3.githubusercontent.com/u/56372?v=4" width="100px;"/><br /><sub><b>Marcelo Gonçalves</b></sub>](http://marcelogoncalves.com.br)<br />[🌍](#translation-marcelocg "Translation") | [<img src="https://avatars0.githubusercontent.com/u/9111944?v=4" width="100px;"/><br /><sub><b>Dávid Sárkány</b></sub>](https://sarkanydavid.com)<br />[🌍](#translation-davidsarkany "Translation") |
| [<img src="https://avatars3.githubusercontent.com/u/43414238?v=4" width="100px;"/><br /><sub><b>meonamz</b></sub>](https://github.com/meonamz)<br />[🌍](#translation-meonamz "Translation") | [<img src="https://avatars3.githubusercontent.com/u/32282514?v=4" width="100px;"/><br /><sub><b>Hamza Yusuf Çakır</b></sub>](https://github.com/hycakir)<br />[🌍](#translation-hycakir "Translation") | [<img src="https://avatars3.githubusercontent.com/u/15079172?s=460&v=4" width="100px;"/><br /><sub><b>Niclas Roßberger</b></sub>](https://github.com/nidomiro)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nidomiro "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author:nidomiro "Bug reports") [🚧](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nidomiro "maintenance") | [<img src="https://www.kiroule.com/img/avatar.png" width="100px;"/><br/><sub><b>Igor Baiborodine</b></sub>](https://kiroule.com)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=igor-baiborodine "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues/created_by/igor-baiborodine "Bug reports") [📖](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=igor-baiborodine "Documentation")
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!


## License
The Bilberry Hugo theme is licensed under the MIT license.
