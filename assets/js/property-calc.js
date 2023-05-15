(function($){

  "use strict";

  //jcode start ------
  
  // date picker 
  //$( ".closing_date" ).datepicker();
  $( ".closing_date" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat: 'mm/dd/yy', 
  });
  
  var store = {}; // store data for all access 

  // in_chicago
  $(document).on('change', '.is_property_in_chicago', function() {
    var val = $(this).val();
    var currant_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'yes'){
       currant_obj.find('.in_chicago').show();
    }else{
      currant_obj.find('.in_chicago').hide();
    }    
  });

  //div_outstanding_mortgage
  $(document).on('change', '.is_outstanding_mortgage', function() {
    var val = $(this).val();
    var currant_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'yes'){
      currant_obj.find('.div_outstanding_mortgage').show();
    }else{
      currant_obj.find('.div_outstanding_mortgage').hide();
    }    
  });

  //div_closing_cost_credit
  $(document).on('change', '.is_closing_cost_credit', function() {
    var val = $(this).val();
    var currant_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'yes'){
      currant_obj.find('.div_closing_cost_credit').show();
    }else{
      currant_obj.find('.div_closing_cost_credit').hide();
    }    
  });

  //div_1st_installment_paid
  $(document).on('change', '.is_1st_installment_paid', function() {
    var val = $(this).val();
    var currant_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'no'){
      currant_obj.find('.div_1st_installment_paid').show();
    }else{
      currant_obj.find('.div_1st_installment_paid').hide();
    }    
  });
  //div_2nd_installment_paid
  $(document).on('change', '.is_2nd_installment_paid', function() {
    var val = $(this).val();
    var currant_obj = $(this).closest('.net-rate-calculator-warp');

    if(val == 'no'){
      currant_obj.find('.div_2nd_installment_paid').show();
    }else{
      currant_obj.find('.div_2nd_installment_paid').hide();
    }    
  });

  $(document).on('keyup', '.last_year_property_taxes', delay(function() {
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var last_year_property_taxes = parseInt(current_obj.find('.last_year_property_taxes').val());
    current_obj.find('._1st_installment_paid').val('-$'+ (last_year_property_taxes/2) );
    current_obj.find('._2nd_installment_paid').val('-$'+ (last_year_property_taxes/2) );

    store._1st_installment_paid = (last_year_property_taxes/2);
    store._2nd_installment_paid = (last_year_property_taxes/2);

  },10));

  // on commission rate chage   
  $(document).on('change', '.commission_rate', delay(function() {
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var commission_rate = parseFloat(current_obj.find('.commission_rate').val());
    //console.log(commission_rate);
    store.commission_rate = commission_rate;

    var ui_saleprice = parseInt(current_obj.find('.ui_saleprice').val());
    var commission = (ui_saleprice * commission_rate)/100;
    //console.log(commission);
    current_obj.find('.real_estate_commission').val('-$'+ commission);

  },10) );

  // closing_date
  $(document).on('change', '.closing_date', delay(function() {
    // get the value 
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var ui_saleprice = parseInt(current_obj.find('.ui_saleprice').val());
    var closing_date = (current_obj.find('.closing_date').val());
    console.log(closing_date);
    
  },10));
  
  // on salse price change  
  $(document).on('keyup', '.ui_saleprice', delay(function() {
    // get the value 
    var current_obj  = $(this).closest('.net-rate-calculator-warp');
    var ui_saleprice = parseInt(current_obj.find('.ui_saleprice').val());
    var closing_date = (current_obj.find('.closing_date').val());
    
    console.log(ui_saleprice);
    console.log(closing_date);

    // check closing_date
    

    if( isNaN(ui_saleprice) == false ){

      var state_county_transfer_tax = (ui_saleprice * 0.0015) ;
      current_obj.find('.state_county_transfer_tax').val('-$'+ state_county_transfer_tax);

      var city_transfer_tax = Math.ceil( ui_saleprice / 1000 ) * 5;
      current_obj.find('.city_transfer_tax').val('-$'+ city_transfer_tax);

      var is_property_in_chicago = current_obj.find('input[name="is_property_in_chicago"]:checked').val();
      if( is_property_in_chicago == 'yes'){
        var water_n_zoning_fees = 371;
      }else{
        var water_n_zoning_fees = 0;
      }
      
      // outstanding_mortgage
      var outstanding_mortgage = parseInt(current_obj.find('.outstanding_mortgage').val());
      // closing_cost_credit
      var closing_cost_credit = parseInt(current_obj.find('.closing_cost_credit').val());


      var commitment_update_fee = 150 ;
      current_obj.find('.commitment_update_fee').val('-$'+ commitment_update_fee);

      var il_policy_registration_fee = 3 ;
      current_obj.find('.il_policy_registration_fee').val('-$'+ il_policy_registration_fee);
    
      var closing_protection_letter = 50 ;
      current_obj.find('.closing_protection_letter').val('-$'+ closing_protection_letter);

      var survey_fee = 525 ;
      current_obj.find('.survey_fee').val('-$'+ survey_fee);

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

    }

    // current_year_tax_credit
     
    

    return;

    //if( isNaN(agent_saleprice) == false && isNaN(closing_date) == false ){
      // var data = {
      //   action              : 'get_agent_property_rate',  
      //   agent_saleprice     : ui_saleprice,
      //   agent_fullrate      : agent_fullrate,
      // };
      //$.post(WPOSProCal.ajaxurl, data, function(result) {

        // if( result.success = 1 && (result.income != '') ) {
        //   current_obj.find('.avg_85').val('$'+result.income);
        // }else if(result.data == '') {
        //   current_obj.find('.avg_85').val('$'+0);
        // }
            
      //});
    //}

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