
// Uncomment these first two lines to run React without JSX - no tooling needed

const pEl = wp.element.createElement("p", {}, "Hello WP from React.");
wp.element.render(pEl, document.querySelector( '.entry-content' ) );


// With tooling set up, uncomment the following two lines to run React with simple JSX

// const Hello = () => <p>Hello WP! React here, with JSX.</p>;
// wp.element.render(<Hello />, document.querySelector( '.entry-content' ) );


//With tooling set up, uncomment the following two lines to check WP with interactive react

// import Button from './Button';
// wp.element.render(<Button />, document.querySelector( '.entry-content' ) );