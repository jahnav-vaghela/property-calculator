<?php
/**
*	handle the style and script functionality of plugin
*	@package WP News
*/
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
// class for call wpnews script
class propert_calc{

	//create constructor of wpnews scripts
	function __construct(){
		// Action to add style at front side
		add_action( 'wp_enqueue_scripts', array($this, 'property_calc_front_style_script') );
	}

	function property_calc_front_style_script() {

		// jquery-ui.min.css
		wp_enqueue_style( 'wpospc-jquery-ui-style', PROPERTYCALC_URL.'assets/css/jquery-ui.min.css', array(), PROPERTYCALC__VERSION );
		
		// Register Style
		wp_register_style( 'wpospc-public-style', PROPERTYCALC_URL.'assets/css/propertycalculator-public.css', array(), PROPERTYCALC__VERSION );
		wp_enqueue_style( 'wpospc-public-style' );
		
		wp_register_script( 'wpospc-jquery', 'http://code.jquery.com/jquery-1.11.3.min.js', array(), PROPERTYCALC__VERSION , true);
		wp_enqueue_script( 'wpospc-jquery' );
		
		//register js property calculator file
		wp_register_script( 'wpospc-calc', PROPERTYCALC_URL.'assets/js/property-calc.js', array('jquery','jquery-ui-datepicker'), PROPERTYCALC__VERSION , true);
		wp_localize_script( 'wpospc-calc', 'WPOSProCal', array( 'ajaxurl' => admin_url( 'admin-ajax.php', ( is_ssl() ? 'https' : 'http' ) ), ) );
		wp_enqueue_script( 'wpospc-calc' );

	}
}
// create object for propert_calc class
$propert_calc = new propert_calc();