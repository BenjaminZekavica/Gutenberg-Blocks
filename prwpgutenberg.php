<?php
/*
  Plugin Name: PR Gutenberg Addons
  Author: POWER + RADACH werbeagentur gmbh  - Benjamin Zekavica
  Author URI: https://www.power-radach.de
  Description: PR Gutenberg Editor
  Version: 1.0
*/

defined('ABSPATH') || exit;


// Add Theme Support
add_theme_support( 'align-wide' );
add_theme_support( 'wp-block-styles' );


// Register Custom Category  - POWER RADACH

add_filter( 'block_categories', function( $categories, $post ) {

    return array_merge(
      $categories,
        array(
          array(
            'slug' => 'prmodule',
            'title' => 'POWER + RADACH Module'
          ),
        )
    );

});


// Register WP scripts and styles
function pr_gutenberg_scripts() {

    // Load React JS - Create Block
  	wp_register_script(
  		'prmodulejs',
  		plugins_url( 'js/func.js', __FILE__ ),
  		array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components')
  	);

  	// Load CSS File
  	wp_register_style(
  		'prmodulecss',
  		plugins_url( 'css/style.css', __FILE__ ),
  		array( 'wp-edit-blocks' )
  	);
}

add_action( 'init', 'pr_gutenberg_scripts' );


// allocation Gutenberg Blocks in WP
function pr_gutenberg_init_modules() {

    // Register Team Modul
  	register_block_type( 'powerradach/teammodul', array(
  		'editor_script' => 'prmodulejs',
  		'editor_style' => 'prmodulecss',
  		'style' => 'prmodulecss',
  	));


    // Register Text Modul
    register_block_type( 'powerradach/textmodul', array(
      'editor_script' => 'prmodulejs',
      'editor_style' => 'prmodulecss',
      'style' => 'prmodulecss',
    ));

}

add_action( 'init', 'pr_gutenberg_init_modules' );


// WP Only Allow Blocks - Remove Differents

// add_filter( 'allowed_block_types', 'prwp_gutenberg_remove_block' );

// function prwp_gutenberg_remove_block( $allowed_blocks ) {

//     return array(
//       'powerradach/teammodul', 
//       'core/freeform', 
//       'core/table', 
//       'core/button', 
//       'core/separator', 
//       'core/image', 
//       'core/gallery', 
//       'core/shortcode'
//     );

// } 