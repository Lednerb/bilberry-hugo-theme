## v4 Developer Guide

### Prerequisites
- **Hugo** (version >= 0.109.0 **extended**), see this installation [guide](https://gohugo.io/getting-started/installing/).
- **Git**, see this installation [guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- **Go** (version >= 1.19), see this installation [guide](https://go.dev/doc/install).
- **Node.js** (version >= 20.5.0) with **npm** (version >= 9.8.0), see this
  installation [guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Third-party Dependencies

Third-party dependencies are managed using `npm` and listed in
the [`devDependencies`](https://github.com/Lednerb/bilberry-hugo-theme/blob/3776287f2e4494c1308593bde531dbe944de6ddd/v4/package.json#L6)
block of `package.json` file.

* To update dependencies, adjust version numbers in the `devDependencies` bloc and execute the following command from
  project's `v4` folder:

  ```bash
  $ npm run update-deps 
  ```

* To add a new dependency, add it to the `devDependencies` bloc and execute the `npm run update-dep` command. Then,
  examine the location of the new dependency's CSS and JavaScript files in the `v4/node_modules` folder. Dependencies,
  namely CSS and JavaScript artifacts must be copied from the `v4/node_modules` folder to the `v4/assets/sass/_vendor`
  and `v4/assets/js/_vendor` folders, respectively. Therefore, update the `v4/scripts/update-node-deps.sh` script and
  execute the `npm run update-dep` command again. For the newly copied SCSS and JavaScript artifacts to be used by Hugo
  pipes, they should be included in the `v4/assets/sass/theme.scss` and `v4/layouts/partials/js.html` files. Therefore,
  update these files accordingly, and commit the changes.

### Example Site

* To build the example site, execute the `npm run build-example` command. Then, examine the content of
  the `v4/tests/local/exampleSite/public` folder.
 
* To run the example site, execute the `npm run serve-example` command. The example site will be available
  at http://localhost:1313/.

* To stop all instances of the Hugo server running in your local dev, you may use the `npm run stop-hugo` command.
