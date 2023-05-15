<?php
//function for Agent Property Calculation
function agent_property_rate(){

    $new_rate = 1800;
    $increse_rate = 20;
    $agent_saleprice = $_POST['agent_saleprice'];
    $agent_fullrate  = $_POST['agent_fullrate'];


    // check agent sale price
    if($agent_saleprice > 200000){
        $sale_price = $agent_saleprice - 200000;
        $sale_price = ceil($sale_price/10000);
        $new_rate   = ($sale_price * $increse_rate) + $new_rate;            
    }

    // Slab between 300001 to 310000
    if( 300001 <= $agent_saleprice ){
        $new_rate += 10;          
    }

    // Slab between 400001 to 410000
    if( 400001 <= $agent_saleprice ){
        $new_rate += 10;          
    }

    // Slab between 500001 to 510000
    if( 500001 <= $agent_saleprice ){
        $new_rate += 60;          
    }

    // Slab between 700001 to 710000
    if( 700001 <= $agent_saleprice ){
        $new_rate += 20;          
    }

    // Slab between 800001 to 810000
    if( 800001 <= $agent_saleprice ){
        $new_rate += 50;          
    }
    
    // Multiply rate with 85%
    $new_rate = ($new_rate * 85)/100;
    
    // Multiply with 85%*full rate
    $income = round($new_rate) * $agent_fullrate;
    
    $result['success'] = 1;
    $result['income'] = $income;
	wp_send_json($result);
    exit;
}
add_action( 'wp_ajax_get_agent_property_rate', 'agent_property_rate' );
add_action( 'wp_ajax_nopriv_get_agent_property_rate','agent_property_rate' );

//function for property saving
function get_investor_property_rate(){

    $saving_new_rate = 1800;
    $saving_increse_sale = 20;
    $investor_fullrate  = $_POST['investor_fullrate'];
    $investor_saleprice   = $_POST['investor_saleprice'];

    // Check Investor Sale Price
    if($investor_saleprice > 200000){
        $saving_sale_price = $investor_saleprice - 200000;
        $saving_sale_price = ceil( $saving_sale_price/10000 );
        $saving_new_rate   = ($saving_sale_price * $saving_increse_sale) + $saving_new_rate;      
    }

    // Slab between 300001 to 310000
    if( 300001 <= $investor_saleprice ){
        $saving_new_rate += 10;          
    }

    // Slab between 400001 to 410000
    if( 400001 <= $investor_saleprice ){
        $saving_new_rate += 10;          
    }

    // Slab between 500001 to 510000
    if( 500001 <= $investor_saleprice ){
        $saving_new_rate += 60;          
    }

    // Slab between 700001 to 710000
    if( 700001 <= $investor_saleprice ){
        $saving_new_rate += 20;          
    }

    // Slab between 800001 to 810000
    if( 800001 <= $investor_saleprice ){
        $saving_new_rate += 50;          
    }
    
    $saving_new_rate -= 500;
    
    $saving_income = round($saving_new_rate) * $investor_fullrate;

    $saving_result['saving'] = $saving_income;
    wp_send_json($saving_result);
    exit;
}
add_action( 'wp_ajax_get_investor_property_rate', 'get_investor_property_rate'  );
add_action( 'wp_ajax_nopriv_get_investor_property_rate','get_investor_property_rate' );

//function for sale Property Calculation
function sale_property_rate(){

    $new_rate = 1800;
    $increse_rate = 20;
    $charge = 1550;
    $agent_saleprice = $_POST['saleprice'];
    $popup = "";
    
    if($agent_saleprice > 1000000){
        $popup = 1;
    }

    // check agent sale price
    if($agent_saleprice > 200000){
        $sale_price = $agent_saleprice - 200000;
        $sale_price = $sale_price/10000;
        $new_rate   = ($sale_price * $increse_rate) + $new_rate + $charge;            
    }

    // Slab between 300001 to 310000
    if(300001 <= $agent_saleprice){
        $new_rate += 10;          
    }

    // Slab between 400001 to 410000
    if(400001 <= $agent_saleprice){
        $new_rate += 10;          
    }

    // Slab between 500001 to 510000
    if(500001 <= $agent_saleprice){
        $new_rate += 60;          
    }

    // Slab between 700001 to 710000
    if(700001 <= $agent_saleprice){
        $new_rate += 20;          
    }

    // Slab between 800001 to 810000
    if(800001 <= $agent_saleprice){
        $new_rate += 50;          
    }
    
    // Multiply rate with 85%
    $new_rate = ($new_rate * 85)/100;
    
    // Multiply with 85%*full rate
    $income = round($new_rate) * $agent_fullrate;

    // Closing & Escrow slab 200001 to 250000
    if($agent_saleprice >= 200001){
        $charge += 50;
    }

    // Closing & Escrow slab 250001 to 300000
    if($agent_saleprice >= 250001){
        $charge += 50;
    }

    // Closing & Escrow slab 300001 to 400000
    if($agent_saleprice >= 300001){
        $charge += 50;
    }

    // Closing & Escrow slab 400001 to 500000
    if($agent_saleprice >= 400001){
        $charge += 50;
    }

    // Closing & Escrow slab 500001 to 600000
    if($agent_saleprice >= 500001){
        $charge += 100;
    }
    
    // Closing & Escrow slab 600001 to 700000
    if($agent_saleprice >= 600001){
        $charge += 100;
    }

    // Closing & Escrow slab 700001 to 800000
    if($agent_saleprice >= 700001){
        $charge += 100;
    }

    // Closing & Escrow slab 800001 to 900000
    if($agent_saleprice >= 800001){
        $charge += 100;
    }

    // Closing & Escrow slab 900001 to 1000000
    if($agent_saleprice >= 900001){
        $charge += 100;
    }
    
    $charges = array(
        'Accommodation_Recording_Fee'               => '50',
        'Accommodation_Witness_Signing'             => '200',
        'After_Hours_Closing_Fee'                   => '150',
        'APLD_Processing_Fee'                       => '100',
        'Chain_of_Title'                            => '250',
        'Chicago_Water_Cert_Payment_Only_Fee'       => '25',
        'Chicago_Water_Cert_Processing_Fee'         => '100',
        'Chicago_Zoning_Cert_Processing_Fee'        => '100',
        'Commitment_Update_Fee'                     => '150',
        'Electronic_Delivery_Fee'                   => '40',
        'Lender_Required_Holdback'                  => '200',
        'Overnight_Delivery_Fee'                    => '75',
        'Policy_Update_Fee'                         => '150',
        'Postponed_Disbursement'                    => '150',
        'Recording_Service_Fee'                     => '15',
        'Remote_Signing_Fee'                        => '100',
        'Simultaneous_Second_Mortgage_Closing'      => '225',
        'SJO_SOE_Joint_Sole_Order_Escrow'           => '300',
        'SJO_SOE_Annual_Maintenance_Fee'            => '200',
        'Stand_Alone_Second_Mortgage_Closing'       => '300',
        'Tax_Payment_Service_Fee'                   => '50',
        'Title_Indemnity_Service_Fee'               => '175',
        'Waiver_Exam_Fee'                           => '150',
        'Wire_Service_Fee'                          => '40',

        'Mortgage_Policy'                           => '550',
        'Simultaneous_Second_Mortgage_Policy'       => '250',
        'Junior_Loan_Policy'                        => '150',

        'ALTA_Condo'                                => '180',
        'ALTA_PUD'                                  => '180',
        'ALTA_Comp'                                 => '180',
        'ARM'                                       => '180',
        'EPL'                                       => '180',
        'Location'                                  => '180',

        'Loan_Policy'                               => '350',
        'Closing_Fee'                               => '150',
        'Remote_Signing_Fee'                        => '100',

    );

    $result['success'] = 1;
    $result['income'] = $income;
    $result['charges'] = $charges;
    $result['charge'] = $charge;
    $result['popup'] = $popup;
	wp_send_json($result);
    exit;
}
add_action( 'wp_ajax_get_sale_property_rate', 'sale_property_rate' );
add_action( 'wp_ajax_nopriv_get_sale_property_rate','sale_property_rate' );