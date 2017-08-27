<?php

	$uname = $_GET['uname'];
	$pwd = $_GET['pwd'];

	//写入一个新的txt文件里面
	$myfile = fopen('4_message.txt', 'w');
	$txt = 'uname:'.$uname.'pwd:'.$pwd;
	fwrite($myfile, $txt);

	echo "注册成功";

?>