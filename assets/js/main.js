// These two lines will run React without JSX - no tooling needed
// Note: they'll be overwritten when the tooling is activated

const pEl = wp.element.createElement("p", {}, "Hello WP from React.");
wp.element.render(pEl, document.querySelector( '.entry-content' ) );