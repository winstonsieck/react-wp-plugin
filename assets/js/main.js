

const pEl = wp.element.createElement("p", {}, "Hello wp from React.");

wp.element.render(pEl, document.querySelector( '.entry-content' ) );

// (function(){
//
//   console.log( 'Plugin JS Loaded!' );
//
//     const pText = document.createTextNode( "Hello World!" );
// //    let myContainer = document.getElementById( 'content' ),
//
//     let myContainer = document.querySelector( '.entry-content' ),
//         pEl = document.createElement('h2');
//
//     pEl.appendChild( pText );
//     myContainer.appendChild( pEl );
//
// })()

// const Hello = () => <p>Hello World</p>;
// wp.element.render(<Hello />, document.querySelector( '.entry-content' ) );
//
// var el = wp.element.createElement
//
// function() {
//     return el( 'p', { style: blockStyle }, 'Hello editor.' );
// }
//
// const pEl = React.createElement("p", {}, "Hello React.");
//
// ReactDOM.render(
//     // Place your element variable or component function call here to test
//     boldLinkPEl,
//     document.getElementById('root')
// );
