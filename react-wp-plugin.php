<?php
/*
   Plugin Name: React in WP
   Version: 1.0.0
   Author: JS for WP gang
   Author URI: https://javascriptforwp.com
   Description: Template for including React in a Wordpress Plugin.
   Text Domain: react-in-wp
   License: GPLv3
*/

defined( 'ABSPATH' ) or die( 'No direct access!' );

function reactwp_scripts() {

  if( is_page( 'react-in-wp' ) ) {

	  wp_enqueue_script(
		  'reactwp-main-js',
		  plugins_url( '/assets/js/main.js', __FILE__ ),
		  ['wp-element', 'wp-components'],
		  time(),
		  true
	  );
  }
}
add_action( 'wp_enqueue_scripts', 'reactwp_scripts' );


function reactwp_styles() {

  // Register the CSS like this for a plugin:
  wp_enqueue_style(
    'reactwp-main-css',
    plugins_url( '/assets/css/main.css', __FILE__ ),
    [],
    time(),
    'all'
  );

}
add_action( 'wp_enqueue_scripts', 'reactwp_styles' );

?>
