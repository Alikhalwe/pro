<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html>
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Alikhalwe</title>
    <meta name="description" content="Pleasure is responsive, material admin dashboard panel">
    <meta name="author" content="Teamfox">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-touch-fullscreen" content="yes">

    <!-- BEGIN CORE CSS -->
    <link rel="stylesheet" href="assets/admin1/css/admin1.css">
    <link rel="stylesheet" href="assets/globals/css/elements.css">
    <!-- END CORE CSS -->

    <link rel="stylesheet" href="autocomplete/jquery.auto-complete.css">


   <!-- <link type="text/css" href="assets/globals/plugins/form-select2/select2.css" rel="stylesheet"> -->

    <link href="dist/css/sb-admin-2.css" rel="stylesheet">


    <!-- BEGIN PLUGINS CSS -->
    <!--<link rel="stylesheet" href="assets/globals/plugins/rickshaw/rickshaw.min.css">-->
    <link rel="stylesheet" href="assets/globals/plugins/bxslider/jquery.bxslider.css">
    <link rel="stylesheet" href="assets/globals/css/plugins.css">
    <!-- END PLUGINS CSS -->
    <!-- BEGIN SHORTCUT AND TOUCH ICONS -->
    <link rel="shortcut icon" href="assets/globals/img/icons/favicon.ico">
    <link rel="apple-touch-icon" href="assets/globals/img/icons/apple-touch-icon.png">
    <!-- END SHORTCUT AND TOUCH ICONS -->
    <script src="assets/globals/plugins/modernizr/modernizr.min.js"></script>


    <script src="js/jquery.min.js"></script>

    <script type='text/javascript' src="js/simpleajax.min.js"></script>
    <script type='text/javascript' src="js/libphonenumber.js"></script>


    <script type="text/javascript" language="javascript">
        $(document).ready(function () {

            $('#cmbcountries').change(function () {
                var option_c_flag = $('option:selected', this).attr('flg');
                var option_c_code = $('option:selected', this).attr('ccode');
                $('#imgcountryflag').attr('src', option_c_flag);
                $('#spn_selected_country_code').html(option_c_code);
                $('#lbl_header_country_name').html($('option:selected', this).html());
                $('#txt_near_country_name').html($('option:selected', this).text());
                $('#spn_selected_country').html('<img src="' + option_c_flag + '" style="width: 24px;" /> ' + option_c_code);
                if ($('#random_people').css('display') == "none") {
                    searfor();
                }
                else {
                  //  if ($('#li_random_social').html() != "") {
                        get_random_social_people();
                  //  }
                }
            });


            try {
               // AndroidFunction.device_ready();
            }
           // catch (err) {
                // document.getElementById("demo").innerHTML = err.message;
            
            //send_push_params(0);

        });

        function locatePhoneNumber(lastCallnumber_L,ls) {

            if (lastCallnumber_L != null) {
                if (lastCallnumber_L != "") {
                   // $('#txt_locate_number_directive').val(ls);
                   // lastCallnumber_L = lastCallnumber_L.replace('n', '');

                    //$('#srch-term').val(lastCallnumber_L);
                    searfor();
                }
            }

        }

        function locatePhoneNumber_from_js(lastCallnumber_L) {

            if (lastCallnumber_L != null) {
               // $('#srch-term').val(lastCallnumber_L);
                searfor();
            }
        }

    </script>

    <script language="javascript">
        function fillparams(all_p) {
            var arr_p = all_p.split("~");
            if (arr_p != null) {

                $('#txt_devuid').val(arr_p[0]);
                $('#txt_platform').val(arr_p[1]);
                $("#txt_version").val(arr_p[2]);
                $("#txt_name").val(arr_p[3]);
                $("#txt_sim_country_iso").val(arr_p[4]);
                $("#txt_local_language").val(arr_p[5]);

                $("#inptsrvuid").val(arr_p[6]);

                $('#fullname').val(arr_p[7]);
                $('#phonenbr').val(arr_p[8]);
                $('#email').val(arr_p[9]);
                $('#address').val(arr_p[10]);

                $('#txt_lat').val(arr_p[11]);
                $('#txt_lng').val(arr_p[12]);

                if ($("#txt_sim_country_iso").val() != "") {
                    $('#cmbcountries').val($("#txt_sim_country_iso").val()).change();
                    $('#defaultCountry').val($("#txt_sim_country_iso").val()).change();
                    var option_c_flag = $('option:selected', $('#cmbcountries')).attr('flg');
                    var option_c_code = $('option:selected', $('#cmbcountries')).attr('ccode');
                    $('#imgcountryflag').attr('src', option_c_flag);
                    $('#spn_selected_country_code').html(option_c_code);
                }
                //$('#cmbcountries').trigger("change");

                 check_for_my_identity();

                 fillmyprofile();


                if ($("#inptsrvuid").val() != "") {
                    $('#btn_activate_deactivate').css('display', '');
                    $('#btn_activate_deactivate_inner_text').html(" De-activate");
                    $('#activate_deactivate_myModalbody').html("Are you sure you want to deactivate your account.");
                    $('#txt_next_account_status').val('d');
                    $('#btn_add_nick_name').css('display', '');
                }
                else {
                    $('#btn_activate_deactivate').css('display', '');
                    $('#btn_add_nick_name').css('display', '');

                }

                if (arr_p[13] != null) {
                    if (arr_p[13] != "") {
                        if (arr_p[13] == "a") {
                            $('#activate_deactivate_myModalbody').html("Are you sure you want to deactivate your account.");
                            $('#btn_activate_deactivate_inner_text').html(" De-activate");
                            $('#txt_next_account_status').val('d');

                        }
                        else {
                            $('#activate_deactivate_myModalbody').html("Are you sure you want to reactivate your account.");
                            $('#btn_activate_deactivate_inner_text').html(" Re-activate");
                            $('#txt_next_account_status').val('a');

                        }
                    }
                }

                if (arr_p[14] != null) {
                    if (arr_p[14] != "") {
                        $("#defaultCountry").val(arr_p[14]);
                    }
                }

                if ($('#txt_devuid').val() != "") {
                    if ($('#fullname').val() == "aliiii") {
                        if ($('#phonenbr').val() == "") {
                            //check_for_my_identity_on_the_server();
                        }
                    }
                }

                $("#fb_link").val(arr_p[15]);
                $("#gp_link").val(arr_p[16]);
                $("#tw_link").val(arr_p[17]);
                $("#lk_link").val(arr_p[18]);
                $("#sk_link").val(arr_p[19]);
                $("#sk_youtube").val(arr_p[20]);

                startup();
                get_random_social_people();

                fill_my_notifications();
                getpointscenter();
            }

        }

        function send_to_native() {
            var sel_c = $('option:selected', $('#defaultCountry')).val();
            if (sel_c == null) {
                sel_c = "+966";
            }
            var st = $('#fullname').val() + "~" + $('#phonenbr').val() + "~" + $('#email').val() + "~" + $('#address').val() + "~" + $('#inptsrvuid').val() + "~" + sel_c + "~" + $('#fb_link').val() + "~" + $('#gp_link').val() + "~" + $('#tw_link').val() + "~" + $('#lk_link').val() + "~" + $('#sk_link').val() + "~" + $('#sk_youtube').val();
            AndroidFunction.save_params(st);
        }


    </script>


</head>
<body style="zoom:80%;">
    <div class="nav-bar-container">

      
        <!-- BEGIN ICONS -->
        <div class="nav-menu">
            <div class="hamburger">
                <span class="patty"></span>
                <span class="patty"></span>
                <span class="patty"></span>
                <span class="patty"></span>
                <span class="patty"></span>
                <span class="patty"></span>
            </div><!--.hamburger-->
        </div><!--.nav-menu-->
        <div class="nav-search" id="nav-search" style=";">
            <span class="search"></span>
        </div><!--.nav-search-->
        <div class="nav-balance" id="nav-balance" style="color:#FFF888;font-size:13pt;background:#112233">

        </div><!--.nav-search-->
            
        <div class="nav-country" style="color:#FFF;font-size:11pt;width: auto !important;margin-left:10px;">
            <img id="imgcountryflag" src="cflags/NOTNA.png" style="height: 28px;margin-top: -1px;" />

            <span id="lbl_header_country_name">الدولة</span></div><!--.nav-search-->

        <div class="nav-user">
            <div class="user">
                <img id="img_main_profile_rounded" src="img/sad.png" alt="" style="width:50px;height:50px;">
                <span style="display:none;" class="badge" id="profile_badge_notif">3</span>
            </div><!--.user-->
            <div class="cross">
                <span class="line"></span>
                <span class="line"></span>
            </div><!--.cross-->
        </div><!--.nav-user-->
        <!-- END OF ICONS -->
        <div class="nav-bar-border"></div><!--.nav-bar-border-->
        <!-- BEGIN OVERLAY HELPERS -->
        <div class="overlay">
            <div class="starting-point">
                <span></span>
            </div><!--.starting-point-->
            <div class="logo">Ali</div><!--.logo-->
        </div><!--.overlay-->
        <div class="overlay-secondary"></div><!--.overlay-secondary-->
        <!-- END OF OVERLAY HELPERS -->
        <div id="loading_bar" class="loading-bar indeterminate" style="display:none"></div>
    </div><!--.nav-bar-container-->

    <div class="nav-bar-container" style="top: 58px !important;padding:5px 14px 0px 14px !important;background-color:#FFF;">
        <div class="row">
            <div class="col-sm search">
                <div class="form-group">
                    <input type="text" style="text-align:center;height:41px !important;font-size:11pt;color:#263238 !important;border: 1px solid #0288D1 !important;" id="srch-term" name="srch-term" class="form-control" placeholder=".إبحث هنا." />
				  <button id="btnsearch" style=" position: absolute;right: 0px;top: 0px;color:#ff00ff;  font-size: 22px;" class="btn btn-default">
                        <!--<i class="ion-search"></i>-->

                        <i class="ion-android-microphone" id="btnsearch_loop"></i>
                        <i class="glyphicon" id="btnsearch_loading" style="display: none;">
                            <img style="width: 13px;" src="img/spinner-rosetta-blue.gif" />
                        </i>

                    </button>

                    <span id="spn_selected_country_code" style="font-size: 12pt;position: absolute;z-index: 3;left: 4px;top: 8px;color: #44f; display:none"></span>
                </div>

                <div class="form-group" style="width:100%;margin-bottom:10px;">
                
                    <span id="spn_selected_country_code" style="font-size: 12pt;position: absolute;z-index: 3;left: 4px;top: 8px;color: #44f;display:none;"> </span>

                    <select style="float:left;" id="cmbcountries" tabindex="-1">
                        <option value="ALL" ccode="All" flg="cflags/NOTNA.png" selected>جميع الدول</option>
					    <option value="sa" ccode="+966" flg="cflags/sa.png">Saudi Arabia</option>
                        <option value="af" ccode="+93" flg="cflags/af.png">Afghanistan</option>
                        <option value="al" ccode="+355" flg="cflags/al.png">Albania</option>
                        <option value="dz" ccode="+213" flg="cflags/dz.png">Algeria</option>
                        <option value="as" ccode="+1684" flg="cflags/as.png">American Samoa</option>
                        <option value="ad" ccode="+376" flg="cflags/ad.png">Andorra</option>
                        <option value="ao" ccode="+244" flg="cflags/ao.png">Angola</option>
                        <option value="ai" ccode="+1264" flg="cflags/ai.png">Anguilla</option>
                        <option value="ag" ccode="+1268" flg="cflags/ag.png">Antigua And Barbuda</option>
                        <option value="aq" ccode="+6721" flg="cflags/aq.png">Antarctica</option>
                        <option value="ar" ccode="+54" flg="cflags/ar.png">Argentina</option>
                        <option value="am" ccode="+374" flg="cflags/am.png">Armenta</option>
                        <option value="aw" ccode="+297" flg="cflags/aw.png">Aruba</option>
                        <option value="au" ccode="+61" flg="cflags/au.png">Australia</option>
                        <option value="at" ccode="+43" flg="cflags/at.png">Austria</option>
                        <option value="az" ccode="+994" flg="cflags/az.png">Azerbaijan</option>

                        <option value="bs" ccode="+1242" flg="cflags/bs.png">Bahamas</option>
                        <option value="bh" ccode="+973" flg="cflags/bh.png">Bahrain</option>
                        <option value="bd" ccode="+880" flg="cflags/bd.png">Bangladesh</option>
                        <option value="bb" ccode="+1246" flg="cflags/bb.png">Barbados</option>
                        <option value="by" ccode="+375" flg="cflags/by.png">Belarus</option>
                        <option value="be" ccode="+32" flg="cflags/be.png">Belgium</option>
                        <option value="bz" ccode="+501" flg="cflags/bz.png">Belize</option>
                        <option value="bj" ccode="+229" flg="cflags/bj.png">Benin</option>
                        <option value="bm" ccode="+1441" flg="cflags/bm.png">Bermuda</option>
                        <option value="bt" ccode="+975" flg="cflags/bt.png">Bhitan</option>
                        <option value="bo" ccode="+591" flg="cflags/bo.png">Bolivia, Plurinational State Of</option>
                        <option value="bq" ccode="+599" flg="cflags/bq.png">Bonaire, Sint Eustatius And Saba</option>
                        <option value="ba" ccode="+387" flg="cflags/ba.png">Bosnia And Herzegovina</option>
                        <option value="bw" ccode="+267" flg="cflags/bw.png">Botswana</option>
                        <option value="bv" ccode="+47" flg="cflags/bv.png">Boubvet Island</option>
                        <option value="br" ccode="+55" flg="cflags/br.png">Brazil</option>
                        <option value="io" ccode="+246" flg="cflags/io.png">British Indian Oceam Territory</option>
                        <option value="bn" ccode="+673" flg="cflags/bn.png">Brunei Darussalam</option>
                        <option value="bg" ccode="+359" flg="cflags/bg.png">Bulgaria</option>
                        <option value="bf" ccode="+226" flg="cflags/bf.png">Burkina Faso</option>
                        <option value="bi" ccode="+257" flg="cflags/bi.png">Burundi</option>

                        <option value="kh" ccode="+57" flg="cflags/kh.png">Cambodia</option>
                        <option value="cm" ccode="+237" flg="cflags/cm.png">Cameroon</option>
                        <option value="ca" ccode="+1" flg="cflags/ca.png">Canada</option>
                        <option value="cv" ccode="+238" flg="cflags/cv.png">Cape Verde</option>
                        <option value="ky" ccode="+1345" flg="cflags/ky.png">Cayman Islands</option>
                        <option value="cf" ccode="+236" flg="cflags/cf.png">Central African Republic</option>
                        <option value="td" ccode="+235" flg="cflags/td.png">Chad</option>
                        <option value="cl" ccode="+56" flg="cflags/cl.png">Chile</option>
                        <option value="cn" ccode="+86" flg="cflags/cn.png">China</option>
                        <option value="cx" ccode="+61" flg="cflags/cx.png">Christmas Island</option>
                        <option value="cc" ccode="+61" flg="cflags/cc.png">Cocos (Keeling) Islands</option>
                        <option value="co" ccode="+855" flg="cflags/co.png">Colombia</option>
                        <option value="cg" ccode="+243" flg="cflags/cg.png">Congo</option>
                        <option value="cd" ccode="+242" flg="cflags/cd.png">
                            Congo, The Democtratic Republic
                            Of The
                        </option>
                        <option value="ck" ccode="+682" flg="cflags/ck.png">Cook Islands</option>
                        <option value="km" ccode="+269" flg="cflags/km.png">Comoros</option>
                        <option value="cr" ccode="+506" flg="cflags/cr.png">Costa Rica</option>
                        <option value="ci" ccode="+225" flg="cflags/ci.png">Cote D'livoire</option>
                        <option value="hr" ccode="+385" flg="cflags/hr.png">Croatia</option>
                        <option value="cu" ccode="+53" flg="cflags/cu.png">Cuba</option>
                        <option value="cw" ccode="+599" flg="cflags/cw.png">Curacao</option>
                        <option value="cy" ccode="+357" flg="cflags/cy.png">Cyprus</option>
                        <option value="cz" ccode="+420" flg="cflags/cz.png">Czech Republic</option>

                        <option value="dk" ccode="+45" flg="cflags/dk.png">Denmark</option>
                        <option value="dj" ccode="+253" flg="cflags/dj.png">Djibouti</option>
                        <option value="dm" ccode="+1767" flg="cflags/dm.png">Dominica</option>
                        <option value="do" ccode="+1809-1829-1849" flg="cflags/do.png">Dominican Republic</option>

                        <option value="ec" ccode="+593" flg="cflags/ec.png">Ecuador</option>
                        <option value="eg" ccode="+20" flg="cflags/eg.png">Egypt</option>
                        <option value="gq" ccode="+240" flg="cflags/gq.png">Equatorial Guinea</option>
                        <option value="er" ccode="+291" flg="cflags/er.png">Eritrea</option>
                        <option value="ee" ccode="+372" flg="cflags/ee.png">Estonia</option>
                        <option value="et" ccode="+251" flg="cflags/et.png">Ethiopia</option>

                        <option value="fk" ccode="+500" flg="cflags/fk.png">Falkland Islands (Malvinas)</option>
                        <option value="fo" ccode="+298" flg="cflags/fo.png">Faroe Islands</option>
                        <option value="fj" ccode="+679" flg="cflags/fj.png">Fiji</option>
                        <option value="fi" ccode="+358" flg="cflags/fi.png">Finland</option>
                        <option value="fr" ccode="+33" flg="cflags/fr.png">France</option>
                        <option value="gf" ccode="+594" flg="cflags/gf.png">French Guiana</option>
                        <option value="pf" ccode="+689" flg="cflags/pf.png">French Polynesia</option>

                        <option value="ga" ccode="+241" flg="cflags/ga.png">Gabon</option>
                        <option value="gm" ccode="+220" flg="cflags/gm.png">Gambia</option>
                        <option value="ge" ccode="+995" flg="cflags/ge.png">Georgia</option>
                        <option value="de" ccode="+49" flg="cflags/de.png">Germany</option>
                        <option value="gh" ccode="+233" flg="cflags/gh.png">Ghana</option>
                        <option value="gi" ccode="+350" flg="cflags/gi.png">Gibraltar</option>
                        <option value="gr" ccode="+30" flg="cflags/gr.png">Greece</option>
                        <option value="gl" ccode="+299" flg="cflags/gl.png">Greenland</option>
                        <option value="gd" ccode="+1473" flg="cflags/gd.png">Grenada</option>
                        <option value="gg" ccode="+44" flg="cflags/gg.png">Guernsey</option>
                        <option value="gt" ccode="+502" flg="cflags/gt.png">Guatemala</option>
                        <option value="gp" ccode="+590" flg="cflags/gp.png">Guadeloupe</option>
                        <option value="gu" ccode="+1671" flg="cflags/gu.png">Guam</option>
                        <option value="gn" ccode="+224" flg="cflags/gn.png">Guinea</option>
                        <option value="gw" ccode="+245" flg="cflags/gw.png">Guinea-Bissau</option>
                        <option value="gy" ccode="+592" flg="cflags/gy.png">Guyana</option>

                        <option value="ht" ccode="+509" flg="cflags/ht.png">Haiti</option>
                        <option value="hm" ccode="+" flg="cflags/hm.png">Heard Island And Mcdonald Islands</option>
                        <option value="va" ccode="+39" flg="cflags/va.png">Holy See (Vatican City State)</option>
                        <option value="hn" ccode="+504" flg="cflags/hn.png">Honduras</option>
                        <option value="hk" ccode="+852" flg="cflags/hk.png">Hong Kong</option>
                        <option value="hu" ccode="+36" flg="cflags/hu.png">Hungary</option>

                        <option value="is" ccode="+354" flg="cflags/is.png">Iceland</option>
                        <option value="in" ccode="+91" flg="cflags/in.png">India</option>
                        <option value="id" ccode="+62" flg="cflags/id.png">Indonesia</option>
                        <option value="ir" ccode="+98" flg="cflags/ir.png">Iran, Islamic Republic Of</option>
                        <option value="iq" ccode="+964" flg="cflags/iq.png">Iraq</option>
                        <option value="ie" ccode="+353" flg="cflags/ie.png">Ireland</option>
                        <option value="im" ccode="+44" flg="cflags/im.png">Isle Of Man</option>
                        <option value="il" ccode="+972" flg="cflags/il.png">Israel</option>
                        <option value="it" ccode="+39" flg="cflags/it.png">Italy</option>

                        <option value="jm" ccode="+1876" flg="cflags/jm.png">Jamaica</option>
                        <option value="jp" ccode="+81" flg="cflags/jp.png">Japan</option>
                        <option value="je" ccode="+44" flg="cflags/je.png">Jersey</option>
                        <option value="jo" ccode="+962" flg="cflags/jo.png">Jordan</option>

                        <option value="kz" ccode="+7" flg="cflags/kz.png">Kazakhstan</option>
                        <option value="ke" ccode="+254" flg="cflags/ke.png">Kenya</option>
                        <option value="ki" ccode="+686" flg="cflags/ki.png">Kiribati</option>
                        <option value="kp" ccode="+850" flg="cflags/kp.png">
                            Korea, Democratic People's Republic
                            Of
                        </option>
                        <option value="kr" ccode="+82" flg="cflags/kr.png">Korea, Rebuplic Of</option>
                        <option value="kw" ccode="+965" flg="cflags/kw.png">Kuwait</option>
                        <option value="kg" ccode="+996" flg="cflags/kg.png">Kyrgyztan</option>

                        <option value="la" ccode="+856" flg="cflags/la.png">Lao People's Democratic Republic</option>
                        <option value="lv" ccode="+371" flg="cflags/lv.png">Latvia</option>
                        <option value="lb" ccode="+961" flg="cflags/lb.png">Lebanon</option>
                        <option value="ls" ccode="+266" flg="cflags/ls.png">Lesotho</option>
                        <option value="lr" ccode="+231" flg="cflags/lr.png">Liberia</option>
                        <option value="ly" ccode="+218" flg="cflags/ly.png">Libya</option>
                        <option value="li" ccode="+423" flg="cflags/li.png">Liechtenstein</option>
                        <option value="lt" ccode="+370" flg="cflags/lt.png">Lithuania</option>
                        <option value="lu" ccode="+352" flg="cflags/lu.png">Luxembourg</option>

                        <option value="mo" ccode="+853" flg="cflags/mo.png">Macao</option>
                        <option value="mk" ccode="+389" flg="cflags/mk.png">
                            Macedonia, The Former Yugoslav Republic
                            Of
                        </option>
                        <option value="mg" ccode="+261" flg="cflags/mg.png">Madagascar</option>
                        <option value="mw" ccode="+265" flg="cflags/mw.png">Malawi</option>
                        <option value="my" ccode="+60" flg="cflags/my.png">Malaysia</option>
                        <option value="mv" ccode="+960" flg="cflags/mv.png">Maldives</option>
                        <option value="ml" ccode="+223" flg="cflags/ml.png">Mali</option>
                        <option value="mt" ccode="+356" flg="cflags/mt.png">Malta</option>
                        <option value="mq" ccode="+596" flg="cflags/mq.png">Marinique</option>
                        <option value="mh" ccode="+692" flg="cflags/mh.png">Marshall Islands</option>
                        <option value="mr" ccode="+222" flg="cflags/mr.png">Mauritania</option>
                        <option value="mu" ccode="+230" flg="cflags/mu.png">Mauritius</option>
                        <option value="yt" ccode="+262" flg="cflags/yt.png">Mayotte</option>
                        <option value="mx" ccode="+52" flg="cflags/mx.png">Mesxico</option>
                        <option value="fm" ccode="+691" flg="cflags/fm.png">Micronesta, Federated States Of</option>
                        <option value="md" ccode="+373" flg="cflags/md.png">Moldova, Republic Of</option>
                        <option value="mc" ccode="+377" flg="cflags/mc.png">Monaco</option>
                        <option value="mn" ccode="+967" flg="cflags/mn.png">Mongolia</option>
                        <option value="me" ccode="+382" flg="cflags/me.png">Montenegro</option>
                        <option value="ms" ccode="+1664" flg="cflags/ms.png">Montserrat</option>
                        <option value="ma" ccode="+212" flg="cflags/ma.png">Morocco</option>
                        <option value="mz" ccode="+258" flg="cflags/mz.png">Mozambique</option>
                        <option value="mm" ccode="+95" flg="cflags/mm.png">Myammar</option>
                        <option value="na" ccode="+264" flg="cflags/na.png">Namibia</option>
                        <option value="nr" ccode="+674" flg="cflags/nr.png">Nauru</option>
                        <option value="np" ccode="+977" flg="cflags/np.png">Nepla</option>
                        <option value="nl" ccode="+31" flg="cflags/nl.png">Netherlands</option>
                        <option value="nz" ccode="+64" flg="cflags/nz.png">New Zealand</option>
                        <option value="nc" ccode="+687" flg="cflags/nc.png">New Caledonia</option>
                        <option value="ni" ccode="+505" flg="cflags/ni.png">Nicaragua</option>
                        <option value="ne" ccode="+227" flg="cflags/ne.png">Niger</option>
                        <option value="ng" ccode="+234" flg="cflags/ng.png">Nigeria</option>
                        <option value="nu" ccode="+683" flg="cflags/nu.png">Niue</option>
                        <option value="nf" ccode="+6723" flg="cflags/nf.png">Norfolk Island</option>
                        <option value="mp" ccode="+1670" flg="cflags/mp.png">Northern Mariana Islands</option>
                        <option value="no" ccode="+47" flg="cflags/no.png">Norway</option>
                        <option value="om" ccode="+968" flg="cflags/om.png">Oman</option>
                        <option value="pk" ccode="+92" flg="cflags/pk.png">Pakistan</option>
                        <option value="pw" ccode="+680" flg="cflags/pw.png">Palau</option>
                        <option value="ps" ccode="+970" flg="cflags/ps.png">Palestinian Territory, Occupied</option>
                        <option value="pa" ccode="+507" flg="cflags/pa.png">Panama</option>
                        <option value="pg" ccode="+675" flg="cflags/pg.png">Papua New Guinea</option>
                        <option value="py" ccode="+595" flg="cflags/py.png">Paraguay</option>
                        <option value="pe" ccode="+51" flg="cflags/pe.png">Peru</option>
                        <option value="ph" ccode="+63" flg="cflags/ph.png">Philippines</option>
                        <option value="pn" ccode="+870" flg="cflags/pn.png">Pitcairn</option>
                        <option value="pl" ccode="+48" flg="cflags/pl.png">Poland</option>
                        <option value="pt" ccode="+351" flg="cflags/pt.png">Portugual</option>
                        <option value="pr" ccode="+1787-1939" flg="cflags/pr.png">Puerto Rico</option>
                        <option value="qa" ccode="+974" flg="cflags/qa.png">Qatar</option>
                        <option value="re" ccode="+262" flg="cflags/re.png">Reunion</option>
                        <option value="ro" ccode="+40" flg="cflags/ro.png">Romania</option>
                        <option value="ru" ccode="+7" flg="cflags/ru.png">Russian Federation</option>
                        <option value="rw" ccode="+250" flg="cflags/rw.png">Rwanda</option>
                        <option value="bl" ccode="+590" flg="cflags/bl.png">Saint Barthelemy</option>
                        <option value="kn" ccode="+1869" flg="cflags/kn.png">Saint Kitts And Nevis</option>
                        <option value="lc" ccode="+1758" flg="cflags/lc.png">Saint Lucia</option>
                        <option value="sh" ccode="+290" flg="cflags/sh.png">
                            Saint Helena, Ascension And Tristan
                            Da Cunha
                        </option>
                        <option value="mf" ccode="+590" flg="cflags/mf.png">Saint Martin (French Part)</option>
                        <option value="pm" ccode="+508" flg="cflags/pm.png">Saint Pierre And Miquelon</option>
                        <option value="vc" ccode="+1784" flg="cflags/vc.png">Saint Vincent And The Grenadines</option>
                        <option value="ws" ccode="+685" flg="cflags/ws.png">Samoa</option>
                        <option value="sm" ccode="+378" flg="cflags/sm.png">San Marino</option>
                        <option value="st" ccode="+239" flg="cflags/st.png">Sao Tome And Principe</option>      
                        <option value="sn" ccode="+221" flg="cflags/sn.png">Senegal</option>
                        <option value="rs" ccode="+381" flg="cflags/rs.png">Serbia</option>
                        <option value="sc" ccode="+248" flg="cflags/sc.png">Seychelles</option>
                        <option value="sl" ccode="+232" flg="cflags/sl.png">Sierra Leone</option>
                        <option value="sg" ccode="+65" flg="cflags/sg.png">Singapore</option>
                        <option value="sx" ccode="+590" flg="cflags/sx.png">Sint Maarten (Dutch Part)</option>
                        <option value="sk" ccode="+421" flg="cflags/sk.png">Slovakia</option>
                        <option value="si" ccode="+386" flg="cflags/si.png">Slovenia</option>
                        <option value="sb" ccode="+677" flg="cflags/sb.png">Solomon Islands</option>
                        <option value="so" ccode="+252" flg="cflags/so.png">Somalia</option>
                        <option value="za" ccode="+27" flg="cflags/za.png">South Africa</option>
                        <option value="ss" ccode="+211" flg="cflags/ss.png">South Sudan</option>
                        <option value="es" ccode="+34" flg="cflags/es.png">Spain</option>
                        <option value="lk" ccode="+94" flg="cflags/lk.png">Sri Lanka</option>
                        <option value="gs" ccode="+" flg="cflags/gs.png">
                            South Georgia And The South Sandwich
                            Islands
                        </option>
                        <option value="sd" ccode="+249" flg="cflags/sd.png">Sudan</option>
                        <option value="sr" ccode="+597" flg="cflags/sr.png">Suriname</option>
                        <option value="sj" ccode="+47" flg="cflags/sj.png">Svalbard And Jan Mayen</option>
                        <option value="sz" ccode="+41" flg="cflags/sz.png">Swaziland</option>
                        <option value="se" ccode="+46" flg="cflags/se.png">Sweden</option>
                        <option value="ch" ccode="+41" flg="cflags/ch.png">Switzerland</option>
                        <option value="sy" ccode="+963" flg="cflags/sy.png">Syrian Arab Republic</option>
                        <option value="tw" ccode="+886" flg="cflags/tw.png">Taiwan, Province Of China</option>
                        <option value="tj" ccode="+992" flg="cflags/tj.png">Tajikistan</option>
                        <option value="tz" ccode="+255" flg="cflags/tz.png">Tanzania, United Republic Of</option>
                        <option value="th" ccode="+66" flg="cflags/th.png">Thailand</option>
                        <option value="tl" ccode="+670" flg="cflags/tl.png">Timor-Leste</option>
                        <option value="tg" ccode="+228" flg="cflags/tg.png">Togo</option>
                        <option value="to" ccode="+676" flg="cflags/to.png">Tonga</option>
                        <option value="tt" ccode="+1868" flg="cflags/tt.png">Trinidad And Tobago</option>
                        <option value="tk" ccode="+690" flg="cflags/tk.png">Tokelau</option>
                        <option value="tn" ccode="+216" flg="cflags/tn.png">Tunisia</option>
                        <option value="tr" ccode="+90" flg="cflags/tr.png">Turkey</option>
                        <option value="tm" ccode="+993" flg="cflags/tm.png">Turkmenistan</option>
                        <option value="tv" ccode="+688" flg="cflags/tv.png">Tuvalu</option>
                        <option value="tc" ccode="+1649" flg="cflags/tc.png">Turks And Caicos Islands</option>
                        <option value="ug" ccode="+256" flg="cflags/ug.png">Uganda</option>
                        <option value="ua" ccode="+380" flg="cflags/ua.png">Ukraine</option>
                        <option value="ae" ccode="+971" flg="cflags/ae.png">United Arab Emirates</option>
                        <option value="gb" ccode="+44" flg="cflags/gb.png">United Kingdom</option>
                        <option value="us" ccode="+1" flg="cflags/us.png">United States</option>
                        <option value="um" ccode="+699" flg="cflags/um.png">United States Minor Outlying Islands</option>
                        <option value="uy" ccode="+598" flg="cflags/uy.png">Uruguay</option>
                        <option value="uz" ccode="+998" flg="cflags/uz.png">Uzbekistan</option>
                        <option value="vu" ccode="+678" flg="cflags/vu.png">Vanuatu</option>
                        <option value="ve" ccode="+58" flg="cflags/ve.png">Venzuela, Bolivarian Republic Of</option>
                        <option value="vn" ccode="+84" flg="cflags/vn.png">Viet Nam</option>
                        <option value="vg" ccode="+1284" flg="cflags/vg.png">Virgin Islands, British</option>
                        <option value="vi" ccode="+1340" flg="cflags/vi.png">Virgin Islands, U.S.</option>
                        <option value="wf" ccode="+681" flg="cflags/wf.png">Wallis And Futuna</option>
                        <option value="eh" ccode="+212" flg="cflags/eh.png">Western Sahara</option>
                        <option value="ye" ccode="+967" flg="cflags/ye.png">Yemen</option>
                        <option value="zm" ccode="+260" flg="cflags/zm.png">Zambia</option>
                        <option value="zw" ccode="+263" flg="cflags/zw.png">Zimbabwe</option>
                    </select>

				  <div id="cmb_countries_firer" style="width:42px;float:right;display:none">
                        <div class="btn btn-default" style="height: 32px;">

						  <i class="glyphicon" id="btnsearch_loading" style="display:none;">

                            </i>
                        </div>
                    </div>


                </div>
			  <h4 style="float:left;"> اللي حولك<small id="txt_near_country_name"> </small></h4>
                <ol class="breadcrumb">
                    <li style="float:right; display:none"><a style="text-decoration: underline;" href="#" id="header_logo">إكتشاف</a></li>
                </ol>
            </div>
        </div><!--.row-->
    </div><!--.page-header-->


    <div class="content">
        <div class="row" id="random_people" style="margin-top: 124px;">
            <input type="text" id="txt_loaded_random_people" />
            <div class="panel" id="random_social_l_1">
                <div class="panel-body">
                    <div id="li_random_social"></div>
                </div>
                <div class="panel-footer" style="margin-bottom: 120px;">
                    <div id="pnl_random_social_footer">
                        <table align="center" id="btn_load_more_social" class="load-more-social" style="display:none; height:80px;width:100%;" data-icon="refresh">
                            <tr>
                                <td style="vertical-align:middle">
                                    <img src="img/interact.png" style="width:48px;float:right;" />
                                </td>
                                <td style="vertical-align:middle">
                                    <span style="color:#669900;">الرجاء الإنتظار ...</span>
                                </td>
                                <td style="vertical-align:middle">
                                    <div id="dvsocialloadmorewait"></div>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>

        </div>
        <div class="row" id="near_by_locations" style="margin-top:10px;display:none;text-align:center;margin-top: 124px;">

            <div class="col-lg-3 col-md-6 places_area" tps="28|30|47|50|72|73|85|95" id="l_p_1">
                <div class="panel panel-grey">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-medkit fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Health</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="1|6|8|35|51|77|78" id="l_p_2">
                <div class="panel panel-red">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-bank fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Banking</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="7|9|15|38|43|56|60|61|67|79" id="l_p_3">
                <div class="panel panel-yellow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-cutlery fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Foods</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="14|17|18|19|20|36|41|65|70|81|89|91|92|93" id="l_p_4">
                <div class="panel panel-blue">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-taxi fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Taxi</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="12|55|82|94" id="l_p_5">
                <div class="panel panel-dam_khanzir">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-mortar-board fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">School</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="3|4|16|69|71|96|98" id="l_p_6">
                <div class="panel panel-pustashe">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-linux fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Zoo</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="2|93" id="l_p_7">
                <div class="panel panel-grey">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-plane fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Airport</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="5|13|21|44|63|64|66|68|86" id="l_p_8">
                <div class="panel panel-red">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-glass fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Fun</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="24|27|33|42|54|57|76|99" id="l_p_9">
                <div class="panel panel-green">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-legal fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Governmental</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="22|23|39|48|62|74|90" id="l_p_10">
                <div class="panel panel-yellow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-male fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Worship places</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="11|25|26|29|32|37|40|46|49|52|83|84|87|88|100|101|102|103" id="l_p_11">
                <div class="panel panel-grey">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-shopping-cart fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Shopping</span>

                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 places_area" tps="10|31|34|45|53|58|59|75|80" id="l_p_12">
                <div class="panel panel-dam_khanzir">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <b class="fa fa-heart fa-5x"></b>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="panel-footer">
                            <span class="pull-left">Others</span>
                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <div class="row" id="places_result" style="margin:2px;padding:2px;display:none;margin-top: 124px;">
            <div class="panel" id="places_result_l_1">
                <div class="panel-heading well" style="height: 42px;">
                    <div style="float:right;display:none;" id="places_result_effect"></div><div id="sub_places_result_effect" style="float:left;"> Search Result</div>
                    <div id="places_result_back" style="display:none;"><img style="float: right;margin-top: -5px;height:36px;" src="img\ic_undo_black_48dp.png" /></div>

                </div>

                <div class="panel-body">
                    <div id="li_places_result" style="margin-bottom: 30px; padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel-footer">
                    <div id="pnl_places_footer"></div>
                </div>
            </div>
        </div>
        <div class="row" id="hot_search_result" style="margin:2px;padding:2px;display:none;margin-top: 124px;" >

            <div class="panel panel-info">
                <div class="panel-heading" style="height: 42px;">
                    <div style="float:right" id="hot_search_result_effect"></div><div style="float:left;">Today's Search Trend</div>
                    <div id="hot_search_result_back" style="display:none;"><img style="float: right;margin-top: -5px;height:36px;" src="img\ic_undo_black_48dp.png" /></div>

                </div>
                <div class="panel-body">
                    <div id="li_hot_search_result" style="margin-bottom: 30px; padding-bottom: 30px;">
                    </div>

                </div>
                <div class="panel-footer">
                    <div id="pnl_hot_search_footer"></div>
                </div>
            </div>

        </div>
        <div class="row" id="my_friend" style="margin:2px;padding:2px;display:none;margin-top: 124px;" >

            <div class="panel panel-info">
                <div class="panel-heading" style="height: 42px;">
                    <div style="float:right" id="my_friend_result_effect"></div><div style="float:left;">My friends</div>
                    <div id="my_friend_result_back" style="display:none;"><img style="float: right;margin-top: -5px;height:36px;" src="img\ic_undo_black_48dp.png" /></div>

                </div>
                <div class="panel-body">
                    <div id="li_my_friend_result" style="margin-bottom: 30px; padding-bottom: 30px;">
                    </div>

                </div>
                <div class="panel-footer">
                    <div id="pnl_my_friend_footer"></div>
                </div>
            </div>

        </div>
        <div class="row" id="search_result" style="display:none;margin-top: 124px;">

            <div class="panel panel-info">
                <div class="panel-heading well" style="height: 42px;">
                    <div style="float:right" id="result_effect"></div><div id="sub_result_effect" style="float:left;width:90%;"> Search Result</div>
                    <div id="search_result_back" style="display:none;width:8%;float:right;"><img style="float: right;margin-top: -5px;height:36px;" src="img\ic_undo_black_48dp.png" /></div>

                </div>
                <div class="panel-body">
                    <div id="li_rearch_result" style="margin-bottom: 30px; padding-bottom: 30px;">
                    </div>

                </div>
                <div class="panel-footer">
                    <div id="pnl_result_footer_load_more" style="width:100%;margin-bottom:10px;"></div>

                    <div id="pnl_result_footer" style="width:100%;margin-top:10px;margin-bottom:10px;"></div>
                </div>
            </div>

        </div>
        <div class="row" id="my_friend_profile" style="margin:2px;padding:2px;display:none;margin-top: 124px;">
            <div class="panel panel-info">
                <div class="panel-heading" style="height: 42px;">
                    <div style="float:right" id="my_friend_profile_result_effect"></div><div style="float:left;"></div>
                    <div id="my_friend_profile_result_back" style="display:none;"><img style="float: right;margin-top: -5px;height:36px;" src="img\ic_undo_black_48dp.png" /></div>

                </div>
                <div class="panel-body">
                    <div id="li_my_friend_profile_result" style="margin-bottom: 30px; padding-bottom: 30px;">
                    </div>

                </div>
                <div class="panel-footer">
                    <div id="pnl_my_friend_profile_footer"></div>
                </div>
            </div>
        </div>

    </div>
    <div class="layer-container">
        <!-- BEGIN MENU LAYER -->
        <div class="menu-layer">
            <ul>
                <li data-open-after="true">
				  <a href="#" id="left_menu_home">الشاشة الرئيسية</a>
                </li>
                <li data-open-after="true">
				  <a href="#" id="left_menu_near_by_places">الاماكن المجاورة</a>
                </li>
                <li data-open-after="true">
                    <a href="#" id="li_hot_search">الأكثر بحثآ</a>
                </li>
                <li data-open-after="true">
				  <a href="#" id="li_search_history">تاريخ البحث</a>
                </li>
                <li data-open-after="true">
                    <a href="#" id="li_my_friend">أصدقائي</a>
                </li>
                <li data-open-after="true">
                    <a href="#" id="left_menu_share_with_friends">مشاركة</a>
                </li>
                <li data-open-after="true">
                    <a href="#" id="left_menu_remove_ads">حذف الإعلانات</a>
                </li>
                <li data-open-after="true">
                    <div class="social-icon">
                        <a href="https://www.facebook.com/pages/Pro-Caller/755235677907277?ref=hl"><i class="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/TheProCaller"><i class="fa fa-twitter"></i></a>
                        <a href="https://plus.google.com/113340926013843758264" rel="publisher"><i class="fa fa-google-plus"></i></a>
                    </div>
                </li>

            </ul>
        </div><!--.menu-layer-->
        <!-- END OF MENU LAYER -->
        <!-- BEGIN SEARCH LAYER -->
        <div class="search-layer">
            <div class="search">
                <form action="pages-search-results.html"></form>
            </div><!--.search-->
            <div class="results">
                <div class="row">
                </div><!--.row-->
            </div><!--.results-->
        </div><!--.search-layer-->
        <!-- END OF SEARCH LAYER -->
        <!-- BEGIN USER LAYER -->
        <div class="user-layer">
            <ul class="nav nav-tabs nav-justified" role="tablist">

                <li class="active"><a href="#settings" data-toggle="tab">ملف التعريف</a></li>
                <li style=";"><a href="#messages" data-toggle="tab">البريد</a></li>          				
				<li><a href="#notifications" data-toggle="tab">الإخطارات <span id="inner_badge_notif" class="badge" style="">3</span></a></li>
			  <li><a href="#" data-toggle="tab">الإخطارات <span id="inner_badge_notif" class="badge" style="">4</span></a></li>
            </ul>
			
            <div class="row no-gutters tab-content">
                <div class="tab-pane fade in active" id="settings">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="settings-panel">
                            <ul>
                                <li>
                                    <div class="panel-body">
                                        <div style="float: right;margin-right: -14px;margin-top: -13px;">
                                            <img src="img/ringtones_setting.png" style="position:relative;float:right;" id="btnsettings" />
                                        </div>
                                        <form role="form">
                                            <fieldset>
                                                <div style="width: 100%; margin-top: 10px; margin-bottom: 10px;" id="dv_profile_image_container">
                                                    <div id="ImgInfo_container" class="ImgInfo" style="background-image: url(img/sad_black.png);
											background-repeat: no-repeat; background-position: left top; background-attachment: scroll;
											-moz-background-size: 100%; -o-background-size: 100%; background-size: 100%;">

                                                        <ul class="photo_gallery_imgprofile" style="padding-left:1px; margin-bottom: 1px;list-style-type: none;">
                                                            <li>
                                                                <!--<a id="photo_gallery_imgprofile_href" rel="photo_gallery_imgprofile" href=""
                                                                title="Profile Photo" class="swipebox">-->
                                                                <img src="" id="imgprofile"
                                                                     alt="image" style="width: 100%;height: 100%;max-height: 115px;padding: 1px;display:none;" /><!--</a-->
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div style="padding: 1px !important;text-align: center;margin-top: 50px;margin-bottom: 50px;">


                                                        <a style="width: 120px;font-size:15px;" class="btn btn-default" id="btn_open_camera"><span class="ion-android-camera"></span> الكاميرا </a>


                                                        <a style="width: 120px;font-size:15px;" class="btn btn-default" id="btn_open_album"><span class="ion-android-image"></span> الاستيديو </a>



                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Fullname</label>
                                                    <input id="fullname" class="form-control" name="fullname" type="text">
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label">Country</label>
                                                    <select id="defaultCountry" class="form-control populate select2-offscreen" tabindex="-1" style="height: 38px; font-size: 9pt;disblay:none ">

                                                        <option value="" selected>Your country</option>
                                                        
                                                        
                                                         <option value="ALL" ccode="All" flg="cflags/NOTNA.png" selected>جميع الدول</option>                                                        
                                                                                      <option value="sa" ccode="+966" flg="cflags/sa.png">المملكة العربية السعودية</option>
                                                           <option value="af" ccode="+93" flg="cflags/af.png">Afghanistan</option>
                                                        <option value="al" ccode="+355" flg="cflags/al.png">Albania</option>
                                                        <option value="dz" ccode="+213" flg="cflags/dz.png">Algeria</option>
                                                        <option value="as" ccode="+1684" flg="cflags/as.png">American Samoa</option>
                                                        <option value="ad" ccode="+376" flg="cflags/ad.png">Andorra</option>
                                                        <option value="ao" ccode="+244" flg="cflags/ao.png">Angola</option>
                                                        <option value="ai" ccode="+1264" flg="cflags/ai.png">Anguilla</option>
                                                        <option value="ag" ccode="+1268" flg="cflags/ag.png">Antigua And Barbuda</option>
                                                        <option value="aq" ccode="+6721" flg="cflags/aq.png">Antarctica</option>
                                                        <option value="ar" ccode="+54" flg="cflags/ar.png">Argentina</option>
                                                        <option value="am" ccode="+374" flg="cflags/am.png">Armenta</option>
                                                        <option value="aw" ccode="+297" flg="cflags/aw.png">Aruba</option>
                                                        <option value="au" ccode="+61" flg="cflags/au.png">Australia</option>
                                                        <option value="at" ccode="+43" flg="cflags/at.png">Austria</option>
                                                        <option value="az" ccode="+994" flg="cflags/az.png">Azerbaijan</option>

                                                        <option value="bs" ccode="+1242" flg="cflags/bs.png">Bahamas</option>
                                                        <option value="bh" ccode="+973" flg="cflags/bh.png">Bahrain</option>
                                                        <option value="bd" ccode="+880" flg="cflags/bd.png">Bangladesh</option>
                                                        <option value="bb" ccode="+1246" flg="cflags/bb.png">Barbados</option>
                                                        <option value="by" ccode="+375" flg="cflags/by.png">Belarus</option>
                                                        <option value="be" ccode="+32" flg="cflags/be.png">Belgium</option>
                                                        <option value="bz" ccode="+501" flg="cflags/bz.png">Belize</option>
                                                        <option value="bj" ccode="+229" flg="cflags/bj.png">Benin</option>
                                                        <option value="bm" ccode="+1441" flg="cflags/bm.png">Bermuda</option>
                                                        <option value="bt" ccode="+975" flg="cflags/bt.png">Bhitan</option>
                                                        <option value="bo" ccode="+591" flg="cflags/bo.png">Bolivia, Plurinational State Of</option>
                                                        <option value="bq" ccode="+599" flg="cflags/bq.png">Bonaire, Sint Eustatius And Saba</option>
                                                        <option value="ba" ccode="+387" flg="cflags/ba.png">Bosnia And Herzegovina</option>
                                                        <option value="bw" ccode="+267" flg="cflags/bw.png">Botswana</option>
                                                        <option value="bv" ccode="+47" flg="cflags/bv.png">Boubvet Island</option>
                                                        <option value="br" ccode="+55" flg="cflags/br.png">Brazil</option>
                                                        <option value="io" ccode="+246" flg="cflags/io.png">British Indian Oceam Territory</option>
                                                        <option value="bn" ccode="+673" flg="cflags/bn.png">Brunei Darussalam</option>
                                                        <option value="bg" ccode="+359" flg="cflags/bg.png">Bulgaria</option>
                                                        <option value="bf" ccode="+226" flg="cflags/bf.png">Burkina Faso</option>
                                                        <option value="bi" ccode="+257" flg="cflags/bi.png">Burundi</option>

                                                        <option value="kh" ccode="+57" flg="cflags/kh.png">Cambodia</option>
                                                        <option value="cm" ccode="+237" flg="cflags/cm.png">Cameroon</option>
                                                        <option value="ca" ccode="+1" flg="cflags/ca.png">Canada</option>
                                                        <option value="cv" ccode="+238" flg="cflags/cv.png">Cape Verde</option>
                                                        <option value="ky" ccode="+1345" flg="cflags/ky.png">Cayman Islands</option>
                                                        <option value="cf" ccode="+236" flg="cflags/cf.png">Central African Republic</option>
                                                        <option value="td" ccode="+235" flg="cflags/td.png">Chad</option>
                                                        <option value="cl" ccode="+56" flg="cflags/cl.png">Chile</option>
                                                        <option value="cn" ccode="+86" flg="cflags/cn.png">China</option>
                                                        <option value="cx" ccode="+61" flg="cflags/cx.png">Christmas Island</option>
                                                        <option value="cc" ccode="+61" flg="cflags/cc.png">Cocos (Keeling) Islands</option>
                                                        <option value="co" ccode="+855" flg="cflags/co.png">Colombia</option>
                                                        <option value="cg" ccode="+243" flg="cflags/cg.png">Congo</option>
                                                        <option value="cd" ccode="+242" flg="cflags/cd.png">
                                                            Congo, The Democtratic Republic
                                                            Of The
                                                        </option>
                                                        <option value="ck" ccode="+682" flg="cflags/ck.png">Cook Islands</option>
                                                        <option value="km" ccode="+269" flg="cflags/km.png">Comoros</option>
                                                        <option value="cr" ccode="+506" flg="cflags/cr.png">Costa Rica</option>
                                                        <option value="ci" ccode="+225" flg="cflags/ci.png">Cote D'livoire</option>
                                                        <option value="hr" ccode="+385" flg="cflags/hr.png">Croatia</option>
                                                        <option value="cu" ccode="+53" flg="cflags/cu.png">Cuba</option>
                                                        <option value="cw" ccode="+599" flg="cflags/cw.png">Curacao</option>
                                                        <option value="cy" ccode="+357" flg="cflags/cy.png">Cyprus</option>
                                                        <option value="cz" ccode="+420" flg="cflags/cz.png">Czech Republic</option>

                                                        <option value="dk" ccode="+45" flg="cflags/dk.png">Denmark</option>
                                                        <option value="dj" ccode="+253" flg="cflags/dj.png">Djibouti</option>
                                                        <option value="dm" ccode="+1767" flg="cflags/dm.png">Dominica</option>
                                                        <option value="do" ccode="+1809-1829-1849" flg="cflags/do.png">Dominican Republic</option>

                                                        <option value="ec" ccode="+593" flg="cflags/ec.png">Ecuador</option>
                                                        <option value="eg" ccode="+20" flg="cflags/eg.png">Egypt</option>
                                                        <option value="gq" ccode="+240" flg="cflags/gq.png">Equatorial Guinea</option>
                                                        <option value="er" ccode="+291" flg="cflags/er.png">Eritrea</option>
                                                        <option value="ee" ccode="+372" flg="cflags/ee.png">Estonia</option>
                                                        <option value="et" ccode="+251" flg="cflags/et.png">Ethiopia</option>

                                                        <option value="fk" ccode="+500" flg="cflags/fk.png">Falkland Islands (Malvinas)</option>
                                                        <option value="fo" ccode="+298" flg="cflags/fo.png">Faroe Islands</option>
                                                        <option value="fj" ccode="+679" flg="cflags/fj.png">Fiji</option>
                                                        <option value="fi" ccode="+358" flg="cflags/fi.png">Finland</option>
                                                        <option value="fr" ccode="+33" flg="cflags/fr.png">France</option>
                                                        <option value="gf" ccode="+594" flg="cflags/gf.png">French Guiana</option>
                                                        <option value="pf" ccode="+689" flg="cflags/pf.png">French Polynesia</option>

                                                        <option value="ga" ccode="+241" flg="cflags/ga.png">Gabon</option>
                                                        <option value="gm" ccode="+220" flg="cflags/gm.png">Gambia</option>
                                                        <option value="ge" ccode="+995" flg="cflags/ge.png">Georgia</option>
                                                        <option value="de" ccode="+49" flg="cflags/de.png">Germany</option>
                                                        <option value="gh" ccode="+233" flg="cflags/gh.png">Ghana</option>
                                                        <option value="gi" ccode="+350" flg="cflags/gi.png">Gibraltar</option>
                                                        <option value="gr" ccode="+30" flg="cflags/gr.png">Greece</option>
                                                        <option value="gl" ccode="+299" flg="cflags/gl.png">Greenland</option>
                                                        <option value="gd" ccode="+1473" flg="cflags/gd.png">Grenada</option>
                                                        <option value="gg" ccode="+44" flg="cflags/gg.png">Guernsey</option>
                                                        <option value="gt" ccode="+502" flg="cflags/gt.png">Guatemala</option>
                                                        <option value="gp" ccode="+590" flg="cflags/gp.png">Guadeloupe</option>
                                                        <option value="gu" ccode="+1671" flg="cflags/gu.png">Guam</option>
                                                        <option value="gn" ccode="+224" flg="cflags/gn.png">Guinea</option>
                                                        <option value="gw" ccode="+245" flg="cflags/gw.png">Guinea-Bissau</option>
                                                        <option value="gy" ccode="+592" flg="cflags/gy.png">Guyana</option>

                                                        <option value="ht" ccode="+509" flg="cflags/ht.png">Haiti</option>
                                                        <option value="hm" ccode="+" flg="cflags/hm.png">Heard Island And Mcdonald Islands</option>
                                                        <option value="va" ccode="+39" flg="cflags/va.png">Holy See (Vatican City State)</option>
                                                        <option value="hn" ccode="+504" flg="cflags/hn.png">Honduras</option>
                                                        <option value="hk" ccode="+852" flg="cflags/hk.png">Hong Kong</option>
                                                        <option value="hu" ccode="+36" flg="cflags/hu.png">Hungary</option>

                                                        <option value="is" ccode="+354" flg="cflags/is.png">Iceland</option>
                                                        <option value="in" ccode="+91" flg="cflags/in.png">India</option>
                                                        <option value="id" ccode="+62" flg="cflags/id.png">Indonesia</option>
                                                        <option value="ir" ccode="+98" flg="cflags/ir.png">Iran, Islamic Republic Of</option>
                                                        <option value="iq" ccode="+964" flg="cflags/iq.png">Iraq</option>
                                                        <option value="ie" ccode="+353" flg="cflags/ie.png">Ireland</option>
                                                        <option value="im" ccode="+44" flg="cflags/im.png">Isle Of Man</option>
                                                        <option value="il" ccode="+972" flg="cflags/il.png">Israel</option>
                                                        <option value="it" ccode="+39" flg="cflags/it.png">Italy</option>

                                                        <option value="jm" ccode="+1876" flg="cflags/jm.png">Jamaica</option>
                                                        <option value="jp" ccode="+81" flg="cflags/jp.png">Japan</option>
                                                        <option value="je" ccode="+44" flg="cflags/je.png">Jersey</option>
                                                        <option value="jo" ccode="+962" flg="cflags/jo.png">Jordan</option>

                                                        <option value="kz" ccode="+7" flg="cflags/kz.png">Kazakhstan</option>
                                                        <option value="ke" ccode="+254" flg="cflags/ke.png">Kenya</option>
                                                        <option value="ki" ccode="+686" flg="cflags/ki.png">Kiribati</option>
                                                        <option value="kp" ccode="+850" flg="cflags/kp.png">
                                                            Korea, Democratic People's Republic
                                                            Of
                                                        </option>
                                                        <option value="kr" ccode="+82" flg="cflags/kr.png">Korea, Rebuplic Of</option>
                                                        <option value="kw" ccode="+965" flg="cflags/kw.png">Kuwait</option>
                                                        <option value="kg" ccode="+996" flg="cflags/kg.png">Kyrgyztan</option>

                                                        <option value="la" ccode="+856" flg="cflags/la.png">Lao People's Democratic Republic</option>
                                                        <option value="lv" ccode="+371" flg="cflags/lv.png">Latvia</option>
                                                        <option value="lb" ccode="+961" flg="cflags/lb.png">Lebanon</option>
                                                        <option value="ls" ccode="+266" flg="cflags/ls.png">Lesotho</option>
                                                        <option value="lr" ccode="+231" flg="cflags/lr.png">Liberia</option>
                                                        <option value="ly" ccode="+218" flg="cflags/ly.png">Libya</option>
                                                        <option value="li" ccode="+423" flg="cflags/li.png">Liechtenstein</option>
                                                        <option value="lt" ccode="+370" flg="cflags/lt.png">Lithuania</option>
                                                        <option value="lu" ccode="+352" flg="cflags/lu.png">Luxembourg</option>

                                                        <option value="mo" ccode="+853" flg="cflags/mo.png">Macao</option>
                                                        <option value="mk" ccode="+389" flg="cflags/mk.png">
                                                            Macedonia, The Former Yugoslav Republic
                                                            Of
                                                        </option>
                                                        <option value="mg" ccode="+261" flg="cflags/mg.png">Madagascar</option>
                                                        <option value="mw" ccode="+265" flg="cflags/mw.png">Malawi</option>
                                                        <option value="my" ccode="+60" flg="cflags/my.png">Malaysia</option>
                                                        <option value="mv" ccode="+960" flg="cflags/mv.png">Maldives</option>
                                                        <option value="ml" ccode="+223" flg="cflags/ml.png">Mali</option>
                                                        <option value="mt" ccode="+356" flg="cflags/mt.png">Malta</option>
                                                        <option value="mq" ccode="+596" flg="cflags/mq.png">Marinique</option>
                                                        <option value="mh" ccode="+692" flg="cflags/mh.png">Marshall Islands</option>
                                                        <option value="mr" ccode="+222" flg="cflags/mr.png">Mauritania</option>
                                                        <option value="mu" ccode="+230" flg="cflags/mu.png">Mauritius</option>
                                                        <option value="yt" ccode="+262" flg="cflags/yt.png">Mayotte</option>
                                                        <option value="mx" ccode="+52" flg="cflags/mx.png">Mesxico</option>
                                                        <option value="fm" ccode="+691" flg="cflags/fm.png">Micronesta, Federated States Of</option>
                                                        <option value="md" ccode="+373" flg="cflags/md.png">Moldova, Republic Of</option>
                                                        <option value="mc" ccode="+377" flg="cflags/mc.png">Monaco</option>
                                                        <option value="mn" ccode="+967" flg="cflags/mn.png">Mongolia</option>
                                                        <option value="me" ccode="+382" flg="cflags/me.png">Montenegro</option>
                                                        <option value="ms" ccode="+1664" flg="cflags/ms.png">Montserrat</option>
                                                        <option value="ma" ccode="+212" flg="cflags/ma.png">Morocco</option>
                                                        <option value="mz" ccode="+258" flg="cflags/mz.png">Mozambique</option>
                                                        <option value="mm" ccode="+95" flg="cflags/mm.png">Myammar</option>
                                                        <option value="na" ccode="+264" flg="cflags/na.png">Namibia</option>
                                                        <option value="nr" ccode="+674" flg="cflags/nr.png">Nauru</option>
                                                        <option value="np" ccode="+977" flg="cflags/np.png">Nepla</option>
                                                        <option value="nl" ccode="+31" flg="cflags/nl.png">Netherlands</option>
                                                        <option value="nz" ccode="+64" flg="cflags/nz.png">New Zealand</option>
                                                        <option value="nc" ccode="+687" flg="cflags/nc.png">New Caledonia</option>
                                                        <option value="ni" ccode="+505" flg="cflags/ni.png">Nicaragua</option>
                                                        <option value="ne" ccode="+227" flg="cflags/ne.png">Niger</option>
                                                        <option value="ng" ccode="+234" flg="cflags/ng.png">Nigeria</option>
                                                        <option value="nu" ccode="+683" flg="cflags/nu.png">Niue</option>
                                                        <option value="nf" ccode="+6723" flg="cflags/nf.png">Norfolk Island</option>
                                                        <option value="mp" ccode="+1670" flg="cflags/mp.png">Northern Mariana Islands</option>
                                                        <option value="no" ccode="+47" flg="cflags/no.png">Norway</option>
                                                        <option value="om" ccode="+968" flg="cflags/om.png">Oman</option>
                                                        <option value="pk" ccode="+92" flg="cflags/pk.png">Pakistan</option>
                                                        <option value="pw" ccode="+680" flg="cflags/pw.png">Palau</option>
                                                        <option value="ps" ccode="+970" flg="cflags/ps.png">Palestinian Territory, Occupied</option>
                                                        <option value="pa" ccode="+507" flg="cflags/pa.png">Panama</option>
                                                        <option value="pg" ccode="+675" flg="cflags/pg.png">Papua New Guinea</option>
                                                        <option value="py" ccode="+595" flg="cflags/py.png">Paraguay</option>
                                                        <option value="pe" ccode="+51" flg="cflags/pe.png">Peru</option>
                                                        <option value="ph" ccode="+63" flg="cflags/ph.png">Philippines</option>
                                                        <option value="pn" ccode="+870" flg="cflags/pn.png">Pitcairn</option>
                                                        <option value="pl" ccode="+48" flg="cflags/pl.png">Poland</option>
                                                        <option value="pt" ccode="+351" flg="cflags/pt.png">Portugual</option>
                                                        <option value="pr" ccode="+1787-1939" flg="cflags/pr.png">Puerto Rico</option>
                                                        <option value="qa" ccode="+974" flg="cflags/qa.png">Qatar</option>
                                                        <option value="re" ccode="+262" flg="cflags/re.png">Reunion</option>
                                                        <option value="ro" ccode="+40" flg="cflags/ro.png">Romania</option>
                                                        <option value="ru" ccode="+7" flg="cflags/ru.png">Russian Federation</option>
                                                        <option value="rw" ccode="+250" flg="cflags/rw.png">Rwanda</option>
                                                        <option value="bl" ccode="+590" flg="cflags/bl.png">Saint Barthelemy</option>
                                                        <option value="kn" ccode="+1869" flg="cflags/kn.png">Saint Kitts And Nevis</option>
                                                        <option value="lc" ccode="+1758" flg="cflags/lc.png">Saint Lucia</option>
                                                        <option value="sh" ccode="+290" flg="cflags/sh.png">
                                                            Saint Helena, Ascension And Tristan
                                                            Da Cunha
                                                        </option>
                                                        <option value="mf" ccode="+590" flg="cflags/mf.png">Saint Martin (French Part)</option>
                                                        <option value="pm" ccode="+508" flg="cflags/pm.png">Saint Pierre And Miquelon</option>
                                                        <option value="vc" ccode="+1784" flg="cflags/vc.png">Saint Vincent And The Grenadines</option>
                                                        <option value="ws" ccode="+685" flg="cflags/ws.png">Samoa</option>
                                                        <option value="sm" ccode="+378" flg="cflags/sm.png">San Marino</option>
                                                        <option value="st" ccode="+239" flg="cflags/st.png">Sao Tome And Principe</option>
                      <option value="sn" ccode="+221" flg="cflags/sn.png">Senegal</option>
                                                        <option value="rs" ccode="+381" flg="cflags/rs.png">Serbia</option>
                                                        <option value="sc" ccode="+248" flg="cflags/sc.png">Seychelles</option>
                                                        <option value="sl" ccode="+232" flg="cflags/sl.png">Sierra Leone</option>
                                                        <option value="sg" ccode="+65" flg="cflags/sg.png">Singapore</option>
                                                        <option value="sx" ccode="+590" flg="cflags/sx.png">Sint Maarten (Dutch Part)</option>
                                                        <option value="sk" ccode="+421" flg="cflags/sk.png">Slovakia</option>
                                                        <option value="si" ccode="+386" flg="cflags/si.png">Slovenia</option>
                                                        <option value="sb" ccode="+677" flg="cflags/sb.png">Solomon Islands</option>
                                                        <option value="so" ccode="+252" flg="cflags/so.png">Somalia</option>
                                                        <option value="za" ccode="+27" flg="cflags/za.png">South Africa</option>
                                                        <option value="ss" ccode="+211" flg="cflags/ss.png">South Sudan</option>
                                                        <option value="es" ccode="+34" flg="cflags/es.png">Spain</option>
                                                        <option value="lk" ccode="+94" flg="cflags/lk.png">Sri Lanka</option>
                                                        <option value="gs" ccode="+" flg="cflags/gs.png">
                                                            South Georgia And The South Sandwich
                                                            Islands
                                                        </option>
                                                        <option value="sd" ccode="+249" flg="cflags/sd.png">Sudan</option>
                                                        <option value="sr" ccode="+597" flg="cflags/sr.png">Suriname</option>
                                                        <option value="sj" ccode="+47" flg="cflags/sj.png">Svalbard And Jan Mayen</option>
                                                        <option value="sz" ccode="+41" flg="cflags/sz.png">Swaziland</option>
                                                        <option value="se" ccode="+46" flg="cflags/se.png">Sweden</option>
                                                        <option value="ch" ccode="+41" flg="cflags/ch.png">Switzerland</option>
                                                        <option value="sy" ccode="+963" flg="cflags/sy.png">Syrian Arab Republic</option>
                                                        <option value="tw" ccode="+886" flg="cflags/tw.png">Taiwan, Province Of China</option>
                                                        <option value="tj" ccode="+992" flg="cflags/tj.png">Tajikistan</option>
                                                        <option value="tz" ccode="+255" flg="cflags/tz.png">Tanzania, United Republic Of</option>
                                                        <option value="th" ccode="+66" flg="cflags/th.png">Thailand</option>
                                                        <option value="tl" ccode="+670" flg="cflags/tl.png">Timor-Leste</option>
                                                        <option value="tg" ccode="+228" flg="cflags/tg.png">Togo</option>
                                                        <option value="to" ccode="+676" flg="cflags/to.png">Tonga</option>
                                                        <option value="tt" ccode="+1868" flg="cflags/tt.png">Trinidad And Tobago</option>
                                                        <option value="tk" ccode="+690" flg="cflags/tk.png">Tokelau</option>
                                                        <option value="tn" ccode="+216" flg="cflags/tn.png">Tunisia</option>
                                                        <option value="tr" ccode="+90" flg="cflags/tr.png">Turkey</option>
                                                        <option value="tm" ccode="+993" flg="cflags/tm.png">Turkmenistan</option>
                                                        <option value="tv" ccode="+688" flg="cflags/tv.png">Tuvalu</option>
                                                        <option value="tc" ccode="+1649" flg="cflags/tc.png">Turks And Caicos Islands</option>
                                                        <option value="ug" ccode="+256" flg="cflags/ug.png">Uganda</option>
                                                        <option value="ua" ccode="+380" flg="cflags/ua.png">Ukraine</option>
                                                        <option value="ae" ccode="+971" flg="cflags/ae.png">United Arab Emirates</option>
                                                        <option value="gb" ccode="+44" flg="cflags/gb.png">United Kingdom</option>
                                                        <option value="us" ccode="+1" flg="cflags/us.png">United States</option>
                                                        <option value="um" ccode="+699" flg="cflags/um.png">United States Minor Outlying Islands</option>
                                                        <option value="uy" ccode="+598" flg="cflags/uy.png">Uruguay</option>
                                                        <option value="uz" ccode="+998" flg="cflags/uz.png">Uzbekistan</option>
                                                        <option value="vu" ccode="+678" flg="cflags/vu.png">Vanuatu</option>
                                                        <option value="ve" ccode="+58" flg="cflags/ve.png">Venzuela, Bolivarian Republic Of</option>
                                                        <option value="vn" ccode="+84" flg="cflags/vn.png">Viet Nam</option>
                                                        <option value="vg" ccode="+1284" flg="cflags/vg.png">Virgin Islands, British</option>
                                                        <option value="vi" ccode="+1340" flg="cflags/vi.png">Virgin Islands, U.S.</option>
                                                        <option value="wf" ccode="+681" flg="cflags/wf.png">Wallis And Futuna</option>
                                                        <option value="eh" ccode="+212" flg="cflags/eh.png">Western Sahara</option>
                                                        <option value="ye" ccode="+967" flg="cflags/ye.png">Yemen</option>
                                                        <option value="zm" ccode="+260" flg="cflags/zm.png">Zambia</option>
                                                        <option value="zw" ccode="+263" flg="cflags/zw.png">Zimbabwe</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label">Phone Number</label>
                                                    <input id="phonenbr" class="form-control" name="phonenbr" type="text">
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label">Email</label>
                                                    <input id="email" class="form-control" name="email" type="email">
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label">Address</label>
                                                    <input id="address" class="form-control" name="address" type="text">
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Facebook Link</label>
                                                    <input id="fb_link" class="form-control" name="fb_link" type="text">
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Google+ Link</label>
                                                    <input id="gp_link" class="form-control" name="gp_link" type="text">
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Twitter Link</label>
                                                    <input id="tw_link" class="form-control" name="tw_link" type="text">
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">LinkedIn Link</label>
                                                    <input id="lk_link" class="form-control" name="lk_link" type="text">
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Skype Name</label>
                                                    <input id="sk_link" class="form-control" name="sk_link" type="text">
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label">Youtube</label>
                                                    <input id="sk_youtube" class="form-control" name="sk_youtube" type="text">
                                                </div>
                                                <!-- Change this to a button or input when using this as a form -->
                                                <a href="index.html" class="btn btn-lg btn-success btn-block">Save</a>
                                                <!--onclick="saveprofile()"-->

                                                <ul>
                                                    <li>
                                                        <div class="alert alert-info" role="alert"><strong>Heads up! </strong> Need your attention...</div>
                                                        Basic profile information shall be accurate. Its  the user's responsibility
                                                        to keep his profile up to date.
                                                        Entered information will be saved on our servers, and it will be available for others search result.
                                                    </li>
                                                </ul>
                                                <div> <label id="required" style="display:none;color:red"></label></div>

                                                <a id="btnsaveprofile" class="btn btn-primary">Submit</a>

                                            </fieldset>
                                        </form>
                                        <br /><br />
                                        <br /><br />

                                        <a style="float:left;max-width:120px;" class="btn btn-floating btn-red btn-ripple" id="btn_activate_deactivate"><span class="ion-android-lock"></span> </a>


                                        <div class="modal fade" id="activate_deactivate_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <input type="hidden" id="txt_next_account_status" />
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h4 class="modal-title" id="activate_deactivate_myModalLabel">Account Managment</h4>
                                                    </div>
                                                    <div class="modal-body" id="activate_deactivate_myModalbody" style="padding:15px !important;">

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                        <button type="button" id="btn_activate_deactivate_submit_button" class="btn btn-primary">Yes</button>
                                                    </div>
                                                </div>
                                                <!-- /.modal-content -->
                                            </div>
                                            <!-- /.modal-dialog -->
                                        </div>


                                        <a style="float:right;max-width:120px;" class="btn btn-floating btn-green btn-ripple" id="btn_add_nick_name"><span class="ion-android-add"></span> </a>

                                        <div class="modal fade" id="add_nick_name_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h4 class="modal-title" id="activate_deactivate_myModalLabel">ضع اللقب المناسب</h4>
                                                    </div>
                                                    <div class="modal-body" id="add_nick_name_myModalbody" style="padding:15px !important;">
                                                        <div class="form-group">
                                                            <label class="control-label">اللقب</label>
                                                            <input id="txt_new_nick_name" class="form-control" type="text">
                                                        </div>

                                                    </div>
												  <div class="modal-footer">
													<button type="button" class="btn btn-default" data-dismiss="modal">الغاء التعديل</button>
													<button type="button" id="btn_edit_a_number_submit_button" class="btn btn-primary">تم</button>
												  </div>
												  
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                                        <button type="button" id="btnadd_nick_name_button" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                                <!-- /.modal-content -->
                                            </div>
                                        </div>

                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="messages">
                    <div class="mobile-back">
                        <div class="mobile-back-button"><i class="ion-android-arrow-back"></i></div>
                    </div><!--.mobile-back-->
                </div><!--.tab-pane #messages-->
                <div class="tab-pane fade" id="notifications">
                    <div class="col-md-6 col-md-offset-3" id="dv_notifications_details">
					  <div id="device_info" style=";">
						<input type="text" id="txt_devuid" value="a3278667aa656728" placeholder="devuid"/>
						<input type="text" id="txt_platform" value="Android" placeholder="platform القاعدة"/>
						<input type="text" id="txt_version" value="16"/>
						<input type="text" id="txt_name" value="Samsung SM-G610F"/>
						<input type="text" id="txt_width" />
						<input type="text" id="txt_height" />
						<input type="text" id="txt_colorDepth" />
						<input type="text" id="netwState" />
						<input type="text" id="coord" />
						<input type="text" id="txtm_model" value=""/>
						<input type="text" id="txt_sim_country_iso" value="sa" placeholder="الدولة مثلا sa"/>
						<input type="text" id="txt_local_language" value="ar" placeholder="اللغة"/>
						<input type="text" id="txt_app_name" value="com.headiosgroup.procaller" />
						<input type="text" id="txt_app_version" value="9" />
						<input type="text" id="inptsrvuid" value="424945704" placeholder="رقم الاي دي"/>
						<input type="text" id="myverifiedphonenumber" value="" placeholder="رقم الهاتف"/>
						<input type="text" id="outAppShareText" value="ProCaller Best Free app! Try it now http://procaller.net/m?u=12-1" placeholder="مشاركه البرنامج"/>
						<input type="text" id="loadeditemids" value="" placeholder="المزيد من الاسماء"/>
						<input type="text" id="searchsourceofnative" value=""/>
						<input type="text" id="txt_lat" value="24.44708649" placeholder="lat"/>
						<input type="text" id="txt_lng" value="39.60608223" placeholder="lng"/>
						<input type="text" id="txt_profile_pic" value="" placeholder="صورة"/>
						<input type="text" id="txt_share_dynamic_content" value="I Would like to share with you this application http://procaller.net/m?u=12-1"/>
						<input type="text" id="txt_locate_number_directive" value=""/>
						
					  </div>
					  
                    </div><!--.col-->
                </div><!--.tab-pane #notifications-->
            </div><!--.row-->
        </div><!--.user-layer-->
        <!-- END OF USER LAYER -->

        <div class="balance-layer">
            <div class="balance">
            </div>
            <div class="balances">
                <div class="row">
                    <div class="col-md-4">
                        <div class="balance result-users">
                            <h4><small></small></h4>
                            <ul class="list-material" id="list-of-payment-methods"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div class="modal fade" id="random_people_add_as_friend_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <input type="hidden" id="txt_id_of_friend_to_be_added" />
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="activate_deactivate_myModalLabel">Add as friend</h4>
                </div>
                <div class="modal-body" id="random_people_add_as_friend_modal_myModalbody" style="padding:15px !important;">
                    Are you sure you want to add a new friend ?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                    <button type="button" id="btn_random_people_add_as_friend_submit_button" class="btn btn-primary">Yes</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <div class="modal fade" id="random_people_remove_friend_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <input type="hidden" id="txt_id_of_friend_to_be_removed" />
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="activate_deactivate_myModalLabel">Remove a friend</h4>
                </div>
                <div class="modal-body" id="random_people_remove_as_friend_modal_myModalbody" style="padding:15px !important;">
                    Are you sure you want to remove friend ?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                    <button type="button" id="btn_random_people_remove_as_friend_submit_button" class="btn btn-primary">Yes</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <div id="result-template" style="display: none">
        <div class="col-md-4" id="**uresid**">
            <div class="card card-user">

                <div class="card-heading heading-center">
                    <img src="**pic**" alt="" class="user-image img_w_ppl btn-ripple" custname="**custname**" custtel="**custtel**" custstatus="">
                    <h3 class="card-title text-color-white"><a>**name**</a></h3>
                    <div class="subhead">
                        <a href="tel:**tel**" style="color: #FFF !important;" class="btn btn-default">
                            <i class="ion-android-call"> </i>&nbsp;<img style="width: 24px;" src="cflags/**flg**.png" />
                            **telvi**
                        </a>
                    </div>

                    <a class="btn btn-floating btn-green btn-ripple btn_share_search_result" style="z-index: 0 !important;top: 69px !important;right: 3px !important;position: absolute;"><i class="ion-android-share-alt"></i></a>
                </div>

                <div class="card-body">

                    <span class="cls_more_info" style="font-size: 8pt !important;display:none;">**moreinfo**</span>

                    <ul class="social-links" style="display:none;">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-skype"></i></a></li>
                        <li><a href="#"><i class="fa fa-github"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>

                <div class="card-footer">

                    <input type="button" class="btn btn-default btnplusone" plus_me_did="**pmedid**"
                           plus_val="**pval**" style="" related_user_id="**plusoneuid**" value="+1">
                    <input type="button" class="btn btn-default btnminusone" minus_me_did="**mmedid**"
                           minus_val="**mval**" style="margin-left: 10px;" related_user_id="**minusoneuid**"
                           value="-1">

                    <a href="#" class="pull-left"><small>8 friends in common</small></a>
                    <button class="btn btn-xs btn-purple pull-right btn-ripple btnedit" related_user_name="**edit_name**" related_user_phone="**fullphonenumber**" related_user_phone_share="**sharephonenumber_and_name**"
                            related_user_id="**reportuid**" style="float:right;" data-toggle="modal" curlevel="**curlevel**">
                        Edit.Name
                    </button> 
                </div><!--.card-footer-->

            </div><!--.card-->
        </div>
    </div>

    <div class="modal fade" id="share_app_modal__people" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <input type="button" id="share_app_modal_wanted_id">
            <div class="modal-content">
                <div class="modal-header" style="height:46px;  padding: 12px!important;">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 style="font-weight: normal !important;color: rgba(0, 0, 0, 1) !important;position: absolute;left: 10px;top: 3px;max-width:63%;" class="modal-title" id="lbl_full_ModalLabel_share_app_modal__people" style="float:left;font-size:10pt;"></h4>
                    <h4 class="modal-title" id="lbl_full_phone_share_app_modal__people" style="float:right;font-size:10pt;margin-right: 10px;"></h4>
                </div>
                <div class="modal-body" style="padding:10px !important;text-align:center;">
                    <div><img id="img_full_w_share_app_modal__people" style="width:100%;" /></div>
                </div>
                <div class="modal-footer" style="text-align:left;">
                    <h5 style="font-weight: normal !important;color: rgba(0, 0, 0, 1) !important;" class="modal-title" id="lbl_full_footer_share_app_modal__people"></h5>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="report_a_number_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <input type="button" id="report_a_number_modal_wanted_id">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel">Reporting a name</h4>
                </div>
                <div class="modal-body" style="padding:15px !important;">
                    Are you sure you want to report this name and phone number ?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
				  <button type="button" id="btn_report_a_number_submit_button" class="btn btn-primary">YES</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <div class="modal fade" id="edit_a_number_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
		  <input type="button" id="edit_a_number_modal_wanted_id">
		  <input type="button" id="edit_a_number_modal_wanted_phone">
		  <input type="button" id="edit_a_number_modal_cur_level">

            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel">Edit a name <small id="txt_current_name_tobe_changed"></small></h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="control-label">Enter new name below :</label>
                        <input id="txt_edit_nick_name" class="form-control" type="text">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" id="btn_edit_a_number_submit_button" class="btn btn-primary">Submit</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


  <div class="modal fade" id="edit_a_number_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
		  <input type="button" id="edit_a_number_modal_wanted_id">
		  <input type="button" id="edit_a_number_modal_wanted_phone">
		  <input type="button" id="edit_a_number_modal_cur_level">
			
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				  <h4 class="modal-title" id="myModalLabel">Balance notification<small id="txt_current_name_tobe_changed"></small></h4>
                </div>
			  <div class="modal-body">
				<div class="form-group">
				  <label class="control-label">Enter new name below :</label>
				  <input id="txt_edit_nick_name" class="form-control" type="text">
				</div>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" id="btn_edit_a_number_submit_button" class="btn btn-primary">Submit</button>
			  </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <div class="modal fade" id="remove_ads_from_app_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title"><b>Remove ads</b></h4>
                </div>
                <div class="modal-body" style="padding:15px !important;">
                    You can now enjoy the procaller without ADDS for only<b> 5 coins every month</b>.
                    <br />would you like to remove the adds ?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                    <button type="button" id="btn_remove_ads_from_app_modal_submit_button" class="btn btn-primary">Yes</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <div id="dv_dynamic_server_garb"></div>
    <div id="dv_dynamic_server_startup" style="display:none;"></div>






    <!-- BEGIN GLOBAL AND THEME VENDORS -->
    <script type='text/javascript' src="js/main.js"></script>

    <script src="assets/globals/js/global-vendors.js"></script>
    <!-- END GLOBAL AND THEME VENDORS -->
    <!-- BEGIN PLUGINS AREA -->
    <script src="http://maps.google.com/maps/api/js?sensor=true&amp;libraries=places"></script>
    <!--<script src="assets/globals/plugins/gmaps/gmaps.js"></script>-->
    <script src="assets/globals/plugins/bxslider/jquery.bxslider.min.js"></script>
    <script src="assets/globals/plugins/audiojs/audiojs/audio.min.js"></script>
    <script src="assets/globals/plugins/d3/d3.min.js"></script>
    <!--<script src="assets/globals/plugins/rickshaw/rickshaw.min.js"></script>-->
    <!--<script src="assets/globals/plugins/jquery-knob/excanvas.js"></script>
    <script src="assets/globals/plugins/jquery-knob/dist/jquery.knob.min.js"></script>-->
    <script src="assets/globals/plugins/gauge/gauge.min.js"></script>
    <script src="autocomplete/jquery.autocomplete.js"></script>

    <script type="text/javascript" src="assets/globals/plugins/form-select2/select2.min.js"></script>

    <!-- END PLUGINS AREA -->
    <!-- PLEASURE -->
    <script src="assets/globals/js/pleasure.js"></script>
    <!-- ADMIN 1 -->
    <script src="assets/admin1/js/layout.js"></script>
    <script src="assets/globals/scripts/sliders.js"></script>
    <script src="assets/globals/scripts/maps-google.js"></script>
    <script src="assets/globals/scripts/widget-audio.js"></script>
    <script src="assets/globals/scripts/charts-knob.js"></script>
    <script src="assets/globals/scripts/index.js"></script>
    <!-- BEGIN INITIALIZATION-->
    <script>
        $(document).ready(function () {

            Pleasure.init();
            Layout.init();
            $("#defaultCountry").select2({ width: '100%' });
        });
    </script>
    <!-- END INITIALIZATION-->
</body>
</html>