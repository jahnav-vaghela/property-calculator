<?php

/* Investor Calculator shortcode */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
//function forInvestor Calculator shortcode
function investor_property_calculator($atts, $content = null ){	
    ob_start(); ?>
    
    <div class="investor_calculator_main_wrap">
    	<h4>
			Enter Number of Homes Purchased Last Year
		</h4>
        <input type="number" name="investor_fullrate" class="investor_fullrate" id="investor_fullrate"></br></br>
        
		<h4>
			Enter Average Price of Homes Purchased
		</h4>
        <input type="number" name="investor_saleprice" class="investor_saleprice" id="investor_saleprice"></br></br>
		
        <h4>
			Final Saving Amount
		</h4>
		<input type="text" class="investor_saving" readonly>
    </div>
    
    <?php
    $content = ob_get_clean();
    return $content;
}
add_shortcode( 'investor_calculator', 'investor_property_calculator' );