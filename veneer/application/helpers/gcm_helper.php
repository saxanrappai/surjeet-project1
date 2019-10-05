<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of GCM
 *
 */

class GCM {

    //put your code here
    // constructor
    function __construct() {
        
    }

    /**
     * Sending Push Notification
     */
    public function send($type, $fields){
        $url = 'https://fcm.googleapis.com/fcm/send';
        
       $api_key = "AAAAoiz8H0U:APA91bGqcHQ-bnqoithwZO4Vu9lALNGIVx5FALa5nQxRFg5MwjdW9cJKtjhzywa4-pKs-7OHM6gtB5eKri_9PNGjsfYwgXCKzyAMWyKEfmhTYGrHWTC_fV78X8E2E4CkxQ_S3sppKm99";
        
        
        $headers = array(
            'Authorization: key=' .$api_key ,
            'Content-Type: application/json'
        );
        
        // Open connection
        $ch = curl_init();

        // Set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_URL, $url);

        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Disabling SSL Certificate support temporarly
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

        // Execute post
        $result = curl_exec($ch);
        if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
        }

        // Close connection
        curl_close($ch);
        return $result;

    }
    public function send_notification($registatoin_ids, $message, $type) {
        
        $fields = array(
            'registration_ids' => $registatoin_ids,
            'data' => $message,
        ); 
        if($type == "ios"){
$fields = array(
            'to' => $registatoin_ids[0],
            'notification' => $message,
            'priority' => 'high',
            'content_available' => true
        );

        }
      return  $this->send($type, $fields);
    }
    public function send_topics($topics, $message, $type) {
        
        $fields = array(
            'to' => $topics,
            'data' => $message,
        );
        if($type=="ios"){
$fields = array(
            'to' => $topics,
            'notification' => $message,
            'priority' => 'high',
            'content_available' => true
        );
} 
        return $this->send($type, $fields);
    }

}

?>