## v4 Migration Guide

### Top Navigation Bar

1. Remove completely the `excludeFromTopNav` variable from all content files in the `content/page` folder.
2. Update front matter variables in the pages that used to display menu items in the top navigation bar as follows:
    * Add the `menu` front matter variable with setting it to the `"topnav"` value: `menu: "topnav"`.
    * If you want to order displayed menu items, add the `weight` variable with setting it to a non-zero value, for
      instance, `weight: 10`. A menu item with a lower `weight` will be displayed first. 
