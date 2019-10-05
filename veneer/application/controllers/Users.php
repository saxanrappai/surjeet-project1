<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends MY_Controller {
    public function __construct()
    {
                parent::__construct();
                // Your own constructor code
                $this->load->database();
                $this->load->helper('login_helper');
    }
    public function index()
    {
        if(_is_user_login($this)){
            $data = array();
            $this->load->model("users_model");
            $data["users"] = $this->users_model->get_alluser();
            
            $this->load->view("users/list2",$data);
            
        }
    }
    public function add_user(){
        if(_is_user_login($this)){
            $data = array();
            $this->load->model("users_model");
            if($_POST){
                $this->load->library('form_validation');
                
                $this->form_validation->set_rules('user_fullname', 'Full Name', 'trim|required');
                $this->form_validation->set_rules('user_email', 'Email Id', 'trim|required');
                $this->form_validation->set_rules('user_password', 'Password', 'trim|required');
                
                if ($this->form_validation->run() == FALSE) 
                {
                  
                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">
                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'
                                </div>';
                    
                }else
                {
                    
                        $user_fullname = $this->input->post("user_fullname");
                        $emp_fullname = $this->input->post("emp_fullname");
                        $user_email = $this->input->post("user_email");
                        $user_password = $this->input->post("user_password");
                        $user_phone = $this->input->post("mobile");
                        $user_city = $this->input->post("address");
                         $user_type = $this->input->post("user_type");
                        $status = ($this->input->post("status")=="on")? 1 : 0;
                        
                        
                        $q = $this->db->query("Select * from users where user_email = '".$user_email."' limit 1");
                        if($q->num_rows() == 0){
                            $image='user.png';
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
                                      $this->common_model->data_insert("users",
                                    array(
                                    "user_fullname"=>$user_fullname,
                                    "user_name"=>$emp_fullname,
                                    "user_email"=>$user_email,
                                    "user_image"=>$image,
                                    "user_password"=>md5($user_password),
                                    "user_phone"=>$user_phone,
                                    "user_status"=>$status,
                                    "user_login_type"=>$user_type,
                                    "user_city"=>$user_city));
                                         $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">
                                 <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span>
                                 <span class="sr-only">Close</span></button>
                                                                  <strong>Success!</strong> User Added Successfully
                                                                </div>');
                                }else{
                                      $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">
                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                      <strong>Warning!</strong> Please add image
                                    </div>';
                                }
                        }else{
                             $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">
                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                      <strong>Warning!</strong> User already exists.
                                    </div>';
                        }
                          
                        
                }
            }
            
            $data["user_types"] = $this->users_model->get_user_type();
            $this->load->view("users/add_user2",$data);
        }
    }
    
    
    public function send_email_verified_mail($email){
          //$message = $this->load->view('emails/email_verify',array("name"=>$name,"active_link"=>site_url("users/verify_email?email=".$email."&token=".$token)),TRUE);
          
           
                    
                            $this->email->from("triyam.apps@gmail.com","My Shop");
                            $list = array($email);
                            $this->email->to($list); 
                             $this->email->reply_to("triyam.apps@gmail.com","My Shop");
                            $this->email->subject('My shop test email');
                            $this->email->message("Hi Welcome");
                           return $this->email->send();
                      
    }
    
    
    public function edit_user($user_id){
        if(_is_user_login($this)){
            $data = array();
            $this->load->model("users_model");
            $data["user_types"] = $this->users_model->get_user_type();
            $user = $this->users_model->get_user_by_id($user_id);
            $data["user"] = $user;
            if($_POST){
                $this->load->library('form_validation');
                
                $this->form_validation->set_rules('user_fullname', 'Full Name', 'trim|required');
                $this->form_validation->set_rules('user_password', 'Password', 'trim|required');
                // $this->form_validation->set_rules('user_image_pre', 'Image', 'trim|required');
                
                if ($this->form_validation->run() == FALSE) 
                {
                  
                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">
                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'
                                </div>';
                    
                }else
                {
                        $user_fullname = $this->input->post("user_fullname");
                           $emp_fullname = $this->input->post("emp_fullname");
                        $user_email = $this->input->post("user_email");
                        //  $user_image = $this->input->post("user_image_pre");
                        $user_password = $this->input->post("user_password");
                         $user_phone = $this->input->post("mobile"); 
                          $user_city = $this->input->post("address");
                          $user_type = $this->input->post("user_type");
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
                                            "user_fullname"=>$user_fullname,
                                            "user_name"=>$emp_fullname,
                                            "user_email"=>$user_email,
                                            "user_phone"=>$user_phone,
                                            "user_status"=>$status,
                                            "user_image"=>$image,
                                            "user_login_type"=>$user_type,
                                             "user_city"=>$user_city);
                                    $user_password = $this->input->post("user_password");
                                    if($user->user_password != $user_password){
                                        
                                    $update_array["user_password"]= md5($user_password);
            
                                    }
                                    
                                        $this->load->model("common_model");
                                        $this->common_model->data_update("users",$update_array,array("user_id"=>$user_id)
                                            );
                                        $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">
                                              <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                              <strong>Success!</strong> User updated Successfully
                                            </div>');
                                            redirect("users");
                                }else{
                                     $this->form_validation->set_rules('user_image_pre', 'Image', 'trim|required');
                                       
                                        if ($this->form_validation->run() == FALSE) 
                                        {
                                          
                                           $image='user.png';
                                            
                                        }else{
                                            $image = $this->input->post("user_image_pre");
                                        }
                                      $update_array = array(
                                            "user_fullname"=>$user_fullname,
                                            "user_name"=>$emp_fullname,
                                            "user_email"=>$user_email,
                                            "user_phone"=>$user_phone,
                                            "user_image"=>$image,
                                            "user_status"=>$status,
                                            "user_login_type"=>$user_type,
                                             "user_city"=>$user_city);
                                            $user_password = $this->input->post("user_password");
                                            if($user->user_password != $user_password){
                                                
                                            $update_array["user_password"]= md5($user_password);
                    
                                            }
                                            
                                                $this->load->model("common_model");
                                                $this->common_model->data_update("users",$update_array,array("user_id"=>$user_id)
                                                    );
                                                $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">
                                                      <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                                      <strong>Success!</strong> User updated Successfully
                                                    </div>');
                                                    redirect("users");
                                    //  $this->form_validation->set_rules('user_image_pre', 'Image', 'trim|required');
                
                                    //     if ($this->form_validation->run() == FALSE) 
                                    //     {
                                          
                                    //         $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">
                                    //                       <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                    //                       <strong>Warning!</strong> '.$this->form_validation->error_string().'
                                    //                     </div>';
                                            
                                    //     }else
                                    //     {
                                    //          $update_array = array(
                                    //         "user_fullname"=>$user_fullname,
                                    //         "user_name"=>$emp_fullname,
                                    //         "user_email"=>$user_email,
                                    //         "user_phone"=>$user_phone,
                                    //         "user_status"=>$status,
                                    //         "user_login_type"=>$user_type,
                                    //          "user_city"=>$user_city);
                                    //         $user_password = $this->input->post("user_password");
                                    //         if($user->user_password != $user_password){
                                                
                                    //         $update_array["user_password"]= md5($user_password);
                    
                                    //         }
                                            
                                    //             $this->load->model("common_model");
                                    //             $this->common_model->data_update("users",$update_array,array("user_id"=>$user_id)
                                    //                 );
                                    //             $this->session->set_flashdata("message", '<div class="alert alert-success alert-dismissible" role="alert">
                                    //                   <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                    //                   <strong>Success!</strong> User Added Successfully
                                    //                 </div>');
                                    //                 redirect("users");
                                    //     }
                                    
                                }
                    

                      
                        
                }
            }
            
            
            $this->load->view("users/edit_user2",$data);
        }
    }
   
    function delete_user($user_id){
        $data = array();
            $this->load->model("users_model");
            $user  = $this->users_model->get_user_by_id($user_id);
           if($user){
                $this->db->query("Delete from users where user_id = '".$user->user_id."'");
                redirect("users");
           }
    }
    
    function modify_password($token){
        $data = array();
        $q = $this->db->query("Select * from users where varified_token = '".$token."' limit 1");
        if($q->num_rows() > 0){
                        $data = array();
                        $this->load->library('form_validation');
                        $this->form_validation->set_rules('n_password', 'New password', 'trim|required');
                        $this->form_validation->set_rules('r_password', 'Re password', 'trim|required|matches[n_password]');
                        if ($this->form_validation->run() == FALSE) 
                        {
                            if($this->form_validation->error_string()!=""){
                                  
                                    $data["response"] = "error";
                                    $data["error"] = '<div class="alert alert-warning alert-dismissible" role="alert">
                                                  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                                  <strong>Warning!</strong> '.$this->form_validation->error_string().'
                                                </div>';
                                                }
                                    
                        }else
                        {
                                    $user = $q->row();
                                   $this->db->update("users",array("user_password"=>md5($this->input->post("n_password")),"varified_token"=>""),array("user_id"=>$user->user_id));
                                   $data["success"] = true;                             
                                                                   
                        }
                        $this->load->view("users/modify_password",$data);
        }else{
            echo "No access token found";
        }
    }
    
}