# Bilberry Hugo Theme v4

[![GitHub version](https://img.shields.io/github/release/Lednerb/bilberry-hugo-theme/all.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme/releases)
[![Hugo Version](https://img.shields.io/badge/Hugo-%5E0.109.0-ff4088?style=flat-square&logo=hugo)](https://gohugo.io/)
[![Hugo Themes](https://img.shields.io/badge/Hugo_Themes-@Bilberry-ff4088)](https://themes.gohugo.io/themes/bilberry-hugo-theme/)

[![Build GH-Pages](https://github.com/Lednerb/bilberry-hugo-theme/workflows/Update%20GitHub%20Pages/badge.svg)](https://github.com/Lednerb/bilberry-hugo-theme/deployments/activity_log?environment=github-pages)
[![Contributors](https://img.shields.io/badge/contributors-48-orange.svg?style=flat-square)](#contributors)
[![License](https://img.shields.io/github/license/Lednerb/bilberry-hugo-theme.svg?style=flat-square)](https://github.com/Lednerb/bilberry-hugo-theme/blob/master/LICENSE.md)

----

This guide is for `v4` version. For `v3`, please use this [guide](../v3-README.md).

**IMPORTANT** `v3` will be supported until **August 31, 2024**. Only critical bugs will be fixed during this period, no
new features will be implemented. If you want to migrate from `v3` to `v4`, please read the migration [guide](v4-migration-guide.md).

For those who want to contribute to or customize the Bilberry Hugo theme, please see the developer [guide](v4-developer-guide.md).

----

**Bilberry** is a premium [Hugo](https://gohugo.io) theme with many great features.
This is an adaptation and further optimization of
the [Lingonberry WordPress theme](https://en-ca.wordpress.org/themes/lingonberry/) by Anders Norén.

Here's a live [demo site](https://lednerb.github.io/bilberry-hugo-theme) to see this theme in action.

## Support and Discussions

Support for this theme is provided through the [Issues](https://github.com/Lednerb/bilberry-hugo-theme/issues)
and [Discussions](https://github.com/Lednerb/bilberry-hugo-theme/discussions) sections of the project.
Please use the **Issues** section if you would like to report a defect or bug. For any other requests, use the **Discussions** section.

Please use the following guidelines if you want to start a discussion:

- For any questions regarding a specific feature, or if you need help using or customizing the theme, use the **Questions & Answers** (**Q&A**) category.
- To propose a new feature or any other improvements, use the **Ideas** category.
- To showcase your blog or website powered by Bilberry theme, use the **Show and tell** category.
- For any other inquiries, please use the **General** type discussion.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Requirements](#requirements)
- [Quick Start](#quick-start)
  - [Site Initial Setup](#site-initial-setup)
  - [Theme Installation Options](#theme-installation-options)
    - [Option 1 (recommended): Adding the Theme as a Hugo Module](#option-1-recommended-adding-the-theme-as-a-hugo-module)
    - [Option 2: Adding the Theme as a Git submodule](#option-2-adding-the-theme-as-a-git-submodule)
    - [Option 3: Copying the Theme Files](#option-3-copying-the-theme-files)
  - [Configuration](#configuration)
  - [Webserver](#webserver)
  - [Free Hosting](#free-hosting)
  - [Other Tutorials](#other-tutorials)
- [Features](#features)
  - [Default Post Types](#default-post-types)
    - [Single Page](#single-page)
    - [Page Bundle](#page-bundle)
  - [Top Navigation Bar](#top-navigation-bar)
  - [Algolia Search](#algolia-search)
    - [Initial Setup](#initial-setup)
    - [Update Algolia Index](#update-algolia-index)
      - [Manual Upload](#manual-upload)
      - [Automated Upload](#automated-upload)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Reposted Article/Duplicated Content](#reposted-articleduplicated-content)
  - [Estimated Reading Time](#estimated-reading-time)
  - [Summary Splits](#summary-splits)
    - [Automatic Summary Split](#automatic-summary-split)
    - [Manual Summary Split](#manual-summary-split)
    - [Front Matter Summary Split](#front-matter-summary-split)
    - [No Summary Split](#no-summary-split)
  - [Open Graph Metadata](#open-graph-metadata)
  - [Table of Contents (TOC)](#table-of-contents-toc)
  - [Series Taxonomy](#series-taxonomy)
  - [External Images](#external-images)
  - [Image Modal Zoom](#image-modal-zoom)
  - [Featured Image](#featured-image)
  - [Automatic Image Resizing](#automatic-image-resizing)
  - [Video](#video)
    - [PeerTube Configuration](#peertube-configuration)
  - [Audio](#audio)
  - [Google Analytics](#google-analytics)
  - [Comments](#comments)
    - [Commento](#commento)
    - [Disqus](#disqus)
    - [Giscus](#giscus)
    - [Utterances](#utterances)
  - [Archive Page](#archive-page)
  - [Responsive Design](#responsive-design)
  - [MathJAX Markup](#mathjax-markup)
  - [Disabled JavaScript Support](#disabled-javascript-support)
  - [Trimmed JavaScript Size](#trimmed-javascript-size)
  - [Raw HTML](#raw-html)
- [Customizations](#customizations)
  - [Hooks](#hooks)
  - [Favicons](#favicons)
  - [404 Page](#404-page)
  - [Custom Post Types](#custom-post-types)
  - [Individual Posts](#individual-posts)
  - [Syntax Highlighting](#syntax-highlighting)
  - [Colors and Fonts](#colors-and-fonts)
  - [CSS and JS modules](#css-and-js-modules)
  - [Cookie Disclaimer (GDPR)](#cookie-disclaimer-gdpr)
- [Translations](#translations)
- [Credits](#credits)
- [Contributors](#contributors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Requirements

- **Hugo** (version >= 0.109.0 **extended**), see this [guide](https://gohugo.io/getting-started/installing/) on how to install Hugo.
- **Git**, see this [guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on how to install Git.
- **Go** (version >= 1.19), optional, required only when the Bilberry theme is used as a Hugo module; see
  this [guide](https://go.dev/doc/install) on how to install Go.

## Quick Start

### Site Initial Setup

- Clone the Bilberry Hugo theme repository to your local computer:

```shell
git clone https://github.com/Lednerb/bilberry-hugo-theme.git
```

Alternatively, you can download it as a [ZIP](https://github.com/Lednerb/bilberry-hugo-theme/archive/master.zip) file
and extract into the `bilberry-hugo-theme` directory.

- Create a new site:

```shell
hugo new site my-new-blog
```

- Delete the default archetype:

```shell
rm my-new-blog/archetypes/default.md
```

- Copy the example site content, including the `config.toml` file:

```shell
cp -r bilberry-hugo-theme/v4/exampleSite/* my-new-blog
```

### Theme Installation Options

#### Option 1 (recommended): Adding the Theme as a Hugo Module

Use this option if you want to pull in the theme files as a Hugo module from the main Bilberry Hugo theme repository.
This option makes it easy to keep the theme up to date in your site.

- Initialize your website as a Hugo module from the site's root:

```shell
cd my-new-blog
hugo mod init github.com/<your-user>/my-new-blog
```

Following the Hugo module initialization, you may have the following warning: module "
github.com/Lednerb/bilberry-hugo-theme/v4" not found, which should be ignored.

- Pull theme files to add new content to your website:

```shell
hugo mod vendor
```

If you need more details on how to use Hugo modules, please read
the [Hugo documentation](https://gohugo.io/hugo-modules/use-modules/).

#### Option 2: Adding the Theme as a Git submodule 

Use this option if you want to pull in the theme files as a Git submodule from the main Bilberry Hugo theme repository.
This option also makes it easy to keep the theme up to date in your site.

- In the `my-new-blog/config.toml` file, uncomment the `theme` property for **Options 2 and 3**, and
  comment out the `theme` property for **Option 1**:

```toml
# Option 1 (recommended): adding the theme as a hugo module
# theme = "github.com/Lednerb/bilberry-hugo-theme/v4"

# Options 2 and 3: cloning/copying the theme files
theme = "bilberry-hugo-theme/v4"
```

- Add the Bilberry Hugo theme as a Git submodule from the site's root:

```shell
$ git submodule add https://github.com/Lednerb/bilberry-hugo-theme.git themes/bilberry-hugo-theme
```

#### Option 3: Copying the Theme Files

Use this option if you want to directly customize and maintain your own copy of the theme.

- In the `my-new-blog/config.toml` file, uncomment the `theme` property for **Options 2 and 3**, and
  comment out the `theme` property for **Option 1**:

```toml
# Option 1 (recommended): adding the theme as a hugo module
# theme = "github.com/Lednerb/bilberry-hugo-theme/v4"

# Options 2 and 3: cloning/copying the theme files
theme = "bilberry-hugo-theme/v4"
```

- Copy cloned (or unzipped) theme files in previous step to the `my-new-blog/themes` directory:

```shell
cp -r bilberry-hugo-theme my-new-blog/themes/bilberry-hugo-theme
```

**Important:** Do NOT change the name of the `themes/bilberry-hugo-theme` folder in your site's root.
Renaming this folder will break your site.

### Configuration

To customize your website according to your needs, edit the `config.toml` file in the site's root
directory by adjusting the settings. All parameters that need to be configured are commented out or
disabled.

The Algolia Search is enabled in the `config.toml` file that comes with the example site; therefore,
if you don't plan to use it, disable it by setting the `algolia_search` property to `false`.

### Webserver

- To build and serve the site, execute the following command from the site's root:

```shell
cd my-new-blog
hugo server
```

### Free Hosting

To deploy and host your website for free, you can use either [GitHub Pages](https://pages.github.com/)
or [Netlify](https://www.netlify.com/).

**Important**: When hosting on GitHub Pages, you should add an empty file named `.nojekyll` to the site's root to avoid
the [issue](https://github.com/Lednerb/bilberry-hugo-theme/discussions/448) with Font Awesome's icons not being loaded.

### Other Tutorials

- [Start Blogging With Hugo, GitHub, and Netlify](https://www.kiroule.com/article/start-blogging-with-github-hugo-and-netlify/)
- [Configure Custom Domain and HTTPS on Netlify](https://www.kiroule.com/article/configure-custom-domain-and-https-in-netlify/)
- [Manage Environment-Specific Settings for Hugo-Based Website](https://www.kiroule.com/article/manage-environment-specific-settings-for-hugo-based-website/)

## Features

### Default Post Types

Bilberry theme comes with a set of predefined post types, namely `article`, `audio`, `code`, `gallery`, `link`, `page`
, `quote`, `status`, and `video` where the `article` type is the default one.

To create a new content, use the `hugo new` command. Content can be created in two ways: a single page or
a [page bundle](https://gohugo.io/content-management/page-bundles/).

#### Single Page

To create new content as a single page, you can use the following command:

```shell
hugo new <content-type>/my-single-page-content.md
```

#### Page Bundle

Or, new page bundle content can be created as follows:

```shell
hugo new <content-type>/my-page-bundle-content/index.md
```

For example, you can create a new article as a single page and a new gallery as a page bundle using the following
commands respectively:

```shell
hugo new article/my-single-page-article.md
hugo new gallery/my-page-bundle-gallery/index.md
```

The `page` post type is the only one that can be used in the top navigation bar.
Pages can be ordered using the `weight` front matter variable, which should be set to a non-zero value.
A page with a lower `weight` will be displayed first.

The `page` content can be a static page, such as an **About** page, or a link to another page, internal or external.

The `link` post type always links to an external site and can be used with or without a background image.

### Top Navigation Bar

If you want to permanently display the top navigation bar with the search text field and `page` items, set
the `permanentTopNav` parameter to `true` in the `config.toml` file.

If you want to display the top navigation bar when scrolling down the page, set the `stickyNav` parameter to `true`. But
this will only work when the `permanentTopNav` is also set to `true`.

Please note that the top navigation bar is minimized by default on mobile devices.

### Light/Dark Theme Mode
Switching between light and dark theme mode can be enabled by setting the `enableLightDarkMode` parameter to `true`:
```toml
[params]
  enableLightDarkThemeMode = true
```

### Algolia Search

Bilberry theme includes built-in content search via [Algolia SAAS](https://www.algolia.com/).
You can see this in action on the [demo site](https://lednerb.github.io/bilberry-hugo-theme) by clicking on "hamburger"
and typing something in the search text field, such as "support."

#### Initial Setup

To enable and configure search functionality for your site, follow these steps:

1. Register for a free Algolia Search account on https://www.algolia.com/.
2. Add a `New Application`. You can choose the `COMMUNITY` plan.
3. Switch over to `Indices` and create a new index.
4. Switch over to `API Keys` and copy your `Application ID`, `Search-Only API Key` and chosen `Index name` to
   your `config.toml` file.
5. Make sure that the `algolia_search` parameter is set to  `true`.
6. Follow the instructions in the section [Update Algolia Index](#update-algolia-index) and proceed to the next step.
7. To complete the initial setup, go to the tab `Configuration` of your newly created indices, select the `Facets` in
   the section `FILTERING AND FACETING`, and add the `language` attribute with the `filter only` modifier in
   the `Attributes for faceting` option. If, after adding the `language` attribute, the `Unknown attribute` error is
   shown, ignore it.

#### Update Algolia Index

You have to repeat this step every time you change a post or publish a new one to update the search index.

Execute the `hugo` command in the site's root directory to generate the `index.json` file.

##### Manual Upload

1. Head over to the `public/index.json` file and copy its content.
2. Log in to your Algolia account, open your index, and click on `Add records manually`.
3. Paste the copied text from the `index.json` file.
4. Verify in the `Browse` tab of your index that the index records were uploaded correctly.
5. In case you have a multi-language setup, make sure that you repeat the steps above for all `public/{LANG}/index.json`
   files.

##### Automated Upload

1. Switch to the `algolia` directory and install the required dependencies by executing the following command:

  ```shell script
  cd algolia
  npm install
  ```

2. Run the `data-upload.js` from the `algolia` directory as follows:

  ```shell script
  npm run data-upload -- -f ../public/index.json -a <algolia-app-id> -k <algolia-admin-api-key> -n <algolia-index-name>
  ```

3. The `algolia-admin-api-key` argument, namely your Algolia account's `Admin API Key`, is used to create, update, and
   delete indices, and it should be kept secret.
4. Add the `-c` or `--clear-index` option if you want to clear the corresponding Algolia index before starting a new
   upload.
5. Log in to your Algolia account and verify in the `Browse` tab of your index that the index records were uploaded
   correctly.
6. In case you have a multi-language setup, make sure that you repeat the steps above for all `public/{LANG}/index.json`
   files.

Also, you can read this [write-up](https://www.kiroule.com/article/automate-data-upload-to-algolia-index-revisited/) on
how to automate
data upload to Algolia index if you host your Bilberry theme-based website on Netlify, or
this [write-up](https://www.kiroule.com/article/automate-data-upload-to-algolia-index-with-github-actions/) using GitHub
Actions.

### Keyboard Shortcuts

Type `s` to open the navigation bar and set the focus to the search input field.
To remove focus, press the `Esc` key.

### Reposted Article/Duplicated Content

If you need to repost an article from another website or duplicate content on your site, you should link it to the
original URL so it's correctly processed by SEO.
To do so, define the `original_url` front matter variable in your post, for example:

```
original_url: "https://example.org/path/to/content"
```

### Estimated Reading Time

To show an article's estimated reading time, set the `showReadingTime` parameter to `true` in the `config.toml` file.
You can override the estimated reading time by setting the article's `readingTime` front matter variable to a value you
want. If you set this variable to `0`, the reading time will not be shown.

```
readingTime: 7 # will show "7 MIN READ"
readingTime: 0 # reading time will not be shown
```

### Summary Splits

There are three options for how Hugo can generate summaries of content which will be used as a short version in summary
views, such as a home page and tags or categories pages.

#### Automatic Summary Split

Using the first 70 words of your content, Hugo automatically generates the summary followed by the _Continue reading_ link.

#### Manual Summary Split

Add the `<!--more-->` summary divider to your content.
Any content before the divider will be used by Hugo as a summary of that content.
The generated summary will also be followed by the _Continue reading_ link.

#### Front Matter Summary Split

To define a summary that differs from the text that starts your article, use the `summary` front matter variable, for
example, `summary: "Here goes my summary"`.
This summary will also be followed by the _Continue reading_ link.

#### No Summary Split

If you want to display the entire article without the _Continue Reading_ link, set the `noSummary` variable to `true` in
your content file.

### Open Graph Metadata

The following base Open Graph metadata is included by default in all pages: `og:site_name`, `og:title`, `og:description`, `og:type`, `og:url`, `article:section`, `article:published_time`, and `article:modified_time` where
the `article:published_time` tag will have the same timestamp value as the `date` front matter variable.

Additional metadata can be included by adding the following front matter variables:
- `publishDate` for `article:published_time`
- `images` for `og:image` 
- `audio` for `og:audio`
- `videos` for `og:video`
- `series` for `og:see_also`

For example:
```markdown
title: "Open Graph Metadata with Extra Front Matter Variables"
date: 2022-12-19T19:00:00-05:00
publishDate: 2022-12-19T20:00:00-05:00
lastmod: 2022-12-19T21:00:00-05:00
images: ["/img/content/article/open-graph-metadata-with-extra-front-matter-variables/thumbnail.jpg"]
audio: "/audio/icq-remix.mp3"
videos: ["/video/test_mp4_video.mp4"]
series: ["My Cool Series"]
```

### Table of Contents (TOC)

To enable the automatic creation of a table of contents (TOC), set the `toc` front matter variable to `true` in your
article.
If the article's markdown contains appropriate headings, Hugo will generate a table of content at the beginning of the
article.

By default, a TOC is generated if the content's word count is greater than **400**.
The `tocMinWordCount` parameter defines this value in the `config.toml` configuration file.

The headings that are taken into account for a TOC are from _H2_ (##) to _H5_ (#####) inclusive.
Also, if you want to display a TOC at a specific point in your article, set the `toc` front matter variable to `false`,
and use the `toc` shortcode like this:

```markdown
{{< toc >}}
```

### Series Taxonomy

In case you want to group some articles as a series, you have to add the `series` front matter variable to each article
and set its value to the name of the series, for example, `series: ["My New Super Series"]`.

The page at `<site-base-url>/series/` will list all the series. To list all articles for a particular series within
markdown, you can use the `series` shortcode with the series name in question, for instance:

```markdown
{{< series "My New Super Series" >}}
```

### External Images

If you would like to use external images, such as those stored on another server or in the cloud, as
a featured image for your article or in the `gallery` post type, you can use them by setting the
appropriate front matter variables with the absolute URL values:

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

### Image Modal Zoom

When you include an image larger than the content area, the image becomes interactive, and a larger version can be
opened in a lightbox. Modal zoom will work only for images that are added using the standard markdown
annotation, e.g., `![Image alt text](/my_image.png)` or `![Image alt text](/my_image.png "Image figure caption")` for
images with a figure caption. Please note that this feature will not work for images added using raw HTML.

### Featured Image

There are two options for adding a featured image to a post. The first approach is to use a [single-page](#single-page)
post with the `featuredImage` front matter variable, where the value for this variable should be either the path
relative to the base URL or an absolute URL.

Alternatively, when using a [page-bundle](#page-bundle) post, the intended featured image should be
named `featuredImage.*` where the `*` is the image file extension, e.g., `jpg`, `png`, etc. Also, it should be placed
within the page bundle in question, for example:

```shell
content
└── article
    └── my-post-with-featured-image
        ├── featuredImage.png
        └── index.md
```

### Automatic Image Resizing

Bilberry theme includes built-in automatic cropping and resizing only for **featured** and **gallery** images, activated
by default. However, if you want to disable it, set the `resizeImages` parameter to `false` in the `config.toml` file.
Also, this feature can be disabled at the post level by setting the `resizeImages` front matter variable to `false`.

For a featured image to be cropped and resized, it should be named `featuredImage.*` and placed within the page bundle
folder.

**NOTE**: a featured image defined via the `featuredImage` front matter parameter will **NOT** be cropped and resized.

### Video

The following video hosting providers are supported: [YouTube](https://www.youtube.com/), [Vimeo](https://vimeo.com/)
,  [Prezi](https://prezi.com/), [Bilibili](https://www.bilibili.com), and [PeerTube](https://joinpeertube.org).
Videos in the `MP4` format, either stored externally or within the site's `static` folder, are also supported.
There are two options to display video embeds.

The first option is to use a post of the `video` type. Use the following command to create your video post:

```bash
hugo new video/<post-name>.md
```

Then set the appropriate front matter variable while removing the others:

```markdown
youtube: "<youtube-video-id>"            # https://www.youtube.com/watch?v=M7IjJiZUutk -> "M7IjJiZUutk"
vimeo: "<vimeo-video-id>"                # https://vimeo.com/239830182 -> "239830182"
prezi: "<prezi-video-id>"                # https://prezi.com/v/5z9shnq7jzxs/what-to-study/ -> "5z9shnq7jzxs"
bilibili: "<bilibili-video-id>"          # https://www.bilibili.com/video/BV1Sx411T7QQ -> "BV1Sx411T7QQ"
peertube: "<peertube-video-id>"          # https://vids.tekdmn.me/w/w7WGHX7Lb6mCrbrpF3Xb8V (entire URL)
mp4video: "<video-file-url>"             # location of video file (only mp4)
mp4videoImage: "<image-video-file-url>"  # location of poster image 
```

For example, if an `MP4` video and its image are stored in the `static` folder, you can set the corresponding front matter
variables as follows:

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

Because there is no *one* PeerTube site, you need to indicate which ones your videos use, meaning you can't use just the
video ID.
Instead, copy in the entire watch URL, and it'll be transformed into the correct embed URL to use.

There is an [instance finder](https://joinpeertube.org/instances#instances-list) if you want to start hosting your
videos on PeerTube but don't know which instance to join.

### Audio

The following audio streaming providers are supported: [Mixcloud](https://www.mixcloud.com/)
, [SoundCloud](https://soundcloud.com/), [Spotify](https://www.spotify.com/), and [TuneIn](https://tunein.com/).
Audio files in the `Ogg`, `MP3`, or `WAV` formats, either stored externally or within the site's `static` folder, are
also supported.
There are two options to display audio embeds.

The first option is to use a post of the `audio` type. Use the following command to create your audio post:

```bash
hugo new audio/<post-name>.md
```

Then set the appropriate front matter variable while removing the others:

```markdown
spotify: "<spotify-track-id>"        # https://open.spotify.com/track/3W2lz1sg6m4sEzjmoTjmdE?si=0659fd12179840dd -->
3W2lz1sg6m4sEzjmoTjmdE
soundcloud: "<soundcloud-track-url>" # https://soundcloud.com/lightbooks/alchemist-08-new-world-order-snip
tunein: "<tunein-track-id>"          # https://tunein.com/embed/player/t117894382/" --> t117894382
mixcloud: "<mixcloud-track-id>"      # https://www.mixcloud.com/scienceforthepeople/445-ai-ant-intelligence/ -->
scienceforthepeople/445-ai-ant-intelligence
audiofile: "<audio-file-url>"        # location of audio file (only ogg, mp3, or wav formats)
```

For example, if an `MP3` audio file is stored in the `static` folder, you can set the `audiofile` front matter variable
as follows:

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

### Google Analytics

Bilberry theme comes with built-in support for both v3 and v4
of [Google Analytics](https://analytics.google.com/analytics/web/).
You should set the value of the `googleAnalytics` property in the `config.toml` file to enable it.

Such value for Universal Analytics v3 is prefixed with the `UA` letters.
So, suppose you migrate your existing website to the Bilberry theme, and your website is already tracked in Universal
Analytics, given that the corresponding property was created before October 14, 2020.
In that case, you should continue using the v3 value in the `config.toml` file.
But given that Universal Analytics will no longer process new data in standard properties beginning July 1, 2023, you
will have to create a Google Analytics v4 property linked to your v3 property.

If you created your property after October 14, 2020, you're likely using a Google Analytics v4 property already, and the
value for such property is prefixed with the `G` letter.
In that case, you should use the v4 value in the `config.toml` file.

### Comments

To allow readers to comment under your articles, you can use either [Commento](https://commento.io/)
, [Disqus](https://disqus.com/), [Giscus](https://giscus.app/), or [Utterances](https://utteranc.es/).

**Note to developers/contributors**: if you want to submit a new commenting engine for integration with the Bilberry theme, it must meet the following criteria:
1. The engine should be offered as a SAAS, i.e., you only need to create an account and configure the necessary settings on the engine's website.
2. If the engine is offered as a SAAS, it must have a free tier plan.
3. All the configuration steps needed to integrate a third-party commenting service must occur only in the `config.toml` file and not within additional configuration in the partial files or any other.


#### Commento

Follow this [guide](https://docs.commento.io/installation/cloud-service/) if you want to use Commento Cloud Service
which is not free of cost.

In case you want to use Self-hosting Commento, follow
these [instructions](https://docs.commento.io/installation/self-hosting/).

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
Once you complete the prerequisites for your GitHub repository and select a discussion category, values
for `giscusRepositoryId` and `giscusCategoryId` will be automatically generated.
Then, in the `config.toml` file, set the `giscus` parameter to `true` and the properties mentioned above, respectively:

```toml
#[...]
[params]
  #[...]

  # Giscus
  giscus = true
  giscusJsUrl = "https://giscus.app/client.js"
  giscusRepository = "Lednerb/bilberry-hugo-theme"
  giscusRepositoryId = "R_kgDOGX153A" # generated by Giscus website
  giscusMapping = "pathname"
  giscusCategory = "General"
  giscusCategoryId = "DIC_kwDOGX153M4B_2Vz" # generated by Giscus website
  giscusTheme = "light"
  giscusReactions = "1"
  giscusEmitMetadata = "0"
  giscusLanguage = "en"
  giscusCrossOrigin = "anonymous"
```

#### Utterances

Follow instructions on [Utterances](https://utteranc.es/) website.
Once you complete the prerequisites for your GitHub repository, set the `utterances` parameter to `true` in
the `config.toml` file:

```toml
#[...]
[params]
  #[...]

  # Utterances
  utterances = true
  utterancesJsUrl = "https://utteranc.es/client.js"
  utterancesRepository = "Lednerb/bilberry-hugo-theme"
  utterancesIssueTerm = "pathname"
  utterancesLabel = "Comment"
  utterancesTheme = "github-light"
  utterancesCrossOrigin = "anonymous"
```

### Archive Page

The archive page will be available at `<site-base-url>/archive/` as soon as you copy
the `themes/bilberry-hugo-theme/exampleSite/content/archive.md` file to the `content` directory of your
site. By default, the published content is grouped by year. To group the content by year and month,
set the `archiveDateGrouping` parameter to the `2006-01` value.

To display the archive link in the footer, set the `showArchive` parameter to `true`.

To add the archive link to the top navigation bar, create a new page with the following command:

```shell
hugo new page/archive.md
```

Then, in the newly created `content/page/archive.md` file, set the `link` front matter variable to
the `/archive/` value and completely remove the `target` variable.

### Responsive Design

Bilberry theme is optimized to look good on all devices, namely desktops, tablets and smartphones.

### MathJAX Markup

To enable the [MathJAX](https://www.mathjax.org) markup support, set the `enable_mathjax` parameter to `true` in
the `config.toml` file.

### Disabled JavaScript Support

Although this theme has a lot of features that only work with enabled JavaScript, it also fully supports disabled
JavaScript.
Disabled Javascript will not break any styling or essential functionalities of your website.

You can test the behavior of the [demo site](https://lednerb.github.io/bilberry-hugo-theme) by disabling JavaScript in
your browser.

### Trimmed JavaScript Size

By default, this theme's JavaScript bundle contains the [Moment.js](https://momentjs.com/) library, which is large
enough, though they add real value.

Therefore, to reduce the size of the downloaded JavaScript bundle, you can choose whether using the Moment.js library
remains enabled (currently the default) via the `enableMomentJs` configuration parameter. Setting it to `false` would
reduce the bundle size by ~262 kB gzipped.

### Raw HTML

If you want to include raw HTML in your markdown content, set the `unsafe` setting in the `config.toml` file to `true`:

```toml
[markup.goldmark]
  [markup.goldmark.renderer]
    unsafe = true
```

## Customizations

### Hooks

If you need to integrate your website with a third-party service or to customize it further, you can use the following
hook partials: [hooks/head-end.html](https://github.com/Lednerb/bilberry-hugo-theme/blob/master/layouts/partials/hooks/head-end.html), 
[hooks/body-start.html](https://github.com/Lednerb/bilberry-hugo-theme/blob/master/layouts/partials/hooks/body-start.html), 
and [hooks/body-end.html](https://github.com/Lednerb/bilberry-hugo-theme/blob/master/layouts/partials/hooks/body-end.html). 
Copy the file in question into your site root's `layouts/partials/hooks` folder and add the necessary code, for
example, as in this [hooks/body-end.html](https://github.com/igor-baiborodine/bilberry-hugo-theme-sandbox/blob/9c492fad08771295f529b9acdc17aa03865a52ad/layouts/partials/hooks/body-end.html)
file that contains integration with Umami web analytics.

```html
<script async defer src="https://analytics.umami.is/script.js"
        data-website-id="29b02d61-3df1-433f-8bb7-cba0ec70c9f7"></script>
```

### Favicons

To add favicons, proceed with the following steps:

1. Visit https://realfavicongenerator.net/ website, and generate favicons according to your needs.
2. Copy and paste the generated files into your site's `/static` folder.
3. Edit the `/layouts/partials/favicon.html` file, then copy and paste the HTML code from the generated instruction.

**Important:** You have to follow the [Quick Start](#Quick-Start) instructions or manually copy
the `/layouts/partials/favicon.html` file from the theme to your site's `/layouts` directory.

Also, check out this [tutorial](https://www.kiroule.com/article/add-favicon-to-hugo-based-website/) on how to add
favicons to Bilberry theme-based website.

### 404 Page

To customize your 404 page, copy the `themes/bilberry-hugo-theme/layouts/404.html` file to your
site's `layouts/404.html` and edit the file according to your needs, for example, change the message, icon class etc.

### Custom Post Types

With the Bilberry theme, you can create new post types easily.
For example, suppose you want to create a new type named `book`.
Then you should do the following:

1. Copy the default `themes/bilberry-hugo-theme/layouts/partials/content-type/article.html` to your
   site's `layouts/partials/content-type/` folder.
2. Rename the file to your custom post type, namely `book.html`.
3. Customize the newly created file, for instance, change the icon in the bubble to `fa-book` that is available
   on [Font Awesome Icon](http://fontawesome.io/icons/) website:

```html
<i class="fas fa-fw fa-book"></i>
```

4. To create new posts, use the `book` post type prefix:

```shell
hugo new book/my-favorite-book.md`
```

If you want to use custom front matter variables, create a `book.md` archetype in your site's `archetypes/` directory.

### Individual Posts

You can customize your posts as follows:

1. To exclude posts from your blog's index but still show up in categories, add `excludeFromIndex: true` to your post's
   front matter.

2. To pin one or more posts to the top of the index page, uncomment the `pinnedPost` parameter in the `config.toml`
   file.
   Then set its value to the post's relative URL, for example, `/article/installing-bilberry-theme/`.
   When pinning multiple posts, the relative URL values should be separated by a comma.
   The `pinOnlyToFirstPage` parameter allows you to choose whether to display pinned posts on the index page only or on
   all pages.

3. A custom icon can be declared per post, by specifying a font-awesome icon in the post's front matter, such
   as `icon: fa-thumb-tack` for a pinned post.

4. If you want to change the default post types(e.g., replace the pencil icon for the `article` post type another one)
   copy the original content type file to your site's `layouts/partials/content-type/` directory and edit it there.
   Otherwise, your changes will be overwritten when you update the theme to the latest version.

### Syntax Highlighting

Syntax highlighting for code blocks in your posts is implemented using Hugo's
built-in [Chrome](https://github.com/alecthomas/chroma) code highlighter. Highlighting for code blocks in your posts can
be customized at the site level or per code block.

To change the default configuration at the site level, adjust the properties in the `[markup.highlight]` section of
the `config.toml` file. For example, you can change the default `monokai` style to the one from
the [Chroma Style Gallery](https://xyproto.github.io/splash/docs/all.html).

Per the code block, the following parameters can be
personalized: `linenos`, `hl_lines`, `linenostart`, `anchorlinenos`, `lineanchors`, and `hl_inline`, for example:

\```java {linenos=inline, hl_lines="7-12 21-26"}

// ... code

\```

Read Hugo's [documentation](https://gohugo.io/content-management/syntax-highlighting/) for more details.

### Colors and Fonts

Styling is implemented using SCSS along with [npm](https://www.npmjs.com/), which is only used for dependency management. Colors and fonts can be customized via variables defined in
the [`assets/sass/theme.scss`](assets/sass/theme.scss) file.

For example, if you want to customize the `$base-color` variable, you should define the `baseColor` parameter in your
site's `config.toml` file.

```sass
$base-color: {{ .Param "baseColor" | default "#1d1f38" }};
```

```toml
[params]
  baseColor = "#ff8080"
```

### CSS and JS modules

This theme supports hot-swappable CSS and JavaScript extensions, which can be specified using the `css_modules`
and `js_modules` list parameters in your site's `config.toml` file. Modules can be specified either relative to the `static`
directory (e.g., `exampleSite/static/css/custom.css`) or as a URL.

Modules are imported in the order they appear in the list, and immediately after the default Bilberry CSS and JS files
are imported.

### Cookie Disclaimer (GDPR)

You can use the [cookie consent](https://cookieconsent.insites.com/) solution to add cookie consent information by
loading the needed resources as external CSS and JS modules.

Use the configurator on the [cookie consent website](https://cookieconsent.insites.com/) to generate the required
initialization code and add it to a local `static/init-cookieconsent.js` file, for example:

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
You can either download the files and put them in your site's `/static` directory or reference them directly using a
CDN.
Storing these files on your website reduces external dependencies, increases privacy, and allows you to develop your
website in an offline environment.

```toml
css_modules = ["..", "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"]
js_modules = ["..", "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js", "init-cookieconsent.js"]
```

## Translations

Bilberry theme has built-in support for multi-language sites and currently supports translations for more than 20
languages.

Feel free to submit a request for a new language translation or improve existing ones!

## Credits

The Bilberry theme was inspired by the [WordPress theme Lingonberry](https://en-ca.wordpress.org/themes/lingonberry/)
created by Anders Norén.

Bilberry is a theme for the great [HUGO static site generator](https://gohugo.io).

Special thank-you goes to [@Ipstenu](https://github.com/Ipstenu) for his help
in [this thread](https://discourse.gohugo.io/t/search-index-json-file-for-lunr-js/6286/5?u=lednerb) that helped to
create the `index.json` for the Algolia index.

## Contributors

Many thanks go to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->

| [<img src="https://avatars1.githubusercontent.com/u/2056876?v=4" width="100px;"/><br /><sub><b>Sascha Brendel</b></sub>](https://sascha-brendel.de)<br />[💬](#question-Lednerb "Answering Questions") [📝](#blog-Lednerb "Blogposts") [💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=Lednerb "Code") [🎨](#design-Lednerb "Design") [📖](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=Lednerb "Documentation") [🌍](#translation-Lednerb "Translation") | [<img src="https://anna-brendel.de/images/background1.jpg" width="100px;"/><br /><sub><b>Anna Brendel</b></sub>](https://anna-brendel.de)<br />[🤔](#ideas "Ideas, Planning, & Feedback") [🌍](#translation "Translation") | [<img src="https://avatars2.githubusercontent.com/u/1560404?v=4" width="100px;"/><br /><sub><b>Givi Khojanashvili</b></sub>](https://www.linkedin.com/in/khojanashvili/)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=gigovich "Code") | [<img src="https://avatars2.githubusercontent.com/u/28822504?v=4" width="100px;"/><br /><sub><b>Chung Tran Anh</b></sub>](https://github.com/anhchungite)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=anhchungite "Code") [🌍](#translation-anhchungite "Translation") | [<img src="https://avatars0.githubusercontent.com/u/3048682?v=4" width="100px;"/><br /><sub><b>Minke Zhang</b></sub>](http://blogzhang.com)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=cripplet "Code") |
| :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/16353578?v=4" width="100px;"/><br /><sub><b>Pavel Kanyshev</b></sub>](https://github.com/aerohub)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=aerohub "Code") [🌍](#translation-aerohub "Translation") | [<img src="https://avatars3.githubusercontent.com/u/3541050?v=4" width="100px;"/><br /><sub><b>Marcel Kraus</b></sub>](https://www.marcelkraus.de)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=marcelkraus "Code") | [<img src="https://avatars2.githubusercontent.com/u/280825?v=4" width="100px;"/><br /><sub><b>Nick Busey</b></sub>](http://nickbusey.com/)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=NickBusey "Code") | [<img src="https://avatars1.githubusercontent.com/u/4789253?v=4" width="100px;"/><br /><sub><b>lkorzen</b></sub>](https://github.com/lkorzen)<br />[🌍](#translation-lkorzen "Translation") | [<img src="https://avatars1.githubusercontent.com/u/12019608?v=4" width="100px;"/><br /><sub><b>Chris Stayte</b></sub>](http://www.chrisstayte.com)<br />[🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author%3AChrisStayte "Bug reports") |
| [<img src="https://avatars0.githubusercontent.com/u/405277?v=4" width="100px;"/><br /><sub><b>Dmitry Matrosov</b></sub>](https://twitter.com/amidos_me)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=meAmidos "Code") | [<img src="https://avatars2.githubusercontent.com/u/8802277?v=4" width="100px;"/><br /><sub><b>Marc-Antoine</b></sub>](https://marca.finch4.xyz/)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=Embraser01 "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author%3AEmbraser01 "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/2030983?v=4" width="100px;"/><br /><sub><b>Nina Zakharenko</b></sub>](http://nnja.io)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nnja "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author%3Annja "Bug reports") [📖](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nnja "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/7719018?v=4" width="100px;"/><br /><sub><b>Nisarga</b></sub>](https://github.com/nisargap)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nisargap "Code") | [<img src="https://avatars2.githubusercontent.com/u/2817480?v=4" width="100px;"/><br /><sub><b>Pablo Domingo Rojo</b></sub>](https://github.com/pdoro)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=pdoro "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/4433144?v=4" width="100px;"/><br /><sub><b>Rob Baruch</b></sub>](https://github.com/rabarar)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=rabarar "Code") | [<img src="https://avatars0.githubusercontent.com/u/9339576?v=4" width="100px;"/><br /><sub><b>Taoshi</b></sub>](https://github.com/GMpet)<br />[🌍](#translation-GMpet "Translation") | [<img src="https://avatars1.githubusercontent.com/u/11535575?v=4" width="100px;"/><br /><sub><b>nonumeros</b></sub>](https://github.com/nonumeros)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nonumeros "Code") | [<img src="https://avatars3.githubusercontent.com/u/56372?v=4" width="100px;"/><br /><sub><b>Marcelo Gonçalves</b></sub>](http://marcelogoncalves.com.br)<br />[🌍](#translation-marcelocg "Translation") | [<img src="https://avatars0.githubusercontent.com/u/9111944?v=4" width="100px;"/><br /><sub><b>Dávid Sárkány</b></sub>](https://sarkanydavid.com)<br />[🌍](#translation-davidsarkany "Translation") |
| [<img src="https://avatars3.githubusercontent.com/u/43414238?v=4" width="100px;"/><br /><sub><b>meonamz</b></sub>](https://github.com/meonamz)<br />[🌍](#translation-meonamz "Translation") | [<img src="https://avatars3.githubusercontent.com/u/32282514?v=4" width="100px;"/><br /><sub><b>Hamza Yusuf Çakır</b></sub>](https://github.com/hycakir)<br />[🌍](#translation-hycakir "Translation") | [<img src="https://avatars3.githubusercontent.com/u/15079172?s=460&v=4" width="100px;"/><br /><sub><b>Niclas Roßberger</b></sub>](https://github.com/nidomiro)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nidomiro "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues?q=author:nidomiro "Bug reports") [🚧](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=nidomiro "maintenance") | [<img src="https://www.kiroule.com/avatar.png" width="100px;"/><br/><sub><b>Igor Baiborodine</b></sub>](https://kiroule.com)<br />[💻](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=igor-baiborodine "Code") [🐛](https://github.com/Lednerb/bilberry-hugo-theme/issues/created_by/igor-baiborodine "Bug reports") [📖](https://github.com/Lednerb/bilberry-hugo-theme/commits?author=igor-baiborodine "Documentation")

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions
of any kind welcome!

## License

The Bilberry Hugo theme is licensed under the MIT license.
