//
// Insert Crafty Clicks Library
	if(!_cp_js_included){var _cp_js_included=1;var _cp_instances=[],_cp_instance_idx=0,_cp_pl=["FLAT","SHOP","UNIT","BLOCK","STALL","SUITE","APARTMENT","MAISONETTE","HOUSE NUMBER"];function CraftyPostcodeCreate(){_cp_instance_idx++;_cp_instances[_cp_instance_idx]=new CraftyPostcodeClass();_cp_instances[_cp_instance_idx].obj_idx=_cp_instance_idx;return _cp_instances[_cp_instance_idx]}function _cp_sp(b){var d="",c;for(c=0;c<_cp_pl.length;c++){d=_cp_pl[c];if(d==b.substr(0,d.length).toUpperCase()){return(b.substr(d.length))}}return("")}function _cp_eh(a){var b="";while(b=a.shift()){if(!isNaN(parseInt(b))){return(parseInt(b))}}return""}function _cp_kp(a){var b;if(!a){a=window.event}if(a.keyCode){b=a.keyCode}else{if(a.which){b=a.which}}if(b==13){this.onclick()}}function CraftyPostcodeClass(){this.config={lookup_url:"pcls1.craftyclicks.co.uk/js/",access_token:"",basic_address:0,traditional_county:0,busy_img_url:"crafty_postcode_busy.gif",hide_result:0,org_uppercase:1,town_uppercase:1,county_uppercase:0,addr_uppercase:0,delimiter:", ",msg1:"Please wait while we find the address",err_msg1:"This postcode could not be found, please try again or enter your address manually",err_msg2:"This postcode is not valid, please try again or enter your address manually",err_msg3:"Unable to connect to address lookup server, please enter your address manually.",err_msg4:"An unexpected error occured, please enter your address manually.",res_autoselect:1,res_select_on_change:1,debug_mode:0,lookup_timeout:10000,form:"",elements:"",max_width:"400px",max_lines:1,first_res_line:"---- please select your address ----",result_elem_id:"",on_result_ready:null,on_result_selected:null,on_error:null,pre_populate_common_address_parts:0,elem_company:"crafty_out_company",elem_house_num:"",elem_street1:"crafty_out_street1",elem_street2:"crafty_out_street2",elem_street3:"crafty_out_street3",elem_town:"crafty_out_town",elem_county:"crafty_out_county",elem_postcode:"crafty_in_out_postcode",elem_udprn:"crafty_out_udprn",single_res_autoselect:0,single_res_notice:"---- address found, see below ----",elem_search_house:"crafty_in_search_house",elem_search_street:"crafty_in_search_street",elem_search_town:"crafty_in_search_town",max_results:25,err_msg5:"The house name/number could not be found, please try again.",err_msg6:"No results found, please modify your search and try again.",err_msg7:"Too many results, please modify your search and try again.",err_msg9:"Please provide more data and try again.",err_msg8:"Trial account limit reached, please use AA11AA, AA11AB, AA11AD or AA11AE."};this.xmlhttp=null;this.res_arr=null;this.disp_arr=null;this.res_arr_idx=0;this.dummy_1st_line=0;this.cc=0;this.flexi_search=0;this.lookup_timeout=null;this.obj_name="";this.house_search=0;this.set=function(a,b){this.config[a]=b};this.res_clicked=function(a){this.cc++;if(this.res_selected(a)){if(0!=this.config.hide_result&&((2>=this.config.max_lines&&1<this.cc)||(2<this.config.max_lines))){this.update_res(null);this.cc=0}}};this.res_selected=function(a){if(1==this.dummy_1st_line){if(0==a){return 0}else{a--}}a=this.disp_arr[a]["index"];this.populate_form_fields(this.res_arr[a]);if(this.config.on_result_selected){this.config.on_result_selected(a)}return 1};this.populate_form_fields=function(j){var b=[];var o=this.config.delimiter;for(var e=0;e<8;e++){b[e]=this.get_elem(e)}b[11]=this.get_elem(11);if(b[11]){b[11].value=j.udprn}if(b[0]){if(b[0]==b[1]&&""!=j.org){b[1].value=j.org;b[1]=b[2];b[2]=b[3];b[3]=null}else{b[0].value=j.org}}var n=j.housename2;if(""!=n&&""!=j.housename1){n+=o}n+=j.housename1;var k=j.housenumber;if(b[7]){b[7].value=n;if(""!=n&&""!=k){b[7].value+=o}b[7].value+=k;n="";k=""}var d=j.street1;var c=j.street2;if(""!=k){if(""!=c){c=k+" "+c}else{if(""!=d){d=k+" "+d}else{d=k}}}var g=c+(c==""?"":(d==""?"":o))+d;var m=j.locality_dep;var h=j.locality;if(""!=g&&parseInt(g)==g){if(""!=m){m=parseInt(g)+" "+m}else{h=parseInt(g)+" "+h}g="";d=""}var f=m+(m==""||h==""?"":o)+h;var a=g+(g==""||f==""?"":o)+f;if(b[1]&&b[2]&&b[3]){if(""!=j.pobox||""!=n){if(""!=j.pobox){b[1].value=j.pobox}else{b[1].value=n}if(""==f){if(""==c){b[2].value=d;b[3].value=""}else{b[2].value=c;b[3].value=d}}else{if(""==g){if(""==m){b[2].value=h;b[3].value=""}else{b[2].value=m;b[3].value=h}}else{b[2].value=g;b[3].value=f}}}else{if(""==g){if(""==m){b[1].value=h;b[2].value="";b[3].value=""}else{b[1].value=m;b[2].value=h;b[3].value=""}}else{if(""==f){if(""==c){b[1].value=d;b[2].value="";b[3].value=""}else{b[1].value=c;b[2].value=d;b[3].value=""}}else{if(""==c){b[1].value=d;if(""==m){b[2].value=h;b[3].value=""}else{b[2].value=m;b[3].value=h}}else{if(""==m){b[1].value=c;b[2].value=d;b[3].value=h}else{if(g.length<f.length){b[1].value=g;b[2].value=m;b[3].value=h}else{b[1].value=c;b[2].value=d;b[3].value=f}}}}}}}else{if(b[1]&&b[2]){if(""!=j.pobox){b[1].value=j.pobox;b[2].value=a}else{if(""!=n&&""!=g&&""!=f){if((n.length+g.length)<(g.length+f.length)){b[1].value=n+(n==""?"":o)+g;b[2].value=f}else{b[1].value=n;b[2].value=g+(g==""?"":o)+f}}else{if(""!=n&&""!=g){b[1].value=n;b[2].value=g}else{if(""==n&&""!=g){if(""==f){if(""!=c){b[1].value=c;b[2].value=d}else{b[1].value=g;b[2].value=""}}else{b[1].value=g;b[2].value=f}}else{if(""==g&&""!=n){b[1].value=n;b[2].value=f}else{b[1].value=f;b[2].value=""}}}}}}else{var l;if(b[1]){l=b[1]}else{if(b[2]){l=b[2]}else{l=b[3]}}if(""!=j.pobox){l.value=j.pobox+o+f}else{l.value=n+(n==""||a==""?"":o)+a}}}if(b[4]){b[4].value=j.town}if(b[5]){b[5].value=j.county}if(b[6]){b[6].value=j.postcode}return 1};this.show_busy=function(){var b=document.createElement("img");var a=document.createAttribute("src");a.value=this.config.busy_img_url;b.setAttributeNode(a);a=document.createAttribute("title");a.value=this.config.msg1;b.setAttributeNode(a);this.update_res(b)};this.disp_err=function(d,b){var a=null;var e="";if(""!=d){switch(d){case"0001":e=this.config.err_msg1;break;case"0002":e=this.config.err_msg2;break;case"9001":e=this.config.err_msg3;break;case"0003":e=this.config.err_msg9;break;case"0004":e=this.config.err_msg6;break;case"0005":e=this.config.err_msg7;break;case"7001":e=this.config.err_msg8;break;default:e="("+d+") "+this.config.err_msg4;break}if(this.config.debug_mode){var c="";switch(d){case"8000":c=" :: No Access Token ";break;case"8001":c=" :: Invalid Token Format ";break;case"8002":c=" :: Invalid Token ";break;case"8003":c=" :: Out of Credits ";break;case"8004":c=" :: Restricted by rules ";break;case"8005":c=" :: Token suspended ";break}e+=c+" :: DBG :: "+b}a=document.createTextNode(e)}this.update_res(a);if(this.config.on_error){this.config.on_error(e)}};this.disp_err_msg=function(b){var a=null;if(""!=b){a=document.createTextNode(b)}this.update_res(a);if(this.config.on_error){this.config.on_error(b)}};this.display_res_line=function(d,c){var b=document.getElementById("crafty_postcode_lookup_result_option"+this.obj_idx);var e=document.createElement("option");e.appendChild(document.createTextNode(d));if(null!=b){b.appendChild(e)}else{var a=document.createElement("select");a.id="crafty_postcode_lookup_result_option"+this.obj_idx;a.onclick=Function("_cp_instances["+this.obj_idx+"].res_clicked(this.selectedIndex);");a.onkeypress=_cp_kp;if(0!=this.config.res_select_on_change){a.onchange=Function("_cp_instances["+this.obj_idx+"].res_selected(this.selectedIndex);")}if(this.config.max_width&&""!=this.config.max_width){a.style.width=this.config.max_width}var f=this.res_arr_idx;if(1==this.dummy_1st_line){f++}if((navigator.appName=="Microsoft Internet Explorer")&&(parseFloat(navigator.appVersion)<=4)){a.size=0}else{if(f>=this.config.max_lines){a.size=this.config.max_lines}else{a.size=f}}a.appendChild(e);this.update_res(a)}};this.update_res=function(a){if(this.lookup_timeout){clearTimeout(this.lookup_timeout)}try{if(document.getElementById){var b=document.getElementById(this.config.result_elem_id);if(b.hasChildNodes()){while(b.firstChild){b.removeChild(b.firstChild)}}if(null!=a){b.appendChild(a)}}}catch(c){}};this.str_trim=function(b){var a=0;var c=b.length-1;while(a<b.length&&b[a]==" "){a++}while(c>a&&b[c]==" "){c-=1}return b.substring(a,c+1)};this.cp_uc=function(e){if("PC"==e||"UK"==e||"EU"==e){return(e)}var d="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var c="";var f=1;var b=0;for(var a=0;a<e.length;a++){if(-1!=d.indexOf(e.charAt(a))){if(f||b){c=c+e.charAt(a);f=0}else{c=c+e.charAt(a).toLowerCase()}}else{c=c+e.charAt(a);if(a+2>=e.length&&"'"==e.charAt(a)){f=0}else{if("("==e.charAt(a)){close_idx=e.indexOf(")",a+1);if(a+3<close_idx){b=0;f=1}else{b=1}}else{if(")"==e.charAt(a)){b=0;f=1}else{if("-"==e.charAt(a)){close_idx=e.indexOf("-",a+1);if((-1!=close_idx&&a+3>=close_idx)||a+3>=e.length){b=0;f=0}else{b=0;f=1}}else{if(a+2<e.length&&"0"<=e.charAt(a)&&"9">=e.charAt(a)){f=0}else{f=1}}}}}}}return(c)};this.leading_caps=function(a,b){if(0!=b||2>a.length){return(a)}var d="";var f=a.split(" ");for(var c=0;c<f.length;c++){var e=this.str_trim(f[c]);if(""!=e){if(""!=d){d=d+" "}d=d+this.cp_uc(e)}}return(d)};this.new_res_line=function(){var a=[];a.org="";a.housename1="";a.housename2="";a.pobox="";a.housenumber="";a.street1="";a.street2="";a.locality_dep="";a.locality="";a.town="";a.county="";a.postcode="";a.udprn="";return(a)};this.res_arr_compare=function(e,c){if(e.match_quality>c.match_quality){return(1)}if(e.match_quality<c.match_quality){return(-1)}if(e.street1>c.street1){return(1)}if(e.street1<c.street1){return(-1)}if(e.street2>c.street2){return(1)}if(e.street2<c.street2){return(-1)}var h;if(""==e.housenumber){h=_cp_eh(Array(e.housename1,e.housename2))}else{h=parseInt(e.housenumber)}var g;if(""==c.housenumber){g=_cp_eh(Array(c.housename1,c.housename2))}else{g=parseInt(c.housenumber)}if(""==h&&""!=g){return(1)}else{if(""!=h&&""==g){return(-1)}else{if(h>g){return(1)}if(h<g){return(-1)}}}var f=_cp_sp(e.housename1);if(!isNaN(parseInt(f))){f=parseInt(f)}var d=_cp_sp(c.housename1);if(!isNaN(parseInt(d))){d=parseInt(d)}if(f>d){return(1)}if(f<d){return(-1)}var f=_cp_sp(e.housename2);if(!isNaN(parseInt(f))){f=parseInt(f)}var d=_cp_sp(c.housename2);if(!isNaN(parseInt(d))){d=parseInt(d)}if(f>d){return(1)}if(f<d){return(-1)}f=e.housename2+e.housename1;d=c.housename2+c.housename1;if(f>d){return(1)}if(f<d){return(-1)}if(e.org>c.org){return(1)}if(e.org<c.org){return(-1)}return(1)};this.disp_res_arr=function(){this.res_arr=this.res_arr.sort(this.res_arr_compare);if(0!=this.config.res_autoselect){this.populate_form_fields(this.res_arr[0])}var a=this.config.delimiter;this.disp_arr=[];for(var c=0;c<this.res_arr_idx;c++){var e=this.res_arr[c];var b=e.org+(e.org!=""?a:"")+e.housename2+(e.housename2!=""?a:"")+e.housename1+(e.housename1!=""?a:"")+e.pobox+(e.pobox!=""?a:"")+e.housenumber+(e.housenumber!=""?" ":"")+e.street2+(e.street2!=""?a:"")+e.street1+(e.street1!=""?a:"")+e.locality_dep+(e.locality_dep!=""?a:"")+e.locality+(e.locality!=""?a:"")+e.town;if(this.flexi_search){b+=a+e.postcode}var d=[];d.index=c;d.str=b;this.disp_arr[c]=d}this.dummy_1st_line=0;if(""!=this.config.first_res_line){this.dummy_1st_line=1;this.display_res_line(this.config.first_res_line,-1)}for(var c=0;c<this.res_arr_idx;c++){this.display_res_line(this.disp_arr[c]["str"],c)}if(this.config.pre_populate_common_address_parts){var f=this.new_res_line();f.org=this.res_arr[0]["org"];f.housename1=this.res_arr[0]["housename1"];f.housename2=this.res_arr[0]["housename2"];f.pobox=this.res_arr[0]["pobox"];f.housenumber=this.res_arr[0]["housenumber"];f.street1=this.res_arr[0]["street1"];f.street2=this.res_arr[0]["street2"];f.locality_dep=this.res_arr[0]["locality_dep"];f.locality=this.res_arr[0]["locality"];f.town=this.res_arr[0]["town"];f.county=this.res_arr[0]["county"];f.postcode=this.res_arr[0]["postcode"];f.udprn=this.res_arr[0]["udprn"];for(var c=1;c<this.res_arr_idx;c++){if(this.res_arr[c]["org"]!=f.org){f.org=""}if(this.res_arr[c]["housename2"]!=f.housename2){f.housename2=""}if(this.res_arr[c]["housename1"]!=f.housename1){f.housename1=""}if(this.res_arr[c]["pobox"]!=f.pobox){f.pobox=""}if(this.res_arr[c]["housenumber"]!=f.housenumber){f.housenumber=""}if(this.res_arr[c]["street1"]!=f.street1){f.street1=""}if(this.res_arr[c]["street2"]!=f.street2){f.street2=""}if(this.res_arr[c]["locality_dep"]!=f.locality_dep){f.locality_dep=""}if(this.res_arr[c]["locality"]!=f.locality){f.locality=""}if(this.res_arr[c]["town"]!=f.town){f.town=""}if(this.res_arr[c]["county"]!=f.county){f.county=""}if(this.res_arr[c]["postcode"]!=f.postcode){f.postcode=""}if(this.res_arr[c]["udprn"]!=f.udprn){f.udprn=""}}this.populate_form_fields(f)}};this.get_elem=function(a){var d="";var c=null;if(""!=this.config.elements){var b=this.config.elements.split(",");d=b[a]}else{switch(a){case 0:d=this.config.elem_company;break;case 1:d=this.config.elem_street1;break;case 2:d=this.config.elem_street2;break;case 3:d=this.config.elem_street3;break;case 4:d=this.config.elem_town;break;case 5:d=this.config.elem_county;break;case 6:default:d=this.config.elem_postcode;break;case 7:d=this.config.elem_house_num;break;case 8:d=this.config.elem_search_house;break;case 9:d=this.config.elem_search_street;break;case 10:d=this.config.elem_search_town;break;case 11:d=this.config.elem_udprn;break}}if(""!=d){if(""!=this.config.form){c=document.forms[this.config.form].elements[d]}else{if(document.getElementById){c=document.getElementById(d)}}}return(c)};this.doHouseSearch=function(){var a=this.get_elem(8);if(a&&0<a.value.length){this.house_search=1}this.doLookup()};this.doLookup=function(){this.xmlhttp=null;var a=this.get_elem(6);var b=null;if(a){this.show_busy();this.lookup_timeout=setTimeout("_cp_instances["+this.obj_idx+"].lookup_timeout_err()",this.config.lookup_timeout);b=this.validate_pc(a.value)}if(null!=b){this.direct_xml_fetch(0,b)}else{this.disp_err("0002","invalid postcode format")}};this.flexiSearch=function(){this.xmlhttp=null;var a="";if(this.get_elem(8)&&""!=this.get_elem(8).value){a+="&search_house="+this.get_elem(8).value}if(this.get_elem(9)&&""!=this.get_elem(9).value){a+="&search_street="+this.get_elem(9).value}if(this.get_elem(10)&&""!=this.get_elem(10).value){a+="&search_town="+this.get_elem(10).value}if(""!=a){this.show_busy();this.lookup_timeout=setTimeout("_cp_instances["+this.obj_idx+"].lookup_timeout_err()",this.config.lookup_timeout);this.direct_xml_fetch(1,a)}else{this.disp_err("0003","search string too short")}};this.validate_pc=function(c){var b="";do{b=c;c=c.replace(/[^A-Za-z0-9]/,"")}while(b!=c);b=c.toUpperCase();if(7>=b.length&&5<=b.length){var d=b.substring(b.length-3,b.length);var a=b.substring(0,b.length-3);if(true==/[CIKMOV]/.test(d)){return null}if("0"<=d.charAt(0)&&"9">=d.charAt(0)&&"A"<=d.charAt(1)&&"Z">=d.charAt(1)&&"A"<=d.charAt(2)&&"Z">=d.charAt(2)){switch(a.length){case 2:if("A"<=a.charAt(0)&&"Z">=a.charAt(0)&&"0"<=a.charAt(1)&&"9">=a.charAt(1)){return(b)}break;case 3:if("A"<=a.charAt(0)&&"Z">=a.charAt(0)){if("0"<=a.charAt(1)&&"9">=a.charAt(1)&&"0"<=a.charAt(2)&&"9">=a.charAt(2)){return(b)}else{if("A"<=a.charAt(1)&&"Z">=a.charAt(1)&&"0"<=a.charAt(2)&&"9">=a.charAt(2)){return(b)}else{if("0"<=a.charAt(1)&&"9">=a.charAt(1)&&"A"<=a.charAt(2)&&"Z">=a.charAt(2)){return(b)}}}}break;case 4:if("A"<=a.charAt(0)&&"Z">=a.charAt(0)&&"A"<=a.charAt(1)&&"Z">=a.charAt(1)&&"0"<=a.charAt(2)&&"9">=a.charAt(2)){if("0"<=a.charAt(3)&&"9">=a.charAt(3)){return(b)}else{if("A"<=a.charAt(3)&&"Z">=a.charAt(3)){return(b)}}}break;default:break}}}return null};this.direct_xml_fetch=function(d,a){try{var e=document.getElementById(this.config.result_elem_id);var b="";if("https:"==document.location.protocol){b="https://"}else{b="http://"}if(0==d){b+=this.config.lookup_url;if(this.config.basic_address){b+="basicaddress"}else{b+="rapidaddress"}b+="?postcode="+a+"&callback=_cp_instances["+this.obj_idx+"].handle_js_response&callback_id=0"}else{if(this.config.basic_address){this.disp_err("1207","BasicAddress can't be used for Flexi Search!");return}else{b+=this.config.lookup_url+"flexiaddress?callback=_cp_instances["+this.obj_idx+"].handle_js_response&callback_id=1";b+="&max_results="+this.config.max_results;b+=a}}if(""!=this.config.access_token){b+="&key="+this.config.access_token}var c=document.createElement("script");c.src=encodeURI(b);c.type="text/javascript";e.appendChild(c)}catch(f){this.disp_err("1206",f)}};this.handle_js_response=function(c,d,e){if(!d){var f=e.error_code;var a=e.error_msg;this.disp_err(f,a)}else{this.res_arr=[];this.res_arr_idx=0;if(0==c){this.flexi_search=0;if(this.house_search){e=this.filter_data_by_house_name(e);if(null==e){this.disp_err_msg(this.config.err_msg5);return}}this.add_to_res_array(e)}else{this.flexi_search=1;this.res_arr.total_postcode_count=e.total_postcode_count;this.res_arr.total_thoroughfare_count=e.total_thoroughfare_count;this.res_arr.total_delivery_point_count=e.total_delivery_point_count;for(var i=1;i<=e.total_postcode_count;i++){this.add_to_res_array(e[i])}}if(this.res_arr_idx){var b=false;if(1==this.res_arr_idx&&this.config.single_res_autoselect){var g=null;if(""!=this.config.single_res_notice){g=document.createTextNode(this.config.single_res_notice)}this.update_res(g);this.populate_form_fields(this.res_arr[0]);b=true}else{this.disp_res_arr();document.getElementById("crafty_postcode_lookup_result_option"+this.obj_idx).focus()}if(0==c&&""!=e.postcode){var h=this.get_elem(6);h.value=e.postcode}if(this.config.on_result_ready){this.config.on_result_ready()}if(b&&this.config.on_result_selected){this.config.on_result_selected(0)}}else{this.disp_err("1205","no result to display")}}};this.add_to_res_array=function(f){for(var d=1;d<=f.thoroughfare_count;d++){var e=f[d]["thoroughfare_name"];if(""!=f[d]["thoroughfare_descriptor"]){e+=" "+f[d]["thoroughfare_descriptor"]}e=this.leading_caps(e,this.config.addr_uppercase);var c=f[d]["dependent_thoroughfare_name"];if(""!=f[d]["dependent_thoroughfare_descriptor"]){c+=" "+f[d]["dependent_thoroughfare_descriptor"]}c=this.leading_caps(c,this.config.addr_uppercase);if("delivery_point_count" in f[d]&&0<f[d]["delivery_point_count"]){for(var a=1;a<=f[d]["delivery_point_count"];a++){var g=this.new_res_line();g.street1=e;g.street2=c;var b=f[d][a];if("match_quality" in b){g.match_quality=b.match_quality}else{g.match_quality=1}g.housenumber=b.building_number;g.housename2=this.leading_caps(b.sub_building_name,this.config.addr_uppercase);g.housename1=this.leading_caps(b.building_name,this.config.addr_uppercase);g.org=b.department_name;if(""!=g.org&&""!=b.organisation_name){g.org+=this.config.delimiter}g.org=this.leading_caps(g.org+b.organisation_name,this.config.org_uppercase);g.pobox=this.leading_caps(b.po_box_number,this.config.addr_uppercase);g.postcode=f.postcode;g.town=this.leading_caps(f.town,this.config.town_uppercase);g.locality=this.leading_caps(f.dependent_locality,this.config.addr_uppercase);g.locality_dep=this.leading_caps(f.double_dependent_locality,this.config.addr_uppercase);if(this.config.traditional_county){g.county=this.leading_caps(f.traditional_county,this.config.county_uppercase)}else{g.county=this.leading_caps(f.postal_county,this.config.county_uppercase)}g.udprn=b.udprn;this.res_arr[this.res_arr_idx]=g;this.res_arr_idx++}}else{var g=this.new_res_line();g.street1=e;g.street2=c;g.postcode=f.postcode;g.town=this.leading_caps(f.town,this.config.town_uppercase);g.locality=this.leading_caps(f.dependent_locality,this.config.addr_uppercase);g.locality_dep=this.leading_caps(f.double_dependent_locality,this.config.addr_uppercase);if(this.config.traditional_county){g.county=this.leading_caps(f.traditional_county,this.config.county_uppercase)}else{g.county=this.leading_caps(f.postal_county,this.config.county_uppercase)}g.match_quality=2;this.res_arr[this.res_arr_idx]=g;this.res_arr_idx++}}};this.filter_data_by_house_name=function(f){var g=this.get_elem(8);if(!g||!g.value.length){return f}var j=g.value.toUpperCase();var k=-1;if(parseInt(j)==j){k=parseInt(j)}var l=" "+j;var e=[];var i=1;var b=0;for(var c=1;c<=f.thoroughfare_count;c++){e[i]=[];b=0;for(var d=1;d<=f[c]["delivery_point_count"];d++){var h=f[c][d];var a=" "+h.sub_building_name+" "+h.building_name+" ";if(-1!=a.indexOf(l)||k==parseInt(h.building_number)){b++;e[i][b]=[];e[i][b]["building_number"]=h.building_number;e[i][b]["sub_building_name"]=h.sub_building_name;e[i][b]["building_name"]=h.building_name;e[i][b]["department_name"]=h.department_name;e[i][b]["organisation_name"]=h.organisation_name;e[i][b]["po_box_number"]=h.po_box_number;e[i][b]["udprn"]=h.udprn}}if(b){e[i]["delivery_point_count"]=b;e[i]["thoroughfare_name"]=f[c]["thoroughfare_name"];e[i]["thoroughfare_descriptor"]=f[c]["thoroughfare_descriptor"];e[i]["dependent_thoroughfare_name"]=f[c]["dependent_thoroughfare_name"];e[i]["dependent_thoroughfare_descriptor"]=f[c]["dependent_thoroughfare_descriptor"];i++}}if(1<i){e.thoroughfare_count=i-1;e.town=f.town;e.dependent_locality=f.dependent_locality;e.double_dependent_locality=f.double_dependent_locality;e.traditional_county=f.traditional_county;e.postal_county=f.postal_county;e.postcode=f.postcode;return e}return null};this.lookup_timeout_err=function(){this.disp_err("9001","Internal Timeout after "+this.config.lookup_timeout+"ms")}}};

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
	exp.log('AWA - One Step Checkout');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		northernIrelandZipClicked: false,
		checkedRadio: null,
		telephoneSubtext: '<span class="telephoneSubtext">(To inform you about your delivery)</span>',
		returningCustomerText: '<p class="returningCustomerText" style="margin: 8px 0 1.42857rem 15px;">Welcome Back</p>',
		gotCoupon: '<a id="gotCoupon" href="javascript:void(0);">Got a coupon?</a>',
		craftyClicksLookup: '<span id="crafty_postcode_result_display"></span><button class="lookupButton" type="button" onclick="cp_obj.doLookup()">Find Address</button>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.one-step-checkout h1.checkout_header {\
			margin-top: 18px;\
		}\
		.one-step-checkout #billing_step_header, .one-step-checkout {\
			background: none;\
		}\
		.one-step-checkout .shipping-method #shipping_method_step_header {\
			background: none;\
		}\
		.one-step-checkout h3 {\
			text-indent: 15px;\
		}\
		ol li ul, ol li ol {\
			margin-left: 0;\
		}\
		.order-review-section {\
			display: none;\
		}\
		.one-step-checkout .address-information .billing_address {\
			width: 100%;\
		}\
		.one-step-checkout .order-info-3-columns {\
			width: 48.5%;\
			margin: 0 3% 0 0;\
		}\
		.onestepcheckout-review-info {\
			width: 48.5%;\
			margin: 0;\
		}\
		#review_step_header {\
			text-indent: 85px;\
			opacity: 0.7;\
		}\
		#qty-42631 {\
			height: 20px;\
		}\
		#onestepcheckout-shipping-method-section {\
			display: none;\
		}\
		#one-step-checkout-form li {\
			overflow: auto;\
			display: block;\
		}\
		.telephoneSubtext {\
			font-size: 11px;\
		}\
		#ajax-shipping {\
			z-index: -20;\
		}\
		#onestepcheckout-login-link {\
			text-decoration: underline;\
			padding-bottom: 10px;\
		}\
		.returningCustomerText p {\
			margin-bottom: 1em;\
			margin-top: 10px;\
		}\
		#gotCoupon  {\
			text-decoration: underline;\
			display: block;\
			margin-left: 15px;\
		}\
		#onestepcheckout-button-place-order {\
			min-width: 272px;\
			max-width: 90%;\
			margin: 0 5%;\
		}\
		.onestepcheckout-btn-checkout span span {\
    		font-size: 18px !important;\
		}\
		.onestepcheckout-comment {\
			width: 90%;\
		}\
		#one-step-checkout-form li {\
			overflow: hidden;\
		}\
		.lookupButton {\
			padding: 10px;\
			color: white;\
			font-weight: bold;\
			float: right;\
			background-color: #009f94;\
			border-radius: 20px;\
			}\
		.awa-emailForm {\
			margin-top: 18px;\
		}\
		.awa-returningCustomers {\
			padding-bottom: 10px;\
		}\
		.awa-loginLink {\
			margin-left: 15px;\
		}\
		.awa-billingAddress {\
			margin-top: 60px;\
		}\
		#onestepcheckout-shipping-method-section-cloned {\
			float: right;\
		}\
		#onestepcheckout-login-popup {\
			position: fixed !important;\
			top: 125px!important;\
		}\
		@media only screen and (max-width: 1005px) {\
			.onestepcheckout-review-info {\
				width: 100%;\
				float: right;\
			}\
			.one-step-checkout .order-info-3-columns {\
				width: 100%;\
			}\
			.one-step-checkout .address-info-3-columns {\
				width: 48%;\
			}\
			.one-step-checkout .onestepcheckout-shipping-payment-review {\
				width: 50%;\
			}\
		}\
		@media only screen and (max-width: 660px) {\
			.one-step-checkout .address-info-3-columns {\
				width: 100%;\
			}\
			.one-step-checkout .onestepcheckout-shipping-payment-review {\
				width: 100%;\
			}\
		}\
		@media (max-width: 719px) {\
			.awa-emailForm {\
				display: inline-block;\
				margin-top: 0;\
				margin-bottom: 0;\
			}\
		}\
		@media (max-width: 639px) {\
			.awa-emailForm {\
				margin-top: 18px;\
			}\
		}\
		@media (max-width: 383px) {\
			.awa-emailForm {\
				margin-top: 19px !important;\
			}\
		}\
		@media (max-width: 1199px) {\
			#one-step-checkout-form label {\
				display: inline-block;\
			}\
			@media (max-width: 551px) {\
				.awa-emailForm {\
					display: inline-block;\
					margin-top: 19px;\
				}\
			}\
			#one-step-checkout-form input.radio, .address-information ul li.create_account input, #one-step-checkout-form input.checkbox, #one-step-checkout-form .order-review-info .onestepcheckout-newsletter input, #one-step-checkout-form .order-review-info .onestepcheckout-giftwrap input, #one-step-checkout-form .order-review-info .onestepcheckout-terms-conditions input, .address-information ul li.shipping_other_address input, #one-step-checkout-form .order-review-info .onestepcheckout-terms-conditions input, #one-step-checkout-form li.control input.checkbox {\
				margin: 4px 4px 4px;\
				float: left;\
			}\
		}\
		';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Create Crafty Clicks object
		window.cp_obj = CraftyPostcodeCreate();
		cp_obj.set('access_token', '3420a-fe491-9e23e-01ebf');
		cp_obj.set('result_elem_id', 'crafty_postcode_result_display');
		cp_obj.set('form', "");
		cp_obj.set('elem_street1'  , 'billing:street1');
		cp_obj.set('elem_street2'  , 'billing:street2');
		cp_obj.set('elem_company'  , 'billing:company');
		cp_obj.set('elem_town'     ,'billing:city');
		cp_obj.set('elem_postcode' , 'billing:postcode');

		// Change Billing Address to New Customers
		$('#billing_step_header').text('NEW CUSTOMERS');

		// Add Telephone Subtext and add class to correct spacing
		$('#billing-new-address-form label:contains("Telephone")').append(exp.vars.telephoneSubtext);
		$('.two-fields label:contains("Email Address")').addClass('awa-emailForm');
		$('#billing\\:email').addClass('awa-emailForm');

		// Change 'Address' to 'Billing Address'
		$('.one-field label:contains("Address")').text('Billing Address');

		// Remove account creation component
		// Undo this change per AWA request 3/7/17
		// $('#billing-new-address-form li:contains("Create an account")').css('display', 'none');


		// Change Shipping Method Element to Returning Customers Element
		$('#shipping_method_step_header').text('RETURNING CUSTOMERS');
		$('#one-step-checkout-form li:contains("RETURNING CUSTOMERS")').addClass('awa-returningCustomers');

		// Modify and move Returning Customers log in link
		var $loginLink = $('#onestepcheckout-login-link');
		$loginLink.text('Click here to log in').addClass('awa-loginLink');
		$('#onestepcheckout-shipping-method-section').after($loginLink);
		$loginLink.before(exp.vars.returningCustomerText);

		// Clones shipping method section to the order review area
		function addShipping() {
			if (!$('#awa-shipping').length) {
				var $shipping = $('#onestepcheckout-shipping-method-section').clone();

				// Change ids of cloned div before adding to DOM so HTML is valid
				$shipping.attr('id', 'onestepcheckout-shipping-method-section-cloned');
				$shipping.find('input[type="radio"]').each(function() {
					$(this).attr('id', $(this).attr('id') + '-cloned');
				});

				var $subtotalRow = $('#checkout-review-table td:contains("Subtotal")').closest('tr');
				$subtotalRow.after('<tr><td id="awa-shipping" colspan="3"></td></tr>');
				$('#awa-shipping').append($shipping);
			};
			// Fix Northern Ireland postal code bug
			if (exp.vars.northernIrelandZipClicked === false && $('#s_method_premiumrate_Northern_Ireland-cloned').length > 0) {
				exp.vars.northernIrelandZipClicked = true;
				$('#s_method_premiumrate_Northern_Ireland-cloned').click();
			};

			if (exp.vars.checkedRadio) {
				$('#' + exp.vars.checkedRadio).prop('checked', true);
			};
		};

		addShipping();

		// Keep track of checkedRadio id so we can artificially "check" it after content loads
		$('body').on('click', '#onestepcheckout-shipping-method-section-cloned li', function() {
			exp.vars.checkedRadio = $(this).find('input[type="radio"]').attr('id');
		});


		// Reapply addShipping on changes to order review section
		var target = $('.checkout-review-load')[0];
		var observer = new MutationObserver(function(mutations) {
		  mutations.forEach(function(mutation) {
		    addShipping();
		    if ($('#s_method_premiumrate_Northern_Ireland-cloned').length === 0) {
		    	exp.vars.northernIrelandZipClicked = false;
		    };
		  });    
		});
		var config = { attributes: true, childList: true, characterData: true };
		observer.observe(target, config);

		// Hide coupon code section
		var $couponCodeDiv = $('body label:contains("Coupon code:")').parent();
		$couponCodeDiv.css('display', 'none');
		$couponCodeDiv.before(exp.vars.gotCoupon);
		$('#gotCoupon').on('click', function(){
			$couponCodeDiv.css({'display': 'block', 'width': '75%'});
			$(this).remove();
		});

		// Move Place Order button
		$couponCodeDiv.after($('#onestepcheckout-button-place-order'));

		// Move Zip code section above Billing Address section
		var $billingAddress = $('#billing-new-address-form div:contains("Billing Address")');
		$billingAddress.addClass('awa-billingAddress');
		var $zipCode = $('#billing-new-address-form div:contains("Zip/Postal Code")');
		$billingAddress.before($zipCode);

		// Add find address button for Crafty Clicks
	   $('#billing\\:postcode').after(exp.vars.craftyClicksLookup);

	   	// Move Company field below Billing Address Field
	   $('#billing-new-address-form li:contains("Billing Address")').after($('#billing-new-address-form li:contains("Company")'));
	   
		// Fix Northern Ireland postal code bug
		window.onload = function(){
			$('#s_method_premiumrate_Northern_Ireland-cloned').click();
		}();
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);