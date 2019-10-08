<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Admin extends MY_Controller {

    public function __construct()

    {

                parent::__construct();

                // Your own constructor code

                $this->load->database();

                $this->load->helper('login_helper');

                $this->load->helper('sms_helper');

    }

    function signout(){

        $this->session->sess_destroy();

        redirect("admin");

    }

    public function index()

    {

        if(_is_user_login($this)){

            redirect(_get_user_redirect($this));

        }else{

            

            $data = array("error"=>"");       

            if(isset($_POST))

            {

                

                $this->load->library('form_validation');

                

                $this->form_validation->set_rules('email', 'Email', 'trim|required');

                $this->form_validation->set_rules('password', 'Password', 'trim|required');

                if ($this->form_validation->run() == FALSE) 

                {

                   if($this->form_validation->error_string()!=""){

                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                </div>';

                    }

                }else

                {

                   

$q = $this->db->query("Select * from `users` where (`user_email`='".$this->input->post("email")."')

 and user_password='".md5($this->input->post("password"))."' and user_login_status='1'");

                    

                   // print_r($q) ; 

                    if ($q->num_rows() > 0)

                    {

                        $row = $q->row(); 

                        if($row->user_status == "0")

                        {

                            $data["error"] = '<div class="alert alert-danger alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> Your account currently inactive.</div>';

                        }

                        else

                        {

                            $newdata = array(

                                                   'user_name'  => $row->user_fullname,

                                                   'user_email' => $row->user_email,

                                                   'logged_in' => TRUE,

                                                   'user_id'=>$row->user_id,

                                                   'user_type_id'=>$row->user_type_id

                                                  );

                            $this->session->set_userdata($newdata);

                            redirect(_get_user_redirect($this));

                         

                        }

                    }

                    else

                    {

                        $data["error"] = '<div class="alert alert-danger alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> Invalid User and password. </div>';

                    }

                   

                    

                }

            }

            $data["active"] = "login";

            

            $this->load->view("admin/login2",$data);

        }

    }

    

    public function sendNotification($message,$user_id){

            $this->load->helper('gcm_helper');

            $gcm = new GCM();   

                             

            $q = $this->db->query("Select * from users where user_id = '".$user_id."' ");



                        $row = $q->row(); 

                        if($row->user_gcm_code != ""){

                             $result = $gcm->send_notification(array($row->user_gcm_code),$message ,"android");

                        }

                        

            // if($user->user_gcm_code != ""){

            //     $result = $gcm->send_notification(array($user->user_gcm_code),$message ,"android");

            // }

            // if($user->user_ios_token != ""){

            //     $result = $gcm->send_notification(array($user->user_ios_token),$message ,"ios");

            // }

    }

    

    public function dashboard(){

        if(_is_user_login($this)){

            $data = array();

            $this->load->model("product_model");

            $date = date("Y-m-d");

            $data["today_orders"] = $this->product_model->get_sale_orders_dashboard(" sale.on_date = '".$date."' ");

             foreach($data["today_orders"] as $order){

                 $order_titles= array();

                   

                  $q = $this->db->query("Select * from sale_items where sale_id = ".$order->sale_id);

                    $sData = $q->result();

                     

                    $it = $sData[0]->items;

                    $pItems = (str_replace("\\","",$it));

                    $pItems = json_decode(($pItems),true);

                    if(count($pItems)>0){

                         foreach($pItems as $key => $val) {



                          $q = $this->db->query("Select si.*,p.*,c.* from sale_items si 

                                            inner join products p on p.product_id = '".$key."' 

                                            inner join categories c on c.id = p.category_id where sale_id = '".$order->sale_id."'");

                                            

                            $cat = $q->result();

                        //   echo json_encode($cat);

                              if(count($cat)>0){

                                  if(in_array($cat[0]->title,$order_titles)){

                                      

                                  }else{

                                      array_push($order_titles,$cat[0]->title);

                                  }

                                  

                                 $order->quantity = $cat[0]->qty;

                              }else{

                                 $order->category_title = '';

                                 $order->quantity = '';

                              }

                        }

                         $order->category_title = json_encode($order_titles);

                        //  echo json_encode($order);

                    }

               

            }

             $nexday = date('Y-m-d', strtotime(' +1 day'));

            $data["nextday_orders"] = $this->product_model->get_sale_orders(" and sale.on_date = '".$nexday."' ");

            $this->load->view("admin/dashboard",$data);

        }else{

            redirect('admin');

        }

    }

  

    public function orders(){

        if(_is_user_login($this)){

            $data = array();

            $this->load->model("product_model");

           

             $filter = "";

           

            $data["today_orders"] = $this->product_model->get_sale_orders($filter);

            $this->load->model("drivers_model");

            $data["drivers"] = $this->drivers_model->get_alluser();

            foreach($data["today_orders"] as $order){

                 $order_titles= array();

                 $qdriver = $this->db->query("Select * from drivers where driver_id = ".$order->driver_id);

                    $sDataDriver = $qdriver->result();

                    

                    $order->driver = $sDataDriver;

                     

                  $q = $this->db->query("Select * from sale_items where sale_id = ".$order->sale_id);

                    $sData = $q->result();

                     

                    $it = $sData[0]->items;

                    $pItems = (str_replace("\\","",$it));

                    $pItems = json_decode(($pItems),true);

                    if(count($pItems)>0){

                         foreach($pItems as $key => $val) {



                          $q = $this->db->query("Select si.*,p.*,c.* from sale_items si 

                                            inner join products p on p.product_id = '".$key."' 

                                            inner join categories c on c.id = p.category_id where sale_id = '".$order->sale_id."'");

                                            

                            $cat = $q->result();

                           

                              if(count($cat)>0){

                                  if(in_array($cat[0]->title,$order_titles)){

                                      

                                  }else{

                                      array_push($order_titles,$cat[0]->title);

                                  }

                                 $order->quantity = $cat[0]->qty;

                              }else{

                                 $order->category_title = '';

                                 $order->quantity = '';

                              }

                        }

                         $order->category_title = json_encode($order_titles);

                        //  echo json_encode($order);

                    }

               

            }

            

            $this->load->view("admin/orders/orderslist2",$data);

        }else{

            redirect('admin');

        }

    }

 

    public function confirm_order($order_id){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $order = $this->product_model->get_sale_order_by_id($order_id);

            if(!empty($order)){

                $this->db->query("update sale set status = 1 where sale_id = '".$order_id."'");

                //  $q = $this->db->query("Select * from registers where user_id = '".$order->user_id."'");

                // $user = $q->row();

                

                                 $message["title"] = "Order Confirmed";

                    $message["body"] = "Your order Number '".$order->sale_id."' is successfully confirmed ";

                    $message["created_at"] = date("Y-m-d h:i:s"); 

                    $this->sendNotification($message,$order->user_id);

                

                $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Success!</strong> Order confirmed. </div>');

            }

            redirect("admin/orders");

        }else{

            redirect('admin');

        }

    }

    

    public function delivered_order($order_id,$driver_id){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $order = $this->product_model->get_sale_order_by_id($order_id);

            if(!empty($order)){

                $this->db->query("update sale set status = 2,driver_id = '".$driver_id."' where sale_id = '".$order_id."'   ");

                /* $this->db->query("INSERT INTO delivered_order (sale_id, user_id, on_date, delivery_time_from, delivery_time_to, status, note, is_paid, total_amount, total_rewards, total_kg, total_items, socity_id, delivery_address, location_id, delivery_charge, new_store_id, assign_to, payment_method)

SELECT sale_id, user_id, on_date, delivery_time_from, delivery_time_to, status, note, is_paid, total_amount, total_rewards, total_kg, total_items, socity_id, delivery_address, location_id, delivery_charge, new_store_id, assign_to, payment_method FROM sale

where sale_id = '".$order_id."'"); 

*/

                     $message["title"] = "Order Out for delivery";

                    $message["body"] = "Your order Number '".$order->sale_id."' is out for delivery with driver id '".$driver_id."' ";

                    $message["created_at"] = date("Y-m-d h:i:s"); 

                    $this->sendNotification($message,$order->user_id);

                

                

                // $q = $this->db->query("Select * from registers where user_id = '".$order->user_id."'");

                // $user = $q->row();

                

                //         $message["title"] = "Delivered  Order";

                //         $message["message"] = "Your order Number '".$order->sale_id."' Delivered successfully. Thank you for being with us";

                //         $message["image"] = "";

                //         $message["created_at"] = date("Y-m-d h:i:s"); 

                //         $message["obj"] = "";

                            

                //             $this->load->helper('gcm_helper');

                //             $gcm = new GCM();   

                //             if($user->user_gcm_code != ""){

                //             $result = $gcm->send_notification(array($user->user_gcm_code),$message ,"android");

                //             }

                //              if($user->user_ios_token != ""){

                //             $result = $gcm->send_notification(array($user->user_ios_token),$message ,"ios");

                //              }

                

                $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Success!</strong> Order delivered. </div>');

            }

            redirect("admin/orders");

        }else{

            redirect('admin');

        }

    }

    

    public function delivered_order_complete($order_id){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $order = $this->product_model->get_sale_order_by_id($order_id);

            if(!empty($order)){

                $this->db->query("update sale set status = 4 where sale_id = '".$order_id."' ");

                $this->db->query("INSERT INTO delivered_order (sale_id, user_id, on_date, delivery_time_from, delivery_time_to, status, note, is_paid, total_amount, total_rewards, total_kg, total_items, socity_id, delivery_address, location_id, delivery_charge, new_store_id, assign_to, payment_method)

SELECT sale_id, user_id, on_date, delivery_time_from, delivery_time_to, status, note, is_paid, total_amount, total_rewards, total_kg, total_items, socity_id, delivery_address, location_id, delivery_charge, new_store_id, assign_to, payment_method FROM sale

where sale_id = '".$order_id."'"); 



                 $message["title"] = "Order complete";

                    $message["body"] = "Your order Number '".$order->sale_id."' is completed ";

                    $message["created_at"] = date("Y-m-d h:i:s"); 

                    $this->sendNotification($message,$order->user_id);

                

                // $q = $this->db->query("Select * from registers where user_id = '".$order->user_id."'");

                // $user = $q->row();

                

                //         $message["title"] = "Delivered  Order";

                //         $message["message"] = "Your order Number '".$order->sale_id."' Delivered successfully. Thank you for being with us";

                //         $message["image"] = "";

                //         $message["created_at"] = date("Y-m-d h:i:s"); 

                //         $message["obj"] = "";

                            

                //             $this->load->helper('gcm_helper');

                //             $gcm = new GCM();   

                //             if($user->user_gcm_code != ""){

                //             $result = $gcm->send_notification(array($user->user_gcm_code),$message ,"android");

                //             }

                //              if($user->user_ios_token != ""){

                //             $result = $gcm->send_notification(array($user->user_ios_token),$message ,"ios");

                //              }

                

                $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Success!</strong> Order delivered. </div>');

            }

            redirect("admin/orders");

        }else{

            redirect('admin');

        }

    }

 

    public function cancle_order($order_id){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $order = $this->product_model->get_sale_order_by_id($order_id);

            $order_details = $this->product_model->get_sale_items_complete($order_id);

            if(!empty($order)){

                

                $this->db->query("update sale set status = 3 where sale_id = '".$order_id."' ");

                

                 $q = $this->db->query("Select * from users where user_id = '".$order->user_id."'");  

                 $user = $q->row();  

                    $message["title"] = "Cancel  Order";

                    $message["body"] = "Your order Number '".$order->sale_id."' cancel successfully";

                    $message["created_at"] = date("Y-m-d h:i:s"); 

                    $this->sendNotification($message,$order->user_id);

                

                $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Success!</strong> Order Cancle. </div>');

                                  

                                  $pitems = json_decode($order_details[0]->items,true);

                                  $count = 0;

                                  foreach($pitems as $key => $val) {

                                      

                                         $product_order_details = $this->product_model->get_sale_items_product_complete($order_id,$key);

                                        //  echo json_encode($product_order_details)."::";

                                          $items = json_decode($product_order_details[0]->items,true);

                                          $originalItems = explode(',',$product_order_details[0]->size);

                                          $originalItemQty = explode(',',$product_order_details[0]->unit_value);

                                        

                                          if(count($originalItems)==1){

                                              $s = $originalItems[0];

                                              if(is_string($originalItemQty[0])){

                                                    $q1 = (int)$originalItemQty[0];

                                              }else{

                                                    $q1 = $originalItemQty[0];

                                              }

                                            

                                              $or_item = ($val);

                                              if(is_string($or_item[$s])){

                                                  $q2 = (int)$or_item[$s];

                                              }else{

                                                  $q2 = $or_item[$s];

                                              }

                                                     

                                                      $originalItemQty[0] = $q1+$q2;

                                                      $qtys = $originalItemQty[0];

                                                     $this->db->query("update products set unit_value = '".$qtys."' where product_id = '".$product_order_details[0]->product_id."'");

                                          }else{

                                              for($y=0;$y<count($items);$y++){

                                                  if($y<count($originalItems)){

                                                      $s = $originalItems[$y];

                                                     $q1 = (int)$originalItemQty[$y];

                                                     if(array_key_exists($s,$val)){

                                                         if(is_string($val[$s])){

                                                              $q2 = (int)$val[$s];

                                                         }else{

                                                              $q2 = $val[$s];

                                                         }

                                                        

                                                          $originalItemQty[$y] = $q1+$q2;

                                                     }

                                                  }

                                                  

                                                 

                                             }

                                             $qtys = implode(',',$originalItemQty);

                                            //  echo $qtys;

                                             //echo $product_order_details[0]->product_id.':'.$qtys;

                                            $this->db->query("update products set unit_value = '".$qtys."' where product_id = '".$product_order_details[0]->product_id."'");

                                          }

                                          $count++;

                                             

                                  }

                                  

                               

                                  

                                 // echo $order_details[0]->product_id.':';

                                   

                                  //  echo $qtys;

            }

            redirect("admin/orders");

        }else{

            redirect('admin');

        }

    }

    

    public function delete_order($order_id){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $order = $this->product_model->get_sale_order_by_id($order_id);

            if(!empty($order)){

                $this->db->query("delete from sale where sale_id = '".$order_id."'");

                $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Success!</strong> Order deleted. </div>');

            }

            redirect("admin/orders");

        }else{

            redirect('admin');

        }

    }

    

    public function orderdetails($order_id){

        if(_is_user_login($this)){

            $data = array();

            $this->load->model("product_model");

            $orders = $this->product_model->get_sale_order_by_id($order_id);

            //$data["order_items"] = $this->product_model->get_sale_order_items($order_id);

           

            $data["order"] = $orders;

            

            $q = $this->db->query("Select * from users 

                where user_id = '".$orders->user_id."' limit 1");

            $users = $q->result();

            $data["users"] = $users[0];

            

            $this->load->model("product_model");

            

            $order_titles= array();

            $original_qty= array();

                        $original_products= array();



                  $q = $this->db->query("Select * from sale_items where sale_id = ".$order_id);

                    $sData = $q->result();

                     

                    $it = $sData[0]->items;

                    $pItems = (str_replace("\\","",$it));

                    $pItems = json_decode(($pItems),true);

                    $order = array();

                    if(count($pItems)>0){

                         foreach($pItems as $key => $val) {

                          $q = $this->db->query("Select si.*,p.*,c.* from sale_items si 

                                            inner join products p on p.product_id = '".$key."' 

                                            inner join categories c on c.id = p.category_id where sale_id = '".$order_id."'");

                            $cat = $q->result();

                            //echo json_encode($cat);

                              if(count($cat)>0){

                                  array_push($order_titles,$cat[0]);

                                if (strpos($cat[0]->size, '[') !== false) {

                                    $sizs = json_decode($cat[0]->unit_value);

                                    foreach($sizs as $siz){

                                        array_push($original_qty,$siz);

                                    }

                                }else{

                                     array_push($original_qty,$cat[0]->unit_value);

                                }



                              }

                              

                              

                            $qp = $this->db->query("Select * from products 

                                where product_id = '".$key."' limit 1");

                            $p = $qp->result();

                             array_push($original_products,$p);

                        }

                         //$order->category_title = json_encode($order_titles);

                          $data["original_products"] = ($original_products);

                          $data["order_items"] = ($order_titles);

                           $data["originial_items"] = ($original_qty);

                        //   echo json_encode($data["order_items"]);

                    }

                // echo json_encode($data);



            $this->load->view("admin/orders/orderdetails2",$data);

        }else{

            redirect('admin');

        }

    }

   

    public function change_status(){

        $table = $this->input->post("table");

        $id = $this->input->post("id");

        $on_off = $this->input->post("on_off");

        $id_field = $this->input->post("id_field");

        $status = $this->input->post("status");

        

        $this->db->update($table,array("$status"=>$on_off),array("$id_field"=>$id));

    }

/*=========USER MANAGEMENT==============*/   

    public function user_types(){

        $data = array();

        if(isset($_POST))

            {

                

                $this->load->library('form_validation');

                

                $this->form_validation->set_rules('user_type', 'User Type', 'trim|required');

                if ($this->form_validation->run() == FALSE) 

                {

                   if($this->form_validation->error_string()!=""){

                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                </div>';

                    }

                }else

                {

                        $user_type = $this->input->post("user_type");

                        

                            $this->load->model("common_model");

                            $this->common_model->data_insert("user_types",array("user_type_title"=>$user_type));

                            $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Success!</strong> User Type added Successfully

                                </div>') ;

                             redirect("admin/user_types/");   

                        

                }

            }

        

        $this->load->model("users_model");

        $data["user_types"] = $this->users_model->get_user_type();

        $this->load->view("admin/user_types",$data);

    }

  

    function user_type_delete($type_id){

        $data = array();

            $this->load->model("users_model");

            $usertype  = $this->users_model->get_user_type_id($type_id);

           if($usertype){

                $this->db->query("Delete from user_types where user_type_id = '".$usertype->user_type_id."'");

                redirect("admin/user_types");

           }

    }

    public function user_access($user_type_id){

        if($_POST){

           //print_r($_POST);     

                $this->load->library('form_validation');

                

                $this->form_validation->set_rules('user_type_id', 'User Type', 'trim|required');

                if ($this->form_validation->run() == FALSE) 

                {

                   if($this->form_validation->error_string()!=""){

                        $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                </div>';

                 }

                }else{

                    //$user_type_id = $this->input->post("user_type_id");

                    $this->load->model("common_model");

                    $this->common_model->data_remove("user_type_access",array("user_type_id"=>$user_type_id));

                    

                    $sql = "Insert into user_type_access(user_type_id,class,method,access) values";

                    $sql_insert = array();

                    foreach(array_keys($_POST["permission"]) as $controller){

                        foreach($_POST["permission"][$controller] as $key=>$methods){

                            if($key=="all"){

                                $key = "*";

                            }

                            $sql_insert[] = "($user_type_id,'$controller','$key',1)";

                        }

                    }

                    $sql .= implode(',',$sql_insert)." ON DUPLICATE KEY UPDATE access=1";

                    $this->db->query($sql);

                }

        }

        $data['user_type_id'] = $user_type_id;

        $data["controllers"] = $this->config->item("controllers");

        $this->load->model("users_model");

        $data["user_access"] = $this->users_model->get_user_type_access($user_type_id);

        

        //$data["user_types"] = $this->users_model->get_user_type();

        $this->load->view("admin/user_access",$data);

    }

/*============USRE MANAGEMENT===============*/



  

/* ========== Categories =========== */

    public function addcategories()

    {

       if(_is_user_login($this)){

           

            $data["error"] = "";

            $data["active"] = "addcat";

            if(isset($_REQUEST["addcatg"]))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('cat_title', 'Categories Title', 'trim|required');

                 $this->form_validation->set_rules('category', 'Categories Parent', 'trim|required');

                // $this->form_validation->set_rules('parent', 'Categories Parent', 'trim|required');

                

                if ($this->form_validation->run() == FALSE)

                {

                   if($this->form_validation->error_string()!=""){

                      $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>';

                    }

                }

                else

                {

                    $this->load->model("category_model");

                    $this->category_model->add_category(); 

                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your request added successfully...

                                    </div>');

                    redirect('admin/addcategories');

                }

            }

        $this->load->view('admin/categories/addcat2',$data);

        }

        else

        {

            redirect('admin');

        }

    }

    

    public function add_header_categories()

    {

       if(_is_user_login($this)){

           

            $data["error"] = "";

            $data["active"] = "addcat";

            if(isset($_REQUEST["addcatg"]))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('cat_title', 'Categories Title', 'trim|required');

                $this->form_validation->set_rules('parent', 'Categories Parent', 'trim|required');

                

                if ($this->form_validation->run() == FALSE)

                {

                   if($this->form_validation->error_string()!=""){

                      $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>';

                    }

                }

                else

                {

                    $this->load->model("category_model");

                    $this->category_model->add_header_category(); 

                    $this->session->set_flashdata("success_req",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your request added successfully...

                                    </div>');

                    redirect('admin/add_header_categories');

                }

            }

        $this->load->view('admin/icon_categories/addcat',$data);

        }

        else

        {

            redirect('admin');

        }

    }

    

    public function editcategory($id)

    {

        // echo $id;

       if(_is_user_login($this))

       {

            $q = $this->db->query("select * from `categories` WHERE id=".$id);

            $data["getcat"] = $q->row();

            

            $data["active"] = "listcat";

            if(isset($_REQUEST["savecat"]))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('cat_title', 'Categories Title', 'trim|required');

                $this->form_validation->set_rules('cat_id', 'Categories Id', 'trim|required');

                $this->form_validation->set_rules('category', 'Categories Parent', 'trim|required');

                if ($this->form_validation->run() == FALSE)

                {

                   if($this->form_validation->error_string()!=""){

                      $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>';

                   }

                }

                else

                {

                    $this->load->model("category_model");

                    $this->category_model->edit_category($data["getcat"]->parent); 

                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your category saved successfully...

                                    </div>');

                    redirect('admin/listcategories');

                }

            }

            $q = $this->db->query("select * from `categories` WHERE id=".$data["getcat"]->parent);

            $data["parent"] = $q->row();

            

            // echo json_encode($data);

           $this->load->view('admin/categories/editcat2',$data);

        }

        else

        {

            redirect('admin');

        }

    }

    

     public function edit_header_category($id)

    {

       if(_is_user_login($this))

       {

            $q = $this->db->query("select * from `header_categories` WHERE id=".$id);

            $data["getcat"] = $q->row();

            

            $data["error"] = "";

            $data["active"] = "listcat";

            if(isset($_REQUEST["savecat"]))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('cat_title', 'Categories Title', 'trim|required');

                $this->form_validation->set_rules('cat_id', 'Categories Id', 'trim|required');

                $this->form_validation->set_rules('parent', 'Categories Parent', 'trim|required');

                if ($this->form_validation->run() == FALSE)

                {

                   if($this->form_validation->error_string()!=""){

                      $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>';

                   }

                }

                else

                {

                    $this->load->model("category_model");

                    $this->category_model->edit_header_category(); 

                    $this->session->set_flashdata("success_req",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your category saved successfully...

                                    </div>');

                    redirect('admin/header_categories');

                }

            }

           $this->load->view('admin/icon_categories/editcat',$data);

        }

        else

        {

            redirect('admin');

        }

    }

    

    public function listcategories()

    {

       if(_is_user_login($this)){

           $data["error"] = "";

           $data["active"] = "listcat";

           $this->load->model("category_model");

           $data["allcat"] = $this->category_model->get_categories();

           $this->load->view('admin/categories/listcat2',$data);

        }

        else

        {

            redirect('admin');

        }

    }

    

    public function header_categories()

    {

       if(_is_user_login($this)){

           $data["error"] = "";

           $data["active"] = "listcat";

           $this->load->model("category_model");

           $data["allcat"] = $this->category_model->get_header_categories();

           $this->load->view('admin/icon_categories/listcat',$data);

        }

        else

        {

            redirect('admin');

        }

    }

    

    public function deletecat($id)

    {

       if(_is_user_login($this)){

            

            $this->db->delete("categories",array("id"=>$id));

            $this->session->set_flashdata("success_req",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your item deleted successfully...

                                    </div>');

            redirect('admin/listcategories');

        }

        else

        {

            redirect('admin');

        }

    }

    

    public function delete_header_categories($id)

    {

       if(_is_user_login($this)){

            

            $this->db->delete("header_categories",array("id"=>$id));

            $this->session->set_flashdata("success_req",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your item deleted successfully...

                                    </div>');

            redirect('admin/header_categories');

        }

        else

        {

            redirect('admin');

        }

    }



      

/* ========== End Categories ========== */    

function drivers(){

    if(_is_user_login($this)){

           $data = array();

        $this->load->model("drivers_model");

        $data["drivers"] = $this->drivers_model->get_alluser();

        $this->load->view("admin/drivers/list2",$data);  

    }else{

        redirect('admin');

    }



}

 public function add_driver(){

        if(_is_user_login($this)){

            $data = array();

            $this->load->model("drivers_model");

            if($_POST){

                $this->load->library('form_validation');

                

                $this->form_validation->set_rules('driver_name', 'Driver Name', 'trim|required');

                $this->form_validation->set_rules('mobile', 'mobile', 'trim|required');

                $this->form_validation->set_rules('driver_vehicle_no', 'Vehicle Number', 'trim|required');

                $this->form_validation->set_rules('address', 'Address', 'trim|required');

                

                if ($this->form_validation->run() == FALSE) 

                {

                  

                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                </div>';

                    

                }else

                {

                    

                        $driver_name = $this->input->post("driver_name");

                        $driver_vehicle_no = $this->input->post("driver_vehicle_no");

                        $driver_phone = $this->input->post("mobile");

                        $driver_address = $this->input->post("address");

                        $driver_status = ($this->input->post("status")=="on")? 1 : 0;

                        $image='driver.png';

                        if($_FILES["pro_pic"]["size"] > 0){

                                    $config['upload_path']          = './uploads/profile/';

                                    $config['allowed_types']        = 'gif|jpg|png|jpeg';

                                    $this->load->library('upload', $config);

                    

                                    if ( ! $this->upload->do_upload('pro_pic'))

                                    {

                                            $error = array('error' => $this->upload->display_errors());

                                    }

                                    else

                                    {

                                        $img_data = $this->upload->data();

                                        //$array["user_image"]=$img_data['file_name'];

                                        $image=$img_data['file_name'];

                                    }

                                    

                                }

                        

                            $this->load->model("common_model");

                            if($image!=''){

                                  $this->common_model->data_insert("drivers",

                                array(

                                "driver_name"=>$driver_name,

                                "driver_vehicle_no"=>$driver_vehicle_no,

                                "driver_phone"=>$driver_phone,

                                "driver_address"=>$driver_address,

                                "driver_image"=>$image,

                                "driver_status"=>$driver_status));

                                  $this->load->library('email');

                                 $token = uniqid(uniqid());

                                //  $return = $this->send_email_verified_mail($user_email,$token,$emp_fullname);

                                

                                     $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">

                             <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span>

                             <span class="sr-only">Close</span></button>

                                                              <strong>Success!</strong> Driver Added Successfully

                                                            </div>');

                            }else{

                                  $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> Please add image

                                </div>';

                            }

                          

                        

                }

            }

            

            $data["user_types"] = $this->drivers_model->get_user_type();

            $this->load->view("admin/drivers/add_driver2",$data);

        }else{

            redirect("admin");

        }

    }

    

    

    public function send_email_verified_mail($email,$token,$name){

          //$message = $this->load->view('emails/email_verify',array("name"=>$name,"active_link"=>site_url("users/verify_email?email=".$email."&token=".$token)),TRUE);

          

           

                    

                            $this->email->from("triyam.apps@gmail.com","My Shop");

                            $list = array($email);

                            $this->email->to($list); 

                             $this->email->reply_to("triyam.apps@gmail.com","My Shop");

                            $this->email->subject('Forgot password request');

                            $this->email->message("Hi ".$name." \n Your password forgot request is accepted plase visit following link to change your password. \n

                                ".site_url("users/modify_password/".$token)."

                                ");

                           return $this->email->send();

                      

    }

    

    

    public function edit_driver($user_id){

        if(_is_user_login($this)){

            $data = array();

            $this->load->model("drivers_model");

            $data["user_types"] = $this->drivers_model->get_user_type();

            $user = $this->drivers_model->get_user_by_id($user_id);

            $data["user"] = $user;

            if($_POST){

                $this->load->library('form_validation');

                

                $this->form_validation->set_rules('driver_name', 'Driver Name', 'trim|required');

                $this->form_validation->set_rules('mobile', 'Driver Phone Number', 'trim|required');

                //$this->form_validation->set_rules('user_image_pre', 'Image', 'trim|required');

                 

                if ($this->form_validation->run() == FALSE) 

                {

                  

                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                </div>';

                    

                }else

                {

                        $driver_name = $this->input->post("driver_name");

                         $driver_phone = $this->input->post("mobile"); 

                          $driver_address = $this->input->post("address");

                         

                        $status = ($this->input->post("status")=="on")? 1 : 0;

                        if($_FILES["pro_pic"]["size"] > 0){

                                    $config['upload_path']          = './uploads/profile/';

                                    $config['allowed_types']        = 'gif|jpg|png|jpeg';

                                    $this->load->library('upload', $config);

                    

                                    if ( ! $this->upload->do_upload('pro_pic'))

                                    {

                                            $error = array('error' => $this->upload->display_errors());

                                    }

                                    else

                                    {

                                        $img_data = $this->upload->data();

                                        //$array["user_image"]=$img_data['file_name'];

                                        $image=$img_data['file_name'];

                                    }

                                          $update_array = array(

                                    "driver_name"=>$driver_name,

                                    "driver_phone"=>$driver_phone,

                                    "driver_address"=>$driver_address,

                                    "driver_status"=>$status,

                                    "driver_image"=>$image);

                            

                            

                                    $this->load->model("common_model");

                                    $this->common_model->data_update("drivers",$update_array,array("driver_id"=>$user_id)

                                        );

                                    $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">

                                          <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                          <strong>Success!</strong> Driver Updated Successfully

                                        </div>');

                                        redirect("admin/drivers");

                                }else{

                                        

                                         $this->form_validation->set_rules('user_image_pre', 'Image', 'trim|required');

                                       

                                        if ($this->form_validation->run() == FALSE) 

                                        {

                                          

                                           $image='driver.png';

                                            

                                        }else{

                                            $image = $this->input->post("user_image_pre");

                                        }

                                        

                                               $update_array = array(

                                            "driver_name"=>$driver_name,

                                            "driver_phone"=>$driver_phone,

                                            "driver_address"=>$driver_address,

                                            "driver_image"=>$image,

                                            "driver_status"=>$status);

                                    

                                    

                                            $this->load->model("common_model");

                                            $this->common_model->data_update("drivers",$update_array,array("driver_id"=>$user_id)

                                                );

                                            $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">

                                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                                  <strong>Success!</strong> Driver Updated Successfully

                                                </div>');

                                                redirect("admin/drivers");

                                        // $this->form_validation->set_rules('user_image_pre', 'Image', 'trim|required');

                                         

                                        // if ($this->form_validation->run() == FALSE) 

                                        // {

                                          

                                        //     $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                        //                   <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                        //                   <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                        //                 </div>';

                                            

                                        // }else{

                                        //               $update_array = array(

                                        //     "driver_name"=>$driver_name,

                                        //     "driver_phone"=>$driver_phone,

                                        //     "driver_address"=>$driver_address,

                                        //     "driver_status"=>$status);

                                    

                                    

                                        //     $this->load->model("common_model");

                                        //     $this->common_model->data_update("drivers",$update_array,array("driver_id"=>$user_id)

                                        //         );

                                        //     $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">

                                        //           <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                        //           <strong>Success!</strong> Driver Updated Successfully

                                        //         </div>');

                                        //         redirect("admin/drivers");

                                        // }

                                       

                               

                                }

                   

                        

                }

            }

            

            // echo json_encode($data);

            $this->load->view("admin/drivers/edit_driver2",$data);

        }else{

               $data = array();

            $this->load->model("drivers_model");

            $data["drivers"] = $this->drivers_model->get_alluser();

            $this->load->view("admin/drivers/list2",$data);  

        }

    }

   

    function delete_driver($user_id){

        if(_is_user_login($this)){

             $data = array();

            $this->load->model("drivers_model");

            $user  = $this->drivers_model->get_user_by_id($user_id);

           if($user){

                $this->db->query("Delete from drivers where driver_id = '".$user->driver_id."'");

           }

           redirect("admin/drivers");

        }else{

            redirect('admin');

        }

       

    }

    

/* ========== Products ==========*/

function products(){

    if(_is_user_login($this)){

        //   $this->load->helper('gcm_helper');

        //                     $gcm = new GCM();  

        //                     $message['title'] = 'welcome';

        //                         $message["message"] = 'this is test data';

        //                         $message["created_at"] = date("Y-m-d h:i:s");  

        //                     $result = $gcm->send_notification(array('c7lLxxIJc44:APA91bFKRIeipGOOrFbXfKbeqoS_Hf4rpr_2omuGKjRNt60yjcV6BaG5BLGLiJajtY99_B-Sg7PJBhj4YdtlpCDOKGO1eDuw1rdMsWjenEQwm0lVpFrQFqCD8lZJeJIYgc9rX448IMNk'),$message ,"android");

        //                     echo $result;

                            // if($user->user_gcm_code != ""){

                            // $result = $gcm->send_notification(array($user->user_gcm_code),$message ,"android");

                            // }

                            //  if($user->user_ios_token != ""){

                            // $result = $gcm->send_notification(array($user->user_ios_token),$message ,"ios");

                            //  }

        $this->load->model("product_model");

        $data["products"]  = $this->product_model->get_products();

        // $data["products"]  = $this->product_model->get_relation();

        $this->load->view("admin/product/list2",$data);   

    }else{

        redirect("admin");

    }

}



function place_order(){

    if(_is_user_login($this)){

        $this->load->model("product_model");

        $this->load->model("category_model");

        $this->load->model("drivers_model");

        $data["products"]  = $this->product_model->get_products();

        $data["drivers"]  = $this->drivers_model->get_alluser();

        $data["allcat"] = $this->category_model->get_categories();

        $this->load->model("users_model");

        $data["allusers"] = $this->users_model->get_alluser();

        

        $this->load->view("admin/place_order/list2",$data);    

    }else{

        redirect('admin');

    }

}

 

 function header_products(){

        $this->load->model("product_model");

        $data["products"]  = $this->product_model->get_header_products();

        $this->load->view("admin/icon_product/list",$data);    

}



function edit_products($prod_id){

     $this->load->model("product_model");

            $products = $this->product_model->get_product_by_id($prod_id);

            $data["product"] =  $products;

       if(_is_user_login($this)){



            if(isset($_POST))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('prod_title', 'Product Title', 'trim|required');

              

                if ($this->form_validation->run() == FALSE)

                {

                   if($this->form_validation->error_string()!=""){

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                   }

                }

                else

                {

                     $a=array();

                    $b=array();

                  

                    foreach($_POST['size'] as $value) {

                      // do what you want with the $value

                       if(!empty($value)){

                            array_push($a,$value);

                       }

                    }

                    $str = implode(",",$a);



                    foreach($_POST['qty'] as $value) {

                      // do what you want with the $value

                       if(!empty($value)){

                             array_push($b,$value);

                       }else{

                            array_push($b,"0");

                       }

                    }

                    $strqty = implode(",",$b);



                      $q = $this->db->query("select id from categories where 1 and title='".$this->input->post("category")."' ");

                        $product =$q->result();

                    

                    $this->load->model("common_model");

                    $array = array( 

                    "product_name"=>$this->input->post("prod_title"), 

                    "category_id"=>$product[0]->id,

                    "size"=>$str, 

                    "product_description"=>$this->input->post("product_description"),

                    "in_stock"=>$this->input->post("prod_status"),

                    "price"=>$this->input->post("price"),

                    "tax"=>$this->input->post("tax"),

                    "unit_value"=>$strqty,

                    "unit"=>$this->input->post("unit"),

                    "rewards"=>$this->input->post("rewards")

                    

                    );

                    

                     $data = array();



                      // Count total files

                      $countfiles = count($_FILES['prod_img']['name']);

                 

                            // Looping all files

                              for($i=0;$i<$countfiles;$i++){

                         

                                if(!empty($_FILES['prod_img']['name'][$i])){

                                    // echo $_FILES['prod_img']['name'][$i];

                                    $this->form_validation->set_rules($_FILES['prod_img']['name'][$i], 'image', 'trim|required');

                                      if ($this->form_validation->run() == FALSE ){

                                        //   echo $_FILES['prod_img']['name'][$i];

                                           // Define new $_FILES array - $_FILES['file']

                                              $_FILES['file']['name'] = $_FILES['prod_img']['name'][$i];

                                              $_FILES['file']['type'] = $_FILES['prod_img']['type'][$i];

                                              $_FILES['file']['tmp_name'] = $_FILES['prod_img']['tmp_name'][$i];

                                              $_FILES['file']['error'] = $_FILES['prod_img']['error'][$i];

                                              $_FILES['file']['size'] = $_FILES['prod_img']['size'][$i];

                                    

                                              // Set preference

                                             $config['upload_path']          = './uploads/products/';

                                            $config['allowed_types']        = 'gif|jpg|png|jpeg';

                                            //   $config['max_size'] = '5000'; // max_size in kb

                                             // $config['file_name'] = $_FILES['files']['name'][$i];

                                     

                                              //Load upload library

                                              $this->load->library('upload',$config); 

                                     

                                              // File upload

                                              if($this->upload->do_upload('file')){

                                                // Get data about the file

                                                $uploadData = $this->upload->data();

                                                $data[]=$uploadData['file_name'];

                                              }

                                      }

                                 

                                }

                         

                              }

                              if(count($data)>0){

                                  

                                            if (strpos($products->product_image, '[') !== false) {

                                              $imgs = json_decode($products->product_image);

                                              for ($x = 0; $x < count($imgs); $x++) {

                                                    $name= explode(".",$imgs[$x]);

                                                    $data[]= $this->input->post($name[0]);

                                              }

                                           

                                             }else{

                                                 $name= explode(".",$products->product_image);

                                                 $data[]= $this->input->post($name[0]);

                                             }

                                            $array["product_image"] = json_encode($data);



                                                 $this->common_model->data_update("products",$array,array("product_id"=>$prod_id)); 

                                                    $array_history = array( 

                                                        "product_id"=>$prod_id,

                                                        "size"=>$str,

                                                        "unit_value"=>$strqty

                                                    );

                                                    $this->common_model->data_insert("products_history",$array_history);

                                                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                                                        <i class="fa fa-check"></i>

                                                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                                                      <strong>Success!</strong> Your request added successfully...

                                                                    </div>');

                                                    redirect('admin/products');

                              }else{

                                    

                                    $imgs = json_decode($products->product_image);

                                    if(count($imgs)==0){

                                        //  $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                        //           <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                        //           <strong>Warning!</strong> Please add image</div>';

                                         $array["product_image"] = json_encode([]);

                                    }else{

                                        

                                          if (strpos($products->product_image, '[') !== false) {

                                              $imgs = json_decode($products->product_image);

                                              for ($x = 0; $x < count($imgs); $x++) {

                                                    $name= explode(".",$imgs[$x]);

                                                    if($this->input->post($name[0])!=null){

                                                         $data[]= $this->input->post($name[0]);

                                                    }

                                                   

                                                  $this->form_validation->set_rules($name[0], 'image', 'trim|required');

                                              }

                                           

                                             }else{

                                                 $name= explode(".",$products->product_image);

                                                  if($this->input->post($name[0])!=null){

                                                         $data[]= $this->input->post($name[0]);

                                                    }

                                                  $this->form_validation->set_rules($name[0], 'Image', 'trim|required');

                                             }

                                          

                                         if ($this->form_validation->run() == FALSE && count($data)==0)

                                            {

                                             

                                                // $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">

                                                //   <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                                //   <strong>Warning!</strong> Please add image</div>';

                                                 $array["product_image"] = json_encode([]);

                                            }

                                            else

                                            {

                                                $array["product_image"] = json_encode($data);

                                                  

                                            }

                                           

                                    }

                                     $this->common_model->data_update("products",$array,array("product_id"=>$prod_id)); 

                                                    $array_history = array( 

                                                        "product_id"=>$prod_id,

                                                        "size"=>$str,

                                                        "unit_value"=>$strqty

                                                    );

                                                    $this->common_model->data_insert("products_history",$array_history);

                                                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                                                        <i class="fa fa-check"></i>

                                                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                                                      <strong>Success!</strong> Your request added successfully...

                                                                    </div>');

                                                    redirect('admin/products');

                                        

                                

        

                                    

                              }

        

                          

                    

                    

               

                }

            }

            $products = $this->product_model->get_product_by_id($prod_id);

            $data["product"] = $products;

            // echo json_encode($data);

            $this->load->view("admin/product/edit2",$data);

        }

        else

        {

            redirect('admin');

        }

    

}



function edit_header_products($prod_id){

       if(_is_user_login($this)){

        

            if(isset($_POST))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('prod_title', 'Categories Title', 'trim|required');

                $this->form_validation->set_rules('parent', 'Categories Parent', 'trim|required');

                

                if ($this->form_validation->run() == FALSE)

                {

                   if($this->form_validation->error_string()!=""){

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                   }

                }

                else

                {

                    $this->load->model("common_model");

                    $array = array( 

                    "product_name"=>$this->input->post("prod_title"), 

                    "category_id"=>$this->input->post("parent"), 

                    "product_description"=>$this->input->post("product_description"),

                    "in_stock"=>$this->input->post("prod_status"),

                    "price"=>$this->input->post("price"),

                    "unit_value"=>$this->input->post("qty"),

                    "unit"=>$this->input->post("unit"),

                    "rewards"=>$this->input->post("rewards")

                    

                    );

                    if($_FILES["prod_img"]["size"] > 0){

                        $config['upload_path']          = './uploads/products/';

                        $config['allowed_types']        = 'gif|jpg|png|jpeg';

                        $this->load->library('upload', $config);

        

                        if ( ! $this->upload->do_upload('prod_img'))

                        {

                                $error = array('error' => $this->upload->display_errors());

                        }

                        else

                        {

                            $img_data = $this->upload->data();

                            $array["product_image"]=$img_data['file_name'];

                        }

                        

                   }

                    

                    $this->common_model->data_update("header_products",$array,array("product_id"=>$prod_id)); 

                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your request added successfully...

                                    </div>');

                    redirect('admin/header_products');

                }

            }

            $this->load->model("product_model");

            $data["product"] = $this->product_model->get_header_product_by_id($prod_id);

            $this->load->view("admin/icon_product/edit",$data);

        }

        else

        {

            redirect('admin');

        }

    

}



function add_products(){

       if(_is_user_login($this)){

        

            if(isset($_POST))

            {

                

                $this->load->library('form_validation');

                $this->form_validation->set_rules('prod_title', 'Categories Title', 'trim|required');

                $this->form_validation->set_rules('category', 'Categories Parent', 'trim|required');

                // $this->form_validation->set_rules('qty', 'qty', 'trim|required'); 

                // $this->form_validation->set_rules('size', 'size', 'trim|required'); 



                if ($this->form_validation->run() == FALSE)

                {

                      if($this->form_validation->error_string()!="") { 

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                 }

                                   

                }

                else

                {

                     $a=array();

                    $b=array();



                    foreach($_POST['size'] as $value) {

                      // do what you want with the $value

                      if(!empty($value)){

                          array_push($a,$value);

                      }

                      

                    }

                    $str = implode(",",$a);



                    foreach($_POST['qty'] as $value) {

                      // do what you want with the $value

                       if(!empty($value)){

                         array_push($b,$value);

                       }else{

                            array_push($b,"0");

                       }

                    }

                    $strqty = implode(",",$b);

                    

                    

                      $q = $this->db->query("select id from categories where 1 and title='".$this->input->post("category")."' ");

                      $product =$q->result();



                    $this->load->model("common_model");

                    $array = array( 

                    "product_name"=>$this->input->post("prod_title"), 

                    "category_id"=>$product[0]->id,

                    "size"=>$str,

                    "in_stock"=>$this->input->post("prod_status"),

                    "product_description"=>$this->input->post("product_description"),

                    "price"=>$this->input->post("price"),

                    "unit_value"=>$strqty,

                    "unit"=>$this->input->post("unit"), 

                    "tax"=>$this->input->post("tax"), 

                    "rewards"=>$this->input->post("rewards")

                    );

                    

                     $data = array();

// echo count($_FILES['files']['name']);

                      // Count total files

                      $countfiles = count($_FILES['prod_img']['name']);

                 

                      // Looping all files

                      for($i=0;$i<=$countfiles;$i++){

                 

                        if(!empty($_FILES['prod_img']['name'][$i])){

                 

                          // Define new $_FILES array - $_FILES['file']

                          $_FILES['file']['name'] = $_FILES['prod_img']['name'][$i];

                          $_FILES['file']['type'] = $_FILES['prod_img']['type'][$i];

                          $_FILES['file']['tmp_name'] = $_FILES['prod_img']['tmp_name'][$i];

                          $_FILES['file']['error'] = $_FILES['prod_img']['error'][$i];

                          $_FILES['file']['size'] = $_FILES['prod_img']['size'][$i];

                

                          // Set preference

                         $config['upload_path']          = './uploads/products/';

                        $config['allowed_types']        = 'gif|jpg|png|jpeg';

                        //   $config['max_size'] = '5000'; // max_size in kb

                         // $config['file_name'] = $_FILES['files']['name'][$i];

                 

                          //Load upload library

                          $this->load->library('upload',$config); 

                 

                          // File upload

                          if($this->upload->do_upload('file')){

                            // Get data about the file

                            $uploadData = $this->upload->data();

                            $data[]=$uploadData['file_name'];

                          }

                        }

                 

                      }

                            

                             if(count($data)>0){

                                    

                                    $array["product_image"] = json_encode($data);

                                //     if($_FILES["prod_img"]["size"] > 0){

                                //         $config['upload_path']          = './uploads/products/';

                                //         $config['allowed_types']        = 'gif|jpg|png|jpeg';

                                //         $this->load->library('upload', $config);

                        

                                //         if ( ! $this->upload->do_upload('prod_img'))

                                //         {

                                //                 $error = array('error' => $this->upload->display_errors());

                                //         }

                                //         else

                                //         {

                                //             $img_data = $this->upload->data();

                                //             $array["product_image"]=$img_data['file_name'];

                                //         }

                                        

                                //   }

                                    

                                                                 



                              }else{

                              

                                                //   $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                                //   <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                                //   <strong>Warning!</strong> Please add image</div>');

                                    

                              }

                              $id = $this->common_model->data_insert("products",$array); 

                                    $array_history = array( 

                                        "product_id"=>$id,

                                        "size"=>$str,

                                        "unit_value"=>$strqty

                                    );

                                    $this->common_model->data_insert("products_history",$array_history);

                                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                                        <i class="fa fa-check"></i>

                                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                                      <strong>Success!</strong> Your request added successfully...

                                                    </div>');

                                    redirect('admin/products');     

        

                }

            }

            

            $this->load->view("admin/product/add2");

        }

        else

        {

            redirect('admin');

        }

    

}



      

function sent_order(){

            $keys = ($_POST['id']);

            $user_id = $_POST['store_id'];

            // $driver_id = $_POST['driver_id'];

			$total_items = array();

			$total_items_qty = array();

			$total_items_product_names = array();

			$total_order_data = array();

			 

            foreach($keys as $key => $value){

                $sizeArray = [];

                    $filter = "";

                     $filter .=" and products.product_id = '".$key."' "; 

                        $q = $this->db->query("Select dp.*,products.*, ( ifnull (producation.p_qty,0) - ifnull(consuption.c_qty,0)) as stock ,categories.title from products 

                        inner join categories on categories.id = products.category_id

                        left outer join(select SUM(qty) as c_qty,product_id from sale_items group by product_id) as consuption on consuption.product_id = products.product_id 

                        left outer join(select SUM(qty) as p_qty,product_id from purchase group by product_id) as producation on producation.product_id = products.product_id

                        left join deal_product dp on dp.product_id=products.product_id where 1 ".$filter);

                        

                        $product =$q->result();

                         

                        $product = $product[0];

						

                        $total_items[$product->product_id] = $product->product_id;    

                        $total_items_product_names[$product->product_id] = $product->product_name;    

                        $total_items_qty[$product->product_id] = $value;    

												

                        $qty_kg = (int)$value; 

                       

                        if (strpos($product->unit_value, ',') !== false) {

                             $actualSizes = explode(',',$product->size);

                              $toUnitvalue = explode(',',$product->unit_value);

                              $toUnitvalue = array_reverse($toUnitvalue);

                              $actualSizes = array_reverse($actualSizes);

                              $addUq =0;

                              $unitsizes =array();

                               $isAvailable = 0;

                              foreach($toUnitvalue as $uq){

                                     if($uq!=0){

                                         $isAvailable = 1;

                                     }

                                 }

                            if( $isAvailable == 1){

                                  $total_items[$product->product_id] = $product->product_id;    

                                  $total_items_product_names[$product->product_id] = $product->product_name;    

                                  $total_items_qty[$product->product_id] = $value;   

                                

                                 $count = 0;

                                  foreach($toUnitvalue as $uq){

                                       $addUq = $addUq+$uq;

                                       $count++;

                                         if($addUq >  $qty_kg){

                                              $qs = $addUq - $qty_kg;

                                               array_push($unitsizes,$qs);

                                               $sizeArray[$actualSizes[$count-1]] = ($uq-$qs);

                                              break;

                                          } 

                                        array_push($unitsizes,0);

                                        if($uq!=0){

                                               $sizeArray[$actualSizes[$count-1]] = $uq;

                                        }

                                  }

                                   

                                    $count2 = 0;

                                     foreach($toUnitvalue as $uq){

                                         if($uq!=0){

                                             $isAvailable = 1;

                                         }

                                         if($count2 >= $count){

                                             array_push($unitsizes,$uq);

                                         }

                                         $count2++;

                                     }

    

                                      $finalSize = implode(",",array_reverse($unitsizes));

                                      $this->db->query("Update products set unit_value = '".$finalSize."' where product_id = '".$product->product_id."'");

                                      $unitsizes = [];

                                    

                            }

                             

                        }else{

                              $toUnitvalue = $product->unit_value;    

                              if($toUnitvalue!=0){

                                    $total_items[$product->product_id] = $product->product_id;    

                                    $total_items_product_names[$product->product_id] = $product->product_name;    

                                    $total_items_qty[$product->product_id] = $qty_kg;   

                        

                                   $toU = (int)$toUnitvalue-$qty_kg;

                                  $remainingQty = (int)$toUnitvalue-$toU;

                                  $sizeArray[$product->size] = $remainingQty;

                                  $this->db->query("Update products set unit_value = '".$toU."' where product_id = '".$product->product_id."'");

                              }

                        }

                        $total_order_data[$product->product_id] = $sizeArray;

            }

                        $orderedData = $total_order_data;

                       // echo json_encode($orderedData);

                        $store_id= $user_id;

                        $date = date("Y-m-d");

                        $fromtime = date("Y-m-d");

                        $totime = date("Y-m-d");

                        $insert_array = array("user_id"=>$user_id,

                            "on_date"=>$date,

                            "delivery_time_from"=>$fromtime,

                            "delivery_time_to"=>$totime,

                            "delivery_address"=>'',

                            "new_store_id" => $store_id

                        );

                        $this->load->model("common_model");

                        $id = $this->common_model->data_insert("sale",$insert_array);

                         $totalQty =0;

                        foreach($total_items_qty as $key=>$val){

                            $totalQty = $totalQty+$val;

                        }

                        $array = array("product_id"=>json_encode($total_items),

                            "product_name"=>json_encode($total_items_product_names),

                            "qty"=>json_encode($totalQty),

                            "items"=>json_encode($orderedData),

                            "unit_value"=>json_encode($totalQty),

                            "sale_id"=>$id,

                            "price"=>0,

                            "qty_in_kg"=>json_encode($totalQty)

                        );

                        $this->common_model->data_insert("sale_items",$array);

                        $this->db->query("Update sale set total_kg = '".json_encode($totalQty)."', total_items = '".count($total_items)."' where sale_id = '".$id."'");    

            

            $data= array();

             $data["response"] = true;  

              $data["data"] = addslashes( "Your order No #".$id." is send success fully. Our delivery person will delivered order soon. Thanks for being with Us." );

                  $success = addslashes( "Your order No #".$id." is send success fully. Our delivery person will delivered order soon. Thanks for being with Us." );

            echo $success;

            //  $this->load->view("admin/place_order");

             //redirect('admin/place_order/list2');

            //   redirect('admin/products');

                    

}



function sent_order_bkp(){

    

            $keys = array_keys($_POST['id']);

            $pArray = $_POST['id'];

            $user_id = $_POST['store_id'];

            foreach($keys as $key){

                      $filter = "";

                     $filter .=" and products.product_id = '".$key."' "; 

                        $q = $this->db->query("Select dp.*,products.*, ( ifnull (producation.p_qty,0) - ifnull(consuption.c_qty,0)) as stock ,categories.title from products 

                        inner join categories on categories.id = products.category_id

                        left outer join(select SUM(qty) as c_qty,product_id from sale_items group by product_id) as consuption on consuption.product_id = products.product_id 

                        left outer join(select SUM(qty) as p_qty,product_id from purchase group by product_id) as producation on producation.product_id = products.product_id

                        left join deal_product dp on dp.product_id=products.product_id where 1 ".$filter);

                        

                        $product =$q->result();

                        $product = $product[0];

                        $qty_in_kg = $pArray[$key]; 

                        $qty_kg = (int)$pArray[$key]; 

                        

                        $toSize = $product->size;

                        $sizeArray = [];

                        if (strpos($product->unit_value, ',') !== false) {

                             $actualSizes = explode(',',$product->size);

                              $toUnitvalue = explode(',',$product->unit_value);

                              $toUnitvalue = array_reverse($toUnitvalue);

                              $actualSizes = array_reverse($actualSizes);

                              $addUq =0;

                              $unitsizes =array();

                              $count = 0;

                              foreach($toUnitvalue as $uq){

                                   $addUq = $addUq+$uq;

                                   $count++;

                                     if($addUq >  $qty_kg){

                                          $qs = $addUq - $qty_kg;

                                           array_push($unitsizes,$qs);

                                           $sizeArray[$actualSizes[$count-1]] = ($uq-$qs);

                                          break;

                                      } 

                                    array_push($unitsizes,0);

                                    if($uq!=0){

                                           $sizeArray[$actualSizes[$count-1]] = $uq;

                                    }

                               

                              }

                                

                                $count2 = 0;

                                 foreach($toUnitvalue as $uq){

                                     

                                     if($count2 >= $count){

                                         array_push($unitsizes,$uq);

                                     }

                                     $count2++;

                                      

                                 }



                            //  echo '<script type="text/javascript">alert("' . json_encode($unitsizes) . '")</script>';



                                  $finalSize = implode(",",array_reverse($unitsizes));

                                   $this->db->query("Update products set unit_value = '".$finalSize."' where product_id = '".$product->product_id."'");



                                $unitsizes = [];

                        }else{

                              $toUnitvalue = $product->unit_value;    

                              $toU = (int)$toUnitvalue-$qty_kg;

                              $sizeArray[$product->size] = (int)$toUnitvalue-$toU;

                                $this->db->query("Update products set unit_value = '".$toU."' where product_id = '".$product->product_id."'");



                        }



                          $orderedData = json_encode($sizeArray);

                        $store_id= $user_id;

                        $date = date("Y-m-d");

                        $fromtime = date("Y-m-d");

                        $totime = date("Y-m-d");

                        //$user_id = 1; //main admin static from admin panel

                        $insert_array = array("user_id"=>$user_id,

                            "on_date"=>$date,

                            "delivery_time_from"=>$fromtime,

                            "delivery_time_to"=>$totime,

                          "delivery_address"=>'',

                          "new_store_id" => $store_id

                        );

                        $this->load->model("common_model");

                        $id = $this->common_model->data_insert("sale",$insert_array);

                            

                       

                            $total_rewards = 0;

                            $total_price = 0;

                            $total_kg = 0;

                            $total_items = array();

                          

                                $total_price =0;

                                //$total_price = $total_price + ($pArray[$key] * $product->price);

                                $total_kg = $total_kg + $qty_in_kg;

                                $total_items[$product->product_id] = $product->product_id;    

                                

                                $array = array("product_id"=>$product->product_id,

                                "product_name"=>$product->product_name,

                                "qty"=>$pArray[$key],

                                "items"=>$orderedData,

                                "unit_value"=>$product->unit_value,

                                "sale_id"=>$id,

                                "price"=>$product->price,

                                "qty_in_kg"=>$qty_in_kg

                                );

                                $this->common_model->data_insert("sale_items",$array);

                

                     $total_price = $total_price ;

                    $this->db->query("Update sale set total_amount = '".$total_price."', total_kg = '".$total_kg."', total_items = '".count($total_items)."', total_rewards = '".$total_rewards."' where sale_id = '".$id."'");

                    

                    $data["response"] = true;  

                    $data["data"] = addslashes( "Your order No #".$id." is send success fully. \n Our delivery person will delivered order between ".$fromtime." to ".$totime." on ".$date." \nPlease keep ".$total_price."on delivery. Thanks for being with Us." );

                    //echo $data["data"];

                            

            }        

            echo 'order placed successfully';

             // redirect('admin/products');

                    

}



function add_header_products(){

       if(_is_user_login($this)){

        

            if(isset($_POST))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('prod_title', 'Categories Title', 'trim|required');

                $this->form_validation->set_rules('parent', 'Categories Parent', 'trim|required');

                 $this->form_validation->set_rules('price', 'price', 'trim|required');

                $this->form_validation->set_rules('qty', 'qty', 'trim|required'); 

                

                if ($this->form_validation->run() == FALSE)

                {

                      if($this->form_validation->error_string()!="") { 

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                 }

                                   

                }

                else

                {

                    $this->load->model("common_model");

                    $array = array( 

                    "product_name"=>$this->input->post("prod_title"), 

                    "category_id"=>$this->input->post("parent"),

                    "in_stock"=>$this->input->post("prod_status"),

                    "product_description"=>$this->input->post("product_description"),

                    "price"=>$this->input->post("price"),

                    "unit_value"=>$this->input->post("qty"),

                    "unit"=>$this->input->post("unit"), 

                    "rewards"=>$this->input->post("rewards")

                    );

                    if($_FILES["prod_img"]["size"] > 0){

                        $config['upload_path']          = './uploads/products/';

                        $config['allowed_types']        = 'gif|jpg|png|jpeg';

                        $this->load->library('upload', $config);

        

                        if ( ! $this->upload->do_upload('prod_img'))

                        {

                                $error = array('error' => $this->upload->display_errors());

                        }

                        else

                        {

                            $img_data = $this->upload->data();

                            $array["product_image"]=$img_data['file_name'];

                        }

                        

                   }

                    

                    $this->common_model->data_insert("header_products",$array); 

                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your request added successfully...

                                    </div>');

                    redirect('admin/header_products');

                }

            }

            

            $this->load->view("admin/icon_product/add");

        }

        else

        {

            redirect('admin');

        }

    

}



function delete_product($id){

        if(_is_user_login($this)){

            $this->db->query("Delete from products where product_id = '".$id."'");

            redirect('admin/products');

        }else{

            redirect('admin');

        }

        

}



function delete_header_product($id){

        if(_is_user_login($this)){

            $this->db->query("Delete from header_products where product_id = '".$id."'");

            redirect("admin/header_products");

        }

}



/* ========== Products ==========*/  

/* ========== Purchase ==========*/

public function add_purchase(){

    if(_is_user_login($this)){

        

            if(isset($_POST))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('product_id', 'product_id', 'trim|required');

                $this->form_validation->set_rules('qty', 'Qty', 'trim|required');

                $this->form_validation->set_rules('unit', 'Unit', 'trim|required');

                if ($this->form_validation->run() == FALSE)

                {

                  if($this->form_validation->error_string()!="")

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                }

                else

                {

              

                    $this->load->model("common_model");

                    $array = array(

                    "product_id"=>$this->input->post("product_id"),

                    "qty"=>$this->input->post("qty"),

                    "price"=>$this->input->post("price"),

                    "unit"=>$this->input->post("unit")

                    );

                    $this->common_model->data_insert("purchase",$array);

                    

                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your request added successfully...

                                    </div>');

                    redirect("admin/add_purchase");

                }

                

                $this->load->model("product_model");

                $data["purchases"]  = $this->product_model->get_purchase_list();

                $data["products"]  = $this->product_model->get_products();

                $this->load->view("admin/product/purchase2",$data);  

                

            }

        }

    

}

function edit_purchase($id){

    if(_is_user_login($this)){

        

            if(isset($_POST))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('product_id', 'product_id', 'trim|required');

                $this->form_validation->set_rules('qty', 'Qty', 'trim|required');

                $this->form_validation->set_rules('unit', 'Unit', 'trim|required');

                if ($this->form_validation->run() == FALSE)

                {

                  if($this->form_validation->error_string()!="")

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                }

                else

                {

              

                    $this->load->model("common_model");

                    $array = array(

                    "product_id"=>$this->input->post("product_id"),

                    "qty"=>$this->input->post("qty"),

                    "price"=>$this->input->post("price"),

                    "unit"=>$this->input->post("unit")

                    );

                    $this->common_model->data_update("purchase",$array,array("purchase_id"=>$id));

                    

                    $this->session->set_flashdata("message",'<div class="alert alert-success alert-dismissible" role="alert">

                                        <i class="fa fa-check"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Success!</strong> Your request added successfully...

                                    </div>');

                    redirect("admin/add_purchase");

                }

                

                $this->load->model("product_model");

                $data["purchase"]  = $this->product_model->get_purchase_by_id($id);

                $data["products"]  = $this->product_model->get_products();

                $this->load->view("admin/product/edit_purchase2",$data);  

                

            }

        }

}

function delete_purchase($id){

        if(_is_user_login($this)){

            $this->db->query("Delete from purchase where purchase_id = '".$id."'");

            redirect("admin/add_purchase");

        }

}



    function registers(){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $users = $this->product_model->get_all_users();

            $this->load->view("admin/allusers2",array("users"=>$users));

        }

    }

 

 

    

    function stock(){

        if(_is_user_login($this)){

            $this->load->model("product_model");

            $data["stock_list"] = $this->product_model->get_leftstock();

            $this->load->view("admin/product/stock2",$data);

        }

    }

/* ========== End page page setting ========*/

   function testnoti(){

        $token =  "cSXtuv8Qkf0:APA91bHtG45TntSc1bSq97VLo2zX70tivsYjY0pVAd5sxFU08-uljOOj16-_qwFJ9ZgZOQTpSDYs2xNkaJgdlk1YX7Wf2ycrm3PPVRzhxfciPFemEE-iYizVoS6A06LwqqpA38sjZjml";

    }

     function notification(){

         if(_is_user_login($this)){

        

            if(isset($_POST))

            {

                $this->load->library('form_validation');

                $this->form_validation->set_rules('descri', 'Description', 'trim|required');

                  if ($this->form_validation->run() == FALSE)

                  {

                              if($this->form_validation->error_string()!="")

                      $this->session->set_flashdata("message", '<div class="alert alert-warning alert-dismissible" role="alert">

                                        <i class="fa fa-warning"></i>

                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                                      <strong>Warning!</strong> '.$this->form_validation->error_string().'

                                    </div>');

                  }else{

                      $message["title"] = 'WoodCart';

                                $message["body"] = $this->input->post("descri");

                                $message["created_at"] = date("Y-m-d h:i:s");  

                            

                            $this->load->helper('gcm_helper');

                            $gcm = new GCM();   

                            //$result = $gcm->send_topics("/topics/rabbitapp",$message ,"ios"); 

                            

                          //  $result = $gcm->send_topics("/topics/grocery",$message ,"android");

                            

                            $q = $this->db->query("Select * from users");

                            $registers = $q->result();

                      foreach($registers as $regs){

                         if($regs->user_ios_token!=""){

                                 $registatoin_ids[] = $regs->user_ios_token;

                         }

                         if($regs->user_gcm_code!=""){

                                 $registatoin_ids_gcm[] = $regs->user_gcm_code;

                         }

                           

                     }

                     if(count($registatoin_ids_gcm)>0){

                             $result = $gcm->send_notification($registatoin_ids_gcm,$message ,"android");

                        }

                    //  if(count($registatoin_ids) > 1000){

                      

                    //   $chunk_array = array_chunk($registatoin_ids,1000);

                    //   foreach($chunk_array as $chunk){

                    //   $result = $gcm->send_notification($chunk, $message,"ios");

                    //   }

                     //  if(count($registatoin_ids) > 1000){

                      

                    //   $chunk_array = array_chunk($registatoin_ids,1000);

                    //   foreach($chunk_array as $chunk){

                    //   $result = $gcm->send_notification($chunk, $message,"ios");

                    //   }

                      

                    //  }else{

    

                    //   $result = $gcm->send_notification($registatoin_ids, $message,"ios");

                    //     }  

                            

                             redirect("admin/notification");

                  }

                   

                   $this->load->view("admin/product/notification2");

                

            }

        }

        

    }

    

 

     public function listslider()

    {

       if(_is_user_login($this)){

           $data["error"] = "";

           $data["active"] = "listslider";

           $this->load->model("slider_model");

           $data["allslider"] = $this->slider_model->get_slider();

           $this->load->view('admin/slider/listslider2',$data);

        }

        else

        {

            redirect('login');

        }

    }

    

    



    public function date_valid($date)

    {

     $parts = explode("/", $date);

      if (count($parts) == 3) {      

       if (checkdate($parts[1], $parts[0], $parts[2]))

       {

        return TRUE;

       }

    }

     $this->form_validation->set_message('date_valid', 'The Date field must be dd/mm/yyyy');

      return false;

    }

   

}

