## v4 Migration Guide

**IMPORTANT** The Hugo version was bumped to `v0.125.7 extended`. Therefore, you should upgrade Hugo in your local
development environment and, if necessary, in the corresponding deployment configuration file.

### Site Configuration File
Rename the site's configuration file from `config.toml` to `hugo.toml`.

### Theme Installation Options

Depending on your chosen theme installation option, replace the `theme` property with
the `module.imports.path` property in the `hugo.toml` file as follows:

```toml
[module]
  [[module.imports]]
    # Option 1 (recommended): adding the theme as a Hugo module
    path = "github.com/Lednerb/bilberry-hugo-theme/v4"

    # Options 2 and 3: cloning/copying the theme files
    # path = "bilberry-hugo-theme/v4"
```

### Top Navigation Bar

1. Remove the `excludeFromTopNav` variable from all content files in the `content/page` folder altogether.
2. Update front matter variables in the pages that are used to display menu items in the top navigation bar as follows:
    * Add the `menu` front matter variable by setting it to the `"topnav"` value: `menu: "topnav"`.
    * If you want to order displayed menu items, add the `weight` variable by setting it to a non-zero value, for
      instance, `weight: 10`. A menu item with a lower `weight` will be displayed first. 

### Syntax Highlighting

No modifications are needed for posts with any existing code blocks. Syntax highlighting will work the same as with
the `v3` version. Please see the [Syntax Highlighting](README.md#syntax-highlighting) section in the `v4` **README** 
guide for customization options.

### Color and Font Customizations

In `v3`, color and font customizations were handled directly in the `assets/sass/_variables.scss` file. In v4,
the `_variables.scss` file no longer exists and such customization is done in the `config.toml` by defining
corresponding parameters from the `assets/sass/theme.scss` file, for example, `baseColor`, `headlineFont` etc.
Therefore, any changes you made in `_variables.scss` file should be ported to your site's configuration file `hugo.toml`. Read
the [Layouts, Colors and Fonts](README.md#layout-colors-and-fonts) section in the `v4` **README** guide for more details.

### Image Modal Zoom

The Magnific Popup plugin that provided a lightbox for displaying larger images was replaced with
the [DimBox](https://dimboxjs.com/) plugin. Also, the built-in Hugo's rendering of images added using standard markdown
annotation was overridden to accommodate the DimBox plugin and images with a figure caption. The `v4` no longer
supports the modal zoom for the images added using the raw HTML. The modal zoom may work for such images if you enrich
corresponding raw HTML elements with DimBox's attributes.   

### Hyperlink Image
Hyperlink images are no longer supported using the standard markdown. Instead, you should use the `hyperlink-image` shortcode for 
that. See the ["Hyperlink Image"](https://github.com/Lednerb/bilberry-hugo-theme#hyperlink-image) section in the `v4` 
**README** for more details. Here is an [example](https://github.com/igor-baiborodine/bilberry-hugo-theme-sandbox/commit/b6881726c2d5580f1ca4c32a646ac3bb252e62f0) of such migration from the standard markdown to the 
`hyperlink-image` migration.
 
