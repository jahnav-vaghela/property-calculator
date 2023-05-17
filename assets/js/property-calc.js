(function($){

  "use strict";

  //jcode start ------------------------------------------
    
  window.owner_policy = function owner_policy(price){

    // if(price > 1000000){
    //   return
    // }

    var premium  = 1950;
    var sell_price = 200000;
    while( sell_price < 1000000 ){

      if(price <= sell_price ){
        return premium;
      }
      
      if( sell_price == 500000 ){
        premium += 45;
      }else{
        premium += 20;  
      }

      sell_price += 10000;
    }

    return premium;
  }

  //window.year_days = 
  function year_days(date){
    // calcuate days 
    var start_date = new Date(new Date().getFullYear(), 0, 1);
    let date_2 = new Date(date);
    // console.log(start_date)
    // console.log(date_2)
    let difference = start_date.getTime() - date_2.getTime();
    // console.log(difference);
    // console.log( difference / (1000 * 3600 * 24) );
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)) - 1;
    console.log({'TotalDays':TotalDays});
    return TotalDays;
  }

  window.check_NaN = function check_NaN(num) {
    if( typeof num == 'number' && isNaN(num) == false ){
      return num;
    }else{
      return 0;
    }
  }


  window.sub_total = function sub_total(current_obj) {
    var subtotal = 0;
    console.log(store);
    //subtotal += ( typeof store. == 'number' )? store.
    //
    subtotal += ( typeof store.first_installment == 'number' )? store.first_installment : 0;
    subtotal += ( typeof store.second_installment == 'number' )? store.second_installment : 0;
    subtotal += ( typeof store.city_transfer_tax == 'number' )? store.city_transfer_tax : 0;
    subtotal += ( typeof store.commission == 'number' )? store.commission : 0;
    subtotal += ( typeof store.current_year_tax_credit == 'number' )? store.current_year_tax_credit : 0;
    subtotal += ( typeof store.fix_cost == 'number' )? store.fix_cost : 0;
    subtotal += ( typeof store.owner_policy_premium == 'number' )? store.owner_policy_premium : 0;
    subtotal += ( typeof store.state_county_transfer_tax == 'number' )? store.state_county_transfer_tax : 0;
    
    subtotal += ( typeof store.water_n_zoning_fees == 'number' )? store.water_n_zoning_fees : 0;
    subtotal += ( typeof store.outstanding_mortgage == 'number' )? store.outstanding_mortgage : 0;
    subtotal += ( typeof store.closing_cost_credit == 'number' )? store.closing_cost_credit : 0;
    subtotal += ( typeof store.in_chicago == 'number' )? store.in_chicago : 0;
    
    //subtotal += ( typeof store. == 'number' )? store. : 0;
    //subtotal += ( typeof store. == 'number' )? store. : 0;
    //subtotal += ( typeof store. == 'number' )? store. : 0;
    
    //return subtotal;
    if( isNaN(subtotal) == false ){
      current_obj.find('.subtotal').val('-$'+ subtotal);  
      current_obj.find('.calc-note').hide();
    }else{
      current_obj.find('.calc-note').show();
    }
    
  }
    
  // date picker 
  //$( ".closing_date" ).datepicker();
  $( ".closing_date" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    formatDate: 'dd/mm/yy', 
  });
  
  // store data for all access 
  var store = {}; 
  store.first_installment = 0;
  store.second_installment = 0;

  // in_chicago
  $(document).on('change', '.is_property_in_chicago', function() {
    var val = $(this).val();
    var current_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'yes'){
      current_obj.find('.in_chicago').show();
      store.in_chicago = 371;
    }else{
      current_obj.find('.in_chicago').hide();
      store.in_chicago = 0;
    }
    
    // subtotal
    sub_total(current_obj);

  });

  //div_outstanding_mortgage
  $(document).on('change', '.is_outstanding_mortgage', function() {
    var val = $(this).val();
    var current_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'yes'){
      current_obj.find('.div_outstanding_mortgage').show();
    }else{
      current_obj.find('.div_outstanding_mortgage').hide();
    }

    // subtotal
    sub_total(current_obj);

  });

  // outstanding_mortgage
  $(document).on('keyup', '.outstanding_mortgage', delay(function() {
    var current_obj = $(this).closest('.net-rate-calculator-warp');
    var outstanding_mortgage = parseInt(current_obj.find('.outstanding_mortgage').val());
    store.outstanding_mortgage = outstanding_mortgage;

    // subtotal
    sub_total(current_obj);

  },10));
  // closing_cost_credit
  $(document).on('keyup', '.closing_cost_credit', delay(function() {
    var current_obj = $(this).closest('.net-rate-calculator-warp');
    var closing_cost_credit = parseInt(current_obj.find('.closing_cost_credit').val());
    store.closing_cost_credit = closing_cost_credit;

    // subtotal
    sub_total(current_obj);

  },10));
  
  //div_closing_cost_credit
  $(document).on('change', '.is_closing_cost_credit', function() {
    var val = $(this).val();
    var current_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'yes'){
      current_obj.find('.div_closing_cost_credit').show();
    }else{
      current_obj.find('.div_closing_cost_credit').hide();
    }

    // subtotal
    sub_total(current_obj);

  });

  //div_1st_installment_paid
  $(document).on('change', '.is_1st_installment_paid', function() {
    var val = $(this).val();
    var current_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'no'){
      current_obj.find('.div_1st_installment_paid').show();
      store.first_installment = store._1st_installment_paid;
    }else{
      current_obj.find('.div_1st_installment_paid').hide();
      store.first_installment = 0;
    }

    // subtotal
    sub_total(current_obj);

  });
  //div_2nd_installment_paid
  $(document).on('change', '.is_2nd_installment_paid', function() {
    var val = $(this).val();
    var current_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'no'){
      current_obj.find('.div_2nd_installment_paid').show();
      store.second_installment = store._2nd_installment_paid;
    }else{
      current_obj.find('.div_2nd_installment_paid').hide();
      store.second_installment = 0;
    }

    // subtotal
    sub_total(current_obj);

  });

  $(document).on('keyup', '.last_year_property_taxes', delay(function() {
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var last_year_property_taxes = parseInt(current_obj.find('.last_year_property_taxes').val());
    current_obj.find('._1st_installment_paid').val('-$'+ (last_year_property_taxes/2) );
    current_obj.find('._2nd_installment_paid').val('-$'+ (last_year_property_taxes/2) );

    store._1st_installment_paid = (last_year_property_taxes/2);
    store._2nd_installment_paid = (last_year_property_taxes/2);

    console.log(store);
    var days = store.days;
    if( isNaN(days) == false ){

      var current_year_tax_credit = parseFloat( ((last_year_property_taxes/365) * days * -1 ).toFixed(2) );
      store.current_year_tax_credit = current_year_tax_credit;
      current_obj.find('.current_year_tax_credit').val('-$'+current_year_tax_credit);

      // subtotal
      sub_total(current_obj);
    }
    

  },10));

  // on commission rate chage   
  $(document).on('change', '.commission_rate', delay(function() {
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var commission_rate = parseFloat(current_obj.find('.commission_rate').val());
    //console.log(commission_rate);
    store.commission_rate = commission_rate;

    var ui_saleprice = parseInt(current_obj.find('.ui_saleprice').val());
    var commission = (ui_saleprice * commission_rate)/100;
    store.commission = commission;
    current_obj.find('.real_estate_commission').val('-$'+ commission);

    // subtotal
    sub_total(current_obj);

  },10) );

  // closing_date
  $(document).on('change', '.closing_date', delay(function() {
    // get the value 
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    
    var closing_date = (current_obj.find('.closing_date').val());
    console.log(closing_date);
    var days = year_days(closing_date);
    console.log(days);

    if( isNaN(days) == false){
      store.days = days;
    }

    var last_year_property_taxes = parseInt(current_obj.find('.last_year_property_taxes').val());

    if( isNaN(days) == false && isNaN(last_year_property_taxes) == false ){
      store.days = days;
      
      var current_year_tax_credit = parseFloat( ((last_year_property_taxes/365) * days * -1).toFixed(2) );

      store.current_year_tax_credit = current_year_tax_credit;
      current_obj.find('.current_year_tax_credit').val('-$'+current_year_tax_credit);
    }

    // subtotal
    sub_total(current_obj);

  },10));
  
  // on salse price change  
  $(document).on('keyup', '.ui_saleprice', delay(function() {
    // get the value 
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var ui_saleprice = parseInt(current_obj.find('.ui_saleprice').val());
        
    console.log(ui_saleprice);
        
    if( isNaN(ui_saleprice) == false ){

      var owner_policy_premium = owner_policy(ui_saleprice);
      store.owner_policy_premium = owner_policy_premium;
      current_obj.find('.owner_policy').val('-$'+ owner_policy_premium);

      var state_county_transfer_tax = (ui_saleprice * 0.0015) ;
      store.state_county_transfer_tax = state_county_transfer_tax;
      current_obj.find('.state_county_transfer_tax').val('-$'+ state_county_transfer_tax);

      var city_transfer_tax = Math.ceil( ui_saleprice / 1000 ) * 5;
      store.city_transfer_tax = city_transfer_tax;
      current_obj.find('.city_transfer_tax').val('-$'+ city_transfer_tax);

      var is_property_in_chicago = current_obj.find('input[name="is_property_in_chicago"]:checked').val();
      if( is_property_in_chicago == 'yes'){
        var water_n_zoning_fees = 371;
      }else{
        var water_n_zoning_fees = 0;
      }
      store.water_n_zoning_fees = water_n_zoning_fees; 
      
      // outstanding_mortgage
      //var outstanding_mortgage = parseInt(current_obj.find('.outstanding_mortgage').val());
      // closing_cost_credit
      //var closing_cost_credit = parseInt(current_obj.find('.closing_cost_credit').val());

      // fix cost ---
      var commitment_update_fee = 150 ;
      current_obj.find('.commitment_update_fee').val('-$'+ commitment_update_fee);

      var il_policy_registration_fee = 3 ;
      current_obj.find('.il_policy_registration_fee').val('-$'+ il_policy_registration_fee);
    
      var closing_protection_letter = 50 ;
      current_obj.find('.closing_protection_letter').val('-$'+ closing_protection_letter);

      var survey_fee = 525 ;
      current_obj.find('.survey_fee').val('-$'+ survey_fee);

      store.fix_cost = 150 + 3 + 50 + 525;
      // fix cost ---


      // last know annual Property Taxes 

      var is_1st_installment_paid = current_obj.find('input[name="is_1st_installment_paid"]:checked').val();
      if( is_1st_installment_paid == 'yes'){
        var _1st_installment_paid = 0;
      }else{
        var _1st_installment_paid = store._1st_installment_paid;
      }

      var is_2nd_installment_paid = current_obj.find('input[name="is_2nd_installment_paid"]:checked').val();
      if( is_2nd_installment_paid == 'yes'){
        var _2nd_installment_paid = 0;
      }else{
        var _2nd_installment_paid = store._2nd_installment_paid;
      }

      // current_year_tax_credit
      
      // real_estate_commission
      var commission_rate = parseFloat(current_obj.find('.commission_rate').val());
      var commission = (ui_saleprice * commission_rate)/100;
      current_obj.find('.real_estate_commission').val('-$'+ commission);
      store.commission = commission; // store commission 

      // sub total
      sub_total(current_obj);
    }
    
    return;

  }, 10));
  
  //jcode end ------------------------------

  //keyup event that id is calculate
  $(document).on('keyup', '.agent_saleprice, .agent_fullrate', delay(function() {
    // get the value of textbox 
    var current_obj     = $(this).closest('.agent_calculator_main_wrap');
    var agent_saleprice = parseInt(current_obj.find('.agent_saleprice').val());
    var agent_fullrate  = parseInt(current_obj.find('.agent_fullrate').val());
    
    if( isNaN(agent_saleprice) == false && isNaN(agent_fullrate) == false ){ 
      var data = {
        action              : 'get_agent_property_rate',  
        agent_saleprice     : agent_saleprice,
        agent_fullrate      : agent_fullrate,
      };
      $.post(WPOSProCal.ajaxurl, data, function(result) {

        if( result.success = 1 && (result.income != '') ) {
          current_obj.find('.avg_85').val('$'+result.income);
        }else if(result.data == '') {
          current_obj.find('.avg_85').val('$'+0);
        }
            
      });
    }
  }, 10));

  //keyup event that id is calculate
  $(document).on('keyup', '.investor_saleprice, .investor_fullrate', delay(function() {
    // get the value of textbox 
    var current_obj     = $(this).closest('.investor_calculator_main_wrap');
    var investor_saleprice = parseInt(current_obj.find('.investor_saleprice').val());
    var investor_fullrate  = parseInt(current_obj.find('.investor_fullrate').val());
    
    if( isNaN(investor_saleprice) == false && isNaN(investor_fullrate) == false ){ 
      var data = {
        action              : 'get_investor_property_rate',  
        investor_saleprice  : investor_saleprice,
        investor_fullrate   : investor_fullrate,
      };
      $.post(WPOSProCal.ajaxurl, data, function(result) {

        if( result.success = 1 && (result.saving != '') ) {
          current_obj.find('.investor_saving').val('$'+result.saving);
        }else if(result.data == '') {
          current_obj.find('.investor_saving').val('$'+0);
        }
            
      });
    }
  }, 10));

  // keyup event for display all sale price list
  $(document).on('keyup', '.saleprice', delay(function() {
    // get the value of textbox 
    var current_obj     = $(this).closest('.saleprice_calculator_main_wrap');
    var saleprice       = parseInt(current_obj.find('.saleprice').val());
    
    if( isNaN(saleprice) == false ){ 

      var data = {
        action              : 'get_sale_property_rate',  
        saleprice           : saleprice,
      };
      $.post(WPOSProCal.ajaxurl, data, function(result) {           
        
        var popup_html = "";
        popup_html += '<div class="popup-modal-content">';
        popup_html += '<span class="close">&times;</span>';
        popup_html += '<h3>Thank you for your interest!</h3>';
        popup_html += '<p>It looks like your property value is over $1,000,000. Call us at 708-386-7900 or drop us a line and we’ll be happy to help!</p>';
        popup_html += '<input type="text" name="agent_name">';
        popup_html += '<input type="number" name="agent_number">';
        popup_html += '<input type="email" name="agent_email">';
        popup_html += '<textarea name="message"></textarea>';
        popup_html += '<input type="button" value="SEND EMAIL >">';
        popup_html += '</div>';

        if(result.popup == 1){

          $('.email_popup_main_wrap').html(popup_html);
          $('.email_popup_main_wrap').css("display", "block");

        }else{
          current_obj.find('h5').find('.Closing_Escrow').html('$'+ result.charge);        
          var obj = result.charges;        
          $.each( obj, function( key, value ) {
            current_obj.find('h5').find('span.'+ key).html('$'+ value);
          });
        }

        $(document).on('click', '.close, body', function() {
          $('.email_popup_main_wrap').css("display", "none");
        });
              
      });
    }
  }, 10));

})(jQuery);

function delay(callback, ms) {
  var timer = 0;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}