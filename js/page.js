function std_diff(val_ph)
{
    var sp_phone = val_ph.split("");
    var len = val_ph.length;
    var value_three = sp_phone[1] + sp_phone[2] + sp_phone[3] + "-";
    if(len==4)
    {
        
        document.getElementById("org_contact_user").value = value_three;
    }
}
function check_pdf(input_file)
{
    var split_st_i = input_file.split("\\");
    var ext = split_st_i[2].split(".");
    if(ext[1]!="pdf")
    {
        alert("only pdf are allowed");
        return;
        

    }

}
function change_old_password(id_pass) {

    var new_pass = $("#new_pass_user").val();
    var conf_pass = $("#conf_pass_user").val();
    var old = $("#old_pass_user").val();
    if ((new_pass!= "") && (conf_pass!= "")&&(old!="")) {
        if (new_pass != conf_pass) {
            $("#er_pass").html("<p style='color:red'>Passwords do not match</p>");
            return;
        }
        else {
            $.post("function_user/change_password",
           {

               id_pass: id_pass,
               new_pass: conf_pass
           },
           function (data) {

               $("#er_pass").html(data);
           });

        }
    }
    else
    {
        $("#er_pass").html("<p style='color:red'>Value can't be blank</p>");
        return;
    }
}

function save_email_id_new(id_user_email)
{
    var email_id_new = $("#email_change").val();
    var email_confirm = $("#email_change_confirm").val();
    if(email_id_new!=email_confirm)
    {
        $("#err_email").html("<p style='color:red'>Error!Email id's Dosen't match</p>");
    }
    else
    {
        $.post("function_user/change_email",
            {

                id_user_email: id_user_email,
                email:email_confirm
            },
            function (data) {

                $("#err_email").html(data);
            });
    }
}
function open_form_pass()
{
    $("#change_pass_form").slideToggle("slow");
}
function change_email_id()
{
    $("#email_id_change").slideToggle("slow");
}
function show_for_other_type(oth_val)
{
    if(oth_val==14)
    {
        $("#show_oth_type").html('<input type="text" class="form-control" name="other_type_enter" placeholder="Enter Type"/>');
    }
    else
    {
        $("#show_oth_type").html("");
    }
}
function check_select()
{
    var val=$("#sel_neft").val();
    if(val==99)
    {
        $("#show_sel_neft").html('<input type="text" class="form-control" name="any_other_neft" placeholder="Enter name"/>');
    }
    else 
    {
        $("#show_sel_neft").html("");
    }
}

//function fot regeret application
function show_reas_reg(id_reg)
{
    $("#show_text_amount_reg").html('<textarea id="reason_reg" rows="6" cols="50" placeholder="Any Reason for regret?"></textarea><button class="btn btn-default" onclick="save_reg_app_reason('+id_reg+')">Save</button>');
    $("#show_text_amount_deff").hide();
    $("#show_text_amount_sanc").hide();
}
function save_reg_app_reason(id_to_save_reg)
{
    var reas_app_reg = $("#reason_reg").val();
    $.post("function_form/reas_app_reg_save",
       {

           id_user_reg: id_to_save_reg,
           reas_reg: reas_app_reg
       },
       function (data) {

           $("#show_text_amount_reg").html(data);
       });
}
//end of function of regret
//function to show a text box to enter reason for the application which is deffered
function show_reasn_def(id_def)
{
    $("#show_text_amount_deff").html('<textarea id="reason_deff" rows="6" cols="50" placeholder="Reason for Application deffer"></textarea><button class="btn btn-default" onclick="save_deff_app_reason('+id_def+')">Save</button>');
    $("#show_text_amount_sanc").hide();
    $("#show_text_amount_reg").hide();
}
function save_deff_app_reason(id_to_save_def)
{
    var reas_app = $("#reason_deff").val();
    $.post("function_form/reas_app_def_save",
       {

           id_user_def:id_to_save_def,
           reas_def: reas_app
       },
       function (data) {

           $("#show_text_amount_deff").html(data);
       });
}
//end of the function for the application deffered
function enter_amount_sanc(id_am_sanc)
{
    $("#show_text_amount_sanc").html("<input type='number' placeholder='Enter Amount' name='sanc_amount' id='sanc_amount'><button class='btn btn-default' onclick='save_amount_enter("+id_am_sanc+")'>Grant</button>");
    $("#show_text_amount_deff").hide();
    $("#show_text_amount_reg").hide();
}
function save_amount_enter(id_user_final_sanction)
{
    var sanc_am = $("#sanc_amount").val();
    $.post("function_form/insert_amount_sanctioned",
       {

           id_user_to_sanc: id_user_final_sanction,
           sanc_amount:sanc_am
       },
       function (data) {

           $("#show_text_amount_sanc").html(data);
       });
}
function show_ajax_disc(id_disc)
{
  $.post("../function_user/select_table_disc",
    {

        disc_id:id_disc
    },
    function (data) {

        $("#table_acc_disc_data").html(data);
    });
   

}
//functions to make total of income and finance details
function first_column(tick_to_show)
{
    
 //get values expected

    

    r_val= $("#req_ta_da").val();

 var exp_0=$("#exp_ta_da").val();
 if(exp_0=="")
 {
     exp_0 = 0;
 }

 var exp_1=$("#exp_prin_rs").val();   
  if(exp_1=="")
 {
     exp_1 = 0;
 } 
 var exp_2=$("#exp_st_rs").val(); 
  if(exp_2=="")
 {
     exp_2 = 0;
 } 
 var exp_3=$("#exp_sec_rs").val(); 
  if(exp_3=="")
 {
     exp_3 = 0;
 } 
 var exp_4=$("#exp_pub_rs").val(); 
  if(exp_4=="")
 {
     exp_4 = 0;
 } 
 var exp_5=$("#exp_board_rs").val();
  if(exp_5=="")
 {
     exp_5 = 0;
 }

 
 
 

  var total_exp_am = parseInt(exp_0) + parseInt(exp_1) + parseInt(exp_2) + parseInt(exp_3) + parseInt(exp_4) + parseInt(exp_5);
  document.getElementById("first_col_val").value = total_exp_am;
 
  

      $.post("function_form/insert_finance_tab_1.cshtml",
       {

           exp_val_0: exp_0,
           exp_val_1: exp_1, exp_val_2: exp_2, exp_val_3: exp_3, exp_val_4: exp_4, exp_val_5: exp_5
       },
       function (data) {

           $("#show_tick_exp_" + tick_to_show).html(data);
       });
  
 //end expected

 
 }
 //start requested
 function second_col(tick_show_req)
 {
       
 var req_0 = $("#req_ta_da").val();  
 if(req_0=="")
 {

     req_0 = 0;
 }     
 var req_1 = $("#req_prin_rs").val();
 if(req_1=="")
 {
     req_1 = 0;
 }
 var req_2 = $("#req_st_rs").val();
 if(req_2=="")
 {
     req_2 = 0;
 }
 var req_3 = $("#req_sec_rs").val();
 if(req_3=="")
 {
     req_3 = 0;
 }
 var req_4 = $("#req_pub_rs").val();
 if(req_4=="")
 {
     req_4 = 0;

 }
 var req_5 = $("#req_board_rs").val();
 if(req_5=="")
 {
     req_5 = 0;
 }


 
 var total_req_am = parseInt(req_0) + parseInt(req_1) + parseInt(req_2) + parseInt(req_3) + parseInt(req_4) + parseInt(req_5);

 document.getElementById("second_col_val").value = total_req_am;
 
   $.post("function_form/insert_finance_tab_2.cshtml",
    {

        req_val_0:req_0,
        req_val_1:req_1,req_val_2:req_2,req_val_3:req_3,req_val_4:req_4,req_val_5:req_5
    },
    function (data) {

        $("#show_tick_req_"+tick_show_req).html(data);
    });

 
 //end requested
}
//fucntion 2 fo finance
function finance_tab_2(val_finac_2)
{
  var f_1=$("#reg_fee").val();  
  if(f_1=="")
  {
      f_1 = 0;
  }
    var f_2=$("#sale_proc_pub").val();  
  if(f_2=="")
  {
      f_2 = 0;
  }

    var f_3=$("#other_income").val();  
  if(f_3=="")
  {
      f_3 = 0;
  }

  var tot_finance_val_get = parseInt(f_1) + parseInt(f_2) + parseInt(f_3);
  document.getElementById("tot_finance_2").value = tot_finance_val_get;

   $.post("function_form/insert_finance_tab_3.cshtml",
    {

        f_val_1:f_1,
        f_val_2:f_2,
        f_val_3:f_3
    },
    function (data) {

        $("#finance_tick_"+val_finac_2).html(data);
    });

}

//end functions

function change_color(chng_li_val)
{
 document.getElementById(chng_li_val+"_li_tech").style.backgroundColor="#FFFFCC";   
}
//function to add rows in technical session details
function add_rows_tech_1(tech_val,user_id_fr_tech)
{
  var prv_row_tech =  parseInt(tech_val) - 1;
  var next_row_tech = parseInt(tech_val) + 1;
  
  $("#tech_"+prv_row_tech+"_row").after('<tr id="tech_'+tech_val+'_row"><td>'+tech_val+"."+'</td><td><input type="text" placeholder="Title" name="title_tech_'+tech_val+'"></td><td><input type="time" placeholder="Time" name="time_tech_'+tech_val+'"></td><td><input type="date" name="date_tech_'+tech_val+'"></td><td id="add_'+tech_val+'_tech_row"><input type="button" onclick="add_rows_tech_1('+next_row_tech+','+user_id_fr_tech+')" value="Add"><input type="button" onclick="remove_rows_tech('+tech_val+','+user_id_fr_tech+')" value="Remove"></td></tr>');

document.getElementById("add_"+prv_row_tech+"_tech_row").style.display = "none";
document.getElementById("rec_details_tech").value = tech_val;
}
//function to remove rows in technical session
function remove_rows_tech(remov_val_tech,user_to_del_tech)
{
  
    var last_row_tech = parseInt(remov_val_tech) - 1;
   
     //ajax code to remove data from database

    $.post("function_form/remove_data_tech",
    {

        user_id: user_to_del_tech,
        row_del: remov_val_tech
    },
    function (data) {
        if (data != null) {
            var y = document.getElementById("tech_"+remov_val_tech+"_row");
            y.remove();

            document.getElementById("add_"+last_row_tech +"_tech_row").style.display = "block";

        }
        else {
            alert("no data to delete");
        }

    }); 

}

//end function technical session
//function to add rows in speaker details
function add_rows_speak(speak_row_val,id_speaker_session)
{
  var prv_row_speak =  parseInt(speak_row_val) - 1;
  var next_row_speak = parseInt(speak_row_val) + 1;
  $("#speak_"+prv_row_speak+"_row").after('<tr id="speak_'+speak_row_val+'_row"><td>'+speak_row_val+"."+'</td><td><input type="text" placeholder="Title" name="speak_title_'+speak_row_val+'"></td><td><input type="text" placeholder="Name" name="speak_name_'+speak_row_val+'"></td><td><input type="text" name="speak_org_'+speak_row_val+'" placeholder="Organization"></td><td><input type="text" name="spk_tech_session_'+speak_row_val+'" placeholder="Technical session"></td><td id="add_'+speak_row_val+'_speak_row"><input type="button" onclick="add_rows_speak('+next_row_speak+')" value="Add"><input type="button" onclick="remove_rows_speak('+speak_row_val+','+id_speaker_session+')" value="Remove"></td></tr>');

document.getElementById("add_"+prv_row_speak+"_speak_row").style.display = "none";
document.getElementById("rec_details_speak").value = speak_row_val;
}
//function to remove rows in speaker
function remove_rows_speak(remov_val_speak,user_to_del_speak)
{
    var last_row_speak = parseInt(remov_val_speak) - 1;
   
     //ajax code to remove data from database

    $.post("function_form/remove_data_speak",
    {

        user_id_speak: user_to_del_speak,
        row_del_speak: remov_val_speak
    },
    function (data) {
        if (data != null) {
            var y = document.getElementById("speak_"+remov_val_speak +"_row");
            y.remove();

            document.getElementById("add_"+last_row_speak+"_speak_row").style.display = "block";
           
        }

    }); 

}

//end function of speaker
//function to add rows in labs
function add_rows_lab(lab_add_val,uid_fr_lab)
{
   var prv_row_lab =  parseInt(lab_add_val) - 1;
  var next_row_lab = parseInt(lab_add_val) + 1;
  $("#lab_"+prv_row_lab+"_row").after('<tr id="lab_'+lab_add_val+'_row"><td>'+lab_add_val+"."+'</td><td><input type="text" placeholder="Laboratory" name="lab_name_'+lab_add_val+'"></td><td><input type="text" placeholder="Technical session" name="tech_session_name_'+lab_add_val+'"></td><td id="add_'+lab_add_val+'_lab_row"><input type="button" onclick="add_rows_lab('+next_row_lab+','+uid_fr_lab+')" value="Add"><input type="button" onclick="remove_rows_lab('+lab_add_val+','+uid_fr_lab+')" value="Remove"></td></tr>');

document.getElementById("add_"+prv_row_lab+"_lab_row").style.display = "none";
document.getElementById("rec_details_lab").value = lab_add_val;
}
//function to remove rows in labs
function remove_rows_lab(remov_val_lab,user_to_del_lab)
{
    var last_row_lab = parseInt(remov_val_lab) - 1;
   
     //ajax code to remove data from database

    $.post("function_form/remove_data_lab",
    {

        user_id_lab: user_to_del_lab,
        row_del_lab: remov_val_lab
    },
    function (data) {
        if (data != null) {
            var y_lab = document.getElementById("lab_"+remov_val_lab +"_row");
            y_lab.remove();

            document.getElementById("add_"+last_row_lab+"_lab_row").style.display = "block";
           
        }

    }); 

}
//end function lab
//function to add rows in scientists column
function add_rows_scien(scien_val,id_user_p_s)
{
 var prv_row_scien =  parseInt(scien_val) - 1;
 var next_row_scien = parseInt(scien_val) + 1;
 $("#scien_"+prv_row_scien+"_row").after('<tr id="scien_'+scien_val+'_row"><td>'+scien_val+"."+'</td><td><input type="text" placeholder="Name of the Scientists" name="scien_name_'+scien_val+'"></td><td><input type="text" placeholder="Name of the Laboratory" name="tech_session_name_'+scien_val+'"></td><td id="add_'+scien_val+'_scien_row"><input type="button" onclick="add_rows_scien('+next_row_scien+','+id_user_p_s+');" value="Add"><input type="button" onclick="remove_rows_scien('+scien_val+','+id_user_p_s+');" value="Remove"></td></tr>'); 

document.getElementById("add_"+prv_row_scien+"_scien_row").style.display = "none";
document.getElementById("rec_details_scien_p").value = scien_val;
}
//function to remove row in science
function remove_rows_scien(remov_val_p_s,user_to_del_p_s)
{
    var last_row_p_s = parseInt(remov_val_p_s) - 1;
   
     //ajax code to remove data from database

    $.post("function_form/remove_data_p_scien",
    {

        user_id_p_sc: user_to_del_p_s,
        row_del_p_sc: remov_val_p_s
    },
    function (data) {
        if (data != null) {
            var y_s = document.getElementById("scien_"+remov_val_p_s +"_row");
            y_s.remove();

            document.getElementById("add_"+last_row_p_s+"_scien_row").style.display = "block";
           
        }

    }); 

}
//end
function add_rows_table(no_table)
{
    var prv_row =  parseInt(no_table) - 1;
    var next_row_val = parseInt(no_table) + 1;
$("#"+prv_row+"_row").after('<tr id='+no_table+'_row><td>'+no_table+"."+'</td><td><input type="text" placeholder="Name" name="name_colab_details_'+no_table+'"></td><td><input type="text" placeholder="Type of Organization" name="colab_org_type_'+no_table+'"></td><td id="add_'+no_table+'_row"><input type="button" onclick="add_rows_table('+next_row_val+')" value="Add"><input type="button" value="Remove" id='+no_table+'_row onclick="remove_rows('+no_table+')"></td></tr>');

document.getElementById("add_"+prv_row+"_row").style.display = "none";
document.getElementById("rec_colb_details").value = no_table;
}
//add more rows in a table in c option of sponsers details
function add_rows_table_c(no_table_show,id_user)
{
    var prv_row_show =  parseInt(no_table_show) - 1;
    var next_row_val_show = parseInt(no_table_show) + 1;
$("#"+prv_row_show+"_row_c").after('<tr id='+no_table_show+'_row_c><td>'+no_table_show+"."+'</td><td><input type="text" placeholder="Name" name="name_spon_'+no_table_show+'"></td><td><input type="text" placeholder="Grant Requested(Rs.)" name="grant_rq_'+no_table_show+'"></td><td><input type="text" placeholder="Grant Received(Rs.)" name="grant_rc_'+no_table_show+'"></td><td><input type="text" placeholder="Grant Expected(Rs.)" name="grant_exp_'+no_table_show+'"></td><td><input type="text" placeholder="Items" name="items_grant_'+no_table_show+'"></td><td id="add_'+no_table_show+'_row_c"><img src="images/add.png" height="20px" width="20px" style="cursor: pointer" onclick="add_rows_table_c('+next_row_val_show+','+id_user+')"><img src="images/cross.png" height="20px" style="cursor: pointer" width="20px" id='+no_table_show+'_row_c onclick="remove_rows_spon('+no_table_show+','+id_user+')" alt="remove"></td></tr>');

document.getElementById("add_"+prv_row_show+"_row_c").style.display = "none";
document.getElementById("rec_spon_details").value = no_table_show;
}
//to remove rows of collaborators
function remove_rows(val_remove)
{
    var x=document.getElementById(val_remove+"_row");
    x.remove();
    var last_row = parseInt(val_remove)-1;
    document.getElementById("add_"+last_row+"_row").style.display = "block";
    document.getElementById("rec_colb_details").value = last_row;

}
//to remove rows of sponsorers
function remove_rows_spon(remov_val_spon,user_to_del_spon)
{
    var last_row_sp = parseInt(remov_val_spon) - 1;
   
     //ajax code to remove data from database

    $.post("function_form/remove_data_spon",
    {

        user_id: user_to_del_spon,
        row_del: remov_val_spon
    },
    function (data) {
        if (data != null) {
            var y = document.getElementById(remov_val_spon + "_row_c");
            y.remove();

            document.getElementById("add_"+last_row_sp+"_row_c").style.display = "block";
           
        }

    }); 

}
//inline page show of organizser
function show_data_pagintion(page_data_val,val_color_id)
{
      
    $.post("function_user/select_data_page_show.cshtml",
    {

        data_to_show_val: page_data_val
    },
    function (data) {


        $('#org_vr_data').html(data);

for(var f=1;f<=5;f++)
{
    if(f!=val_color_id)
    {
      $(".breadcrumb").children("#"+f+"_list").children().css({"color":"green"});  
    }
    else
    {
     $(".breadcrumb").children("#"+val_color_id+"_list").children().css({"color":"#B90B52"});   
    }
}
          
    });  


}
//inline page show of speakers

function show_5_page_data(page_5_val_data,val_sec_color_id)
{
    
   $.post("function_user/select_data_5_page.cshtml",
    {

        data_to_5_val: page_5_val_data
    },
    function (data) {

       
        $('#org_vr_data_5_page').html(data);

for(var k=1;k<=4;k++)
{
    if(k!=val_sec_color_id)
    {
      $(".breadcrumb_2").children("#"+k+"_li_tech").children().css({"color":"green"});  
    }
    else
    {
     $(".breadcrumb_2").children("#"+val_sec_color_id+"_li_tech").children().css({"color":"#B90B52"});   
    }
}

    });  


}

//get data for admin page on pages
function show_user_data(val_page_spec,change_col_page_ad,id_sm_view,id_user_get)
{
   $.post("function_user/select_data_pages_admin.cshtml",
    {

        data_to_ad_page: val_page_spec,
        sm_id:id_sm_view,
        id_user:id_user_get
    },
    function (data) {

       
        $('#org_vr_data_admin').html(data);

for(var k=1;k<=4;k++)
{
    if(k!=change_col_page_ad)
    {
      $(".breadcrumb_3").children("#"+k+"_li_ap_det").children().removeClass("active_a");  
    }
    else
    {
     $(".breadcrumb_3").children("#"+change_col_page_ad+"_li_ap_det").children().addClass("active_a");   
    }
}

    });  
   
}
function slide_box(val_panel)
{
    
    var degree = 180;
    var degree_1 = 360;
  
    if (val_panel == 1) {
        $("#panel_" + val_panel + "_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $("#panel_" + val_panel).slideToggle("slow");

        for(var i=2;i<=5;i++)
        {        
            $("#panel_" + i).slideUp("slow");
            $("#panel_"+i+"_img").css({ WebkitTransform: 'rotate(' + degree_1 + 'deg)' });
        }
                      }
                      if(val_panel==2)
                      {
                          $("#panel_" + val_panel + "_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                          $("#panel_" + val_panel).slideToggle("slow");
                          $("#panel_1_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                         $("#panel_1").slideUp("slow"); 
                         for(var i=3;i<=5;i++)
                         {
                             $("#panel_"+i+"_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                     $("#panel_"+i).slideUp("slow");
        
                      }

                      }
                      if(val_panel==3)
                      {
                          $("#panel_" + val_panel + "_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                  $("#panel_"+val_panel).slideToggle("slow");
                  for (var j=1; j<=2;j++)
                  {
                      $("#panel_"+j+"_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                    $("#panel_"+j).slideUp("slow");  

                  }

                  for (var i = 4; i <= 5; i++) {
                      $("#panel_"+i+ "_img").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                          $("#panel_" + i).slideUp("slow");

                      }


                      }


                            if(val_panel==4)
                      {
                          
                  $("#panel_"+val_panel).slideToggle("slow");
                  for (var j=1; j<=3;j++)
                  {
                    $("#panel_"+j).slideUp("slow");  

                  }

                     
                          $("#panel_5").slideUp("slow");

                      


                      }
                            if(val_panel==5)
                      {
                          
                  $("#panel_"+val_panel).slideToggle("slow");
               
                      for (var i = 1; i <= 4; i++) {
                          $("#panel_"+i).slideUp("slow");

                      }


                      }
                   

                     

}

 function change_city(state_name) {

    $.post("select_city.cshtml",
    {

        state: state_name
    },
    function (data) {

        $('.city_data').html(data);
    });

   
}
//function to check if the email entered by the user is present or not
  function check_email(my_email)
            {

                $.post("check_email.cshtml",
    {

        email: my_email
    },
    function (data) {
        if (data != null) {
            $('#show_error').html(data);
           

        }
    });


            }
function add_more_button(value_no_null,i_val)
{
   
    

 if(value_no_null!=null)
 {

var str=value_no_null;
var res=str.split("\\");

//alert(i_val);

document.getElementById("add_data_"+i_val).style.display="";


var k = i_val;
document.getElementById("no_show").innerHTML="<div class='form-group' id='add_data_"+ ++i_val +"' style='display:block'><input type='file' name='file_value_"+ i_val +"' id='file_value_"+ i_val +"' onchange='add_more_button(this.value,"+ i_val +");' style='display:block'></div>";
//$("#add_data_"+i_val).append('<div class="form-group id=add_data_'+ ++i_val +'"><input type="file" value="Add more" onchange="add_more_button(this.value,'+ i_val++ +');"/></div>');


document.getElementById("change_acc_file").innerHTML = '<input type="hidden" value='+i_val+'>';

$("#show_names").append(k+".("+res[2]+"|||)");
 }   
 else
 {
     

 }


}

function check_rand(user_mul)
{
    
    
    var r_1=$("#random_val_1").val();
    var r_2 = $("#random_val_2").val();

    var mul_rand = (r_2 - r_1);
   


    if(user_mul!=mul_rand)
    {
       alert("Wrong Value!Please enter a valid output");
       $("#cap_val").focus();  

    }
   
    else
    {
      

    }

}

function Letter_pin(inp)
{
    var letters = /^[A-Za-z]+$/;
    if (inp.match(letters)) 
    {
        document.getElementById("pin").value = "";

    }
}

function pin_check(inputtxt,id_pin_box)
{
   var len_in=inputtxt.length;
   var split_st = inputtxt.split("");
   var letters = /^[A-Za-z]+$/;
   for (var i = 0; i <= 6;i++ )
   {
       if(split_st[i].match(letters))
       {
           alert("No alphabets allowed in pin code");
           document.getElementById(id_pin_box).value = "";
       }
   }
       
   /* if (inputtxt.match(letters)) 
    {
        document.getElementById(id_pin_box).value = "";

    }*/
}
function phone(txt_val,page_rec)
{
    var letters = /^[A-Za-z]+$/;
   
    if (txt_val.match(letters)) 
    {
        if (page_rec == "dash_page") {
            document.getElementById("contact_user").value = "";
        }
        else
        {
         document.getElementById("mob_user").value = "";  
         alert("Mobile No. should be numbers not alphabets");  
        }

    }
   
}


function Letter_phone(phone)
{
    var letter_p = /^[A-Za-z]+$/;
    if (phone.match(letter_p)) 
    {
        document.getElementById("phone").value = "";

    }
}

function show_full()
{

    var first = $("#f_name").val();
    var middle = $("#m_name").val();
    var last = $("#l_name").val();

    if((first)&&(last)!=null)
    {
        var str=first+" "+middle+" "+last;
        str = str.toUpperCase();
        document.getElementById("full_name").value = "WELCOME " +str;

    }


}

function check_val_radio(get_val_r,id_app)
{
    if (get_val_r == 1) {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("data_my").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "get_data_id.cshtml?id_app_user=" + id_app, true);
        xmlhttp.send();
    }
    else
    {
        
    }
}

function show_sel_val()
{
 var e = document.getElementById("ins_name_val");
var strUser = e.options[e.selectedIndex].text;
document.getElementById("ins_data_fill").value = strUser;

}
 //function to check old password
 function check_old_pass(old_p_val,uid)
{
     if (old_p_val == "") {

     }
     else {


         $.post("check_old_pass.cshtml",
       {

           old_pass: old_p_val,
           uid: uid
       },
       function (data) {


           $(".er_old_p").html(data);


       });
     }

 }

 function show_proc_det(val_conf)
 {
     
if(val_conf==1)
{
document.getElementById("head_"+val_conf).style.backgroundColor ="#79ab38";
document.getElementById("conf_"+val_conf).style.display="block";  

 for(var i=2;i<=4;i++)
 {
     document.getElementById("head_"+i).style.backgroundColor ="#e3d5d5";
   document.getElementById("conf_"+i).style.display="none";  

 }   

}
if(val_conf==2)
{
     document.getElementById("head_1").style.backgroundColor ="#e3d5d5";
    document.getElementById("head_"+val_conf).style.backgroundColor ="#79ab38";
  
    
 document.getElementById("conf_"+val_conf).style.display="block";     
 document.getElementById("conf_1").style.display="none"; 
 for(var j=3;j<=4;j++)
 {
     
document.getElementById("conf_"+j).style.display="none"; 
document.getElementById("head_"+j).style.backgroundColor ="#e3d5d5";


 }

}

if(val_conf==3)
{
document.getElementById("head_"+val_conf).style.backgroundColor ="#79ab38";
document.getElementById("head_4").style.backgroundColor ="#e3d5d5";
document.getElementById("conf_"+val_conf).style.display="block"; 
document.getElementById("conf_4").style.display="none"; 
 
  for(var k=1;k<=2;k++)
 {

document.getElementById("head_"+k).style.backgroundColor ="#e3d5d5";     
document.getElementById("conf_"+k).style.display="none"; 

 }   

}
if(val_conf==4)
{
document.getElementById("head_"+val_conf).style.backgroundColor ="#79ab38";
document.getElementById("conf_"+val_conf).style.display="block";
   for(var h=1;h<=3;h++)
 {
 document.getElementById("head_"+h).style.backgroundColor ="#e3d5d5";    
document.getElementById("conf_"+h).style.display="none"; 
 }   

}

 }
 function check_show_val(val_check)
 {
   var val_get=val_check;
   if(val_get==1)
   {
       document.getElementById("show_proc_data").style.display = "block";
   }  
   else
   {
       
     document.getElementById("show_proc_data").style.display = "none";
   }

 }
 function check_email_base(email_conf)
 {

     var email_base = $("#base_email").val();
     if(email_base!=email_conf)
     {
         alert("Email id's mismatch");
         
        

     }

 }
 function show_text_price(val_price_show)
 {
     if(val_price_show==1)
     {
         

         document.getElementById("show_price_box").innerHTML = "<label>Approximate price to be Charged?</label><input type='number' name='pric_proc' min='0'>";
     }
     else
     {

         document.getElementById("show_price_box").innerHTML = " ";
     }
 }
 function delegates_value_enter(delegates_value)
 {
     
     var national_delegates = $("#nat_d").val();
     var foreign_delegates = $("#for_d").val();
     var rsrch_stu = $("#rs_st").val();
     var any_other = $("#any_othr").val();
     

     var total_delegates = parseInt(national_delegates) + parseInt(foreign_delegates) + parseInt(rsrch_stu) + parseInt(any_other);
     document.getElementById("tot_d").value = total_delegates;

     

 }

 function dele_paper_ta_da()
 {
     var dele_papers = $("#dele_papers").val();
     var dele_ta_da = $("#dele_ta_da").val();
     var val_tot_dele = $("#tot_d").val();


     var dele_pap_ta_da_sum = parseInt(dele_papers) + parseInt(dele_ta_da);
    
     if(dele_pap_ta_da_sum>val_tot_dele)
     {
         alert("Delegates Reading Papers or being offered TA/DA cannot be greater than Total Delegates");

     }
 }

 function check_data()
 {
 
     if($("#check_final").is(":checked"))
     {
         var tot_1=$("#first_col_val").val();
         var tot_2 = $("#second_col_val").val();
         
         if (tot_2 > tot_1)
         {

             $("#show_err").html('<strong style="color:red">Errors found! Grant requested value should not be greater than total Expenditure Correct the error and refresh page</strong>');
         }
         else
         {
             document.getElementById("show_btn").style.display = "block";
         }
    
     }
    else
    {
         document.getElementById("show_btn").style.display = "none";
    }
 }

 function final_submit_btn(id_user_final)
 {
     var file_data = $("#upload")[0].files[0];
var fileName = file_data.name;
var fileSize = file_data.size;

     
   if($("#check_final").is(":checked")&&fileName!="")
     {
         $.post("function_form/check_final_data",
    {

        id_final: id_user_final,
        file_1: fileName
    },
    function (data) {
        if (data != null) {

            alert();
            //window.location.href="u_page_8?dataaa=akshkajshajhsajhsajsha1112222lkakjsjk&&val_nil=2167162761771627&&q=hggshghghghghasshahasghgh&&file="+fileName+"";
        }
    }); 
     } 
     else
     {
         alert("Error!Please upload yor Signature");
     }  
 }
 
 //function for previous grant
 function check_prv_grant(val_prv)
{
    $.post("function_user/select_table_prv",
    {

        val_radio:val_prv
    },
    function (data) {

        $("#show_prv_table").html(data);
    });   
}
function show_other_details(val_to_show_rad,to_show)
{
    if (val_to_show_rad == 1) 
    {
        $("#rad_1_grant_"+to_show).after("<span id='show_data_grant_"+to_show+"'><input type='text' name='ref_no_"+to_show+"' placeholder='reference number' style='max-width:160px'><br><br><input type='date' name='date_grant_"+to_show+"'></span>");
    }
    else
    {
       var y_gnt = document.getElementById("show_data_grant_"+to_show+"");
            y_gnt.remove(); 
    }
}
function show_sign_to(input)
{
   if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img').html('<img src="'+e.target.result+'" alt="image" height="100px" width="100px">');
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    

  //$("#show_sign").html('<img src="'+name_img+'" alt="no image">');  
}
function show_pop_up()
{

    var value_u_id=prompt("Enter your registered Email-id");
    if(value_u_id!=null)
    {
        $.post("function_user/send_email_again",
    {

        user_id_ag: value_u_id
    },
    function (data) {
        if (data == 0) {
            alert("Wrong Email-id");
        }
        else {
            alert("An Email has been sent to your Email-id registered email id");
        }

    });    
    }
}