<?php

	$uname = $_POST['uname'];
	$pwd = $_POST['pwd'];

	if ($uname == "小明" && $pwd == "123456") {
		echo "登录成功";
	}else{
		echo "登录失败";
	}

?>