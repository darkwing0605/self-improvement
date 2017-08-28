<?php
	//得到你传进来的callback
	$callback = $_GET['callback'];
	//判断是否为空
	$callback = ($callback==""?'callback':$callback);

	echo "$callback({'name': '小明','sex': '女'})";

?>