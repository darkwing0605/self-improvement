<?PHP

	//用户名是小明，密码123456
	$uname = $_GET['uname'];
	$pwd = $_GET['pwd'];
	if ($uname == "小明" && $pwd == "123456") {
		echo "登录成功";
	}else{
		echo "登录失败";
	}
?>