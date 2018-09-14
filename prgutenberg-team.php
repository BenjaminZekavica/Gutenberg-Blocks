<?php
/*
  Plugin Name: POWER + RADACH werbeagentur gmbh - Gutenberg Team Modul
  Author: POWER + RADACH werbeagentur gmbh - Benjamin Zekavica
  Author URI: https://www.power-radach.de
  Description: POWER + RADACH werbeagentur gmbh -  Gutenberg Team Modul  
  Version: 1.0
*/

if ( ! defined( 'ABSPATH' ) ) exit;

/* All Core Blocks names stands in README.md */  

// Remove Color Picker 
add_theme_support( 'disable-custom-colors' ); 
 

// Register Custom Category  - POWER RADACH
function pr_gutenberg_modul_category( $categories, $post ) {
    
    // Add Category 
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'prmodule',
                'title' => 'POWER + RADACH Erweiterungen'
            ),
        )
    );
}
add_filter( 'block_categories', 'pr_gutenberg_modul_category', 100, 2 );


// Use only this modules 

function pr_gutenberg_team_allow_blocks( $allowed_block_types, $post ) {
    return array( 
        'powerradach/teammodul',
        'core/paragraph', 
        'core/video', 
        'core/image', 
        'core/gallery', 
        'core/columns', 
        'core/list', 
    );
}
add_filter( 'allowed_block_types', 'pr_gutenberg_team_allow_blocks', 100, 2 );


// Register WP scripts and styles
function pr_gutenberg_team_scripts() {

    // Load compiled  React JS - Create Block
  	wp_register_script(
  		'prmodulejs',
  		plugins_url( 'js/func.js', __FILE__ ),
  		array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components')
  	);

  	// Load compiled CSS File
  	wp_register_style(
  		'prmodulecss',
  		plugins_url( 'css/style.css', __FILE__ ),
  		array( 'wp-edit-blocks' )
    );
    
}
add_action( 'init', 'pr_gutenberg_team_scripts' );


// Register Gutenberg Blocks 
function pr_gutenberg_init_module_team() {

    // Register Team Modul
  	register_block_type( 'powerradach/teammodul', array(
  		'editor_script' => 'prmodulejs',
  		'editor_style' => 'prmodulecss',
  		'style' => 'prmodulecss',
    ));
    
}
add_action( 'init', 'pr_gutenberg_init_module_team' );


// Color Assets Default 
function prwp_color_gutenberg_team() {

    // Colors 
    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => __( 'PR Main Color', 'prwp' ),
            'slug' => 'prmaincolor',
            'color' => '#ffdf00',
        ),
        array(
            'name' => __( 'PR Grey', 'prwp' ),
            'slug' => 'prgrey',
            'color' => '#dadada',
        ),
        array(
            'name' => __( 'PR White', 'prwp' ),
            'slug' => 'prwhite',
            'color' => '#ffffff',
        )
    ));

}
add_action( 'after_setup_theme', 'prwp_color_gutenberg_team' );