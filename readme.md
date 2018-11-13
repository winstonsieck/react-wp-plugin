# Basic template for wp plugin that includes react

* Requires Gutenberg plugin (which includes React)

## Tooling

to get started you first need to install all NPM Modules listed in the package.json file. 
To do so just run `npm install` inside the base directory of this Plugin. 

After you have installed all modules you can eiter run `npm run dev` to watch the `src/index.js` file for changes and compile everything into `assets/js/main.js` and `assets/css/main.css`, or run `npm run build` to just compile the `src/index.js` file into `assets/js/main.js` and `assets/css/main.css`.