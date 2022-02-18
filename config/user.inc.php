<?php

//user structure to save it on Mysql
class User {
    
    private $username;
    private $address;

    public function __construct($username, $address){
        $this -> username = $username;
        $this -> address = $address;
    }

    public function getUsername(){
        return $this -> username;
    }
    public function getAddress(){
        return $this -> address;
    }

}