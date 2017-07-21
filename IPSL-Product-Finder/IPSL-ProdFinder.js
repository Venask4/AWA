//
// CGIT Optimizely Boilerplate - version 0.1.4
//
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

  // Initialise the experiment object
  var exp = {};

  // Wrapper for console.log, to prevent the exp breaking on browsers which don't
  // (always) have 'console' set (e.g. IE9)
  exp.log = function (str) {
      if (typeof window.console !== 'undefined') {
          console.log(str);
      }
  };

  // Log the experiment, useful when multiple experiments are running
  exp.log('AWA - Sitewide Product Finder v1');


  // Variables
  // Object containing variables, generally these would be strings or jQuery objects
  exp.vars = {};

  // Styles
  // String containing the CSS for the experiment
  exp.css = '\
      .new_form .use_it_for, .new_form .color_finish, .new_form .finish, .new_form .installation_, .new_form .panels {\
      display: none;\
    }\
    div.home-banner-content {\
      left: 33%!important;\
    }\
    .new_form {\
      width: 100%;\
      border: 4px solid #009f94;\
      padding-top: 10px;\
      padding-left: 20px;\
      padding-bottom: 20px;\
      padding-right: 20px;\
      display: block;\
      position: relative;\
      top: 1.5%;\
      background: white;\
      height:auto;\
      z-index:99;\
      overflow: auto;\
    }\
    .AWA-margins {\
    	display: inline-block;\
      margin: 0 3% 0 0%;\
      width: 30%;\
  	}\
    .home_business, .color_finish, .installation_, .panels{\
      font-size:14px;\
    }\
    .new_form h3 {\
      margin-bottom: 50px;\
      text-align:left;\
      text-transform:uppercase;\
    }\
    .new_form label {\
      font-weight: bold;\
      margin-bottom: 4px;\
      font-size:15px;\
    }\
    .new_form select {\
      margin-left: 7px;\
      width: 300px;\
    }\
    .new_form input[type="radio"] {\
      margin-left: 14px;\
      margin-right: 7px;\
      display: inline-block!important;\
    }\
    .section-bannertop.header_bottom img{\
     height:380px;\
    }\
    .new_form div.color_finish {\
    	display: inline-block;\
    }\
    .new_form div.installation_ {\
      display: inline-block;\
    }\
    .new_form div.use_it_for {\
      display: inline-block;\
    }\
    .new_form div.panels {\
    	display: inline-block;\
    }\
    @media only screen and (max-width: 350px) {\
      .new_form input[type="radio"] {\
        margin-left: 3px;\
        margin-right: 3px;\
      }\
    }\
    @media only screen and (max-width: 768px) {\
      .new_form {\
        position: inherit;\
        width: 97%;\
        margin-left: 1.5%;\
      }\
      .section-bannertop.header_bottom img {\
        display: none;\
      }\
    }\
    @media only screen and (max-width: 1024px) {\
      .new_form {\
        position: inherit;\
        width: 97%;\
        margin-left: 1.5%;\
      }\
      .new_form select {\
        width: 50%;\
      }\
      .section-bannertop.header_bottom img, .home-banner-content {\
        display: none;\
      }\
    }\
    @media only screen and (max-width: 1200px) and (min-width: 1024px) {\
      .new_form {\
        width: 28%;\
      }\
    }\
    @media screen and (min-width: 64em) {\
    	.new_form label {\
    		width: auto !important;\
    	}\
    }\
  ';


  // Init function
  // Called to run the actual experiment, DOM manipulation, event listeners, etc
  exp.init = function() {
    // Add styles
    $('head').append('<style>' + exp.css + '</style>');

    // Copy Product Finder Code
    (function($) {
    // functions
    function category() {
      return $('[name=product_for]:checked').val();
    }
    function selectedValue(that) {
      return $(that).find(":selected").text();
    }
    function targetUrl(that) {
      return $(that).val();
    }
    // side effects
    function pushToDataLayer(category, value, targetUrl) {
      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'usage' : category, //this will be home|business
        'dropdown' : value, //this will be the option chosen in the dropdown
        'event' : 'vwopfinder', //this is the hook to fire the GA event tags
        'eventCallback' : function() {
          document.location = targetUrl;
        }
      });
    }
    var inter = setInterval(function() {
      if (('.section-bannertop.header_bottom img').length) {
        clearInterval(inter);
        $('.section-bannertop.header_bottom img')
          .attr('src', '//useruploads.visualwebsiteoptimizer.com/useruploads/261920/images/b1d878ccb17253c94055f4af76f105a8_banner.jpg');
        var product_selector = '<form class="new_form">';
        product_selector += '<h3 class="AWA-margins"> Find the right product</h3>';
        product_selector += '<div class="home_business AWA-margins">';
        product_selector += '<label> I want a product for my:</label><br>';
        product_selector += '<input name="product_for" class="home_radio" type="radio" value="Home" >Home</input>';
        product_selector += '<input name="product_for" class="business_radio" type="radio" value="Business">Business</input>';
        product_selector += '</div>';
        product_selector += '<div class="cover AWA-margins">';
        product_selector += '<label>To cover my:</label><br>';
        product_selector += '<select>';
        product_selector += '<option name="select" value="">Select</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-panels/shower-wall-kits-all.html">Shower Kits</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/bathroom-wall-panels/ceiling-cladding/ceiling-panels-all.html">Ceilings</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/bathroom-wall-panels/bathroom-flooring/waterproof-laminate-flooring.html">Flooring</option>';
        product_selector += '<option value="">Wall Panels</option>';
        product_selector += '</select>';
        product_selector += '</div>';
        product_selector += '<div class="use_it_for AWA-margins">';
        product_selector += '<label>I want to use it for:</label><br>';
        product_selector += ' <select>';
        product_selector += '<option name="select" value="">Select</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-premium-grade.html">Premium Food grade</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-hyper-grade.html">Medical facility</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-low-temp-grade.html">Cold room</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/ceiling-panels.html">Ceiling panels</option>';
        product_selector += '<option value="">Other</option>';
        product_selector += '</select>';
        product_selector += '</div>';
        product_selector += '<div class="color_finish AWA-margins">';
        product_selector += '<br>';
        product_selector += '<label> Choose your color/finish:</label><br>';
        product_selector += '<input name="product_finish" type="radio" value="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/proclad-solid-colour-cladding.html" >Plain colours </input>';
        product_selector += '<input name="product_finish" type="radio" value="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/dumawall-tile-wall-panels.html">Tiles</input>';
        product_selector += '<input name="product_finish" type="radio" value="">Designs</input>';
        product_selector += '</div>';
        product_selector += '<div class="finish">';
        product_selector += '<br>';
        product_selector += '<label>I\'d like finish to be:</label><br>';
        product_selector += '<select>';
        product_selector += '<option value="">Select</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-premium-grade.html">Satin</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-plus-grade.html">Gloss</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-colours.html">Colours</option>';
        product_selector += '<option value="https://www.ipsluk.co.uk/hygienic-wall-cladding/proclad-10.html">Uneven walls</option>';
        product_selector += '</select>';
        product_selector += '</div>';
        product_selector += '<div class="installation_ AWA-margins">';
        product_selector += '<label> I\'d prefer installation to be:</label><br>';
        product_selector += '<input name="preferred_installation" class="installation_tongue" type="radio" value="" >Tongue & groove </input>';
        product_selector += '<input  name="preferred_installation" class="installation_joint" type="radio" value="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-laminate-panels-1200mm-width.html">Separate joint trim</input>';
        product_selector += '</div>';
        product_selector += '<div class="panels AWA-margins">';
        product_selector += '<label> and I\'d prefer like the panels to be:</label><br>';
        product_selector += '<input name="preferred_panels" class="panels_wide" type="radio" value="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html" >Wide (1000 mm) </input>';
        product_selector += '<input name="preferred_panels" class="panels_narrow" type="radio" value="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Narrow (250 mm)</input>';
        product_selector += '</div>';
        product_selector += '</form>';
        $('.breadcrumbs').before(product_selector);
        //Hide show logic based on selection
        $('.home_radio').click(function() {
          $('.cover').show();
          $('.cover select option[name="select"]').attr("selected", true);
          $('.use_it_for').hide();
          $('.color_finish').hide();
          $('.finish').hide();
          $('.installation_').hide();
          $('.panels').hide();
          $('.new_form h3').css({'margin-bottom': '50px'});
        });
        $('.business_radio').click(function() {
          $('.use_it_for').show();
          $('.use_it_for select option[name="select"]').attr("selected", true);
          $('.cover').hide();
          $('.color_finish').hide();
          $('.finish').hide();
          $('.installation_').hide();
          $('.panels').hide();
          $('.new_form h3').css({'margin-bottom': '50px'});
        });
        //select change
        $('select').change(function() {
          if ($(this).find("option:selected").attr('value') !== '') {
            // location.href = $(this).find("option:selected").attr('value');
            pushToDataLayer(category(), selectedValue(this), targetUrl(this));
            $('.finish select option[value="#"]').attr("selected", true);
          } else {
            if ($(this).find("option:selected").text() == "Wall Panels") {
              $('.color_finish').show();
              $('input[name="product_finish"]').attr('checked', false);
              $('.new_form h3').css({'margin-bottom': '30px'});
            }
            if ($(this).find("option:selected").text() == "Select") {
              $('.color_finish').hide();
              $('.installation_').hide();
              $('.panels').hide();
              $('.finish').hide();
              $('.new_form h3').css({'margin-bottom': '50px'});
            }
            //Other selected
            if ($(this).find("option:selected").text() == "Other") {
              $('.finish').show();
              $('.new_form h3').css({'margin-bottom': '30px'});
            }
          }
        });
        //Color_finish change
        $('input[type=radio][name=product_finish]').change(function() {
          if ($(this).attr('value') != '') {
            // location.href = $(this).attr('value');
            pushToDataLayer(category(), selectedValue(this), targetUrl(this));
            $('.panels').hide();
            $('.installation_').hide();
          }
          //if designs is chosen
          else {
            $('.installation_').show();
            $('input[name="preferred_installation"]').attr('checked', false);
            $('.new_form h3').css({'margin-bottom': '10px'});
          }
        });
        // Preffered Installation Change
        $('input[type="radio"][name="preferred_installation"]').change(function() {
            if ($(this).attr('value') != '') {
            // location.href = $(this).attr('value');
            pushToDataLayer(category(), selectedValue(this), targetUrl(this));
            $('.panels').hide();
          }
          //If Tongue and groove is choosen
          else {
            $('.panels').show();
            $('.new_form h3').css({'margin-bottom': '0px'});
          }
        });
        //Preffered Panels change
        $('input[type="radio"][name="preferred_panels"]').change(function() {
          // location.href = $(this).attr('value');
          pushToDataLayer(category(), selectedValue(this), targetUrl(this));
        });
      }
      $('.home_radio').click();
    }, 20);
  })($);
  };

  exp.init();
  // Return the experiment object so we can access it later if required
  return exp;

  // Close the IIFE, passing in jQuery and any other global variables as required
  // if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);