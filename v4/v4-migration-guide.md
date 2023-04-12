## v4 Migration Guide

**IMPORTANT** The Hugo version was bumped to `v0.109.0`. Therefore, you should upgrade Hugo in your local development
environment and, if necessary, in the corresponding deployment configuration file.

### Top Navigation Bar

1. Remove completely the `excludeFromTopNav` variable from all content files in the `content/page` folder.
2. Update front matter variables in the pages that used to display menu items in the top navigation bar as follows:
    * Add the `menu` front matter variable with setting it to the `"topnav"` value: `menu: "topnav"`.
    * If you want to order displayed menu items, add the `weight` variable with setting it to a non-zero value, for
      instance, `weight: 10`. A menu item with a lower `weight` will be displayed first. 

### Syntax Highlighting

No modifications are needed for posts with any existing code blocks. Syntax highlighting will work the same way as with
the `v3` version. Please see the [README](README.md) guide for customization options.
 