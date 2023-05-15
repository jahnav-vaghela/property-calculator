<?php
/**
 * Plugin Name: Property Calculator
 * Plugin URL: https://www.essentialplugin.com/wordpress-plugin/wp-blog-and-widgets/
 * Text Domain: prop-calc
 * Description: few property calculators. custom build plugin.
 * Version: 1.0
 * Author: WPOnlineSupport
*/

if( ! defined( 'PROPERTYCALC__VERSION' ) ) {
	define( 'PROPERTYCALC__VERSION', '1.0' ); // Version of plugin
}

if( ! defined( 'PROPERTYCALC_DIR' ) ) {
	define( 'PROPERTYCALC_DIR', dirname( __FILE__ ) ); // Plugin dir
}

if( ! defined( 'PROPERTYCALC_URL' ) ) {
	define( 'PROPERTYCALC_URL', plugin_dir_url( __FILE__ ) ); // Plugin url
}

// property calculator shortcode file
require_once( PROPERTYCALC_DIR . '/includes/shortcode/calculate-price.php' );

// property calculator saving shortcode file
require_once( PROPERTYCALC_DIR . '/includes/shortcode/calculate-saving-price.php' );

// saleprice shortcode file
require_once( PROPERTYCALC_DIR . '/includes/shortcode/saleprice.php' );

// script file
require_once( PROPERTYCALC_DIR . '/includes/property-calc-script.php' );

// function file file
require_once( PROPERTYCALC_DIR . '/includes/propertycalc-function.php' );


// Shortcode : At Home Title Net Rate Calculator 
require_once( PROPERTYCALC_DIR . '/includes/shortcode/title-net-rate-calculator.php' );