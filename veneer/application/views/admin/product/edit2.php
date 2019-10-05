<!doctype html>
<html lang="en">


<!-- Mirrored from demos.creative-tim.com/material-dashboard-pro/examples/forms/extended.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 20 Mar 2017 21:33:48 GMT -->
<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url($this->config->item("new_theme")."/assets/img/apple-icon.png"); ?>" />
    <link rel="icon" type="image/png" href="<?php echo base_url($this->config->item("new_theme")."/assets/img/favicon.png"); ?>" />
    <title>Admin | Dashboard</title>
    <!-- Canonical SEO -->
    <link rel="canonical" href="https://www.creative-tim.com/product/material-dashboard-pro" />
    <!-- Bootstrap core CSS     -->
    <link href="<?php echo base_url($this->config->item("new_theme")."/assets/css/bootstrap.min.css"); ?>" rel="stylesheet" />
    <!--  Material Dashboard CSS    -->
    <link href="<?php echo base_url($this->config->item("new_theme")."/assets/css/material-dashboard.css"); ?>" rel="stylesheet" />
    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="<?php echo base_url($this->config->item("new_theme")."/assets/css/demo.css"); ?>" rel="stylesheet" />
    <!--     Fonts and icons     -->
    <link href="<?php echo base_url($this->config->item("new_theme")."/assets/css/font-awesome.css"); ?>" rel="stylesheet" />
    <link href="<?php echo base_url($this->config->item("new_theme")."/assets/css/google-roboto-300-700.css"); ?>" rel="stylesheet" />
      <style>
* {
  box-sizing: border-box;
}

body {
  font: 16px Arial;  
}

/*the container must be positioned relative:*/
.autocomplete {
  position: relative;
  display: inline-block;
}

input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}

input[type=text] {
  background-color: #f1f1f1;
  width: 100%;
}

input[type=submit] {
  background-color: DodgerBlue;
  color: #fff;
  cursor: pointer;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9; 
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important; 
  color: #ffffff; 
}
.search-container .span {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  /*background: #ddd;*/
  font-size: 17px;
  border: none;
  cursor: pointer;
}
</style>
</head>

<body>
    <div class="wrapper">
        <?php  $this->load->view("admin/common/sidebar"); ?>
        <div class="main-panel">
            <?php  $this->load->view("admin/common/header"); ?>
            <div class="content">
                <div class="container-fluid">
                    <?php  if(isset($error)){ echo $error; }
                        echo $this->session->flashdata('message'); 
                    ?>
                    <div class="row">
                        <form form action="" method="post" enctype="multipart/form-data" class="form-horizontal" >
                        <div class="col-md-9">
                            <div class="card">
                                <div class="card-header card-header-icon" data-background-color="rose">
                                    <i class="material-icons">contacts</i>
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">Edit products</h4>
                                    
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Product Title : *</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                    <input type="text" name="prod_title" class="form-control" value="<?php echo $product->product_name; ?>" placeholder="Product Title"/>
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Parent Category *</label>
                                            
                                          <div class="col-md-9">
                                                <div class="row form-group label-floating is-empty search-container" id="category_search">
                                                    <div class="col-md-11">
                                                        <label class="control-label"></label>
                                                              <?php
                                                             $arrayTitles=array();
                                                             $arrayleval=array();
                                                             $qs = $this->db->query("Select title,leval from categories;");
                                                             $result = $qs->result();
                                                             foreach($result as $row){
                                                                 array_push($arrayTitles,$row->title);
                                                                 array_push($arrayleval,$row->leval);
                                                             }
                                                              ?>
                                                            <div class="form-group label-floating is-empty">
                                                                <label class="control-label"></label>
                                                                 <input id="myInput" type="text" name="category" class="form-control" placeholder="Select Category" value="<?php echo $product->title;?>">
                                                                <span class="material-input"></span>
                                                            </div>
        
                                                        <span class="material-input"></span>
                                                    </div>
                                                    <div class="col-md-1">
                                                         <span class="span btn btn-fill btn-rose" id="close" onclick="disableCategorySearch()"><i class="fa fa-times"></i></span>
                                                    </div>
                                                    
                                                
                                                </div>
                                                <div class="row form-group label-floating is-empty search-container" id="category_drop_down">
                                                    <div class="col-md-11">
                                                    <label class="control-label"></label>
                                                    <select class="text-input form-control" name="category_selection" onchange="getval(this);">
                                                        <option value=""><?php echo $this->lang->line("Select Category");?></option>
                                                        <?php  
                                                            for($x=0;$x<=count($arrayTitles);$x++){
                                                                $title = $arrayTitles[$x];
                                                                $leval = $arrayleval[$x];
                                                            ?>
                                                           <option value="<?php echo $title?>" <?php if($product->title == $title) echo 'selected';?>> <?php 
                                                             for($y=1;$y<=$leval;$y++){
                                                               echo '_';
                                                           }
                                                           echo $title;?></option>
                                                             <?php } ?> 
                                                    </select>
                                                <span class="material-input"></span>
                                                </div>
                                                <div class="col-md-1">
                                                     <span class=" span btn btn-fill btn-rose" id="search" onclick="enableCategorySearch()"><i class="fa fa-search"></i></span>
                                                      
                                                </div>
                                                
                                                </div>
                                            </div>
                                            
                                        </div>
                                                
                                        <div  style="margin-top:20px;margin-bottom:20px;margin-left:40px">
                                               <div onclick="clicked(this);" class="btn btn-fill btn-rose" style="float:right !important;margin-right:150px;">Add</div>
                                             <ol>
                                                  <?php 
                                                    
                                                    $arraye = explode(',',$product->size);
                                                     $arrayx = explode(',',$product->unit_value);
                                                     $aeCount = count($arraye);
                                                        for ($x = 0; $x < $aeCount; $x++) {
                                                        ?>
                                                        <div class="row">
                                                    <div class="col-md-4">
                                                        <label class="col-md-3 label-on-left" style="padding:0px !important">Size : *</label>
                                                        <div class="col-md-6">
                                                            <div class="form-group label-floating is-empty">
                                                                <label class="control-label"></label>
                                                                <input type="text" name="size[]"  class="form-control" placeholder="11x22"  value="<?php echo $arraye[$x]; ?>"/>
                                                            <span class="material-input"></span></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label class="col-md-3 label-on-left" style="padding:0px !important">Qty : *</label>
                                                        <div class="col-md-6">
                                                            <div class="form-group label-floating is-empty">
                                                                <label class="control-label"></label>
                                                                <input type="text" name="qty[]" class="form-control" placeholder="00" value="<?php 
                                                                    if(empty($arrayx[$x])){
                                                                        echo '';
                                                                    }else{
                                                                        echo $arrayx[$x];
                                                                    }
                                                                 ?>"/>
                                                            <span class="material-input"></span></div>
                                                        </div>
                                                    </div>
                                                     <?php if($x > 0){ ?>
                                                     <a href='javascript:void(0);' class='remove'>&times;</a>
                                                     <?php } ?>
                                                </div>
                                                        
                                                        <?php
                                                    }
                                                    
                                                    ?>
                                                
                                           
                                            </ol>
                                            
                                            
                                        </div>
                                        
                                        <!--<div class="row">-->
                                        <!--    <label class="col-md-3 label-on-left">Product Image:</label>-->
                                        <!--    <div class="col-md-9">-->
                                        <!--        <div>-->
                                        <!--            <span class="btn btn-rose btn-round btn-file">-->
                                        <!--                <span class="fileinput-new">Select image</span>-->
                                        <!--                <span class="fileinput-exists">Change</span>-->
                                        <!--                <input type="file" name="prod_img">-->
                                        <!--            <div class="ripple-container"></div></span>-->
                                        <!--        </div>-->
                                        <!--    </div>-->
                                        <!--</div>-->
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Product Image:</label>
                                            <div class="col-md-9">
                                                <legend></legend>
                                                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                                    <div class="fileinput-new thumbnail">
                                                        <img width="100%" height="100%" src="" />
                                                    </div>
                                                    <div class="row" style="max-width:80%"  id="image_preview">
                                                        <?php 
                                                        $isImage = false;
                                                            if (strpos($product->product_image, '[') !== false) {
                                                                $imgs = json_decode($product->product_image);
                                                                if(count($imgs)>0){
                                                                     foreach($imgs as $imgItem){
                                                                         if($imgItem!=''){
                                                                             $isImage = true;
                                                                        ?>
                                                                        <div style=" float: left;  width: 15%;margin:10px" id="<?php echo $imgItem ?>"> 
                                                                            <img style="height:150px;" src="<?php echo 'http://myshop.guidersmap.com/uploads/products/'.$imgItem ?>" id="<?php echo $imgItem ?>"/>
                                                                              <button type="button" class="btn btn-default btn-sm" id="<?php echo $imgItem ?>" onclick="removeItemEdits(this.id)">
                                                                                    <input type="hidden" name="<?php 
                                                                                            $name= explode(".",$imgItem);
                                                                                    
                                                                                    echo ($name[0]);?>" class="form-control" value="<?php echo $imgItem; ?>" />
                                                                                  <span class="glyphicon glyphicon-remove"></span> 
                                                                                </button>
                                                                           </div>
                                                                        <?php
                                                                         }
                                                                    }
                                                                }
                                                            }else if($product->product_image!=''){
                                                             $isImage = true;
                                                             ?>
                                                              <div style=" float: left;  width: 15%;margin:10px" id="<?php echo $product->product_image ?>">
                                                                 <img style="height:150px;" src="<?php echo 'http://myshop.guidersmap.com/uploads/products/'.$product->product_image?>" id="<?php echo $product->product_image ?>" />
                                                                   <button type="button" class="btn btn-default btn-sm" id="<?php echo $product->product_image ?>" onclick="removeItemEdits(this.id)">
                                                                       <input type="hidden" name="<?php 
                                                                        $name= explode(".",$product->product_image);
                                                                       echo $name[0] ?>" class="form-control" id="<?php echo $product->product_image ?>" value="<?php echo $product->product_image; ?>" />
                                                                      <span class="glyphicon glyphicon-remove"></span> Remove 
                                                                    </button>
                                                                </div>
                                                             <?php
                                                                
                                                            }

                                                        ?>
                                                        
                                                    </div>
                                                    <div>
                                                        <span class="btn btn-rose btn-round btn-file" id="add_image">
                                                            <span class="fileinput-new">Add image</span>
                                                            <span class="fileinput-exists">Add Image</span>
                                                                  <input type="file" id = "upload_file" name="prod_img[]" onchange="preview_image();" multiple>
                                                        </span>
                                                            <span href="#pablo" class="btn btn-danger btn-round" onclick = "clickedRemove()" id="removeall"><i class="fa fa-times"></i> Remove All</span>
                                                            
                                                    </div>
                                                </div>
                                                  <!--<input type="file" id="upload_file" name="upload_file[]" onchange="preview_image();" multiple/>-->
                                                     <!--<div id="image_preview"></div>-->

                                            </div>
                                            
                                        </div>
                                       
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Product Description</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <textarea name="product_description" class="textarea" style="width: 100%; height: 50px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd;  "><?php echo $product->product_description; ?></textarea>
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>
                                       
                                        <div class="row">
                                            <div class="col-md-1">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                <input type="radio" name="prod_status" value="1"  <?php if($product->in_stock == 1){ echo "checked"; } ?> /><label>In Stock</label>
                                                <span class="material-input"></span></div>
                                            </div>
                                                                                 
                                            <div class="col-md-1">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                <input type="radio" name="prod_status"  value="0" <?php if($product->in_stock == 0){ echo "checked"; } ?> /><label>Deactive</label>
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Price : *</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                    <input type="text" name="price"  class="form-control" value="<?php echo $product->price; ?>" placeholder="00.00"/>
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">'Price'TAX (%) : *</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                    <input type="text" name="tax"  class="form-control" value="<?php echo $product->tax; ?>" placeholder="00.00"/>
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>

                                        
                                        <div class="row" style="display: none;">
                                            <label class="col-md-3 label-on-left">Product Title : *</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                    <input type="text" name="unit" class="form-control" value="QTY" placeholder="KG/ BAG/ NOS/ QTY / etc " />
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>
                                        <div class="row" style="display: none;">
                                            <label class="col-md-3 label-on-left">Rewards : *</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                    <input type="text" name="rewards" class="form-control" value="0"  placeholder="00"/>
                                                <span class="material-input"></span></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <label class="col-md-3"></label>
                                            <div class="col-md-9">
                                                <div class="form-group form-button">
                                                    <input type="submit" class="btn btn-fill btn-rose" name="addcatg" value="Update Product">
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <?php  $this->load->view("admin/common/footer"); ?>
        </div>
    </div>
    <?php  $this->load->view("admin/common/fixed"); ?>
</body>
<!--   Core JS Files   -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery-3.1.1.min.js"); ?>" type="text/javascript"></script>
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery-ui.min.js"); ?>" type="text/javascript"></script>
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/bootstrap.min.js"); ?>" type="text/javascript"></script>
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/material.min.js"); ?>" type="text/javascript"></script>
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/perfect-scrollbar.jquery.min.js"); ?>" type="text/javascript"></script>
<!-- Forms Validations Plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery.validate.min.js"); ?>"></script>
<!--  Plugin for Date Time Picker and Full Calendar Plugin-->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/moment.min.js"); ?>"></script>
<!--  Charts Plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/chartist.min.js"); ?>"></script>
<!--  Plugin for the Wizard -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery.bootstrap-wizard.js"); ?>"></script>
<!--  Notifications Plugin    -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/bootstrap-notify.js"); ?>"></script>
<!--   Sharrre Library    -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery.sharrre.js"); ?>"></script>
<!-- DateTimePicker Plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/bootstrap-datetimepicker.js"); ?>"></script>
<!-- Vector Map plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery-jvectormap.js"); ?>"></script>
<!-- Sliders Plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/nouislider.min.js"); ?>"></script>
<!--  Google Maps Plugin    -->
<!--<script src="https://maps.googleapis.com/maps/api/js"></script>-->
<!-- Select Plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery.select-bootstrap.js"); ?>"></script>
<!--  DataTables.net Plugin    -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery.datatables.js"); ?>"></script>
<!-- Sweet Alert 2 plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/sweetalert2.js"); ?>"></script>
<!--    Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jasny-bootstrap.min.js"); ?>"></script>
<!--  Full Calendar Plugin    -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/fullcalendar.min.js"); ?>"></script>
<!-- TagsInput Plugin -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery.tagsinput.js"); ?>"></script>
<!-- Material Dashboard javascript methods -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/material-dashboard.js"); ?>"></script>
<!-- Material Dashboard DEMO methods, don't include it in your project! -->
<script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/demo.js"); ?>"></script>
<script type="text/javascript">
    $(document).ready(function() {
        md.initSliders()
        demo.initFormExtendedDatetimepickers();
    });
     $(document).on("click", "a.remove" , function() {
            $(this).parent().remove();
        });
         function clickedRemove(){
             $('#removeall').hide();
            $("#image_preview").empty();
            console.log("remove");
             $("#add_image").empty();
              $('#add_image').append('<span class="fileinput-new">Add image</span> <span class="fileinput-exists">Add Image</span> <input type="file" id = "upload_file" name="prod_img[]" onchange="preview_image();" multiple>');
        }
         function removeItem(item){
             var image_x = document.getElementById(item);
             image_x.parentNode.removeChild(image_x);
            $('#upload_file').remove();

            if(!$.trim( $('#image_preview').html() ).length) {
               $('#removeall').hide();
            }
        
        }
        function removeItemEdits(item){
             var image_x = document.getElementById(item);
             image_x.parentNode.removeChild(image_x);

            if(!$.trim( $('#image_preview').html() ).length) {
               $('#removeall').hide();
            }
        
        }
         function preview_image() 
        {
             $('#add_image').append('<input type="file" id = "upload_file" name="prod_img[]" onchange="preview_image();" multiple>');
            $('#removeall').show();
         var total_file=document.getElementById("upload_file").files.length;
         for(var i=0;i<total_file;i++)
         {
             var files = document.getElementById("upload_file").files;
          $('#image_preview').append(" <div style=\" float: left; width: 15%;margin:10px\" id='"+i+"'> <img style=\"height:150px; \" id='"+i+"' src='"+URL.createObjectURL(event.target.files[i])+"'/> <button type=\"button\" class=\"btn btn-default btn-sm\" id='"+i+"' onclick=\"removeItem(this.id)\"> <span class=\"glyphicon glyphicon-remove\"></span>  <input type=\"hidden\" name='"+files[i].name+"' class=\"form-control\" value='"+files[i].name+"' id='"+i+"' /></button> </div>");
         }
        }
   function clicked(item){
    //   $("ol").append("<div class=\"row\"><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\">Size : *</label><div class=\"col-md-4\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label> <input type=\"text\" name=\"size\"  class=\"form-control\" placeholder=\"11x22\"/><span class=\"material-input\"></span></div></div></div><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\">Qty : *</label><div class=\"col-md-4\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label><input type=\"text\" name=\"qty\" class=\"form-control\" placeholder=\"00\"/><span class=\"material-input\"></span></div></div></div><div class=\"card-header card-header-icon\" data-background-color=\"blue\" style=\"margin:0px !important;padding:0px !important;\"><i class=\"material-icons\">delete</i></div></div>");
     $("ol").append("<div class=\"row\"><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\" style=\"padding:0px !important\">Size : *</label><div class=\"col-md-6\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label> <input type=\"text\" name=\"size[]\"  class=\"form-control\" placeholder=\"11x22\"/><span class=\"material-input\"></span></div></div></div><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\" style=\"padding:0px !important\">Qty : *</label><div class=\"col-md-6\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label><input type=\"text\" name=\"qty[]\" class=\"form-control\" placeholder=\"00\"/><span class=\"material-input\"></span></div></div></div><a href='javascript:void(0);' class='remove'>&times;</a></div>");
   }
</script>

<script>
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/

  setTimeout(function(){
      autocomplete(document.getElementById("myInput"), (<?php echo json_encode($arrayTitles); ?>));
       if(!$.trim( $('#image_preview').html() ).length) {
               $('#removeall').hide();
            }
            
  }, 3000);
  setTimeout(function(){
       if(!$.trim( $('#image_preview').html() ).length) {
               $('#removeall').hide();
            }
            
  }, 1000);
function getval(sel)
        {
              $('#myInput').val(sel.value);
        }
 $('#category_search').hide();
    $('#category_drop_down').show();
    
function disableCategorySearch(){
    $('#category_search').hide();
    $('#category_drop_down').show();
}

function enableCategorySearch(){
    $('#category_search').show();
    $('#category_drop_down').hide();
}
</script>
</html>