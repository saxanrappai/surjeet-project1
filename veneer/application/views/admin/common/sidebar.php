<div class="sidebar" data-active-color="rose" data-background-color="black" data-image="<?php echo base_url($this->config->item("new_theme")."/assets/img/sidebar-1.jpg"); ?> ">
            <!--
            Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
            Tip 2: you can also add an image using data-image tag
            Tip 3: you can change the color of the sidebar with data-background-color="white | black"-->
            <div class="logo">
                <a href="https://myshop.guidersmap.com" class="simple-text">
                    My Shop
                </a>
            </div>
            <div class="logo logo-mini">
                <a href="https://myshop.guidersmap.com" class="simple-text">
                    My Shop
                </a>
            </div>
            <div class="sidebar-wrapper" id="menu">
                <div class="user">
                    <div class="photo">
                        <?php 
                            $z = _get_current_user_id($this);
                            $img=$this->db->query("SELECT * FROM `users` where user_id='".$z."' ") ;
                            $image= $img->result();
                            //echo $z;
                            if($image[0]->user_image==null){
                                ?>
                                 <img src="<?php echo $this->config->item('base_url').'/uploads/default.jpg' ?>" />
                                <?php
                            }else{ ?>
                                <img src="<?php echo $this->config->item('base_url').'/uploads/profile/'.$image[0]->user_image ?>" />
                            <?php }
                        ?>
                    
                    </div>
                    <div class="info">
                        <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                            <?php echo ""._get_current_user_name($this)."" ; ?>
                            <b class="caret"></b>
                        </a>
                        <div class="collapse" id="collapseExample">
                            <ul class="nav">
                                <!--li>
                                    <a href="#">My Profile</a>
                                </li-->
                                <li>
                                    <a href="<?php echo site_url("users/edit_user/"._get_current_user_id($this)); ?>" >Edit Profile</a>
                                </li>
                                <li>
                                    <a href="<?php echo site_url("admin/signout") ?>" >Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="nav">
                    <li>
                        <a href="<?php echo site_url("admin/dashboard"); ?>">
                            <i class="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    
                     <li class="" style="<?php if($image[0]->user_login_type>3) { echo "display:none"; }?>">
                        <a href="<?php echo site_url("admin/products"); ?>">
                            <i class="material-icons"> Products</i>
                            <p>Products</p>
                        </a>
                    </li>
                    <li class="" style="<?php if($image[0]->user_login_type>3) { echo "display:none"; }?>">
                        <a href="<?php echo site_url("admin/listcategories"); ?>">
                            <i class="material-icons"> Categories</i>
                            <p>Categories</p>
                        </a>
                    </li>
                 
                    <li class="" style="<?php if(($image[0]->user_login_type!=1) && ($image[0]->user_login_type!=4)) { echo "display:none"; }?>">
                        <a href="<?php echo site_url("admin/orders"); ?>">
                            <i class="material-icons"> Orders</i>
                            <p>Orders</p>
                        </a>
                    </li>
                    <li class="" style="<?php if(($image[0]->user_login_type!=1)) { echo "display:none"; }?>">
                        <a href="<?php echo site_url("users"); ?>">
                            <i class="material-icons">Store</i>
                            <p>Store Management
                            </p>
                        </a>
                    </li>
                    <li class="" style="<?php if(($image[0]->user_login_type!=1)) { echo "display:none"; }?>">
                        <a href="<?php echo site_url("admin/drivers"); ?>">
                            <i class="material-icons">Driver</i>
                            <p>Driver Management
                            </p>
                        </a>
                    </li>
                    
                     <li class=""  style="<?php if(($image[0]->user_login_type!=1) && ($image[0]->user_login_type!=5)) { echo "display:none"; }?>">
                        <a href="<?php echo site_url("admin/place_order"); ?>">
                            <i class="material-icons"> Orders</i>
                            <p>Place Order</p>
                        </a>
                    </li>
                    
                    <li class="">
                        <a href="<?php echo site_url("admin/notification"); ?>">
                            <i class="material-icons"> Orders</i>
                            <p>Notification</p>
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
        <script src="<?php echo base_url($this->config->item("new_theme")."/assets/js/jquery-3.1.1.min.js"); ?>" type="text/javascript"></script>

        <script type="text/javascript">
    $(document).ready(function() {
       
        var ar = ["admin/notification","admin/place_order","users","admin/orders","admin/listcategories","admin/products","admin/dashboard","admin/drivers"];
        var i;
        var x = -1;
        var h = location.href;
        for (i = 0; i < ar.length; i++) { 
            // console.log(h+"--"+ar[i]);
            if(h.includes(ar[i])){
                x=0;
                sessionStorage.setItem('href',location.href);
            }
        }
      $('#menu > ul.nav li a[href="'+ sessionStorage.getItem('href')+'"]').parent().addClass('active');
    //   $('#menu > ul.nav li a').click(function(e) {
    //       console.log('onclick');
    //         var $this = $(this);
    //         $this.parent().siblings().removeClass('active').end().addClass('active');
    //         location.href = $(this).attr('href');
    //         e.preventDefault();
            
    // });
    });
</script>