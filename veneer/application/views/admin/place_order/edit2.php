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
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label"></label>
                                                    <select class="text-input form-control" name="parent">
                                                        <option value=""><?php echo $this->lang->line("Select Category");?></option>
                                                         <?php  
                                                            echo printCategory(0,0,$this,$product);
                                                            function printCategory($parent,$leval,$th,$product){
                                                            
                                                            $q = $th->db->query("SELECT a.*, Deriv1.count FROM `categories` a  LEFT OUTER JOIN (SELECT `parent`, COUNT(*) AS count FROM `categories` GROUP BY `parent`) Deriv1 ON a.`id` = Deriv1.`parent` WHERE a.`status`=1 and a.`parent`=" . $parent);
                                                            $rows = $q->result();
                                    
                                                            foreach($rows as $row){
                                                                if ($row->count > 0) {
                                                                        
                                                                            //print_r($row) ;
                                                                            //echo "<option value='$row[id]_$co'>".$node.$row["alias"]."</option>";
                                                                            printRow($row,$product,true);
                                                                            printCategory($row->id, $leval + 1,$th,$product);
                                                                            
                                                                        } elseif ($row->count == 0) {
                                                                            printRow($row,$product,false);
                                                                            //print_r($row);
                                                                        }
                                                                }
                                    
                                                            }
                                                            function printRow($d,$product,$bool){
                                                                
                                                           // foreach($data as $d){
                                                            
                                                            ?>
                                                               <option value="<?php echo $d->id; ?>" <?php if($product->category_id == $d->id){ echo "selected"; } ?> ><?php for($i=0; $i<$d->leval; $i++){ echo "_"; } echo $d->title; ?></option>
                                                                 
                                                             <?php } ?> 
                                                    </select>
                                                <span class="material-input"></span></div>
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
                                                        <label class="col-md-3 label-on-left">Size : *</label>
                                                        <div class="col-md-4">
                                                            <div class="form-group label-floating is-empty">
                                                                <label class="control-label"></label>
                                                                <input type="text" name="size[]"  class="form-control" placeholder="11x22"  value="<?php echo $arraye[$x]; ?>"/>
                                                            <span class="material-input"></span></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label class="col-md-3 label-on-left">Qty : *</label>
                                                        <div class="col-md-4">
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
                                        
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Product Image:</label>
                                            <div class="col-md-9">
                                                <div>
                                                    <span class="btn btn-rose btn-round btn-file">
                                                        <span class="fileinput-new">Select image</span>
                                                        <span class="fileinput-exists">Change</span>
                                                        <input type="file" name="prod_img">
                                                    <div class="ripple-container"></div></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <label class="col-md-3 label-on-left">Product Description</label>
                                            <div class="col-md-9">
                                                <div class="form-group label-floating is-empty">
                                                    <textarea name="product_description" class="textarea" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd;  "><?php echo $product->product_description; ?></textarea>
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
                                                    <input type="submit" class="btn btn-fill btn-rose" name="addcatg" value="Add Product">
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
   function clicked(item){
    //   $("ol").append("<div class=\"row\"><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\">Size : *</label><div class=\"col-md-4\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label> <input type=\"text\" name=\"size\"  class=\"form-control\" placeholder=\"11x22\"/><span class=\"material-input\"></span></div></div></div><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\">Qty : *</label><div class=\"col-md-4\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label><input type=\"text\" name=\"qty\" class=\"form-control\" placeholder=\"00\"/><span class=\"material-input\"></span></div></div></div><div class=\"card-header card-header-icon\" data-background-color=\"blue\" style=\"margin:0px !important;padding:0px !important;\"><i class=\"material-icons\">delete</i></div></div>");
     $("ol").append("<div class=\"row\"><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\">Size : *</label><div class=\"col-md-4\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label> <input type=\"text\" name=\"size[]\"  class=\"form-control\" placeholder=\"11x22\"/><span class=\"material-input\"></span></div></div></div><div class=\"col-md-4\"><label class=\"col-md-3 label-on-left\">Qty : *</label><div class=\"col-md-4\"><div class=\"form-group label-floating is-empty\"><label class=\"control-label\"></label><input type=\"text\" name=\"qty[]\" class=\"form-control\" placeholder=\"00\"/><span class=\"material-input\"></span></div></div></div><a href='javascript:void(0);' class='remove'>&times;</a></div>");
   }
</script>
</html>