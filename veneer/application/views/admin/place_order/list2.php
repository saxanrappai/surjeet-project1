<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url($this->config->item("new_theme")."/assets/img/apple-icon.png"); ?>" />
    <link rel="icon" type="image/png" href="<?php echo base_url($this->config->item("new_theme")."/assets/img/favicon.png"); ?>" />
    <title></title>

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
        <!--sider -->
        <?php  $this->load->view("admin/common/sidebar"); ?>
        
        <div class="main-panel">
            <!--head -->
            <?php  $this->load->view("admin/common/header"); ?>
            <!--content -->
            <div class="content">
                <div class="container-fluid">
                    <?php  if(isset($error)){ echo $error; }
                        echo $this->session->flashdata('message'); 
                    ?>
                    <div class="row">
                          <form form action="" method="post" enctype="multipart/form-data" class="form-horizontal" autocomplete="off" >
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-icon" data-background-color="purple">
                                    <i class="material-icons">assignment</i>
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">All Products</h4>
                                    <div class="toolbar">
                                        <!--        Here you can write extra buttons/actions for the toolbar              -->
                                    </div>
                                    
                                    <div class="material-datatables">
                                        <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                                             <div class="btn-group col-md-12" style="margin-bottom:10px;">
                                               <div onclick="clicked(this);" class="btn btn-fill btn-rose" style="padding:10px;margin-top:10px;width:120px;float:right">Place Order</div>
                                               <div class="dropdown" style="float:right;margin-top:10px;margin:left:30px;">
                                                    <select id="selection" class="btn btn-primary" type="button" style="margin-right:50px;">
                                                    
                                                         <option value="1">Select Store</option>
                                                        <?php foreach($allusers as $user){ 
                                                            if($user->user_id!=1){
                                                        ?>
                                                            <option value="<?php echo $user->user_id?>"><?php echo $user->user_fullname?></option>
                                                        <?php } } ?>
                                                    
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                            <thead>
                                                <tr>
                                                    <th class="text-center">ID</th>
                                                    <th class="text-center">Title</th>
                                                    <th class="text-center">Category Name</th>
                                                    <th class="text-center">Size</th>
                                                    <th class="text-center">Quantity</th>
                                                    <th class="text-center">Product Description</th>
                                                    <th class="text-center">Image</th>
                                                    <th class="text-center">Prices</th>
                                                    <th class="text-center">Status</th>
                                                    <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-center">ID</th>
                                                    <th class="text-center">Title</th>
                                                    <th class="text-center">Category Name</th>
                                                    <th class="text-center">Size</th>
                                                    <th class="text-center">Quantity</th>
                                                    <th class="text-center">Product Description</th>
                                                    <th class="text-center">Image</th>
                                                    <th class="text-center">Prices</th>
                                                    <th class="text-center">Status</th>
                                                    <th class="text-center">Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <?php foreach($products as $product){ ?>
                                                <tr>
                                                    <td class="text-center"><?php echo $product->product_id; ?></td>
                                                    <td class="text-center"><?php echo $product->product_name; ?></td> 
                                                    <td class="text-center"><?php echo $product->title; ?></td>
                                                    <td class="text-center"><?php 
                                                    
                                                    $arraye = explode(',',$product->size);
                                                    foreach($arraye as $ae){
                                                        echo $ae;?><br><?php
                                                    }
                                                    
                                                    ?></td>
                                                    <td class="text-center"><?php 
                                                        $totalQu = 0;
                                                      $arrayx = explode(',',$product->unit_value);
                                                    foreach($arrayx as $ax){
                                                        $totalQu = $totalQu+(int)$ax;
                                                        echo $ax;?><br><?php
                                                    }
                                                    
                                                    ?></td>
                                                    <td class="text-center"><?php echo $product->product_description; ?></td>
                                                     <td class="text-center"><?php 
                                                    $showImage = '';
                                                    if(is_array(json_decode($product->product_image))){
                                                        $image = json_decode($product->product_image);
                                                        if(count($image)>0){
                                                        $showImage= $image[0];
                                                        }
                                                    }else{
                                                        $showImage = $product->product_image;
                                                    }
                                                        
                                                    if($showImage!=""){ ?><div class="cat-img" style="width: 50px;"><img width="100%" height="100%" src="<?php echo $this->config->item('base_url').'uploads/products/'.$showImage; ?>" /></div> <?php } ?></td>

                                                    <td class="text-center">
                                                    <?php echo $product->price." Rs per QTY" ?>
                                                    </td>
                                                    <td class="text-center"><?php if($totalQu > 0){ ?><span class="label label-success">In Stock</span><?php } else { ?><span class="label label-danger">Out of Stock</span><?php } ?></td>

                                                     <td class="td-actions text-center">
                                                         
                                                         <div class="btn-group" id="btn<?php echo $product->product_id; ?>">
                                                             
                                                             <div class="row" style="width:180px;">
                                                                 
                                                                  <div class="col-md-2">
                                                                    <div class="input-group">
                                                                        <?php
                                                                         if($totalQu==0){
                                                                            
                                                                         }else{ ?>
                                                                              <span class="input-group-btn">
                                                                            <button type="button" id ="<?php echo $product->product_id; ?>"  onclick="quantityMinus(this);" class="quantity-left-minus btn btn-rose btn-number"  data-type="minus" data-field="">
                                                                              <span class="glyphicon glyphicon-minus"></span>
                                                                            </button>
                                                                        </span>
                                                                        <input type="text" id="quantity<?php echo $product->product_id; ?>" name="quantity" class="form-control input-number" value="0" min="1"  style="width:30px;" disabled >
                                                                        <span class="input-group-btn">
                                                                            <button type="button" id ="<?php echo $product->product_id; ?>"  onclick="quantityAdd(this,<?php echo $totalQu; ?>);" class="quantity-right-plus btn btn-rose btn-number" data-type="plus" data-field=""
                                                                                    <?php if($totalQu==0){echo "disabled"; } ?>>
                                                                                <span class="glyphicon glyphicon-plus"></span>
                                                                            </button>
                                                                        </span>
                                                                        <?php }
                                                                        ?>
                                                                       
                                                                    </div>
                                                                 </div>
                                                             </div>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                <?php } ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- end content-->
                            </div>
                            <!--  end card  -->
                        </div>
                        <!-- end col-md-12 -->
                        </form>
                    </div>
                    <!-- end row -->
                </div>
            </div>
            <!--footer -->
            <?php  $this->load->view("admin/common/footer"); ?>
        </div>
    </div>
    <!--fixed -->
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
    var products = {};
    $(document).ready(function() {
            
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });


        var table = $('#datatables').DataTable();

        // Edit record
        table.on('click', '.edit', function() {
            $tr = $(this).closest('tr');

            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        });

        // Delete a record
        table.on('click', '.remove', function(e) {
            $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });

        //Like record
        table.on('click', '.like', function() {
            alert('You clicked on Like button');
        });

        $('.card .material-datatables label').addClass('form-group');
        
        
        // $("#music").click(function () {
        //     $("#musicinfo").fadeToggle();
        // });
        
        
    });
    
    function clicked(item){
        var e = document.getElementById("selection");
        var strUser = e.options[e.selectedIndex].value;
        if(strUser != '1'){
            if(jQuery.isEmptyObject(products)){
               alert('please select products to place order')
            }else{
                $.ajax({
                  type: "POST",
                  url: './sent_order',
                  data:{id:products,store_id:strUser},
                  success:function(html) {
                       location.reload();
                     alert(html);
                  }
        
              });  
               
            }
        }else{
            alert('Please select store');
        }
      
    };
    function quantityAdd(item,totalVal){
       
          var s = '#quantity'+item.id;
         var quantity = parseInt($(s).val());
         if(quantity>=totalVal){
             
         }else{
              products[item.id]=(quantity+1); 
            $(s).val(quantity + 1);  
         }
         
       

      
    }
    function quantityMinus(item){
          var s = '#quantity'+item.id;
        var quantity = parseInt($(s).val());
        if(quantity>0){
            products[item.id]=(quantity-1); 
            $(s).val(quantity - 1);
            if((quantity-1)==0){
                delete products[item.id];
            }
        }
    }
    
   
    
    
</script>

</html>