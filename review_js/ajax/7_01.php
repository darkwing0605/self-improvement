<?php

	$arr = array();
	$message = $_GET;

	array_push($arr, $message);
	$json = json_encode($message);
	$myfile = fopen('7_message.txt', 'w');
	$result = fwrite($myfile, $json);
	if ($result) {
		echo "成功";
	}else{
		echo "失败";
	}

?>