# Basic template for wp plugin that includes React

## Simple start (no tooling setup needed)

* Requires Gutenberg plugin, which bundles React into WP
* Download the base directory `react-wp-plugin` to plugins folder of your local dev server
* Create a WP page with slug 'react-in-wp' and content like "hmm, react has not loaded"
* Activate the plugin & check your page for React welcome message 
* Problems? Check settings in files: `react-wp-plugin.php` and `assets/js/main.js`
* Works? start the tooling below & try the other snippets in `src/index.js`

## Tooling

* First, run `npm install` inside the base directory of this plugin. This will install all NPM Modules listed in the package.json file. 
* Next, run `npm run dev` to watch the `src/index.js` file for changes and compile everything into `assets/js/main.js` and `assets/css/main.css`
* Finally, you can use `npm run build` to just compile the `src/index.js` file into `assets/js/main.js` and `assets/css/main.css`.

## Reference

https://javascriptforwp.com/enqueue-react-in-wordpress/
