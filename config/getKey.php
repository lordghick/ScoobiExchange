<?php

include_once 'privateStorage.php';

$classKey = new PrivateStorage();
$key = $classKey -> getKey();
echo $key;