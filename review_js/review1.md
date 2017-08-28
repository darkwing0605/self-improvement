<div style="width:50px;height:50px;border-radius:50%;background-color:cyan;position:fixed;right:100px;bottom:100px;line-height:50px;text-align:center;font-size:30px;color:white;cursor:pointer;">↑</div><script>var div=document.querySelector('div');div.onclick=function(eve){var timer=setInterval(function(){var scrollDistance=document.body.scrollTop||document.documentElement.scrollTop;scrollDistance=scrollDistance*0.8;document.body.scrollTop=scrollDistance;document.documentElement.scrollTop=scrollDistance;if(scrollDistance==0){clearInterval(timer)}},30)}</script>
[TOC]

# 复习

## 1.js组成

>ECMAscript  DOM  BOM

## 2.ECMAscript

### 1.变量

>变量在使用前需要定义

>定义变量和使用变量

>var 变量名;

>变量名的使用规范

>>能由字母数字下划线和美元符号组成

>>不能以数字开头

>>不能使用关键字

>>建议使用驼峰命名法

### 2.字面量

>字面量：能直接用最直白、固定的格式写出来的东西

#### 1.数字字面量

>分为整数和小数

>1

>12

>3.14

>数字字面量分进制：十进制  十六进制 八进制

>十进制：用0-9这十个数字来组成的，默认使用十进制

>十六进制：0x数字或字母(a-f)

>八进制： 0跟 0-7   0o 跟0-7  0O 跟 0-7

>但是：js在进行运算时全部自动转成十进制

#### 2.字符串字面量

>字符串：用引号引起来的东西(不管单引号还是双引号，没区别)，但是需要成对出现

>'1'

>'true'

### 3.基本数据类型

>分两大类：
>简单的数据类型：数字、字符串、布尔类型、undefined、null
>复杂的数据类型(引用类型) ： 对象

#### 简单数据类型：

##### 数字类型：
```javascript
var num = 12;
```
##### 字符串类型：
```javascript
var str = '3.14';
```
##### 布尔类型：

>只有两个值：TRUE FALSE

>经常用于判断结果

##### undefined类型：

>只有一个值：undefined

>定义变量时如果没有赋初始值，默认值就是undefined

##### null类型：

>它叫空对象


>判断数据类型的工具：typeof (这个里面的字母o需要小写)

>这个工具能测简单数据类型，复杂数据类型都返回Object

#### 数字转字符串：

>数字转成字符串的方法有：

>第一种：数字 + ''

>第二种：数字.toString();

#### 字符串转数字：

>字符串转数字方法：

>第一种：paresInt()   :只能转出整数部分，数字部分必须在字符串的开头

>第二种：parseFloat() :可以转出浮点型数字，数字部分必须在字符串的开头

>第三种：Number()     :只能转纯数字的字符串

### 4.几种输入输出方式

>输出到控制台：console.log(要输出的东西)；

>输出的页面：document.write()；

>输出到浏览器：alert();

>输入方式：prompt();能在浏览器窗口弹出一个对话框，让用户输入东西，js能得到用户输入的东西，得到的是一个字符串

### 5.运算符

#### 1.算术运算符： +  - *  /  %

##### +号的用法：

>有两个用法：

>第一个用法：数学运算(有一个要求，+ 号两边都需要是数字类型)

>第二个用法：字符串拼接（+号两边任意一边有字符串，结果就是字符串拼接，不会进行数学加法）

##### -	*  /  %

>这四种操作只有一个作用：就是进行数学运算

>需要注意的是  除法/   和  求余 %

>除法/： js中除法会运算到小数位

>求余%： 也是除法，只取余数

##### 特殊字符参与运算：undefined	null	false	''	'字符串'

>特殊字符参与运算时会存在隐式转换

>undefined 不进行隐式转换

>null  false 空字符串(除加法外) 转成 数字0

>true  转成 数字1

>非空字符串 不会进行隐式转换

```javascript
// 加法
console.log(undefined + 1);  //NaN  
console.log(null + 1); // 1
console.log(false + 1); //1 
console.log("" + 1); // "1"
console.log("字符串"+ 1); // 字符串1
console.log(true + 1); // 2 
console.log("\n");
// 乘法
console.log(undefined * 1);  //NaN  
console.log(null * 1); 		 // 0
console.log(false * 1); 	//  0
console.log("" * 1); 		//  0   
console.log("字符串"* 1); // NaN
console.log(true * 1); // 1
```
#### 2.关系运算符：
> &gt; &gt;= < <=  ==  ===  !=  !==
>其他和数学中的关系运算一模一样，需要注意的是==  和 ===
>== 用来判断两个值是否相同，不管数据类型
>===  用来判断两个值是否相同，同时判断数据类型
>关系运算符运行结果是布尔值。

> 特殊字符参与关系运算时：
>undefined 不进行隐式转换
>null  false 空字符串 转成 数字0
>true  转成 数字1
>非空字符串 不会进行隐式转换
```javascript
console.log(undefined > 1);  // false 
console.log(null > 1); // false
console.log(false > 1); //false
console.log("" > 1); // false
console.log("字符串"> 1); // false
console.log(true >= 1); // false
```
#### 3.逻辑运算符：
##### 与&& 或 || 非 ！
>逻辑与：&&
>语法：   表达式1 &&  表达式2
>运算规则：只有表达式1 和 表达式2 同时为真，结果才为真

>逻辑或： || 
>语法：  表达式1 || 表达式2
>运算规则： 只有表达式1 和表达式2 同时为假时，结果才为假
>正常逻辑运算返回值是布尔值

>逻辑非：
>遇真变假，遇假变真
```javascript
!undefined  // true
```
##### 特殊符号参与逻辑运算，运算结果不一定是布尔值
>逻辑与的特殊符号运算：
>当表达式1不成立时，返回表达式1；当表达式1成立时，返回表达式2
```javascript
console.log(undefined && 1);  // undefined 
console.log(null  && 1); // null
console.log(false  &&  1); // false 
console.log(""  && 1); // ""
console.log("字符串" &&  1); // 1 
console.log(true  &&  1); // 1
```
>逻辑或的特殊符号运算：
>当表达式1成立，则返回表达式1；当表达式1不成立时，返回表达式2
```javascript
console.log(undefined|| 1);  //  1 
console.log(null  ||  1); // 1
console.log(false  ||   1); // 1  
console.log(""  ||  1); // 1
console.log("字符串" ||   1); //  “字符串” 
console.log(true  ||   1); // true
```
##### 短路效应：
>逻辑与的短路效应：当表达式1不成立时，直接返回表达式1，不管表达式2
```javascript
console.log(undefined && a);  //undefined
```
>逻辑或的短路效应：当表达式1成立时，直接返回表达式1，不管表达式2
```javascript
var e = event || window.event;
```
##### 逻辑运算符有优先级：逻辑非>  逻辑与  > 逻辑或
```javascript
4 && "hello" || !false || !true && null;
//第一步运算：  
//  4 && “hello”|| true  || false && null;
//第二步运算：
//  “hello”     ||  true  ||  false
//第三步运算：
//  “hello”  || false
//第四步运算：
// “hello”
```

#### 4.赋值运算符：
##### 简单赋值： = 
>作用：会把等号右边的值，赋值给左边的变量
```javascript
var a = b;//这时肯定会去找b的值
```
>复合赋值：
>+=  -=  *=  /=  %=
>这几个的运算规则是一样的：
>运算规则：把复合赋值左边的变量值拿到右边进行运算，最终把结果再重新赋值给右边的变量
```javascript
var a = 12;
var b =3;
b+=a;
console.log(b);//15
```
##### 特殊的两个：++ --
>这个两个符号没出现一次，变量的值就自动增加1或自动减少1
>++变量名：本次显示增加的1
>变量名++：本次不显示，下次使用时显示增加的1
```javascript
var a = 12;
console.log(a++); // 12
console.log(++a); //14
```
## 3.三大结构：
>就是指程序在执行时的执行顺序。
>顺序结构：程序从上到下，从左到右依次执行，中间不允许跳过任何一句代码。Js默认>的就是顺序结构>
>选择结构：有多种情况可以执行，但只执行其中的某一条。If  switch
>循环结构：能重复执行的代码。While for  do-while

### 选择结构：
#### if选择：
> 语法：
```javascript
if(条件){语句1;}else if(条件2){语句2;}else{语句3;}
```
>运算规则：首先判断if后小括号中的条件，如果条件成立，则执行语句1，其他的都不执行；如果条件不成立，就找是否有else，如果有else 再看是否有if，如果有if，继续判断条件2，如果条件2成立，则执行语句2，其他不执行；如果条件2还不成立，继续找else，如果有，看是否有if ，没有if，直接执行else的语句

#### switch选择：
>语法：
```javascript
switch(表达式){
	case 值1: 语句1; break;
	case 值2: 语句2; break;
	……
	default:语句n;
}
```
>运算规则：拿switch后小括号中的表达式和case后的值做比较，能和哪个匹配，就执行哪个。如果都不能匹配，则执行default

>break的作用：能中断switch执行

#### 选择结构的嵌套：
>选择结构中套选择结构：
```javascript
if(){
	if(){
	}
}

switch () {
	case 值1:
	if () {
		if () {
		}
	}
}
```

### 循环结构
>就是指重复执行的代码
#### for循环
>循环结构特别灵活，不要死记结构
```javascript
for(表达式1;表达式2;表达式3){循环体}
```
>表达式1作用：循环的起始条件
>表达式2 作用：循环的终止条件
>表达式3作用：增量
>循环体作用：循环条件成立时要执行的语句
```javascript
//要求：输出1-10
for(var i=1; i<=10 ; i+=1){
	console.log(i);
}
for(var i=10; i>=1; i--){
	console.log(i);
}
```
#### while循环 do-while循环
>常用的地方：在循环次数不定的时候用
##### while语法：
```javascript
表达式1;
while(表达式2){
	循环体;
表达式3;
}
```

##### do-while的语句：
```javascript
表达式1;
do{
	表达式3;
	循环体;
}while(表达式2);
```
#### 循环结构中的关键字break,continue
>break的作用：遇到break；结束本层循环。
>continue的作用：遇到continue；结束本次循环
>循环嵌套：中的break、continue，能直接中的外层循环

```javascript
waiceng: for (i = 1; i <= 9; i++) {
	for (j = 1; j <= i; j++) {
		document.write(j + 'x' + i + '=' + j * i);
		if (i >= 3) {
			break waiceng;
		}
	}
	document.write('<br>');
}
```
#### 运算规则：
##### for和while的
>第一步：拿1和2作比较，判断是否成立，如果成立，执行第二步，如果不成立，执行第五步
>第二步：如果成立，则执行3
>第三步：执行完3后执行4
>第四步：执行完成4后，再和2作比较，判断是否成立，如果成立再执行一遍第二三四步，如果不成立，则执行第五步
>第五步：循环结束
![img1](/review_js/images/img1.png "img1")

##### do-while的运算规则
>先执行do后大括号中的内容，然后再判断条件
>for、while最少能执行多少次？  0次
>do-while最少能执行多少次？    0次

#### 循环嵌套
>循环里面套循环
```Javascript
for(var i = 0; i < 10; i++){
	for(var j = 0; j < 2; j++){
		console.log('a');
	}
}
//问能输入多少个a ：20个
```
做九九乘法表时，外层循环控制行数，内层循环控制列数
```javascript
for (i = 1; i <= 9; i++) {
	for (j = 1; j <= i; j++) {
		document.write(j + 'x' + i + '=' + j * i);
	}
	document.write('<br>');
}
```

#### 穷举思想
>遇到需要把所有条件都判断一遍的情况，就是穷极思想
>三位数中的水仙花数：个位的三次方+十位的三次方+百位的三次方等于它本身
```javascript
for (var i = 100; i < 1000; i++) {
	var ge = i % 10;
	var shi = parseInt(i / 10) % 10;
	var bai = parseInt(i / 100);
	if (Math.pow(ge, 3) + Math.pow(shi, 3) + Math.pow(bai, 3) == i) {
		console.log(i + '是水仙花数')
	}
}
```

### 累加器
>求和的时候用的
>规则：
>>需要在循环外面定义一个保存和的变量，这个变量的初始值是0
>>循环里面需要让这个变量累加

```javascript
//求1-20之间所有的质数的个数
for (var i = 1; i < 21; i++) {
	var sum = 0;
	for (var j = 1; j <= i; j++) {
		if (i % j == 0) {
			sum++;
		}
	}
	if (sum == 2) {
		console.log(i + '是质数');
	}
}
```

### 累乘器
>规则
>>在循环外面定义一个保存积的变量，这个变量的初始值是1

```javascript
//求5的阶乘
var ji = 1;
for (var i = 5; i >= 1; i--) {
	ji *= i;
}
console.log(ji);
```
## 4.数组对象
>数组：用来存放多个数据的容器

### 1.数组的定义和使用

#### 定义数组：

##### 字面量方法
```javascript
var arr = [];
var arr = [1,2,3,4,5,];
```
>注意：
>>第一点：数组的标识 []
>>第二点：定义数组并赋值的时候有兼容性：就是赋值时最后一个元素后还有一个逗号
>>>IE低版本认为数组长度：6
>>>高级浏览器认为数组长度：5

>>第三点：数组中元素都是有自己的位置的，而且这个位置是有编号的，编号从0开始，所有都可以通过编号找到对应的值。

#### 使用数组
>找数组中的某一个元素：下标法：数组名[下标]  下标最大是数组长度-1

##### 数组遍历
>定义：把数组的每一个元素都找一遍
>for
```javascript
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```
### 2.数组对象的属性和方法
>对象中的属性其实就是正常代码中的变量
>对象中的方法其实就是正常代码中的函数
>数组对象是js中内置的对象，已经给做好了，可以直接使用

#### 数组的属性
>属性就是指数组的一些特性，数组对象就给提供了一个可用的属性：length
>>第一个：可以获取数组的长度

```javascript
//数组名.length
var arr = [1,2,3,4,5];
console.log(arr.length);
```

>>第二个：可以设置数组的长度
>>数组名.length = 新长度
>>>如果设置的长度大于原数组的长度
>>>数组长度改变了，但是没有赋值的数组元素不显示
>>>特殊的：可以直接设置数组元素，改变数组长度

```javascript
arr[19] = 20;
console.log(arr.length);
console.log(arr);
```

>>>设置的长度小于原数组长度
>>>会把数组中多于设置长度的元素删除，删除后无法找回

```javascript
arr.length = 4;
console.log(arr.length);
console.log(arr);

arr.length = 20;
console.log(arr);
```

#### 数组对象的方法

##### 1.增加删除
>增加
>>头部增加：unshift();
>>尾部增加：push();
>>返回新数组长度

>删除
>>头部删除：shift();
>>尾部删除：pop();
>>返回删除的元素

##### 2.截取
>slice(起始位置,结束位置);
>返回值：截取的数组

##### 3.删除、添加、更改
>splice(起始位置,删除长度,new1,new2,...);
>删除功能：只要前两个参数就可以，表示从起始位置开始，删除规定的长度
>添加功能：把删除长度设置成0，然后写new就可以
>更改功能：删除的长度和添加的长度一样

##### 4.排序
>sort()
>会改变原数组
>正常用：用ASCII码一位一位的排序
>经常需要使用sort中的函数
>用法：
>>return a - b 升序排序
>>return b - a 降序排序

```javascript
arr.sort(function(a, b) {
	return a - b;
});
```

##### 5.倒序
>reverse()
>会改变原数组

##### 6.把数组转成字符串
>join()
>功能是按join()中的规则把数组转化成字符串，默认规则是加逗号
```javascript
var arr = [1,2,3,4];
var str = arr.join('---');
```

## 5.字符串对象

>字符串：用引号引起来的东西就是字符串。

### 1.定义和使用字符串

#### 定义字符串：

>字面量方式：

```javascript
var str = '字符串';
```
#### 使用字符串

>字符串中的内容只能用不能改
>用整体的字符串：调用变量名
>使用字符串中的某一个字符：下标法 字符串变量[下标]
```javascript
var str = 'js字符串'
console.log(str);
console.log(str[3]);
str[3] = '福'
console.log(str);
```

### 2.字符串对象的属性和方法

#### 属性
>length：长度
>返回字符串的长度，不能设置字符串的长度
```javascript
str.length = 20;
console.log(str.length);
console.log(str); //还是5
```

#### 方法
##### indexOf()
>返回在字符串中第一次出现的位置，找到了返回下标，没找到返回-1
>用法：字符串.indexOf('指定的字符');
```javascript
var str = 'hello world';
//找字母o第一次出现的位置
console.log(str.indexOf('o')); //4
console.log(str.indexOf('x')); //-1
```
##### lastIndexOf()
>返回在字符串中从后向前找第一次出现的下标，到了返回下标，没找到返回-1
>用法：字符串.lastIndexOf('指定的字符');
```javascript
var str = 'hello world';
console.log(str.lastIndexOf('o')); //7
```
##### 截取方法
>slice(起始位置,结束位置)  //不会自动交换
>substring(起始位置,结束位置)   //可以自动交换
>substr(起始位置,长度)
>>返回值：截取的字符串，不改变原字符串

##### 大小写转化：
>toUpperCase()
>toLowerCase()
>>用法：字符串.toUpperCase()  把字符串中所有字母变成大写字母

##### charAt() 返回指定下标的字符，和下标法一样
##### charCodeAt() 返回指定下标的字符的编码
##### trim() 把字符串前后的空格删除，*有兼容性，IE低版本不支持*

##### 分割 split()
>用法：字符串.split(规则);
>规则可以写字符串，也可以写正则表达式RegExp();

##### 匹配 match()
>用法：字符串.match(规则);
>规则如果是字符串，返回值为匹配搭配到的第一个；如果是正则表达式写的，可以返回所有匹配到的
```javascript
console.log(str.match('o')); //找到了返回类数组 ["o",index:4,input:"hello world"];
console.log(str.match('x')); //找不到返回null
```

##### 搜索 search()
>用法：字符串.search(规则);
>规则不管是字符串还是正则表达式，都返回查找到的第一个
```javascript
console.log(str.search('o')); //找到了，返回下标
console.log(str.search('x')); //找不到，返回-1
```

##### 替换 replace()
>用法：字符串.replace(指定字符串,新字符串);
>规则如果是字符串，只改匹配到的第一个，如果是正则表达式，可以修改匹配到的所有
>*注意：该方法不改变原字符串，会生成一个新的字符串*
```javascript
//把o替换成x
var s = str.replace('o','x');
console.log(str);
console.log(s);
```

## 6.Math方法和Date对象

### Math方法
>它是js提供的一些数学函数，可以直接使用，不需要定义
>常用的Math方法
>>Math.random()  产生随机数，范围是[0-1)
>>Math.floor()  向下取整
>>Math.ceil()  向上取整
>>Math.PI   π
>>Math.pow(底数,幂)
>>Math.round()  四舍五入

### Date对象
>用的时候比较特殊
>必须new Date()才能使用
>new Date()小括号中不写参数，返回当前时间
```javascript
var timer = new Date();
console.log(timer);
```
>如果在new Date()时，小括号中传参数，这时的功能是设置时间
```javascript
var timer2 = new Date('2017-4-1 12:23:34');
console.log(timer2);
```
>Date对象的方法
>作用：把整体中的某一个值取出来
>>获取年：getFullYear();
>>用法：
```javascript
console.log(timer.gerFullYear());
```
>>获取月份：getMonth()
>>>返回值：0-11

>>获取日期：getDate();
>>获取兴趣：getDay();
>>>返回值：0-6，周日为0

>>getTime()：返回从1970年1月1日 00:00:00开始计算的毫秒数

>toString() 把Date对象转换为字符串
>toLocaleString() 根据本地时间，把Date对象的日期部分转换为字符串




## 7.函数

### 1.定义和使用
函数：就是*封装*起来的具有特定功能的一段代码
定义函数：

####第一种方式：function 函数名(){}
函数定义后不会自动执行，只有调用时才能执行

丰富函数功能：
>第一个：可以传参
>>定义的时候：function 函数名(形参列表){}

>第二个：可以有返回值
>>定义的时候：function 函数名(){return 表达式;}
>>返回值的作用
>>>第一个作用是返回它后面的表达式，返回到调用的地方
>>>第二个作用是中断函数
```javascript
function add(a, b, c) {
	// 功能：求三个数中最大和最小两个数的和
	if (a > b) {
		if (a > c) {
			if (b > c) {
				return a + c;
			} else {
				return a + b;
			}
		} else {
			return c + b;
		}
	} else {
		if (c > b) {
			return c + a;
		} else {
			if (a > c) {
				return b + c;
			} else {
				return b + a;
			}
		}
	}
	console.log("lalalala");
	console.log("ahahahahah")
}
console.log(add(3333, 76, 100));
```


调用：函数名();
有参数时调用方法：函数名(实参列表);
特殊情况：形参和实参的个数可以不同
>形参多余实参:多余的形参接收不到值，这时使用默认的undefined
```javascript
function add(a, b, c) {
	console.log(a + b + c);
	console.log(b); //undefined
	console.log(c); //undefined
}
add(1); //NaN
```
>形参少于实参：形参按顺序接收实参的值，多余的实参显示不出来*不代表没有了*
```javascript
function add(a, b, c) {
	console.log(a + b + c);
}
add(1,2,3,4,5,6,7); //6
```
>arguments：这是一个类数组，作用能保存函数调用时传入的所有实参
```javascript
function add(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(arguments);
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
	console.log(arguments[3]);

	console.log(arguments[0] == a); //true
	console.log(arguments.length);
	//console.log(arguments.push(9)); //报错，类数组不是数组
}
add(1, 2, 3, 4, 5, 6, 7, 8);
```

调用有返回值的函数：函数名(); 这个时候调用的地方会得到一个返回来的值，这个值我们可以随便使用

#### 第二种方式：var str = function(){}
这也是定义函数的一种方式
定义变量，变量的值为一个函数
需要注意，这种方式定义的函数function后没有函数名，就是写函数名也调用不到这个函数，想调用时调用变量名();
```javascript
var str = function() {
	console.log('字符串');
}
str();
```

### 2.变量名和函数提升机制

#### 1.变量名的提升机制
在程序执行时，js会把所有变量名提升到当前作用域的前面
```javascript
console.log(str); //undefined
console.log(555);
console.log(333);
var str = '字符串';
console.log(str); //'字符串'

function add() {
	console.log(num); //undefined
	var num = 12;
	console.log(num); //12
}
add();
```

#### 2.函数的提升机制
通过function定义的函数，在程序执行的时候会把函数以及功能提升到当前作用域*最前面*
```javascript
fun1();
function fun1() {
	console.log('function定义的函数');
}
```
变量名和函数名重名的时候处理情况
```javascript
fun1(); //function定义的函数
function fun1() {
	console.log('function定义的函数');
}
var fun1 = function() {
	console.log('函数表达式定义的函数');
}
fun1(); //函数表达式定义的函数
```

#### 3.混合使用时
函数名优先于变量名执行
```javascript
function fn1() {
	console.log(11111);
}
var fn1 = function() {
	console.log(22222);
};
console.log(fn1);

/*相当于
	function fn1() {
		console.log(11111);
	}
	var fn1 = undefined;
	fn1 = function() {
		console.log(22222);
	};
	console.log(fn1);
*/
```

```javascript
console.log(fn1);
function fn1() {
	console.log(11111);
}
var fn1 = function() {
	console.log(22222);
};

/*相当于
	function fn1() {
		console.log(11111);
	}
	var fn1 = undefined;
	fn1 = function() {
		console.log(22222);
	};
	console.log(fn1);
*/
```

### 3.作用域和作用域链
分为变量的作用域和函数的作用域

#### 1.变量的作用域和作用域链
变量的作用域
>就是指变量的有效作用范围，分为全局变量和局部变量，*分全局和局部的标准是函数*，函数是js中唯一一个能限定作用域的功能
>>局部变量：写在函数内部的变量。只能在当前函数内部使用
>>全局变量：写在函数外部的变量。在任何地方都能用，经常用来保存标识（比如轮播图中当前显示的图片顺序）
```javascript
var num = 12; //全局变量，在任何地方都能用
function add() {
	console.log(num); //undefined
	var num = 14; //局部变量，只能在当前函数内部使用
	console.log(num); //14
}
console.log(num); //12
add();
```

变量的作用域链
>变量在调用时会首先检查当前作用域内是否有该变量，如果当前作用域范围内有这个变量，则调用这个变量的值，如果没有，就向上一层找，上一层没有再上一层，直到全局变量，如果全局变量都没有，就报错；有就使用
```javascript
var str = 12;

function add1() {
	console.log(str); //undefined  
	var str = 13;

	function add2() {
		console.log(str); //undefined 
		var str = 14;

		function add3() {
			console.log(str); //14
		}
		add3();
	}
	add2();
}
add1();
```

#### 2.函数的作用域和作用域链
函数的作用域：指函数调用时只能在它的有效作用域范围内
```javascript
function fn1() {
	console.log(1111);

	function fn2() {
		console.log(2222);
	}
	fn2();
}
fn1();
fn2();
```
函数的作用域链
函数的作用域链其实就是闭包

### 4.闭包
闭包：是函数天生就具备的一个特性，这个特性的功能是能记住它定义时的作用域
闭包不是人为设置的，只要是函数，就具备闭包特性
```javascript
function add(){
	a = 12;
	return function(){
		console.log(++a);
	};
}
var num1 = add();
console.log(num1); //function(){console.log(++a);}
num1(); //13


var arr = [];
for(i = 0; i < 10; i++){
	arr[i] = function(){
		console.log(i);
	};
}
console.log(arr);
arr[0](); //10
arr[3](); //10
```

### 5.IIFE（立即执行函数表达式）
IIFE：它是函数表达式
>作用：函数定义完成后就立即执行
正常的函数（通过function定义的函数），它是不能直接加小括号调用的，必须函数名()这种方式调用
立即执行函数的意思就是需要执行，执行就需要加小括号()，所以，需要把正常的函数变成函数表达式
把正常函数变成函数表达式的方法
>加数学符号，最常用的是加小括号的这种方式
```javascript
+function add1(){
	console.log(1);
}();
!function add1(){
	console.log(2);
}();
(function add1(){
	console.log(3);
})();
```
>立即执行函数也可以传参
```javascript
(function add1(a){
	console.log(2+a);
})(1);

(function(a) {  //函数名没什么用了 ，一般就不写了
	console.log(2+a);
})(1);
```

以后写的代码要用立即执行函数包裹一下，这样做的好处是不会造成变量污染
利用IIFE和闭包实现记住点击的位置（轮播图）

*IIFE配合闭包使用*
```javascript
var arr = [];
for(i = 0; i < 10; i++){
	(function(i) {
		arr[i] = function() {
			console.log(i);
		}
	})(i);
}
//想要的结果：arr[0]输出结果是0，arr[3]输出结果是3
console.log(arr); 
```

```javascript
		//点哪个按钮就显示哪个按钮上面的数字
		var aLi = document.getElementsByTagName('li');
		console.log(aLi);
		//需要给每个li添加点击事件，功能点击的时候显示上面的数字
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].onclick = function() {
				console.log(this.innerHTML);
			}
		}

		//点击li是5个li中的顺序
		for (var j = 0; j < aLi.length; j++) {
			(function(k) {
				//onclick后是函数，所以产生闭包了，在点击调用函数时，函数会还找定义时的作用域，定义的j已经变成5了，所以结果都是5
				aLi[k].onclick = function() {
					console.log(k);
				}
			})(j);
		}
		//鼠标点击时才会触发函数
```
[实现](1.html)


### 6.函数递归
函数在函数内部调用自己
>斐波那契数列：1,1,2,3,5,8
>求第20个数是几
```javascript
//循环方法
var num1 = 1;
var num2 = 1;
var num3 = 0;
for (var i = 3; i <= 20; i++) {
	num3 = num1 + num2;
	num1 = num2;
	num2 = num3;
}
console.log(num3)

//递归方法
function digui(a) {
	if (a == 1 || a == 2) {
		return 1;
	} else {
		return digui(a - 1) + digui(a - 2);
	}
	var num = digui(3);
	console.log(num);
}
digui(20);
```


## 8.DOM
### 1.DOM是什么
Document Object Model 文档对象模型，指的就是写的HTML的页面
所有我们操作DOM，就是在操作文档对象
前端操作文档对象就是HTML

### 2.DOM树
就是指HTML文档的结构
平时操作DOM其实就是在操作DOM树节点
想操作DOM元素，第一步需要找到这个元素

### 3.DOM常用操作

查找元素的方法
1.通过ID查找元素
>document.getElementById(ID名);
>得到一个唯一的对象，因为ID是唯一的，*得到后是一个js对象*

2.通过标签查找元素
>document.getElementsByTagName(标签名);
>得到一个类数组，所有该标签的元素都在这个对象里面，*所有在使用的时候都要加下标*

3.通过类名查找元素
>document.getElementsByClassName
>得到一个类数组，所有该类名的元素都在这个对象里面，*所有在使用的时候都要加下标*
>>这个有兼容性，IE低版本的类名
```javascript
// 封装兼容IE低版本类名查找
var allBox = document.getElementsByClassName('box');

function classQuery(cName) {
	//定义一个空数组，用来保存符合条件的元素
	var arr = [];
	//找到所有的标签
	var allTag = document.getElementsByTagName('*');
	console.log(allTag);
	//判断类名是否符合标准
	for (var i = 0; i < allTag.length; i++)
} {
	if (allTag[i].className == cName) {
		arr.push(allTag[i]);
	}
}
return arr;
}
console.log(classQuery('box'));
```

操作HTML
>获取内容
>>innerHTML
>>innerText
>>value

>修改内容
>>元素.innerHTML = '新的值';

操作属性
>操作标签自己的属性
>>获取：元素.属性
>>设置：元素.value = '新的值';

>操作自定义属性
>>获取；元素.getAttribute('属性名');
>>设置；元素.setAttribute('属性名','属性值');
>>删除：元素.removeAttribute('属性名')

[百度换肤](2.html)
[轮播图](3.html)

操作样式
>就是操作CSS
>>修改CSS样式，不需要注意什么，*因为修改完的样式会直接添加到行内*

>获取CSS样式有兼容性
>>获取行内样式，没有兼容性
>>获取内部样式或外部样式表的CSS样式
>>>这个时候通过：元素.style.css样式，（css样式如果是复合属性写的时候需要第二个单词首字母大写）不管高级浏览器还是IE低版本浏览器都获取不到
>>>这个时候需要专门的方法来获取
>>>获取计算后的样式
```javascript
//高级浏览器的方法：
window.getComputedStyle('元素')['属性'];
//IE低版本的方法：
元素.currentStyle['属性'];

//封装
(function(window) {
	function getStyle(ele, attr) {
		//判断当前浏览器识别哪种获取方法
		if (window.getComputedStyle) {
			//高级浏览器
			return window.getComputedStyle(ele)[attr];
		} else {
			//IE低版本浏览器
			return ele.currentStyle[attr];
		}
	}
	//把该方法绑定到window上
	window.getStyle = getStyle;
})(window);
```

## 9.DOM节点关系
### 1.子节点

原生js中的子节点：元素.childNodes
返回文本节点+元素节点+注释节点
>有兼容性：
>>高级浏览器会把回车、换行、空格当做一个子节点，而IE低版本浏览器不会这样计算
```HTML
<ul id="list">
	<li class="active">这是li</li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```
```javascript
var oList = document.getElementById('list');
alert(oList.childNodes.length);  //高级浏览器弹出11  IE低版本浏览器弹出5
```
>>文本是节点，属性也是节点、注释也是节点

获取纯元素子节点方法：children：能获取元素的子节点，同时没有兼容性，找到的就是元素节点
```javascript
alert(oList.children.length);
```

节点类型 nodeType
>元素节点    	就是指标签         		1
>文本节点    	写的文字           		3
>注释节点    	&lt;!-- 注释 --&gt;		8
>document节点	HTML文档节点       		9

节点的值 nodeValue
能修改文本节点中的值，也能获取文本节点中的值，无法修改元素节点的值

### 2.父节点
原生js中的表示方法：parentNode
该方法只能找到它自己的父亲，找不到祖先元素，如果要找，需要再调用parentNode方法

### 3.兄弟节点
原生js中只有找当前元素的上一个兄弟元素或找下一个兄弟元素
上一个：previousSibling
下一个：nextSibling
```javascript
//封装的获取当前元素的兄弟节点方法
(function() {
	window.allSibling = function(ele) {
		//用while来实现次数不定的循环
		/*
		var n = ele;
		var m = ele;
		while(n = n.nextSibing){
			console.log(n);
		}
		console.log(n); //null
		while(m = m.nextSibing){
			console.log(m);
		}
		*/
		var n = ele;
		var arr = []
		for (i = 0; i < n.parentNode.children.length; id++) {
			if (n.parentNode.children[i] != n) {
				console.log(n.parentNode.children[i])
			}
		}
	}
})()
```

### 4.轮播图
[轮播图](4.html)

在实现的过程中有两个技巧
```HTML
<ul class="list1">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
<ul class="list2">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```
>第一个是对应关系
>>操作当前元素，能改变相对应的元素
```javascript
//找list1中的li
var aList_li = document.getElementsByClassName('list1')[0].getElementsByTagName('li');
var aList2_li = document.getElementsByClassName('list2')[0].getElementsByTagName('li');
//对应操作
for (i = 0; i < aList_li.length; i++) {
	(function(k) {
		aList_li[k].onclick = function() {
			//点谁谁自己变颜色
			this.style.background = 'red';
			//让对应的li变颜色
			aList2_li[k].style.background = 'red';
		}
	})(i)
}
```

>第二个是排他操作
>>除了他自己能有这个状态，其他所有元素都不能有这个状态
```javascript
//排他操作
//找list1中的li
var aList_li = document.getElementsByClassName('list1')[0].getElementsByTagName('li');
var aList2_li = document.getElementsByClassName('list2')[0].getElementsByTagName('li');
for (i = aList_li.length - 1; i >= 0; i--) {
	//排他操作
	(function(k) {
		aList_li[k].onclick = function() {
			//把所有颜色恢复到默认颜色
			for (j = aList2_li.length - 1; j >= 0; j--) {
				aList_li[j].style.background = '#cccccc';
				aList2_li[j].style.background = '#cccccc';
			}
			//自己变颜色
			this.style.background = 'orange';
			//当前活动的元素添加样式
			aList2_li[k].style.background = 'orange';
		}
	})(i)
}
```

## 10.DOM结构操作
常用的改变DOM结构的操作：增、删、改、克隆

### 1.增
就是向页面中添加新的标签
步骤
>第一步：创建新标签
>>方法
>>第一种
>>>创建标签节点document.createElement('标签');
>>>创建文本节点：document.createTextNode('文本');  *平时不用它*
>>>创建的标签节点和文本节点要添加到页面，都需要“上树”
>>>平时用的时候，给标签节点添加内容用：innerHTML='值'；

>>第二种
>>>字符串方法
>>>创建元素时用字符串拼接
>>>上树时不用appendChild  insertBefore这两个方法，用innerHTML
>>>好处和缺点
>>>>好处：写法特别简单，和正常写HTML页面没区别
>>>>缺点：第一个是创建出来的不是DOM元素，只是字符串，不具备DOM任何操作
>>>>第二个是添加时会把目标元素中的所有内容都替换了

>第二步：上树
>>第一种：添加到目标节点的最后面： 目标节点.appendChild('创建的节点');
>>第二种：添加到目标节点的指定位置：目标节点.insertBefore('新节点','旧节点');
```HTML
<ul id="list">
	<li>000001</li>
	<li>000002</li>
	<li id="li3">000003</li>
	<li>000004</li>
	<li>000005</li>
</ul>
```
```javascript
//找到目标节点
var oList = document.getElementById('list');
//创建一个新节点
var oLi = document.createElement('li');
var oText = document.createTextNode('新的li标签');
//把文字添加到新创建的节点中
OLi.appendChild(oText);
//把新创建的li添加到ul中
olist.appendChild(oLi);

//把新创建的li添加到000003前面
//创建一个新节点
var oLi1 = document.createElement('li');
var oText1 = document.createTextNode('新的li标签2222');
//把文字添加到新创建的节点中
OLi1.appendChild(oText1);
//找到li3
var oLi3 = document.getElementById('li3');
//上树
oList.insertBefore(oLi1,oLi3);
```
说明：通过*DOM的创建元素方法*：创建的节点是一个完整的DOM对象，所以可以给 创建的这个DOM元素添加任何DOM属性和方法
可以添加class属性、可以添加click事件
[微博实例](5.html)

appendChild

```javascript
var btn = document.getElementById('btn');
var list1 = document.getElementsByClassName('list1')[0];
var list2 = document.getElementsByClassName('list2')[0];
var list1_li = list1.getElementsByTagName('li');
var list2_li = list2.getElementsByTagName('li');

btn.onclick = function(){
	list1.appendChild(list2.children[0]);
}
```
[举个栗子](6.html)

### 2.删
元素节点.removeChild(子节点);
```HTML
<ul>
	<li id="li1"></li>
	<li id="li2"></li>
	<li id="li3"></li>
</ul>
```
```javascript
var ul = document.getElementsByTagName('ul')[0];
var li2 = document.getElementById('li2');
ul.removeChild(li2);
```

### 3.改
目标元素节点.replaceChild('新节点','旧节点')
```javascript
var ul = document.getElementsByTagName('ul')[0];
var li2 = document.getElementById('li2');
//创建一个div
var oDiv = document.createElement('div');
ul.replaceChild(oDiv,li2);
```

### 4.克隆（用的多）
目标元素.cloneNode();
小括号中可以有一个参数，这个参数是一个布尔值，true的时候表示深度克隆，会克隆元素的内容，但不能克隆方法。如果不写或写false表示只会克隆元素，不克隆元素
```javascript
var oDiv = document.getElementsByTagName('div')[0];
oDiv.onclick = function(){
	console.log('我是原先div的点击事件');
}
var newDiv = oDiv.cloneNode(true);
document.body.appendChild(newDiv);
```

## 11.事件
事件就是指咱们平时的鼠标事件和键盘事件
常用的鼠标事件：
>click 点击事件
>dblclick 双击事件
>mouseenter / mouseover 鼠标经过事件
>mouseleave / mouseout 鼠标经过事件
>mousemove 鼠标移动事件
>mousedown 鼠标按下事件
>mouseup 鼠标抬起事件
>focus 鼠标获取焦点事件
>blur 鼠标失去焦点事件

常用的键盘事件
>keydown 键盘按下事件
>keyup 键盘抬起事件
>keypress 键盘长按事件

## 12.事件流
浏览器解析事件的顺序就是指事件流
事件流：浏览器在执行的时候，先从外向内一层一层找，找到最里面（*你操作这个元素*）后，会再从当前这个元素，一层一层向外找
>从外向里找的过程叫 事件捕获
>从里向外找的过程叫 事件冒泡
*浏览器在执行的时候是先捕获后冒泡*

### DOM0级操作
DOM0级操作：
>设置事件：元素.onxx = function(){}
>解除事件：元素.onXX = null;
DOM0级操作只会响应事件冒泡（但浏览器在执行时有事件捕获也有事件冒泡）
```HTML
<div id="box" style="width: 500px;height: 500px;background: #cccccc;">
	<div id="list" style="width: 300px;height: 300px;background: orange;">
		<div id="bbox" style="width: 100px;height: 100px;background: lightgreen;"></div>
	</div>
</div>
```
```javascript
//给三个div添加DOM0级点击事件
var box = document.getElementById('box');
var list = document.getElementById('list');
var bbox = document.getElementById('bbox');
box.onclick = function(){
	alert('我是最外面的div');
}
list.onclick = function(){
	alert('我是第二层div');
}
bboc.onclick = function(){
	alert('我是最里面的div');
}
```

### DOM2级事件
有兼容性
#### 高级浏览器的DOM2级事件
元素.addEventListener('事件类型','触发的函数','捕获或冒泡')
>true：捕获
>false：冒泡
```javascript
//捕获
var box = document.getElementById('box');
var list = document.getElementById('list');
var bbox = document.getElementById('bbox');
box.addEventListener('click',function(){alert('我是最外面的div')},true);
list.addEventListener('click',function(){alert('我是第二层div')},true);
bbox.addEventListener('click',function(){alert('我是最里面的div')},true);
//冒泡
box.addEventListener('click',function(){alert('我是最外面的div')},false);
list.addEventListener('click',function(){alert('我是第二层div')},false);
bbox.addEventListener('click',function(){alert('我是最里面的div')},false);
```

*如果操作元素是最里面的或页面中就这一个元素时，捕获不会优先于冒泡执行，执行顺序按书写顺序*

```javascript
var box = document.getElementById('box');
box.addEventListener('click',function(){alert('捕获')},false);
box.addEventListener('click',function(){alert('冒泡')},true);
```

#### 高级浏览器DOM2级事件的解除事件
元素.removeEventListener('事件类型',function(){},捕获或者冒泡);
第二个参数：需要一个有名字的函数
```javascript
var oBox = document.getElementById('box');
var btn = document.getElementById('btn');
function str(){
	console.log('捕获阶段');
}
oBox.addEventListener('click',str,true);
oBox.addEventListener('click',function(){
	console.log('冒泡阶段');
});
//解除DOM2级事件
btn.onclick = function(){
	obox.removeEventListener('click',str,true);
}
```

#### IE低版本浏览器DOM2级事件
注意：*IE低版本DOM2级事件只能监听冒泡阶段的事件*
元素.attachEvent('事件类型',function(){});
```javascript
var box = document.getElementById('box');
var list = document.getElementById('list');
var bbox = document.getElementById('bbox');
box.attachEvent('onclick',function(){
	console.log('最外层div');
})
list.attachEvent('onclick',function(){
	console.log('中间层div');
})
bbox.attachEvent('onclick',function(){
	console.log('最里层div');
})
```

#### IE低版本DOM2级解除事件
元素.detachEvent('事件类型',函数名);

```javascript
//封装绑定DOM事件  包括DOM0  DOM2
(window.addEvent = function(ele, type, callBack, bool) {
	if (window.addEventListener) {
		//高级浏览器
		ele.addEventListener(type, callBack, bool);
	} else if (window.attachEvent) {
		//IE低版本DOM2级事件
		return ele.attachEvent('on' + type, callBack);
	} else {
		//DOM0级事件
		return ele['on' + type] = callBack;
	}
})();
```

#### 阻止事件冒泡
有兼容性
高级浏览器：event.stopPropagation();
IE低版本浏览器：event.cancelBubble = true;

```javascript
var box = document.getElementById('box');
var list = document.getElementById('list');
box.onclick = function(){
	console.log('我是box');
}
list.onclick = function(e){
	e.stopPropagation();
	console.log('我是list');
}
////////////////////////////////////////////
list.onclick = function(event){
	event = window.event;
	console.log('我是list');
	event.cancelBubble = true;
}
box.onclick = function(){
	console.log('我是box');
}
```

#### 阻止默认事件
有兼容性
高级浏览器：event.preventDefault();
IE低版本：event.returnValue = false;

```javascript
//阻止默认事件
var aLink = document.getElementsByTagName('a')[0];
//阻止它的超链接
aLink.onclick = function(e){
	e.preventDefault();
}
//////////////////////////////////////////////////
aLink.onclick = function(event){
	event = window.event;
	event.returnValue = false;
}
```

### IE低版本DOM2中的this
在IE低版本DOM2级事件中，事件不管是谁调用的，this都指向window

```javascript
var box = document.getElementById('box');
box.attachEvent('onclick',function(){
	console.log(this); //window
});
```

解决方法：用call或apply
这两个方法作用一模一样，都是能改变this的指向
```javascript
function newThis(){
	console.log(this.style.height);
}
var box = document.getElementById('box');
box.attachEvent('onclick',function(){
	newThis.call(box);
});

function newThis2(){
	console.log(this.random());
}
var box = document.getElementById('box');
box.attachEvent('onclick',function(){
	newThis2.call(Math);
});
////////////////////////////////////////////
box.addEventListener('click',function(){
	newThis2.call(Math);
});
```

## 13.事件对象
事件对象：就是事件触发时都会自动生成的一个对象，这个对象里保存了事件的信息
常用的信息：
>event.button  有三个返回值
>>高级浏览器：左键0中键1右键2
>>IE低版本：左键1中键4右键2
```javascript
document.body.onmousedown = function(e){
	e = e || window.event;
	console.log(e);
}
```

>clientX clientY 返回浏览器窗口中的x  y坐标（打开的谷歌浏览器窗口）
>offsetX offsetY 返回鼠标在*目标元素*中的x  y坐标（偏移的坐标，以目标元素的左上角为标准计算）
>screenX screenY 返回鼠标距离屏幕左上角的x  y坐标（就是指屏幕左上角为标准）
>pageX   pageY   返回鼠标距离页面左上角的x  y坐标（就是页面中的xy坐标）

拖拽
offsetParent 偏移参考元素
>有兼容性
>>高级浏览器：就看目标元素的父级或祖先级是否有定位，有定位就按就近原则执行，如果没有，那么就是body
>>IE6-IE7：首先看父级或祖先级元素是否有宽高，如果有就按就近原则执行，如果父级或祖先级都没宽高，这时看是否有定位，有定位就按就近原则；如果父级或祖先级没有宽高没有定位，这时才是body；如果自身有定位，则是HTML
>>IE8：同高级浏览器

offsetLeft 目标元素距离参考元素的水平偏移量
offsetTop 目标元素距离参考元素的垂直偏移量
>还有兼容性
>>高级浏览器和IE8：目标元素的外边框到参考元素的外边框
>>IE6-7：目标元素的外边框到参考圆度的内边框

计算鼠标在目标元素中的净位置：
[拖拽1](7.html)
[简单拖拽](8.html)
[复杂拖拽](9.html)

## 14.面向对象

### 1.this指针
this指针只能在事件中使用
>第一种情况：直接调用函数时的this，this指向window
```javascript
function add(){
	console.log(this);
}
add();//相当于window.add();  window
```
>第二种情况：函数绑定给对象使用，this指向调用它的这个元素
```javascript
box.onclick = function(){
	console.log(this); //box
}
```
>第三种情况：定时器中的this，指向window
```javascript
setTimeout(function(){
	console.log(this); //window
},500);
```
>第四种情况：对象中的this，指向当前对象
```javascript
var obj = {
	'name':'小明',
	'sayHello':function(){
		console.log(this);
	}
}
obj.sayHello();
```
>*定时器中调用对象的函数，this指向window*
```javascript
setTimeout(obj.sayHello,500); //window
```
>第五种情况：通过call apply调用，指向call apply指定的对象
>>call语法：函数.call('设置this指针指向',参数1,参数2,...)
>>>第一部分必写，它的作用就是改变this指针指向
>>>第二部分可选，写的时候表示传进来的参数

>>apply语法：函数.apply('设置this指针指向',[])
>>>第一部分必写，它的作用就是改变this指针指向
>>>第二部分可选，写的时候表示传进来的参数
```javascript
function five(){
	console.log(this);
}
five.call(document.getElementById('box'));
five.apply(new Date());
```

>>这两种方法设置的this指针可以用null，表示不改变当前的指向
```javascript
//正常Math求最大值的方法
console.log(Math.max(1,23,344,5,6,488));
//求最大值
var arr = [13,45,6847,78,5453,41354,76874,7,8979,3132,145,67];
console.log(Math.max.apply(null,arr));
```

### 2.构造函数
构造函数还是平时写的函数，只是调用时使用关键字new来调用，这是就能产生一个真正的东西
构造函数的额作用就是一个模型
（跑男节目：指定规则，设置环节）

new构造函数时：实例化
实例化：通过构造函数创建一个真正的事物，得到是一个对象
#### 1.new关键字
new关键字能调用函数，在调用函数时还能送你个东西，this

```javascript
function add(){
	this.name = '小明';
}
add();
console.log(window.name); //小明
//////////////////////////上下对比/////////////////////////
function add2(){
	this.name = '小明';
}
new add2();
console.log(window.name); //空
```

送你这个东西默认执行4步
>第一步，调用new的时候，在函数内创建一个this
>第二部，把this绑定到函数上，所有通过this.xxx最终绑定到偷偷创建的this上
>第三步，把数据整理成一个对象
>第四步，把整个对象return出来
>所以我们在写构造函数时，需要把属性和方法写成this.xxx
```javascript
function add(){ //this
	this.name = '小明';
	this.age = '12';
	this.sex = '男';
}
/*
	{
		'name':'小明',
		'age':'12',
		'sex':'男'
	}
*/
var str = new add();
console.log(str.name);
```

对象的数据类型是引用类型的，变量保存的都是地址，所以变量里值相同的对象，不一定地址相同
```javascript
var str = new add();
var str2 =new add();
console.log(str == str2); //false
```

#### 2.函数中有return
函数中如果自己有return，这个时候通过new调用函数，返回值是谁？
>就是看return后的数据类型
>>如果是基本数据类型，则返回偷偷创建的this
>>如果是引用类型，则返回这个引用类型
```javascript
function add(){
	this.name = '小明';
	this.age = '38';
	this.sex = '男';
	//基本类型值
	//return 2; // this
	//引用类型值
	//return [1,2,3,4,5]; //[1,2,3,4,5]
}
var str = new add();
console.log(str);
```

#### 3.函数能传参数
通过new调用函数时就能更灵活的创建对象
```javascript
function add(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
var xiaoMing =new add('小明',38,'男');
var snoopy =new add('史努比',2,'母');
console.log(xiaoMing);
console.log(snoopy);
```

以上三点综合到一块有个名字：*构造函数*
平时写构造函数的时候，大家都有一个习惯，把构造函数的函数名首字母大写
```javascript
function Add(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
var xiaoMing =new Add('小明',38,'男');
var snoopy =new Add('史努比',2,'母');
console.log(xiaoMing);
console.log(snoopy);
```

#### 4.给构造函数添加方法
通过this绑定方法，当new的时候，这个方法就会被绑定到return出来的，所以可以直接调用
```javascript
function Fun(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	//如果this后是函数，就叫方法
	this.sayHello = function(){
		console.log('大家好，我叫'+'this.name'+'...');
	}
}
var xiaoMing = new Fun('小明',38,男);
xiaoMing.sayHello();
var snoopy = new Fun('史努比',2,'母');
snoopy.sayHello();
```
*但是，平时方法都不写在构造函数里面。方法都写在原型上*

#### 5.原型
每个函数都会有一个原型对象，这个原型对象是绑定在这个函数上的，有个名字叫prototype，这个prototype默认指向当前函数
如果这个函数是构造函数，当你new的时候会创建一个东西叫__proto__，这个__proto__会指向构造函数的prototype
![img2](/review_js/images/img2.png "img2")

```javascript
function add(){
	console.log('111');
}
console.log(add.prototype);
/////////////////////////////////////////////////////////////////
function Fun(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
function Fun(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Fun.prototype.sayHello = function() {
	console.log('大家好，我叫' + this.name);
}
var xiaoMing = new Fun('小明', 12, '男');
xiaoMing.sayHello();
var snoopy = new Fun('史努比', 2, '母');
snoopy.sayHello();
/*
console.log(xiaoMing.__proto__ === Fun.prototype); //true
console.log(snoopy.__proto__ === Fun.prototype); //true
console.log(snoopy.__proto__ === xiaoMing.__proto__); //true
*/
```
小明、史努比都是通过Fun构造函数new出来的，这个时候小白、史努比叫Fun的实例
构造函数：抽象化的模型
实例：就是一个具体的事物

*一定要区分方法是绑定在原型上还是绑定在构造函数上*
>绑定在构造函数上的方法，只有构造函数自己能用
>绑定在原型（prototype）上的，实例化出来的都能调用
```javascript
function Fun(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Fun.teacher = '老师';
Fun.prototype.teacher = '隔壁老王';
//实例化一个人
var xiaoMing = new Fun('小明',18,'男');
console.log(xiaoMing.teacher); //隔壁老王
////////////////////////////////////////////////
function Fun(name){
	this.name = name;
	sayHello = function(){
		console.log(1111);
	}
}
Fun.sayHello = function(){
	console.log(2222);
}
Fun.prototype.sayHello = function(){
	console.log(3333);
}
var xiaoMing = new Fun('小明');
xiaoMing.sayHello = function(){
	console.log(4444);
}

Fun(); //空 调用函数，this指向window，这时window上就会多sayHello方法
sayHello(); //1111 这是调用全局的sayHello方法
Fun.sayHello(); //2222
Fun().sayHello(); //报错 Fun()调用后没有返回值，剩下一个undefined
new Fun().sayHello(); //3333 new Fun()这一步就相当于实例化，又调用sayHello方法，从原型链上找
new Fun.sayHello(); //2222 相当于直接调用Fun.sayHello();
//////////////////////////////////////////////////////////////////////////
function Fun(name){
	this.name = name;
	sayHello = function(){
		console.log(1111);
	}
}
Fun.sayHello = function(){
	console.log(2222);
}
Fun.prototype.sayHello = function(){
	console.log(3333);
}
function sayHello(){
	console.log(4444);
}
var sayHello = function(){
	console.log(5555);
}
sayHello();
Fun()sayHello();
new Fun().sayHello();
```

内置构造函数之间的关系
内置的构造函数有：function object array ExpReg (引用类型) number string boolean(基本类型)
他们都有自己的构造函数
>*真理*：
```javascript
//1.
var a = new A;
a.__proto__ === A.prototype;
```
2.js中所有的内置构造函数全部是function这个构造函数new出来的
3.所有的对象的object new出来的
4.function也是一个对象，所有function也是object new出来的

#### 6.原型链
原型链就是调用属性或方法时，查找该属性或方法的链条
>在调用真正实例时，首先会查找自己身上是否有该方法，如果有就调用自己的方法
>如果自己身上没有该方法，它会沿着__proto__去找构造函数的原型上是否有该方法，如果有就使用
>如果没有，会继续向上找，直到object.prototype
>找到就调用，找不到就返回undefined

![img3](/review_js/images/img3.png "img3")
记着三点：
>1.是函数就是prototype
>2.函数new以后的实例，这个实例的__proto__会指向这个函数的prototype
>所有对象的__proto__都会指向Object。prototype

```javascript
function Fun(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Fun.prototype.sayHello = function() {
	console.log('我叫' + this.name);
}
//实例化
var dengchao = new Fun('邓超', 48, '大叔');
var lichen = new Fun('李晨', 45, '大叔');
dengchao.sayHello = function() {
	console.log(111);
}
dengchao.sayHello(); //111
lichen.sayHello(); //我叫李晨
////////////////////////////////////////////////////
function Fun(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
//实例化
var dengchao = new Fun('邓超', 48, '大叔');
var lichen = new Fun('李晨', 45, '大叔');
dengchao.sayHello = function() {
	console.log(111);
}
dengchao.sayHello(); //111
console.log(lichen.sayHello); //undefined
lichen.sayHello(); //报错
////////////////////////////////////////////////////
Object.prototype.sayHello = function(){
	console.log(333);
}
function Fun(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
//实例化
var dengchao = new Fun('邓超', 48, '大叔');
var lichen = new Fun('李晨', 45, '大叔');
dengchao.sayHello = function() {
	console.log(111);
}
dengchao.sayHello(); //111
lichen.sayHello(); //333
```

```javascript
//Function 是所有函数的终点
Function.prototype.sayHello = function() {
	console.log('我是Function的原型中的方法');
}

//构造函数，它是终极Function new出来的额
function Fun() {}

//Fun.prototype只能影响通过new Fun的实例，所以不会影响到Function.prototype
Fun.prototype.sayHello = function() {
	console.log('我是Fun构造函数原型上的方法');
}
Fun.sayHello();
var xiaoMing = new Fun();
xiaoMing.sayHello(); //我是Fun上的
```


### 3.constructor
constructor是prototype这个对象的一个属性，作用指它是谁的原型
```javascript
function People(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
//给People添加一个原型方法
People.prototype.sayHello = function() {
	console.log('我叫' + this.name + ',' + this.age + ',' + this.sex);
}
//创建实例
var xiaoMing = new People('小明', 18, '男');
console.log(People.prototype.constructor === Array); //false
console.log(People.prototype.constructor === People); //true
console.log(Array.prototype.constructor === Array); //true
```

### 4.查找属性归属
查找属性归属：查找当前这个元素是否有指定的属性

#### 1.点方法
对象.方法或属性
>这个方法有弊端，当调用时返回undefined时，就分不清到底是对象中没有这个属性还是对象属性值就是undefined
```javascript
var obj = {
	'a' = undefined,
	'b' = true
}
console.log(obj.b); //true
console.log(obj.a); //undefined  这是因为对象没有这个属性
console.log(obj.xx); //undefined  这是因为对象的属性值就是undefined
```

#### 2.instanceof方法
A instance B  检测A是否是B的实例
instance of  这个实例是谁new出来的，会通过原型链查找
```javascript
function People(){}
//实例化
var xiaoMing = new People();
console.log(xiaoMing instanceof People); //true
console.log(xiaoMing instanceof Object); //true

var obj = {};
console.log(obj instanceof Object);
```

```javascript
var A = function() {};
A.prototype = {};
var B = {};
console.log(A.constructor === Function); //true
console.log(B.constructor === Object); //true

var a = new A();
A.prototype = {}; //空对象
var b = new A();
b.constructor = A.constructor; //Function
console.log(a.constructor == A); //false
console.log(a.constructor == b.constructor); //false
console.log(a instanceof A); //false
console.log(b instanceof A); //true
//a.constructor == Object
//b.constructor ==Function
```

#### 3.hasOwnProperty()方法
这个只会查找当前prototype上是否有，不会进行原型链查找
对象.hasOwnProperty('属性');
```javascript
Object.prototype.d = 4;
var obj = {
	'a': 1,
	'b': 2,
	'c': 3
};
console.log(obj.hasOwnproperty('a')); //true
console.log(obj.hasOwnproperty('b')); //true
console.log(obj.hasOwnproperty('c')); //true
console.log(obj.hasOwnproperty('d')); //false
```

#### 4.in方法
属性 in 对象
>判断这个对象上是否有该属性，会通过原型链查找

```javascript
Object.prototype.d = 4;
var obj = {
	'a': 1,
	'b': 2,
	'c': 3,
}
console.log('a' in obj); //true
console.log('b' in obj); //true
console.log('c' in obj); //true
console.log('d' in obj); //true
console.log('e' in obj); //false
```

for-in遍历
>主要的设计目的是为了遍历对象
for (var i in 对象){
	console.log(i); //键名
	console.log(对象[i]); //键对应的值
}
```javascript
Object.prototype.d = 4;
var obj = {
	'a': 1,
	'b': 2,
	'c': 3,
}
for (var i in obj) {
	console.log(i); //a  b  c  d
	console.log(obj[i]); //1  2  3  4
}
```

### 5.继承
继承：js中的继承具备父级所有的功能，还具备父级没有的功能
>B继承A
>>B一定有A所有的功能
>>B扩大了A的功能
>>A.prototype = new B();
![img4](/review_js/images/img4.png "img4")

在js中继承只能通过原型来继承

小学生想继承人类的姓名、性别、年龄、吃饭、睡觉、走路
小学生.prototype = new Renlei('小明',8,'男');

```javascript
//人类有的属性和方法
function Renlei(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Renlei.prototype.chifan = function() {
	console.log('吃饭');
}
Renlei.prototype.shuijiao = function() {
	console.log('睡觉');
}
Renlei.prototype.zoulu = function() {
	console.log('走路');
}
//小学生 不直接把name age sex chifan shuijiao zoulu写到小学生类上
function Xiaoxuesheng() {

}
//继承父级
Xiaoxuesheng.prototype = new Renlei('小明', 8, '男');

Xiaoxuesheng.prototype.xiezuoye = function() {
	console.log('写作业');
}
Xiaoxuesheng.prototype.kaoshi = function() {
	console.log('考试');
}
Xiaoxuesheng.prototype.fudaoban = function() {
	console.log('辅导班');
}

var xiaoMing = new Xiaoxuesheng();
console.log(Xiaoxuesheng.prototype);
console.log(xiaoMing.name);
xiaoMing.chifan();
xiaoMing.kaoshi();
```
↓优化一下
```javascript
//人类有的属性和方法
function Renlei(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Renlei.prototype.chifan = function() {
	console.log('我叫' + this.name + '，吃饭');
}
Renlei.prototype.shuijiao = function() {
	console.log('我叫' + this.name + '，睡觉');
}
Renlei.prototype.zoulu = function() {
	console.log('我叫' + this.name + '，走路');
}
//小学生 不直接把name age sex chifan shuijiao zoulu写到小学生类上
function Xiaoxuesheng(name, age, sex) {
	//实现继承
	//把Renlei构造函数中的this.name this.age this.sex绑定到Xiaoxuesheng这个类的this上
	//使用call方法，把Renlei中this指针改变成Xiaoxueshseng中的this
	Renlei.call(this, name, age, sex);
}

Xiaoxuesheng.prototype = new Renlei();

Xiaoxuesheng.prototype.xiezuoye = function() {
	console.log('我叫' + this.name + '，写作业');
}
Xiaoxuesheng.prototype.kaoshi = function() {
	console.log('我叫' + this.name + '，考试');
}
Xiaoxuesheng.prototype.fudaoban = function() {
	console.log('我叫' + this.name + '，辅导班');
}

//实例小学生时再传入姓名年龄性别
var xiaoMing = new Xiaoxuesheng('小明', 8, '男');
var xiaoHong = new Xiaoxuesheng('小红', 9, '女');

console.log(xiaoMing.name);
xiaoMing.chifan();
xiaoMing.kaoshi();
xiaoHong.zoulu();
xiaoHong.fudaoban();
```

### 6.面向对象解决方法
解决大量功能相同的元素
面向对象的核心思想：自治
[红绿灯](10.html)
[行走的小女孩](11.html)

# jQuery

## 1.jQuery版本
>1.x.x版本：兼容IE6/7/8，这个文件比较大
>3.x.x版本：只兼容高版本浏览器，这个文件相对比较小

## 2.jQuery口号
write less, do more
>把所有的兼容问题都处理了，优化了DOM操作

## 3.体验一下

优化了选取元素
```javascript
$('li')
```
所有的操作都是批量操作
```javascript
$('li').css({'background':'pink'});
```
优化了DOM操作
```javascript
$('ul').append($('<li>新创建的li</li>'));
```
优化了动画操作
```javascript
$('li').animate({
	'width':100,
	'height':300
},2000);
```

[整体体验](12.html)

## 4.使用jQuery
jQuery就是一个封装好的库，就是一个js，和平时引入外部js一模一样
不要太依赖它，因为jQuery主要是优化了DOM操作。数据操作、业务逻辑都是需要自己写的
引入jQuery
>&lt;script src="jQuery的路径"&gt;&lt;/script&gt;

## 5.$()
$() ：是jQuery留给开发者能使用的唯二接口之一，想用jQuery里面的功能，只能通过$() jQuery()
```javascript
window.jQuery = window.$ = jQuery;
```

$() ：具备的功能，$()是jQuery所有功能的起点，$()自身具备的功能有：选择器功能、创建元素功能、转化功能等等

*$()操作的是字符串，所以用的时候一定要记得加引号*

*$()得到的是一个jQuery对象*，后面的属性和方法也需要使用jQuery提供的，不能直接使用原生js的

jQuery对象转化成原生js（除ID选择器外）
>jQuery对象[下标]  自动转成原生js
```javascript
$('.box1')[0].style.background = 'red';
```

原生js转成jQuery对象
>$(原生js);
```javascript
var allSpan = document.getElementsByTagName('span');
$(allSpan).css('background','green');
```

## 6.选择器功能
jQuery中的选择器功能非常强大：CSS2选择器功能、CSS3选择器的功能、自己创建的一部分功能

### 1.CSS2选择器功能
ID选择器、class选择器、标签选择器、子集选择器、后代选择器、交集并集选择器、统配选择器
用法：和CSS2操作一模一样
```javascript
//ID选择器
$('#ID')
//class选择器
$('.class名')
//子集选择器
$('父级>子集')
//标签选择器
$('标签名')
//后代选择器
$('父级 子集')
//并集
$('div,span')
//统配
$('*')
```

[CSS2选择器](13.html)

### 2.CSS3选择器
:first-child  选取子集中的第一个
:last-child  选取子集中的最后一个
:nth-child(1)  下标从1开始，选取子集元素中对应数字的对应子集元素，如果是指定元素，则有效，如果不是指定元素，则无效
:nth-of-type(1)  下标从1开始，只看指定元素在子集中的排序，不管中间是否有其他元素

[CSS3选择器](14.html)

### 3.jQuery封装的选择器
:odd  奇数行
:even  偶数行
:eq(下标)  选择子集中指定的一个元素，下标从0开始
.eq(下标)  可以当成jQuery的一个方法
>eq()方法得到是子集，加下标时，这个下标是整个子集的下标

:lt(数字)  子集中小于数字的元素
:gt(数字)  子集中大于数字的元素
:not()  排除指定的这个

[jQuery封装的选择器](15.html)

### 4.jQuery表单快捷操作
:input  选取所有的input
:text  选取type="text" input框
:button  选取type="button" input框
:checkbox  选取type="checkbox" input框
:radio  选取type="radio" input框
:password  选取type="password" input框
:email  选取type="email" input框
:file  选取type="file" input框
:tel  选取type="tel" input框
:disabled  选取所有有disabled这个属性的input框
:checked  选取checkBox radio选中的input框
:selected  选取下拉框中默认选中的值

[jQuery表单快捷操作](16.html)

## 7.jQuery常用操作
jQuery的所有操作都是通过 点语法 调用的，而且调用后还会返回当前对象，还可以继续调用其他方法
### 1.获取和修改CSS样式
获取：jQuery对象.css('属性');
设置
>jQuery对象.css('属性','值')
>jQuery对象.css({
	'键名1': '值1',
	'键名2': '值2'
 });

```javascript
$('#box').css({
	'width': 500,
	'height': 20,
	'border': '1px solid #cccccc'
}).html('连续点语法');
//获取box的background
console.log($('#box').css('background'));
```
[获取和修改CSS样式](17.html)

### 2.获取和设置元素里的值
#### 1.获取类似div这种标签中的值
获取：jQuery对象.html();
>原生js：对象.innerHTML

设置：jQuery对象.html('内容');
>原生js：对象.innerHTML = '新内容';

#### 2.获取input中的值
获取：jQuery对象.val();
>原生js：对象.value;

设置：jQuery对象.val('内容');
>原生js：对象.value = '新内容';

```javascript
//获取和设置div中的内容
console.log($('div').html());
$('div').html('jQuery修改div中的内容');
//获取和设置input中的内容
console.log($(':text').val());
$('input').val('新设置的内容')
```
[获取元素里的值](18.html)

### 3.获取和设置属性
获取属性：jQuery对象.attr('属性名');
>获取时返回第一个

设置属性：jQuery对象.attr('属性名','值');
>设置的时候批量操作

移除属性：jQuery对象.removeAttr('属性');
[获取和设置属性](18.html)

### 4.增加和移除class名
增加类名：jQuery对象.addClass('新增的类名');
>给属性class中，添加新的属性值

移除类名：jQuery对象.removeClass('类名');
>把属性class中指定的类名删除

切换类名：jQuery对象.toggleClass('类名');
>该元素上有指定的类名则删除，没有则添加

[增加和移除class名](19.html)

## 8.简单动画
### 1.简单的显示隐藏
show()  显示
hide()  隐藏
>如果小括号中不加参数，瞬间显示隐藏
>可以加参数，时间
>>直接写数字，单位为ms，
>>也可以写指定单词 fast slow

### 2.卷动显示卷动隐藏
显示：slideDown()
隐藏：slideUp()
切换：slideToggle()
>小括号中不加参数，有默认动画执行时间（400ms）
>小括号中可以自己写动画执行市场，写数字（ms）或单词（fast slow）

### 3.淡入淡出
淡入：fadeIn()
>默认透明度从0到1

淡出：fadeOut()
>默认透明度从1到0

切换：fadeToggle()
>显示时就淡出，隐藏时就淡入

改变透明度：fadeTo()
>需要动画时间
>这里改变透明度后会影响上面的淡入淡出效果

[简单动画](20.html)
[简单淡入淡出轮播图](21.html)

[案例](22.html)

## 9.jQuery节点关系
### 1.自己
$(this)
### 2.父级元素
当前对象.parent();
>找到的是当前元素的亲生父亲

### 3.祖先级元素
当前对象.parents();
>找到所有祖先级元素（包括父级）
>小括号中可以添加筛选元素，得到筛选出来的结果

### 4.子级元素
当前对象.children();
>找到所有的子集元素（不包括后代）
>小括号中也可以添加筛选条件，得到筛选出来的结果

### 5.后代元素
当前对象.find('条件')
>*这个方法必须添加筛选条件，得到指定的后代元素*

### 6.兄弟元素
当前对象.siblings();
>找到当前对象的所有兄弟元素
>小括号中可以加筛选条件，得到筛选出来的结果

[jQuery节点关系](23.html)

## 10.jQuery事件
jQuery中给封装好的事件，调用jQuery中的事件，前面需要是jQuery对象

### 1.一般方法
下面这些事件的用法是一样的
>单击事件
```javascript
jQuery对象.click(function(){
	点击事件功能
});
```
>双击事件
```javascript
dblclick(function(){});
```
>鼠标经过
```javascript
mouseover(function(){}); //有冒泡
mouseenter(function(){}); //没冒泡
```
>鼠标离开
```javascript
mouseout(function(){}); //有冒泡
mouseleave(function(){}); //没冒泡
```
>鼠标按下
```javascript
mousedown(function(){});
```
>鼠标抬起
```javascript
mouseup(function(){});
```
>鼠标移动
```javascript
mousemove(function(){});
```
>键盘按下
```javascript
keydown(function(){});
```
>键盘抬起
```javascript
keyup(function(){});
```
>键盘长按
```javascript
keypress(function(){});
```

### 2.jQuery封装的方法

#### 1.on()方法
事件绑定
```javascript
jQuery对象.on('事件类型',筛选,function(){功能})
```
>on()方法主要用于事件委托
>原理：把方法绑定给父级元素，然后在on()方法的第二个参数写真正需要绑定的事件的元素，第二个是可选的；如果不写，这就相当于给父级绑定了一个事件
>>写第二个参数，这时就是事件委托
>>不写第二个参数，这时就相当于给自己绑定了事件

#### 2.bind()方法
同时绑定多个方法
```javascript
jQuery对象.bind('事件类型1 事件类型2 事件类型3', function(){功能});
```
>事件类型1 事件类型2 事件类型3同时具备后面的功能

#### 3.one()方法
```javascript
jQuery对象.one('事件类型', function(){功能})
```
>这个事件类型只会执行第一次

#### 4.hover()方法
```javascript
jQuery对象.hover(function(){鼠标进入功能}, function(){鼠标离开功能});
```
>鼠标进入目标元素和离开目标元素时触发
>相当于调用mouseenter()方法和mouseleave()方法

[jQuery封装的方法](24.html)

## 11.animate()高级动画
animate()是jQuery中的所有动画的基础，之前的基本动画都是用animate()实现的
```javascript
jQuery对象.animate(功能);
```

### 1.基本用法
```javascript
jQuery对象.animate({
	'键名1': '值1',
	'键名2': '值2'
},动画时间,回调函数);
```
>第一个参数必须是JSON格式
>第二个参数时动画时间，这里是动画执行完成需要的总时间，可以不写这个参数，默认400ms，格式为数字或单词
>回调函数，在前面动画执行完成后再调用的

### 2.操作属性
一般带单位的都能操作，还能操作透明度，能操作border-radius

特别记忆不能操作的属性：
>不能操作的配镜图片的大小，背景图片的位置
>CSS3中的高级动画

### 3.动画执行顺序
同一个元素有多个动画时，会形成动画队列
>先写的动画先执行，执行完后再执行后续动画

多个元素分别有动画
>异步执行，同时执行，互不影响

没有动画的效果会优先于有动画的效果

### 4.回调函数
回调函数，是动画中的第三个参数，是一个可选参数，写的时候，该函数会在前面动画执行完成后调用
*简单动画show hide fadeIn slideDown等animate封装的都可以添加回调函数*

### 5.延时方法
delay(时长)
```javascript
jQuery对象.delay(时长).animate()
```
让当前对象延时执行后面的内容

### 6.stop()方法
停止动画的作用，是处理动画队列问题的一种方法
```javascript
stop(参数1, 参数2);
```
两个参数都是布尔值
>参数1：后续动画是否执行，true，中断后续动画执行；false，后续动画继续执行
>参数2：是否立即完成当前动画，true，立即完成当前动画；false，停止动画

### 7.is()方法
is()方法也是处理动画队列问题的一种方式
```javascript
jQuery对象.is(':animated');
```
判断当前对象是否在动画，如果是在动画，返回true
如果当前元素在动画，这时我们有两种处理情况
>第一种，不管新指示，继续干自己的
>第二种，立即执行新指示停止当前所有行为

### 8.each()方法
这个是jQuery给封装好的一个遍历的方法
能直接遍历jQuery类数组

[animate()高级动画](25.html)
[作业案例1](26.html)
[作业案例2](27.html)

## 12.index()方法
是jQuery中查找当前对象在兄弟元素中的位置方法，永远返回在兄弟元素中的排名
[index()方法](28.html)
[完整轮播图](29.html)

## 13.节点操作
### 1.增
向页面中添加新东西
第一步：创建新的东西：$('要新添加的东西');得到一个jQuery对象，所以可以调用jQuery的任何方法
第二部：上树（8种方法）
>把新创建的元素添加到目标元素的*内部*，有4种方法
>>append() appendTo()：把子集元素添加到父级元素的最后面
>>>父级元素.append(子级元素);
>>>子级元素.appendTo(父级元素);

>>prepend() prependTo()：把子集元素添加到父级元素的最前面
>>>父级元素.prepend(子级元素);
>>>子级元素.prependTo(父级元素);

>把新创建的元素添加到目标元素的*外部*，有4种方法
>>before() insertBefore()：把新创建的元素添加到目标元素的前面
>>>父级元素.before(子级元素);
>>>子级元素.insertBefore(父级元素);

>>after() insertAfter()：把新创建的元素添加到目标元素的后面
>>>父级元素.after(子级元素);
>>>子级元素.insertAfter(父级元素);

[增](30.html)

### 2.删
从页面中删除东西
jQuery提供了2种方法
empty()
删除元素中的内容，不删除标签
```javascript
jQuery对象.empty();
```

remove()
删除元素中的内容和标签
```javascript
jQuery对象.remove();
```
[删](31.html)
[切片轮播图](32.html)

### 3.包裹
在目标元素上添加新标签
wrap() wrapAll()

### 4.替换
replaceWith()
把目标元素的标签替换成设置的标签

[包裹和替换](33.html)

### 5.*克隆*
clone()
>小括号中不加参数时，表示原生js中的深度克隆，天生能复制节点中的内容
>小括号中加参数true，表示jQuery中的深度克隆，能克隆事件
[克隆](36.html)

## 14.快速获取值
### 1.快速获取宽高值
通过css()方法获取的宽高，都是带单位的
```javascript
css('width')
css('height')
```
获取不带单位的宽高值
```javascript
.width()
.height()

.innerWidth()  //width + padding-left + padding-right
.innerHeight()  //height + padding-top + padding-bottom

.outerWidth()  //width + padding + border
.outerWidth(true)  //width + padding + border + margin

.outerHeight()
.outerHeight(true)
```

### 2.快速获取偏移量的值
jQuery中已经封装好快速获取偏移量的方法，而且没有兼容性
offset()获取当前元素到页面的偏移
>offset().left
>offset().top

### 3.快速获取滚动高度
获取滚动高度，需要有滚动事件才能触发
```javascript
$(window).scroll(function(){
	$(window).scrollTop();
});
```

[快速获取值](34.html)
[京东楼层案例](35.html)

## 15.无缝滚动轮播图案例

#### 1.无缝滚动轮播图-火车法
原理：大图的ul动，里面的li都不动
要实现无缝滚动：就是在正常轮播图后面添加第一张图片，“欺骗”用户的视觉效果
>右键：用户能点击到第六张图，看第六张的时候，快捷导航应该显示到第一个，再点击时，通过css()瞬间把ul的margin-left=0，然后再展示第二张
>左键：用户到第一张时，再点击左按钮，通过css()瞬间把ul的margin-left=-5*li的宽度，然后再ul从最后一张动画到倒数第二张

[无缝滚动轮播图-火车法](37.html)

#### 2.无缝滚动轮播图-三位置法
原理：给每个图片一个绝对定位，只有一张显示在可视窗口中，其他所有的都在外面排队
>右键：让当前显示的这张图片left从0 到-512去 ，然后把下一张图片通过css()瞬间拉到右边(512)，然后再动画它的left 从512到0
>左键：让当前显示的这张图片left从0 到 512，下一张图片通过css()瞬间拉到左边(-512)，然后动画它的left从-512 到0
>快捷导航：需要判断点击的这个按钮在当前图片的前面还是后面，如果在前面，相当于点击的是左键；如果在它后面，相当于点击的是右键

[无缝滚动轮播图-三位置法](38.html)

#### 3.无缝滚动-3D轮播图
原理：定位五张图片，都有各自的大小和位置
>右键：让所有的图片都到它的前一张图片的位置去，需要拿到前一张图片的大小和位置信息，还需要专门把第一张拿到最后去。然后需要把每个图片对应的类名更换了，更换成它前一张的类名
>左键：让所有的图片都到它的后一张图片的位置去，需要拿到后一张图片的大小和位置信息，还需要专门把最后一张拿到最前面去。然后需要把每个图片对应的类名更换了，更换成它后一张的类名
>快捷导航：需要把图片隐藏，排序好后再展示
[无缝滚动-3D轮播图](39.html)

## 16.BOM
BOM浏览器对象模型，里面保存都是关于浏览器的一些信息，前端很少操作BOM
常用操作：
>定时器
>>setInterval(function(){}, 时长);	间隔定时器：每隔指定时间就执行一遍功能
>>setTimeout(function(){}, 时长);	延时定时器：只有到达指定时间功能才会被执行（就执行一次）
>>>相当于window.setInterval(function(){console.log(this)}, 时长);
>>>这里的this指向window

>打开新页面
>>window.open("网址", '打开方式');

>滚动
>>window.onscroll = function(){}

>获取地址栏中的信息
>>window.location
>>得到一个对象
>>>host：主域名，http和https是两个不同的域名
>>>href：保存当前页面的完整路径
>>>port：网络访问端口

>同源策略
>访问两个网址，看这两个网址是否是同一个地方
>如果下面这两个条件完全相同，表示是同一个地址；否则就不是
>>主域名是否相同
>>>协议是否相同http（普通协议）https（加密协议）
>>>看主域名名字是否相同

>>看端口号是否相同
>>>port默认端口号是80，可以不写
>>>非80端口，在访问时必须写

>网页缩放
>>resize()
>>window.onresize = function(){//窗口大小发生改变才会触发}

>页面加载事件
>>window.onload = function(){//页面加载完成后才触发的}

>
```javascript
	//常用的属性和方法
	//定时器
	window.setInterval(function(){console.log(111)}, 1000);
	//打开新窗口
	window.open('http://www.baidu.com', '_blank');
	//滚动
	window.onscroll = function(){	//原生，所以是onscroll
		console.log(document.body.scrollTop);
	}
	//网址
	console.log(window.location)
	//网页缩放
	window.onresize = function(){
		console.log('窗口大小发生改变了');
	}
	//页面加载事件
	window.onload = function(){
		console.log('页面加载完成了');
	}
```

# 3.ajax
## 1.什么是HTTP请求
就是上网时请求网络的一个过程，这个过程包括两步
>发生请求			Request
>把请求结果给你	Response

## 2.认识ajax
主要是连接前台和后台的“中间人”，用于数据传输
ajax(Asynchronous Javascript And XML)：异步请求
XML是一种数据传输格式，但是现在几乎没人用了
>写法难
>解析难

JSON是现在用的最多的数据传输格式
主要的体现：不刷新页面，能局部更新数据

## 3.使用ajax
一个完整ajax请求有四步
>第一步：创建ajax对象
>第二步：打开链接，找到服务器
>第三步：发送数据，你想请求的东西要告诉服务器
>第四步：服务器把数据返回来

### 1.创建ajax对象
ajax是js的一个内置构造函数，用的时候需要new出来
new的时候有兼容性
```javascript
//高级浏览器
new XMLHttpRequest();
//IE低版本
new ActiveXObject(Microsoft.XMLHTTP);

//兼容性
function ajax(){
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}else{
		return new ActiveXObject('Microsoft.XMLHTTP');
	}
}
alert(ajax());
```

### 2.调用ajax对象的方法
#### 找服务器
ajax对象.open()方法
open('请求类型','服务器地址','是否异步');
>请求类型：get post
>服务器地址：想要链接的服务器，*ajax天生不能跨域*
>是否异步：true代表异步执行，false代表同步执行





#### 发送数据
ajax对象.send()方法
>如果open中请求类型是get方法，这个时候send()小括号中写null或 空着
>如果open中请求类型是post方法，这个时候需要把请求数据写到send()小括号中，而且在send()方法钱需要添加请求头
>>ajax对象.setRequestHeader("content-Type","application/x-www-form-urlencoded");
#### 得到数据
```javascript
ajax.onreadystatechange = function(){
	if(ajax对象.readyState == 4){
		//这个时候数据就返回来了
		ajax对象.responseText
	}
}
```
*访问电脑本地的服务器时，本地路径：127.0.0.1*

## 4.open()方法（详细）
### get方式
如果请求类型是get，这个时候第三步要发送的数据写在这一步（服务器地址后）
格式：服务器地址?数据
>问号后面跟数据，问号最多出现一次
>数据说明
>>是键值对组成的：键名=值
>>多个信息之间用 & 符号连接
```HTML
<form action="http://www.baidu.com" method="get">
	姓名：<input type="text" name="uname">
	年龄：<input type="text" name="age">
	<input type="submit" value="提交">
</form>
<!-- 输入：小明 8 -->
<!-- https://www.baidu.com/?uname=小明&age=8 -->
```

[ajax请求类型为get](http://127.0.0.1/ajax/1.html)
[简单的登录效果](http://127.0.0.1/ajax/2.html)

### post方式
说明：如果是post方式请求，这个时候数据不能再写在“服务器地址”后面，数据需要写在第三步的send()小括号中
[ajax请求类型为post](http://127.0.0.1/ajax/3.html)

## 5.第四步（详细）
ajax.onreadystatechange() = function(){}
onreadystatechange是ajax中的一个监听方法，通过这个方法，我们可以监听ajax的状态码和HTTP服务器状态码

### 1.ajax状态码
readyState这个属性中保存的
readyState有五个状态码
>0：ajax刚被创建
>1：调用open()方法
>2：服务器把响应的头部返回
>3：开始接收数据
>4：数据接收完成，和服务器断开连接
```javascript
xhr.onreadystatechange = function(){
	console.log(xhr.readyState); //只能得到2 3 4
}
```

### 2.HTTP状态码
HTTP状态码是服务器返回来的一个表示状态的数值
>2开头都表示请求成功
>304也表示请求成功
>4开头的表示请求的页面发生了错误
>5/6开头的都是服务器出错了，需要后台人员去解决
>>我们经常使用HTTP状态码为*大于等于200，小于300，或等于304*

HTTP状态码：status来保存的

>1 消息（1字头）代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。
>>▪ 100 Continue
>>▪ 101 Switching Protocols
>>▪ 102 Processing

>2 成功（2字头）代表请求已成功被服务器接收、理解、并接受
>>▪ 200 OK
>>▪ 201 Created
>>▪ 202 Accepted
>>▪ 203 Non-Authoritative Information
>>▪ 204 No Content
>>▪ 205 Reset Content
>>▪ 206 Partial Content
>>▪ 207 Multi-Status

>3 重定向（3字头）代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。
>>▪ 300 Multiple Choices
>>▪ 301 Moved Permanently
>>▪ 302 Move temporarily
>>▪ 303 See Other
>>▪ 304 Not Modified
>>▪ 305 Use Proxy
>>▪ 306 Switch Proxy
>>▪ 307 Temporary Redirect

>4 请求错误（4字头）代表了客户端看起来可能发生了错误，妨碍了服务器的处理。
>>▪ 400 Bad Request
>>▪ 401 Unauthorized
>>▪ 402 Payment Required
>>▪ 403 Forbidden
>>▪ 404 Not Found
>>▪ 405 Method Not Allowed
>>▪ 406 Not Acceptable
>>▪ 407 Proxy Authentication Required
>>▪ 408 Request Timeout
>>▪ 409 Conflict
>>▪ 410 Gone
>>▪ 411 Length Required
>>▪ 412 Precondition Failed
>>▪ 413 Request Entity Too Large
>>▪ 414 Request-URI Too Long
>>▪ 415 Unsupported Media Type
>>▪ 416 Requested Range Not Satisfiable
>>▪ 417 Expectation Failed
>>▪ 422 Unprocessable Entity
>>▪ 423 Locked
>>▪ 424 Failed Dependency
>>▪ 425 Unordered Collection
>>▪ 426 Upgrade Required
>>▪ 449 Retry With
>>▪ 451Unavailable For Legal Reasons

>5 服务器错误（5、6字头）代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。
>>▪ 500 Internal Server Error
>>▪ 501 Not Implemented
>>▪ 502 Bad Gateway
>>▪ 503 Service Unavailable
>>▪ 504 Gateway Timeout
>>▪ 505 HTTP Version Not Supported
>>▪ 506 Variant Also Negotiates
>>▪ 507 Insufficient Storage
>>▪ 509 Bandwidth Limit Exceeded
>>▪ 510 Not Extended
>>▪ 600 Unparseable Response Headers

[HTTP状态码登录功能](http://127.0.0.1/ajax/4.html)

### 3.responseText
responseText是ajax的一个属性，作用是保存服务器传回来的结果
得到的结果是一个*字符串*
如果返回值的数据格式是字符串，这时用字符串的方法解析
如果返回值的数据格式是JSON，这时用JSON.parse()解析
如果返回值的数据格式是XML，这时接收数据用ajax对象.responseXML，得到一个文档结构，想进一步使用需要DOM操作
```javascript
$('#uname').html(xhr.responseXML.getElementsByTagName('name')[0].innerHTML);
```
[解析json](http://127.0.0.1/ajax/5.html)
[解析XML](http://127.0.0.1/ajax/8.html)

[注册登录案例_txt](http://127.0.0.1/ajax/6.html)
[注册登录案例_json](http://127.0.0.1/ajax/7.html)

## 6.跨域
### 1.ajax天生不能跨域
跨域：指不符合同源策略的都是跨域
```javascript
xhr.open('post', 'D:/8_personMessage.xml', true);  //不是服务器文件夹下
```
这个时候回报错，跨域了

### 2.解决跨域
解决跨域有两种方式，
>第一种：前端方式（自己解决）
>第二种：后台方法（后台人员解决）

#### 前端解决方法
不使用ajax，使用script标签
script标签中的src属性没有跨域问题
[src具备跨域能力](http://127.0.0.1/ajax/9.html)

##### 可以在当前的js中调用外部的函数
这个外部的函数是通过script引入的外部
[在当前的js中调用外部的函数](http://127.0.0.1/ajax/12.html)
[跨域请求数据](http://127.0.0.1/ajax/13.html)

##### JSONP跨域
*通过给页面中添加script标签引入外部js，外部js调用本地函数时调用传入数据*
[JSONP跨域](http://127.0.0.1/ajax/14.html)
*JSONP跨域创建script标签时可以传入更多的信息，后台可以根据传入的信息更精准的返回数据*
传入数据的写法：*服务器地址?数据1=值1&数据2=值2*
```javascript
var oScript = $('<script src="http://127.0.0.1:88/13_01.js?page="+page+"&callback="+data+"&aa=aa&bb=bb"></script>');
// 此处</script>应为<\/script>
```

##### callback
后台人员会处理数据名，一般情况下会给前台人员留一个callback接口，这个接口的意思是让前台人员自己决定用什么函数名，如果前台人员没有自己指定，这个时候默认用函数名callBack
```PHP
//得到你传进来的callback
$callback = $_GET['callback'];
//判断是否为空
$callback = ($callback==""?'callback':$callback);

echo "$callback({'name': '小明','sex': '女'})";
```
[callback](http://127.0.0.1/ajax/10.html)

#### 后端解决方法
PHP解决方法：file_get_contents("路径");
这个时候需要使用ajax连接后台，剩下的就是后台来处理
[后端解决方法](http://127.0.0.1/ajax/11.html)

[解析JSON数据案例](http://127.0.0.1/ajax/15.html)
