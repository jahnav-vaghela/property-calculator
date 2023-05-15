<?php
// net_rate_calculator
?>

<div class="net-rate-calculator-warp">

<p><?php _e( 'SALES PRICE', 'prop-calc' ); ?></p>
<input type="number" name="ui_saleprice" class="ui_saleprice" id="ui_saleprice">

<p><?php _e( 'Estimated Closing Date - DD/MM/YYYY', 'prop-calc' ); ?></p>
<input type="text" name="closing_date" class="closing_date" id="closing_date" >

<!--
<p><?php // _e( 'OWNER’S POLICY', 'prop-calc' ); ?></p>
<input type="number" name="owner_policy" class="owner_policy" id="owner_policy" >
<p><?php // _e( 'OVERRIDE OWNER\'S POLICY ', 'prop-calc' ); ?></p>
<input type="number" name="override_owner_policy" class="override_owner_policy" id="override_owner_policy" >
-->

<p><?php _e( 'STATE/COUNTY TRANSFER TAX', 'prop-calc' ); ?></p>
<input type="text" name="state_county_transfer_tax" class="state_county_transfer_tax" disabled>
<p><?php _e( 'CITY TRANSFER TAX', 'prop-calc' ); ?></p>
<input type="text" name="city_transfer_tax" class="city_transfer_tax" disabled>

<p><?php _e( 'IS PROPERTY LOCATED IN THE CITY OF CHICAGO', 'prop-calc' ); ?></p>
<input type="radio" name="is_property_in_chicago" class="is_property_in_chicago" value="yes"> 
<?php _e( ' YES ', 'prop-calc' ); ?>
<input type="radio" name="is_property_in_chicago" class="is_property_in_chicago" value="no" checked>
<?php _e( ' NO ', 'prop-calc' ); ?>
<div class="in_chicago" style="display: none;" >
	<p><?php _e( 'WATER CERTIFICATION FEE - $151', 'prop-calc' ); ?></p>
	<p><?php _e( 'ZONING CERTIFICATION FEE - $220', 'prop-calc' ); ?></p>
	<input type="text" name="water_n_zoning_fees" class="water_n_zoning_fees" value="-$371" disabled>
</div>

<p><?php _e( 'IS THERE AN OUTSTANDING MORTGAGE BALANCE', 'prop-calc' ); ?></p>
<input type="radio" name="is_outstanding_mortgage" class="is_outstanding_mortgage" value="yes"> 
<?php _e( ' YES ', 'prop-calc' ); ?>
<input type="radio" name="is_outstanding_mortgage" class="is_outstanding_mortgage" value="no" checked>
<?php _e( ' NO ', 'prop-calc' ); ?>
<div class="div_outstanding_mortgage" style="display: none;" >
	<p><?php _e( 'Outstanding Mortgage Amount', 'prop-calc' ); ?>
	<input type="text" name="outstanding_mortgage" class="outstanding_mortgage"></p>
</div>

<p><?php _e( 'CLOSING COST CREDIT', 'prop-calc' ); ?></p>
<input type="radio" name="is_closing_cost_credit" class="is_closing_cost_credit" value="yes"> 
<?php _e( ' YES ', 'prop-calc' ); ?>
<input type="radio" name="is_closing_cost_credit" class="is_closing_cost_credit" value="no" checked>
<?php _e( ' NO ', 'prop-calc' ); ?>
<div class="div_closing_cost_credit" style="display: none;" >
	<p><?php _e( 'closing cost credit amount', 'prop-calc' ); ?>
	<input type="text" name="closing_cost_credit" class="closing_cost_credit"></p>
</div>



<p><?php _e( 'COMMITMENT UPDATE FEE ', 'prop-calc' ); ?></p>
<input type="text" name="commitment_update_fee" class="commitment_update_fee" disabled>
<p><?php _e( 'IL POLICY REGISTRATION FEE ', 'prop-calc' ); ?></p>
<input type="text" name="il_policy_registration_fee" class="il_policy_registration_fee" disabled>
<p><?php _e( 'CLOSING PROTECTION LETTER', 'prop-calc' ); ?></p>
<input type="text" name="closing_protection_letter" class="closing_protection_letter" disabled>
<p><?php _e( 'SURVEY FEE', 'prop-calc' ); ?></p>
<input type="text" name="survey_fee" class="survey_fee"  disabled>

<p><strong><?php _e( 'PRIOR YEAR TAX CREDIT', 'prop-calc' ); ?></strong></p>

<p><?php _e( 'What was the last know annual Property Taxes?', 'prop-calc' ); ?></p>
<input type="number" name="last_year_property_taxes" class="last_year_property_taxes" >

<p><?php _e( 'Was previous year’s 1st installment paid?', 'prop-calc' ); ?></p>
<input type="radio" name="is_1st_installment_paid" class="is_1st_installment_paid" value="yes" checked> 
<?php _e( ' YES ', 'prop-calc' ); ?>
<input type="radio" name="is_1st_installment_paid" class="is_1st_installment_paid" value="no" >
<?php _e( ' NO ', 'prop-calc' ); ?>
<div class="div_1st_installment_paid" style="display: none;" >
	<p><?php _e( '1st installment Amount', 'prop-calc' ); ?>
	<input type="text" name="_1st_installment_paid" class="_1st_installment_paid"></p>
</div>

<p><?php _e( 'Was previous year’s 2nd installment paid?', 'prop-calc' ); ?></p>
<input type="radio" name="is_2nd_installment_paid" class="is_2nd_installment_paid" value="yes" checked> 
<?php _e( ' YES ', 'prop-calc' ); ?>
<input type="radio" name="is_2nd_installment_paid" class="is_2nd_installment_paid" value="no" >
<?php _e( ' NO ', 'prop-calc' ); ?>
<div class="div_2nd_installment_paid" style="display: none;" >
	<p><?php _e( '2nd installment Amount', 'prop-calc' ); ?>
	<input type="text" name="_2nd_installment_paid" class="_2nd_installment_paid"></p>
</div>


<p><?php _e( 'CURRENT YEAR TAX CREDIT', 'prop-calc' ); ?></p>
<input type="text" name="current_year_tax_credit" class="current_year_tax_credit" >

<p><?php _e( 'REAL ESTATE COMMISSION', 'prop-calc' ); ?></p>
<select name="commission_rate" class="commission_rate">
	<?php for ($i=2; $i <=6 ; $i+=0.25 ) { ?>
		<option value="<?php echo $i; ?>"><?php echo $i; ?> %</option>
	<?php }	?>
</select>
<input type="text" name="real_estate_commission" class="real_estate_commission" >

<p><?php _e( 'Subtotal', 'prop-calc' ); ?></p>
<input type="text" name="subtotal" class="subtotal" >

<p><?php _e( '', 'prop-calc' ); ?></p>

    
</div> <!--  div net-rate-calculator-warp end  -->


<!--
	<input type="number" name="" class="" id="">	

	<div class="calc-raw">
		<div class="calc-col calc-col-50">
			
		</div>
		<div class="calc-col calc-col-50">
			<input type="number" name="agent_saleprice" class="agent_saleprice" id="agent_saleprice">
		</div>
	</div>
-->