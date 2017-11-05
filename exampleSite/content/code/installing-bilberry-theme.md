---
title: "Installing Bilberry Theme"
date: 2017-11-01T09:31:27+01:00

categories: ['Code', 'Tutorials']
tags: ['Hugo', 'Bilberry Theme']
author: "Lednerb"
---
You will find all information to setup this theme with your hugo site
on the official <br> [Github Repository](https://github.com/Lednerb/bilberry-hugo-theme).

<!--more-->

__If you want to install this theme, follow these steps:__

- Install Hugo and create a new site:

```sh
hugo new site my-new-blog
```

- Switch to your `theme` folder and import the latest version of the Bilberry Theme

```sh
cd my-new-blog/themes
git clone https://github.com/Lednerb/bilberry-hugo-theme.git
```

- Copy the example content to your new site

```sh
cp -r bilberry-hugo-theme/exampleSite/* ../
```

- Test the installation

```sh
cd ../
hugo server -D
```

- Configure the `config.toml` file according to your needs
- Start blogging
