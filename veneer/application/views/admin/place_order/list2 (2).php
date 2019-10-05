<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url($this->config->item("new_theme")."/assets/img/apple-icon.png"); ?>" />
    <link rel="icon" type="image/png" href="<?php echo base_url($this->config->item("new_theme")."/assets/img/favicon.png"); ?>" />
    <title></title>
    <!-- Canonical SEO -->
    <link rel="canonical" href="//www.creative-tim.com/product/material-dashboard-pro" />

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
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-icon" data-background-color="purple">
                                    <i class="material-icons">assignment</i>
                                </div>
                                <div class="card-content">
                                                                        
                                    <div class="container">
                                    	<div class="row">
                                    		<div class="span12">
                                        	    <div class="menu">
                                        	        
                                        	        <?php 
                                        	        $myObj = new StdClass();
                                                    
                                        	        $child = "";
                                        	        $cats = new StdClass();
                                        	            for($c=0;$c<count($allcat);$c++){
                                        	                $inc = 0;
                                        	                  $acat = $allcat[$c];
                                        	                    if($acat->parent==0){
                                        	                         $myObj->titles[$c] = $acat->title;
                                        	                    }
                                        	                     
                                            	                    for($x=0;$x<count($allcat);$x++){
                                            	                        $acat1 = $allcat[$x];
                                            	                         if($acat1->parent!=0 && $acat1->prtitle==$acat->title){
                                            	                             
                                            	                             if($child == "" && $child !=$acat->title){
                                            	                                 if(!empty($cats)){
                                            	                                     $cats = new StdClass();
                                            	                                 }
                                            	                                 
                                            	                             }
                                            	                              $p = $inc++;
                                            	                             $tH = $acat1->prtitle;
                                            	                             $myObj->$tH[$p] = $acat1->title;
                                            	                            
                                            	                         }
                                            	                          
                                            	                   }
                                            	                   
                                        	                    
                                                    }?>
                                                    
                                                    <?php 
                                                    $myJSON = json_encode($myObj);
                                                    echo $myJSON;
                                                  
                                                    for($x=0;$x<count($myObj->titles);$x++){
                                        	                    
                                        	        ?>
                                                        <div class="accordion">
                                                        <!-- Áreas -->
                                                             <div class="accordion-group card">
                                                            <!-- Área -->
                                                                    <div class="accordion-heading area accordion-toggle" data-toggle="collapse" href="#<?php echo $myObj->titles[$x] ?>" style="padding:15px;">
                                                                        <p style="font-size:22px;"><?php echo $myObj->titles[$x] ?> </p>
                                                                    </div><!-- /Área -->
                                                
                                                                    <div class="accordion-body collapse" id="<?php echo $myObj->titles[$x] ?>">
                                                                        <div class="accordion-inner">
                                                                            
                                                                	        <?php 
                                                                	            $titlex = $myObj->titles[$x];
                                                                	            
                                                                	            if(!empty($myObj->$titlex)){
                                                                	                $title = $myObj->$titlex;
                                                                	                for($a=0;$a<count($title);$a++){
                                                                	                    $atitle = $title[$a];
                                                                    	                    
                                                                    	        ?>
                                                                                    <div class="accordion" id="<?php echo $atitle ?>" style=" border-left: 4px solid #f38787;border-bottom: 4px solid #f38787 ">
                                                                                        <div class="accordion-group card" style="margin-left:10px;margin-right:10px;width:97% !important">
                                                                                          
                                                                                            <div class="accordion-heading equipamento accordion-toggle" data-parent="#<?php echo $atitle ?>" data-toggle="collapse" href="#s<?php echo $atitle; ?>"
                                                                                            
                                                                                            
                                                                                            style="padding:15px;">
                                                                                                  <p style="font-size:16px;"><?php echo $atitle ?></p>
                                                                                            </div><!-- Pontos -->
                                                                                           
                                                                                              <?php 
                                                                                                 $st =$title[$a];
                                                                                	            if(!empty($myObj->$st)){
                                                                                	                $titleH2 = ($myObj->$st);
                                                                                	                ?>
                                                                                	                  <div class="accordion-body collapse" id="s<?php echo $atitle; ?>">
                                                                                                       <div class="accordion-inner">
                                                                                                        
                                                                                                          <div class="accordion" id="servico1">
                                                                                                             <div class="accordion-group card" style="margin-left:10px;margin-right:10px;width:97% !important">
                                                                                                                <div class="accordion-heading ponto accordion-toggle" data-parent="#servico1-1-1" data-toggle="collapse" href="#servico1-1-1" style="padding:15px;">
                                                                                                                  <ul class="nav nav-list">
                                                                                                                    <?php 
                                                                                                                    for($b=0;$b<count($titleH2);$b++){
                                                                                                            	            ?>
                                                                                                                            <li><a class="accordion-toggle" ><?php echo $titleH2[$b] ?></a>
                                                                                                                   
                                                                                                                           </li> 
                                                                                                                           <?php   } ?>
                                                                                                                          </ul>
                                                                                                                </div>
                                                                                                                   
                                                                                                             </div>
                                                                                                          </div>
                                                                                                          
                                                                                                          
                                                                                                       </div>
                                                                                                    </div>
                                                                                	              
                                                                                	                <?php
                                                                                	            } 
                                                                                                else{
                                                                                                    ?>
                                                                                    	             <div class="accordion-body collapse" id="s<?php echo $atitle ?>">
                                                                                                       <div class="accordion-inner">
                                                                                                        
                                                                                                          <div class="accordion" id="s<?php echo $b ?>">
                                                                                                             <div class="accordion-group card" style="margin-left:10px;margin-right:10px;width:97% !important">
                                                                                                                <div class="accordion-heading ponto accordion-toggle" data-parent="#s<?php echo $b ?>" data-toggle="collapse" href="#s<?php echo $b ?>" style="padding:15px;">
                                                                                                                  <ul class="nav nav-list">
                                                                                                                   
                                                                                                                            <li><a class="accordion-toggle" >No Chid</a>
                                                                                                                   
                                                                                                                           </li> 
                                                                                                                         
                                                                                                                          </ul>
                                                                                                                    
                                                                                                                </div>
                                                                                                                   
                                                                                                             </div>
                                                                                                          </div>
                                                                                                          
                                                                                                          
                                                                                                       </div>
                                                                                                    </div>
                                                                                                    <?php
                                                                                                 } ?>
                                                                                        </div><!-- /Equipamentos -->
                                                                                    </div>
                                                                                    <?php } 
                                                                	            }else{
                                                                	                $t = 'title';
                                                                    	        ?>
                                                                    	        <div class="accordion" id="<?php echo $titlex ?>" style=" border-left: 4px solid #f38787;border-bottom: 4px solid #f38787 " onclick="addItem('<?php echo $t;?>')">
                                                                                        <div class="accordion-group card" style="margin-left:10px;margin-right:10px;width:97% !important">
                                                                                          
                                                                                            <div class="accordion-heading equipamento accordion-toggle" data-parent="#<?php echo $titlex ?>" data-toggle="collapse" href="<?php echo $titlex ?>" style="padding:15px;">
                                                                                                  <p style="font-size:16px;"><?php echo 'No Child' ?></p>
                                                                                            </div><!-- Pontos -->
                                                                
                                                                                            
                                                                                        </div><!-- /Equipamentos -->
                                                                                    </div>
                                                                                    
                                                                                    <?php } ?>
                                                                        </div>
                                                                    </div>
                                                             </div>
                                                         </div><!-- /accordion -->
                                                    
                                                    <?php  }?>
                                                    
                                                </div> 
                                    		</div>
                                    	</div>
                                    </div>
                                </div>
                                <!-- end content-->
                            </div>
                            <!--  end card  -->
                        </div>
                        <!-- end col-md-12 -->
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
    $(document).ready(function() {
        // $('#datatables').DataTable({
        //     "pagingType": "full_numbers",
        //     "lengthMenu": [
        //         [10, 25, 50, -1],
        //         [10, 25, 50, "All"]
        //     ],
        //     responsive: true,
        //     language: {
        //         search: "_INPUT_",
        //         searchPlaceholder: "Search records",
        //     }
        // });


        // var table = $('#datatables').DataTable();

        // // Edit record
        // table.on('click', '.edit', function() {
        //     $tr = $(this).closest('tr');

        //     var data = table.row($tr).data();
        //     alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        // });

        // // Delete a record
        // table.on('click', '.remove', function(e) {
        //     $tr = $(this).closest('tr');
        //     table.row($tr).remove().draw();
        //     e.preventDefault();
        // });

        // //Like record
        // table.on('click', '.like', function() {
        //     alert('You clicked on Like button');
        // });

        // $('.card .material-datatables label').addClass('form-group');
    });
    
    function addItem(item){
    //   alert(item);
        $("ol").append("  <div class=\"accordion-body collapse\" id=\""+item+"\"><div class=\"accordion-inner\"><div class=\"accordion\" id=\"servico1\"><div class=\"accordion-group card\" style=\"margin-left:10px;margin-right:10px;width:97% !important\"><div class=\"accordion-heading ponto accordion-toggle\" data-parent=\"#servico1-1-1\" data-toggle=\"collapse\" href=\"#servico1-1-1\" style=\"padding:15px;\"><a class=\"accordion-toggle\" >"+item+"</a></div> </div> </div></div></div>");
    }
</script>

</html>