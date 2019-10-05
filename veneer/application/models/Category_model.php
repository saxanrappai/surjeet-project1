<?php
class Category_model extends CI_Model{
        /* ========== Category========== */
        public function add_category()
        {
            $slug = url_title($this->input->post('cat_title'), 'dash', TRUE);
            
                      $q = $this->db->query("select id from categories where 1 and title='".$this->input->post("category")."' ");
                        
                        $product =$q->result();
                        
            // $parentid = $this->input->post("parent");
                $parentid = $product[0]->id;
                        
            $addcat = array(
                            "title"=>$this->input->post("cat_title"),
                            "slug"=>$slug,
                            "parent"=>$parentid, 
                            "status"=>$this->input->post("cat_status")
                            );
            
                if($_FILES["cat_img"]["size"] > 0){
                    $config['upload_path']          = './uploads/category/';
                    $config['allowed_types']        = 'gif|jpg|png|jpeg';
                    $this->load->library('upload', $config);
    
                    if ( ! $this->upload->do_upload('cat_img'))
                    {
                            $error = array('error' => $this->upload->display_errors());
                    }
                    else
                    {
                        $img_data = $this->upload->data();
                        $addcat["image"]=$img_data['file_name'];
                    }
                    
               }
               
                if($parentid != "0"){
                    $q = $this->db->query("select * from `categories` where id=".$parentid);
                    $parent = $q->row();
                    $leval = $parent->leval + 1;
                    $addcat["leval"] = $leval;                       
                }
                
               
               $this->db->insert("categories",$addcat); 
        }
        
        
        public function add_header_category()
        {
            $slug = url_title($this->input->post('cat_title'), 'dash', TRUE);
            $parentid = $this->input->post("parent");
                        
            $addcat = array(
                            "title"=>$this->input->post("cat_title"),
                            "slug"=>$slug,
                            "parent"=>$this->input->post("parent"), 
                            "status"=>$this->input->post("cat_status")
                            );
            
                if($_FILES["cat_img"]["size"] > 0){
                    $config['upload_path']          = './uploads/category/';
                    $config['allowed_types']        = 'gif|jpg|png|jpeg';
                    $this->load->library('upload', $config);
    
                    if ( ! $this->upload->do_upload('cat_img'))
                    {
                            $error = array('error' => $this->upload->display_errors());
                    }
                    else
                    {
                        $img_data = $this->upload->data();
                        $addcat["image"]=$img_data['file_name'];
                    }
                    
               }
               
                if($parentid != "0"){
                    $q = $this->db->query("select * from `header_categories`");
                    $parent = $q->row();
                    $leval = $parent->leval + 1;
                    $addcat["leval"] = $leval;                       
                }
                
               
               $this->db->insert("header_categories",$addcat); 
        }
        
         function get_category_by_id($prod_id){
            $q = $this->db->query("Select  * from categories where 1 and id = '".$prod_id."' limit 1");
            return $q->row();
            
      }
      
        
        public function edit_category($id)
        {
            // echo $id;
             $this->load->library('form_validation');
            $slug = url_title($this->input->post('cat_title'), 'dash', TRUE);
             $q = $this->db->query("Select  * from categories where 1 and title = '".$this->input->post("category")."' limit 1");
            $r =  $q->row();
            //echo $r->id;
            $parentid = $r->id;
            $editcat = array(
                            "title"=>$this->input->post("cat_title"),
                            "slug"=>$slug,
                            "parent"=>$parentid, 
                            "status"=>$this->input->post("cat_status")
                            );
             $q = $this->db->query("Select  * from categories where 1 and id = '".$id."' limit 1");
            $categories =  $q->row();
             
                    // if($_FILES["cat_img"]["size"] > 0){
                    if(!empty($_FILES['cat_img']['name'])){
                        //  echo 'here entered';
                        $config['upload_path']          = './uploads/category/';
                        $config['allowed_types']        = 'gif|jpg|png|jpeg';
                        $this->load->library('upload', $config);
        
                        if ( ! $this->upload->do_upload('cat_img'))
                        {
                                $error = array('error' => $this->upload->display_errors());
                        }
                        else
                        {
                            $img_data = $this->upload->data();
                            $editcat["image"]=$img_data['file_name'];
                        }
                        
                   }else{
                        
                      if($categories->image!=''){
                             $this->form_validation->set_rules('img', 'image', 'trim|required');
                      }
                       
                        if ($this->form_validation->run() == FALSE )
                        {
                             $editcat["image"]='';
                            //   echo 'entered';
                        }
                   }
                   if($parentid != "0"){
                    $q = $this->db->query("select * from `categories` where id=".$parentid);
                    $parent = $q->row();
                    $leval = $parent->leval + 1;
                    $editcat["leval"] = $leval;                       
                    }
                    // echo json_encode($editcat);
                    // echo $this->input->post("cat_id"); 
                    $this->db->update("categories",$editcat,array("id"=>$this->input->post("cat_id"))); 
        }
        
        public function edit_header_category()
        {
            $slug = url_title($this->input->post('cat_title'), 'dash', TRUE);
            $parentid = $this->input->post("parent");
            $editcat = array(
                            "title"=>$this->input->post("cat_title"),
                            "slug"=>$slug,
                            "parent"=>$this->input->post("parent"), 
                            "status"=>$this->input->post("cat_status")
                            );
            
                    if($_FILES["cat_img"]["size"] > 0){
                        $config['upload_path']          = './uploads/category/';
                        $config['allowed_types']        = 'gif|jpg|png|jpeg';
                        $this->load->library('upload', $config);
        
                        if ( ! $this->upload->do_upload('cat_img'))
                        {
                                $error = array('error' => $this->upload->display_errors());
                        }
                        else
                        {
                            $img_data = $this->upload->data();
                            $editcat["image"]=$img_data['file_name'];
                        }
                        
                   }
                   if($parentid != "0"){
                    $q = $this->db->query("select * from `header_categories` where id=".$parentid);
                    $parent = $q->row();
                    $leval = $parent->leval + 1;
                    $editcat["leval"] = $leval;                       
                    }
                  
                    $this->db->update("header_categories",$editcat,array("id"=>$this->input->post("cat_id"))); 
        }
        
        public function get_categories()
        {
            $q = $this->db->query("SELECT a.*, Deriv1.prtitle FROM `categories` a  LEFT OUTER JOIN (SELECT `id`, `title` as `prtitle` FROM `categories`) as Deriv1 ON Deriv1.`id` = a.`parent` " );
           // $q = $this->db->query("select * from `categories` order by id DESC ");
            return $q->result();
        }
        public function get_header_categories()
        {
            $q = $this->db->query("SELECT a.*, Deriv1.prtitle FROM `header_categories` a  LEFT OUTER JOIN (SELECT `id`, `title` as `prtitle` FROM `categories`) as Deriv1 ON Deriv1.`id` = a.`parent` " );
           // $q = $this->db->query("select * from `categories` order by id DESC ");
            return $q->result();
        }
        
         public function sel_categories(){
            $q = $this->db->query("select * from `categories`  ");
            return $q->result();
        } 
             public function bus_category($id){
            $q = $this->db->query("select categories.title, business_category.bus_id as bcid, business_category.category_id from `business_category` INNER JOIN categories ON categories.id = business_category.category_id WHERE business_category.bus_id =".$id);
            return $q->result();
        } 
        
        public function get_categories_short($parent,$level,$th){
            $q = $th->db->query("Select a.*, ifnull(Deriv1.Count , 0) as Count, ifnull(Total1.PCount, 0) as PCount FROM `categories` a  LEFT OUTER JOIN (SELECT `parent`, COUNT(*) AS Count FROM `categories` GROUP BY `parent`) Deriv1 ON a.`id` = Deriv1.`parent` 
                         LEFT OUTER JOIN (SELECT `category_id`,COUNT(*) AS PCount FROM `products` GROUP BY `category_id`) Total1 ON a.`id` = Total1.`category_id` 
                         WHERE a.`parent`=" . $parent);
                        
                        $return_array = array();
                        
                        foreach($q->result() as $row){
                                    if ($row->Count > 0) {
                                        $sub_cat = 	$this->get_categories_short($row->id, $level + 1,$th);
                    				    $row->sub_cat = $sub_cat;   	
                                    } elseif ($row->Count==0) {
                    				
                                    }
                            $return_array[] = $row;
                        }
        return $return_array;
    }

}
?>