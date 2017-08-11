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
![img1](/images/img1.png "img1")

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

[百度换肤](2.html)
[轮播图](3.html)

操作样式
>就是操作CSS
>>修改CSS样式，不需要注意什么，*因为修改完的样式会直接添加到行内*

>获取CSS样式有兼容性
>>获取行内样式，没有兼容性
>>获取内部样式或外部样式表的CSS样式
>>>这个时候通过：元素.style.css样式，不管高级浏览器还是IE低版本浏览器都获取不到
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

原生js中的子节点：childNodes
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

children：能获取元素的子节点，同时没有兼容性，找到的就是元素节点
```javascript
alert(oList.children.length);
```

节点类型 nodeType
>元素节点    	就是指标签         		1
>文本节点    	写的文字           		3
>document节点	HTML文档节点       		9
>注释节点    	&lt;!-- 注释 --&gt;		8

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




















<script>

</script>