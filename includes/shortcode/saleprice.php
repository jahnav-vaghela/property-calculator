<?php
/*Saleprice Calculation shortcode*/
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
//function for Saleprice Calculation shortcode
function saleprice_calculator($atts, $content = null ){	
    
    ob_start();
    ?>
   
    <div class="email_popup_main_wrap"></div>
    <div class="saleprice_calculator_main_wrap">
        <h4>
            ENTER PROPERTY VALUE
        </h4>
        <input type="number" name="saleprice" class="saleprice" id="saleprice"> </br></br>
                
        <div class="charges_wrap">
            <h6>Closing & Escrow</h6>
            <h5><span>Closing & Escrow: </span><span class="Closing_Escrow"></span></h5>
            <h6>Miscellaneous Fees</h6>
            <h5><span>Accommodation Recording Fee: </span><span class="Accommodation_Recording_Fee"></span></h5>
            <h5><span>Accommodation/Witness Signing: </span><span class="Accommodation_Witness_Signing"></span></h5>
            <h5><span>After-Hours Closing Fee: </span><span class="After_Hours_Closing_Fee"></span></h5>
            <h5><span>APLD Processing Fee: </span><span class="APLD_Processing_Fee"></span></h5>
            <h5><span>Chain of Title: </span><span class="Chain_of_Title"></span></h5>
            <h5><span>Chicago Water Cert Payment Only Fee: </span><span class="Chicago_Water_Cert_Payment_Only_Fee"></span></h5>
            <h5><span>Chicago Water Cert Processing Fee: </span><span class="Chicago_Water_Cert_Processing_Fee"></span></h5>
            <h5><span>Chicago Zoning Cert Processing Fee: </span><span class="Chicago_Zoning_Cert_Processing_Fee"></span></h5>
            <h5><span>Commitment Update Fee: </span><span class="Commitment_Update_Fee"></span></h5>
            <h5><span>Electronic Delivery Fee: </span><span class="Electronic_Delivery_Fee"></span></h5>
            <h5><span>Lender Required Holdback: </span><span class="Lender_Required_Holdback"></span></h5>
            <h5><span>Overnight Delivery Fee: </span><span class="Overnight_Delivery_Fee"></span></h5>
            <h5><span>Policy Update Fee: </span><span class="Policy_Update_Fee"></span></h5>
            <h5><span>Postponed Disbursement: </span><span class="Postponed_Disbursement"></span></h5>
            <h5><span>Recording Service Fee: </span><span class="Recording_Service_Fee"></span></h5>
            <h5><span>Remote Signing Fee: </span><span class="Remote_Signing_Fee"></span></h5>
            <h5><span>Simultaneous Second Mortgage Closing: </span><span class="Simultaneous_Second_Mortgage_Closing"></span></h5>
            <h5><span>SJO/SOE (Joint/Sole Order Escrow): </span><span class="SJO_SOE_Joint_Sole_Order_Escrow"></span></h5>
            <h5><span>SJO/SOE Annual Maintenance Fee: </span><span class="SJO_SOE_Annual_Maintenance_Fee"></span></h5>
            <h5><span>Stand Alone Second Mortgage Closing: </span><span class="Stand_Alone_Second_Mortgage_Closing"></span></h5>
            <h5><span>Tax Payment Service Fee: </span><span class="Tax_Payment_Service_Fee"></span></h5>
            <h5><span>Title Indemnity Service Fee: </span><span class="Title_Indemnity_Service_Fee"></span></h5>
            <h5><span>Waiver Exam Fee: </span><span class="Waiver_Exam_Fee"></span></h5>
            <h5><span>Wire Service Fee: </span><span class="Wire_Service_Fee"></span></h5>
            <h6>Mortgage Policy</h6>
            <h5><span>Mortgage Policy: </span><span class="Mortgage_Policy"></span></h5>
            <h5><span>Simultaneous Second Mortgage Policy: </span><span class="Simultaneous_Second_Mortgage_Policy"></span></h5>
            <h5><span>Junior Loan Policy: </span><span class="Junior_Loan_Policy"></span></h5>
            <h6>Loan Policy Endorsements</h6>
            <h5><span>ALTA 4.1 (Condo): </span><span class="ALTA_Condo"></span></h5>
            <h5><span>ALTA 5.1 (PUD): </span><span class="ALTA_PUD"></span></h5>
            <h5><span>ALTA 9 (Comp): </span><span class="ALTA_Comp"></span></h5>
            <h5><span>ARM: </span><span class="ARM"></span></h5>
            <h5><span>EPL: </span><span class="EPL"></span></h5>
            <h5><span>Location: </span><span class="Location"></span></h5>
            <h6>Refinance Fees</h6>
            <h5><span>Loan Policy*: </span><span class="Loan_Policy"></span></h5>
            <h5><span>Closing Fee: </span><span class="Closing_Fee"></span></h5>
            <h5><span>Remote Signing Fee: </span><span class="Remote_Signing_Fee"></span></h5>            
        </div>
    </div>
    <?php
    $content = ob_get_clean();
    return $content;
}
add_shortcode( 'saleprice_calculator', 'saleprice_calculator' );