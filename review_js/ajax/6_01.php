<?php

	$rname = $_GET['rname'];
	$rpwd = $_GET['rpwd'];

	//写入到一个新的txt文件中
	$myfile = fopen('6_message.txt', 'w');
	$txt = 'rname:'.$rname.',rpwd:'.$rpwd;
	$result = fwrite($myfile, $txt);

	if ($result) {
		echo "注册成功";
	}else{
		echo "注册失败";
	}

?>