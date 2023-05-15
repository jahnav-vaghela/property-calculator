<?php

/*Agent Calculation shortcode*/
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
//function for Agent Calculation shortcode
function agent_property_calculator($atts, $content = null ){	

    ob_start();
    ?>
    <div class="agent_calculator_main_wrap">
		<h4>
			Enter Average Sales Price of Homes Sold
		</h4>
        <input type="number" name="agent_saleprice" class="agent_saleprice" id="agent_saleprice"> </br></br>
		<h4>
			Enter Number of Homes Sold Last Year
		</h4> 
		<input type="number" name="agent_fullrate" class="agent_fullrate" id="agent_fullrate"> </br></br>
        <h4>
			Total You Could Have Received as an At Home Title Agent
		</h4>
		<input type="text" class="avg_85" readonly>
    </div>
    <?php
    $content = ob_get_clean();
    return $content;
}
add_shortcode( 'agent_calculator', 'agent_property_calculator' );