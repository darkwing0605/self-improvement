<div style="width:50px;height:50px;border-radius:50%;background-color:cyan;position:fixed;right:100px;bottom:100px;line-height:50px;text-align:center;font-size:30px;color:white;cursor:pointer;">↑</div><script>var div=document.querySelector('div');div.onclick=function(eve){var timer=setInterval(function(){var scrollDistance=document.body.scrollTop||document.documentElement.scrollTop;scrollDistance=scrollDistance* 0.8;document.body.scrollTop=scrollDistance;document.documentElement.scrollTop=scrollDistance;if(scrollDistance==0){clearInterval(timer)}},30)}</script>
[TOC]

# JavaScript

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

### ES5新特性
#### 1.every
对于数组每一个元素进行一个函数的运行，如果都返回true，最后返回true，如果有一个返回false，最后返回false
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result1 = arr.every(function(item, index, array) {
	return item > 2;
});
console.log(result1); //false
var result2 = arr.every(function(item, index, array) {
	return item > 0;
})
console.log(result2); //true
```
#### 2.filter
对于数组的每一个元素进行一个函数的运行，给定的函数去执行，把过滤后的结果返回
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = arr.filter(function(item, index, array) {
	return item > 2;
});
console.log(result); //[3, 4, 5, 4, 3]
```
#### 3.forEach
循环数组每一项的值，并执行一个方法
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
arr.forEach(function(item, index, array) {
	console.log(item); //1 2 3 4 5 4 3 2 1
});
```
#### 4.map
对于数组的每一个元素进行一个函数的运行，可以经过函数执行完毕后，把新的结果返回
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = arr.map(function(item, index, array) {
	return item * 2;
});
console.log(result); //[2, 4, 6, 8, 10, 8, 6, 4, 2]
```
#### 5.some
对于数组每一个元素进行一个函数的运行，如果有一项返回true，最后则返回true，如果每一项都返回false，最后则返回false
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result1 = arr.some(function(item, index, array) {
	return item > 10;
});
console.log(result1); //false
var result2 = arr.some(function(item, index, array) {
	return item >= 5;
});
console.log(result2); //true
```
#### 6.reduce
从左遍历
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = arr.reduce(function(prev, cur, index, array) {
	//前一个值，当前值，索引位置，数组本身
	return prev + cur;
});
console.log(result);
```
#### 7.reduceRight
从右遍历
```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = arr.reduceRight(function(prev, cur, index, array) {
	//前一个值，当前值，索引位置，数组本身
	return prev + cur;
});
console.log(result);
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

### 5.5模拟extjs底层继承方式
```javascript
function extend(sub, sup) {
	// 目的：实现只继承父类的原型对象
	var F = new Function(); // 1.创建一个空函数  目的：空函数进行中转
	F.prototype = sup.prototype; // 2.实现空函数的原型对象和超类的原型对象转换
	sub.prototype = new F(); // 3.原型继承
	sub.prototype.constructor = sub; // 4.还原子类的构造器
	// 保存一下父类的原型对象，一方面方便解耦，另一方面方便获得父类的原型对象
	sub.superClass = sup.prototype; //自定义一个子类的静态属性，接收父类的原型对象

	// 判断父类的原型对象的构造器（加保险）
	if (sup.prototype.constructor == Object.prototype.constructor) {
		sup.prototype.constructor = sup; //手动获取父类原型的构造器
	}
}

// 混合继承，原型继承和用构造函数继承
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype = {
	constructor: Person,
	sayHello: function() {
		console.log('Hello World!');
	}
};

function Boy(name, age, sex) {
	Boy.superClass.constructor.call(this, name, age);
	this.sex = sex;
}
extend(Boy, Person);

var b = new Boy('张三', 20, '男');
console.log(b.name);
console.log(b.sex);
b.sayHello();
```

### 6.面向对象解决方法
解决大量功能相同的元素
面向对象的核心思想：自治
[红绿灯](10.html)
[行走的小女孩](11.html)

## 设计模式
### 1.建立接口的方式
接口的缺点
>对于一些中小型程序来说，使用接口很显然是不明智的，对项目来说接口的好处也不明显，只是徒增其复杂度而已

接口的优点
>首先促进代码的重用，对于开发来讲，还可以告诉程序员那些类都使用了什么方法>如果你事先知道接口，那么就减少了你在编码的时候对类与类之间冲突，实现解耦>对于测试和调试也会变得轻松，用JavaScript的弱类型语言，类型不匹配经常出现，那么使用接口，这一点会更容易些
#### 1.注释描述的方式
优点
>程序员可以有一个参考

缺点
>还是属于文档的范畴
>这种方式太松散了，没有检查接口的方法是否完全被实现

```javascript
/**
 *	interface Composite {
 *		function add(obj);
 *		function remove(obj);
 *		function update(obj);
 *	}
 */

// CompositeImp1 implements Composite
var CompositeImp1 = function() {
	//
}

CompositeImp1.prototype.add = function(obj) {
	//do something...
}
CompositeImp1.prototype.remove = function(obj) {
	//do something...
}
CompositeImp1.prototype.update = function(obj) {
	//do something...
}

var o1 = new CompositeImp1();
var o2 = new CompositeImp1();
console.log(o1.add == o2.add);
```
#### 2.属性检测的方法
优点
>检测类的实例有没有实现接口
>有一定解耦性

缺点
>没有完全的脱离注释
>不能检测实现接口里面的方法
>没有面向对象的思想

```javascript
/**
 *	interface Composite {
 *		function add(obj);
 *		function remove(obj);
 *		function update(obj);
 *	}
 *
 *	interface FormItem {
 *		function select(obj);
 *	}
 */

//CompositeImp1 implenents Composite , FormItem
var CompositeImp1 = function() {
	// 显示的在类的内部，接收所实现的接口
	// 一般来说是一个规范，我们项目经理：在类的内部定义一个数组（名字要固定）
	this.implenentsInterfaces = ['Composite', 'FormItem'];
}

CompositeImp1.prototype.add = function(obj) {
	//do something...
	alert('add...');
}
CompositeImp1.prototype.remove = function(obj) {
	//do something...
}
CompositeImp1.prototype.update = function(obj) {
	//do something...
}
CompositeImp1.prototype.select = function(obj) {
	//do something...
}

//检测CompositeImp1类的对象
function CheckCompositeImp1(instance) {
	// 判断当前对象是否实现了所有的接口
	if (!IsImplements(instance, 'Composite', 'FormItem')) {
		throw new Error('Object does not implement a required interface!');
	}
}

// 公用的具体的检测方法（核心方法），返回值类型为boolean
// 这个方法的主要目的，就是判断实例对象有没有实现相关的接口
function IsImplements(object) {
	// arguments对象，获得函数的实际参数
	for (var i = 1; i < arguments.length; i++) {
		// 接收所实现的每一个接口的名字
		var interfaceName = arguments[i];
		// 判断此方法到底是成功还是失败
		var interfaceFound = false;
		for (var j = 0; j < object.implenentsInterfaces.length; j++) {
			if (object.implenentsInterfaces[j] == interfaceName) {
				interfaceFound = true;
				break;
			}
		}
		if (!interfaceFound) {
			return false;
		}
	}
	return true;
}

var c1 = new CompositeImp1();
CheckCompositeImp1(c1);
c1.add();
```

#### 3.鸭式辨型的方法
优点
>保留了面向对象
>实现了解耦
>应用灵活

鸭式辨型法实现的核心：一个类实现接口的主要目的：把接口里的方法都实现（检测方法）

```javascript
// 1.接口类 Class Interface 目的：实例化N多接口

/*
 *	接口类需要2个参数
 *	参数1：接口的名字
 *	接口2：接收方法名称的集合（数组）
 */

var Interface = function(name, methods) {
	// 判断接口的参数个数
	if (arguments.length != 2) {
		throw new Error('This instance interface constructor arguments must be 2 length!');
	}
	this.name = name;
	this.methods = []; // 定义一个内置的空数组对象，等待接收methods里的元素（方法名字）
	for (var i = 0, len = methods.length; i < len; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error('the Interface methods name must be string!');
		}
		this.methods.push(methods[i]);
	}
}

// 2.准备工作
// 2.1实例化接口对象
var CompositeInterface = new Interface('CompositeInterface', ['add', 'remove']);
var FormItemInterface = new Interface('FormItemInterface', ['update', 'select']);

// CompositeImp1 implements CompositeInterface, FormItemInterface

// 2.2具体的实现类
var CompositeImp1 = function() {}

// 2.3实现接口的方法Implements methods
CompositeImp1.prototype.add = function(obj) {
	//do something...
	alert('add');
}
CompositeImp1.prototype.remove = function(obj) {
	//do something...
	alert('remove');
}
CompositeImp1.prototype.update = function(obj) {
	//do something...
	alert('update');
}
CompositeImp1.prototype.select = function(obj) {
	//do something...
	alert('select');
}


// 3.检验接口里的方法
// 如果检验通过，不做任何操作，不通过浏览器抛出异常
// 这个方法的目的，就是检测方法的
Interface.ensureImplements = function(object) {
	// 如果检测方法接收的参数小于2个，参数传递失败
	if (arguments.length < 2) {
		throw new Error('Interface.ensureImplements method constructor arguments must be >= 2!');
	}
	// 获得接口实例对象
	for (var i = 1, len = arguments.length; i < len; i++) {
		var instanceInterface = arguments[i];
		// 判断参数是否是接口类的类型
		if (instanceInterface.constructor !== Interface) {
			throw new Error('the arguments constructor not be Interface Class');
		}
		// 循环接口实例对象里面的每一个方法
		for (var j = 0; j < instanceInterface.methods.length; j++) {
			// 用一个临时变量，接收每一个方法的名字（注意是字符串）
			var methodName = instanceInterface.methods[j];
			// object[key]
			if (!object[methodName] || typeof object[methodName] !== 'function') {
				throw new Error('the method name "' + methodName + '" is not found');
			}
		}
	}
}

var c1 = new CompositeImp1();
Interface.ensureImplements(c1, CompositeInterface, FormItemInterface);

c1.add();
```
### 2.单体模式
单体（singleton）模式是JavaScript中最基本但又最有用的模式之一
这种模式提供了一种将代码组织为一个逻辑单元的手段，这个歌逻辑单元中的代码可以通过单一的变量进行访问。通过确保单体对象只存在一份实例，你就可以确信自己的所有代码使用的都是相同的全局资源
#### 1.简单单体
可以划分命名空间
```javascript
var Singleton = {
	attr1: true,
	attr2: 10,
	method1: function() {
		console.log('我是方法1');
	},
	method2: function() {
		console.log('我是方法2');
	}
};

console.log(Singleton.attr1);
```

#### 2.闭包单体
```javascript
// 命名空间
var ABC = {};
ABC.Singleton = (function() {

	// 添加自己的私有成员
	var a1 = true;
	var a2 = 10;
	var f1 = function() {
		console.log('f1');
	}
	var f2 = function() {
		console.log('f2');
	}

	// 把块级作用域里的执行结果赋值给我的单体对象
	return {
		attr1: a1,
		attr2: a2,
		method1: function() {
			return f1();
		},
		method2: function() {
			return f2();
		}
	};
})();

console.log(ABC.Singleton.attr1);
ABC.Singleton.method1();
```
#### 3.惰性单体
和闭包单体有一些相似
```javascript
// 命名空间
var ABC = {}

ABC.Base = (function() {

	// 私有变量， 控制返回的单体对象
	var uniqInstance; //undefined

	// 需要一个构造init初始化单体对象的方法
	function init() {
		// 私有成员变量
		var a1 = 10;
		var a2 = true;
		var fn1 = function() {
			console.log('fn1')
		};
		var fn2 = function() {
			console.log('fn2')
		};

		return {
			attr1: a1,
			attr2: a2,
			method1: function() {
				return fn1();
			},
			method2: function() {
				return fn2();
			}
		}
	}

	return {
		getInstance: function() {
			if (!uniqInstance) {
				uniqInstance = init();
			}
			return uniqInstance;
		}
	};
})();

console.log(ABC.Base.getInstance());
console.log(ABC.Base.getInstance().attr1);
ABC.Base.getInstance().method1();
```
#### 4.分支单体
判断程序的分支（浏览器的差异检测）
```javascript
var ABC = {};
var different = true;
ABC.More = (function() {
	var objA = { //火狐浏览器内部的一些配置
		attr1: 'FF属性1'
			//属性1
			//属性2
			//属性3
			//属性4
	};
	var objB = { //IE浏览器内部的一些配置
		attr1: 'IE属性1'
			//属性1
			//属性2
			//属性3
			//属性4
	};
	return (different) ? objA : objB;
})();

console.log(ABC.More.attr1);
```
### 3.链式编程
```javascript
function Dog() {
	this.run = function() {
		console.log('run');
		return this;
	};
	this.eat = function() {
		console.log('eat');
		return this;
	};
	this.sleep = function() {
		console.log('sleep');
		return this;
	}
}

var d1 = new Dog();
d1.run().eat().sleep();
// d1.eat();
// d1.sleep();
```
*模拟jQuery底层链式编程*
```javascript
// 块级作用域
// 内部的成员变量外部无法访问，（除了不加var修饰的变量）
(function(window, undefined) {
	// 大型程序开发，一般使用_作为私用的对象（规范）
	function _$(arguments) {
		// 正则表达式匹配id选择器
		var idselector = /#\w+/;
		this.dom; // 此属性接收所得到的元素
		// 如果匹配成功，则接收dom元素
		if (idselector.test(arguments[0])) {
			this.dom = document.getElementById(arguments[0].substring(1));
		} else {
			throw new Error('arguments is error');
		}
	}

	// 在Function类上扩展一个可以实现链式编程的方法
	Function.prototype.method = function(methodName, fn) {
		this.prototype[methodName] = fn;
		return this;
	}

	// 在_$的原型对象上加一些公共的方法
	_$.prototype = {
		constructor: _$,
		addEvent: function(type, fn) {
			// 给得到的元素注册事件
			if (window.addEventListener) {
				this.dom.addEventListener(type, fn);
			} else if (window.attachEvent) {
				this.dom.attachEvent('on' + type, fn)
			}
			return this;
		},
		setStyle: function(prop, val) {
			this.dom.style[prop] = val;
			return this;
		}
	}


	// window上先注册一个全局变量，与外界产生关系
	window.$ = _$;

	_$.onReady = function(fn) {
		// 1.实例化出来_$对象，真正的注册到window上
		window.$ = function() {
			return new _$(arguments);
		};

		// 2.执行传入进来的代码
		fn();

		// 3.实现链式编程
		_$.method('addEvent', function() {
			// nothing
		}).method('setStyle', function() {
			// nothing
		});
	}
})(window);


$.onReady(function() {
	$('#hplogo').addEvent('click', function() {
		alert('Google的logo被点击了');
	}).setStyle('backgroundColor', 'red');
});
```

### 4.设计模式
JavaScript提供了很多种设计模式：工厂、桥、组合、门面、适配器、装饰着、享元、代理、观察者、命令、责任链
#### 1.工厂模式
核心就是为了生产对象、实现解耦
>一个类或对象中往往包含别的对象，我们创建这样的成员对象时，可能习惯采用new关键字或构造函数的方式，这样会导致两个类之间产生依赖关系，所以通常需要工厂模式，创建一个工厂来管理它们的实例过程，这样可以控制程序，使我们的程序更加的面向对象、多态化

[简单工厂-粗粒度](40.html)
[简单工厂-细粒度](40_1.html)
[复杂工厂](40_2.html)

#### 2.桥接模式
桥接模式是一种既能把两个对象连接在一起，又能避免二者间的强耦合的方法。通过“桥”把彼此联系起来，同时又允许他们各自独立变化。
主要作用表现为将抽象与其现实隔离开来，以便二者独立化，可以实现自己的变化

桥接实例
>事件监听回调机制
>特权函数
>桥接组织多个单元


[事件监听回调机制](41.html)
[特权函数](42.html)
[桥接组织多个单元](43.html)


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

## 7.jQuery中的ajax
### 1.$.get()
get请求方式
$.get('路径','数据',function(){//请求成功时的回调函数});
>参数1：路径
>参数2：要发送的数据，是个可选参数，写的时候按JSON格式写
>参数3：成功时的回调函数，一般都会有一个参数，用来接收返回来的数据

### 2.$.post()
post请求方式
$.post('路径','数据',function(){//请求成功时的回调函数});
>参数1：路径
>参数2：要发送的数据，是个可选参数，写的时候按JSON格式写
>参数3：成功时的回调函数，一般都会有一个参数，用来接收返回来的数据

### 3.$.getJSON()
得到JSON数据，而且解析好了，可以直接使用
$.getJSON('路径','数据',function(){//请求成功时的回调函数});

### 4.$.ajax()
功能最完善，需要传的参数比较多，所有参数放在一个JSON中
```javascript
$.ajax({
	'url': '路径',
	'type': '请求方法',
	'async': '是否异步',
	'data': {},
	'beforeSend': function(){//发送ajax前做的事},
	'complete': function(){//ajax状态码到4的时候做的事},
	'success': function(){//ajax状态码为4且HTTP状态码为200做的事},
	'error': function(){//请求失败时做的事},
	'dataType': 'json/jsonp/xml/txt',
	'jsonp': '修改callback的名字',
	'jsonpCallback': '改变后台调用函数的名字'
});
```
例↓
```javascript
$.ajax({
	'url': '16_01.js',
	'type': 'get',
	'success': function(data) {
		console.log(data);
	}
});
```

### 5.解决跨域能力
jQuery中$.ajax()函数已经封装了跨域能力，可以直接使用
```javascript
$.ajax({
	'url': '路径',
	'dataType': 'jsonp',
	'jsonp': 'callback',
	'jsonpCallback': 'add',
	'success': function(){}
});
```
例↓
```javascript
$.ajax({
	'url': 'http://127.0.0.1:88/13_01.js',
	'dataType': 'jsonp',
	// 'jsonp': 'aaa',
	'jsonpCallback': 'data',
	'success': function(json) {
		console.log(json);
	}
});
```

## 8.ajax中的两个小点
### 1.get请求方式，存在缓存问题
IE低版本中比较严重
后台数据已经更改了，但是刷新页面，页面中的数据不变

IE低版本的判断机制
>看URL是否发生改变，没有发生改变，就认为页面没有新动态

解决方法
>xhr.open('get', '17_01.php?zz=' + Math.random(), true);
>xhr.open('get', '17_01.php?zz=' + new Date().getTime(), true);
[解决IE低版本缓存问题](http://127.0.0.1/ajax/17.html)

### 2.encodeURI() decodeURI()
汉字转成URI编码  URI编码转回汉字
js中内置的方法
```javascript
console.log(encodeURI('我是汉字')); //%E6%88%91%E6%98%AF%E6%B1%89%E5%AD%97
console.log(decodeURI('%E6%88%91%E6%98%AF%E6%B1%89%E5%AD%97')); //我是汉字
```

### 3.JSON.stringfty()
把JSON转成字符串
数据向服务器传送时，需要转成字符串再传
```javascript
var json1 = {
	'name': '小明',
	'age': 8
}
var str1 = JSON.stringify(json1);
console.log(str1);
console.log(typeof str1);
```

### 4.get和post方式的区别
#### 1.get方式
发送的数据量比较小，一般不超过5M
发送的数据会显示在地址栏中（比较不安全）
请求速度比较快
#### 2.post方式
发送的数据量比较大
发送的数据不会显示（比较安全）
请求速度比较慢

## 9.正则表达式
它是js中的内置对象，用的时候有两种创建方式
>字面量方式
>>var reg = /正则表达式/;

>构造函数法
>>var reg1 = new RegExp(正则表达式);

### 1.作用
匹配验证字符串，常用在表单验证

### 2.基本语法
它是由基本符号（数字、字母、下划线）和特殊符号`（  ^$\()*.[]  ）`组成的

### 3.自己具备的方法
test() 测试的作用，返回布尔值
exec() 测试方法，只能测试匹配到的第一个（用的较少），匹配到了返回下标，匹配不到返回-1

### 4.字符串的四个方法
match(/正则/)
replace(/正则/)
search(/正则/)
split(/正则/)

### 5.写法
#### 1.精准匹配
匹配指定的字符
```javascript
var str = 'abc sdfo asdt dsgsgoj sfosdjf lo'
// 精准匹配sd
console.log(str.match(/sd/)); 
// ["sd", index: 4, input: "abc sdfo asdt dsgsgoj sfosdjf lo"]

console.log(str.match(/sd/g)); 
// ["sd", "sd", "sd"]
```

#### 2.字符集
匹配范围内的字符串

##### 1.基本范围类
[规则]
>中括号中能匹配到任意一个就算匹配到了
```javascript
var str = 'abc sdfo asdt dsgsgoj sfosdjf lo'
// 找sdt sdf sdj
console.log(str.match(/sd[tfj]/g));
// ["sdf", "sdt", "sdj"]
console.log(str.match(/sd[tfjasd]/g));
// ["sdf", "sdt", "sdj"]
```

##### 2.负向类
[^规则]
>除了中括号中的情况都能匹配到
```javascript
var str = 'abc sdfo asdt dsgsgoj sfosdjf lo sdy'
console.log(str.match(/sd[^tfj]/g));
// ["sdy"]
```

##### 3.范围类
这里的范围只有两种：a-z、A-Z (a-Z)、0-9
范围类中可以写多个范围：[a-z0-9]
[范围]
```javascript
var str = 'abc sdfo asdt sdSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd[a-zA-Z]/g));
// ["sdf", "sdt", "sdS", "sdj", "sdy"]
```

#### 3.修饰符
1.全局匹配：g
2.忽略大小写：i
```javascript
var str = 'abc sdfo asdt sdSgsgoj sfosdjf lo sdy'
console.log(str.match(/sds/ig));
// ["sdS"]
```

#### 4.内置预定义类
.  匹配除了换行回车以外的任何字符
\d 匹配数字0-9
\D 匹配除了数字
\w 匹配字母、数字、下划线
\W 匹配除了字母、数字、下划线
\s 匹配空格、回车、换行
\S 匹配除了空格、回车、换行

#### 5.量词
指匹配的次数

##### 1.固定量词
{数字}
```javascript
var str = 'abc sddsddfo asdt sdSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd{2}/g));
// ["sdd", "sdd"]
```

##### 2.软性量词
{数字,}  大于等于个数
```javascript
var str = 'abc sddsddfo asdt sdSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd{1,}/g));
// ["sdd", "sdd", "sd", "sd", "sd", "sd"]
```

##### 3.范围量词
{数字1,数字2}
```javascript
var str = 'abc sddsddfo asddddt sddddddSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd{1,3}/g));
// ["sdd", "sdd", "sddd", "sddd", "sd", "sd"]
```

##### 4. *
能匹配任意次数
```javascript
var str = 'abc sddsddfo asddddt sddddddSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd*/g));
// ["sdd", "sdd", "sdddd", "sdddddd", "s", "s", "sd", "sd"]
```

##### 5. +
匹配大于等于1次的，相当于{1,}
```javascript
var str = 'abc sddsddfo asddddt sddddddSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd+/g));
// ["sdd", "sdd", "sdddd", "sdddddd", "sd", "sd"]
```

##### 6. ?
匹配0次或1次
```javascript
var str = 'abc sddsddfo asddddt sddddddSgsgoj sfosdjf lo sdy'
console.log(str.match(/sd?/g));
// ["sd", "sd", "sd", "sd", "s", "s", "sd", "sd"]
```

#### 6.边界
##### 1. ^
不是写在字符集中，*写在正则表达式最前面的一个符号*
作用：匹配以什么开头的
```javascript
var str = 'abc sddsddfo asddddt sddddddSgsgoj sfosdjf lo sdy'
console.log(str.match(/^a[a-zA-Z0-9]+/g));
// ["abc"]
console.log(str.match(/^asd[a-zA-Z0-9]+/g));
// null
```

##### 2. $
写在正则表达式的最后面
作用：匹配以什么结尾的
```javascript
var str = 'abc sddsddfo asddddt sddddddSgsgoj sfosdjf lo sdy'
console.log(str.match(/y$/g));
// ["p"]
console.log(str.match(/p$/g));
// null
```

#### 7.分组
()
用在正则表达式非字符集中
```javascript
var str = 'goodbye goodbyebye';
console.log(str.match(/good(bye){2}/g));
// ["goodbyebye"]
```

#### 8.或
|
```javascript
var str = 'goodbye,goodbyebye goodbyebyebye';
console.log(str.split(/,| /g));
// ["goodbye", "goodbyebye", "goodbyebyebye"]
```

# 4.RequireJS

## 为什么使用RequireJS
异步加载文件
模块化开发
>一个文件一个模块
>减少全局变量

## 初步使用
### define: 定义模块
```javascript
define('模块名', [模块依赖], function(){
	// 模块的实现function
});
```
模块名可省略，不写的时候以文件路径作为模块名
>实际中一般不写模块名，使用构建工具自动命名模块名，有利于后续的打包

在执行代码的时候需要依赖哪些模块，数组，可以有多个依赖的模块，可有可无
在下载依赖之后，把模块参数传入到模块实现的function中
返回结果可以是任何值
```javascript
define('helper', ['jquery'], function($) {
	// 因为是依赖中第一个是jQuery，所以传入的第一个参数时$
	return {
		trim: function(str){
			return $.trim(str);
		}
	}
});
```

定义模块的方式
>函数式定义
>定义简单的对象
>>
```javascript
define({
	username: 'xiaoMing',
	name: '小明',
	age: 18,
	sex: '男'
});
```


### require: 加载模块
```javascript
require(['模块名'], function(){
	// 模块的实现function
});
```
模块名是数组格式，使用自定义的模块名或使用文件路径
下载执行模块之后，再执行模块的实现
```javascript
require(['helper'], function(helper) {
	var str = helper.trim('  amd     ');
	console.log(str);
});
```

### 加载文件
RequireJS以一个相对于baseUrl的地址来加载所有的代码
>不使用data-main直接在html中引用，baseUrl默认html页面本身
>使用了data-main，baseUrl默认为data-main的js的文件路径
>手动baseUrl

### 加载机制
RequireJS使用head.appendChild()将每一个依赖加载为一个script标签（也就是说可以跨域访问）
加载即执行

### 配置模块路径
baseUrl
```javascript 
baseUrl: '/js'
```

paths
```javascript
path: {
	'jquery': [
		'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js', //首选项
		'/%E5%8F%8C/0000/review_js/js/jquery-1.12.4' // 备选项
	]
}
```

[简单使用](45.html)

## 配置
### 配置不支持AMD的库和插件
AMD：require/define

加载不支持AMD的库，如Modernizr.js
>检测HTML5和CSS3的特性，只有一个全局变量modernizr

加载不支持AMD的框架，如bootstrap

** shim **
加载不支持AMD的库，如Modernizr.js
```javascript
shim:{
	'不支持AMD的模块': {
		deps: ['依赖的模块'],
		exports: '全局变量作为模块对象',
		init: function() {
			//初始化函数，返回的对象代替exports作为模块对象
		}
	}
}
```
即↓
```javascript
shim: {
	'modernizr': {
		deps: ['jquery'],
		exports: 'Modernizr',
		init: function($) {
			return $;
		}
	}
}
```
实际上↓
```javascript
shim: {
	'modernizr': {
		exports: 'Modernizr'  // 把全局变量Modernizr导入为模块
	}
}
```

加载不支持AMD的框架，如bootstrap
>没有全局变量，但是有依赖
```javascript
shim: {
	'bootstrap': ['jquery'] // 数组，代替deps的写法
}
```

[配置不支持AMD的库和插件](46.html)

### 其他常用配置
#### map
项目开发初期使用jquery-1.12.3，后期因为需要支持移动开发，升级到jquery-2.2.3
但是又担心之前依赖jquery-1.12.3的代码升级到2.2.3后可能会有问题，就保守的让这部分代码继续使用1.12.3版本
```javascript
map: {
	'app/api': {
		'jquery': './lib/jquery' 
		// 当app/api模块里加载jQuery模块时，将加载jquery.js
	},
	'app/api2': {
		'jquery': './lib/jquery2'
		// 当app/api2模块里加载jquery模块时，将加载jquery2.js
	}
}
```

#### waitSeconds
下载js等待的时间，默认7秒
如果设为0，则禁用等待超时

#### urlArgs
下载文件时，在url后面增加额外的query参数
```javascript
urlArgs: '_=' + (new Date()).getTime()
```

[其他常用配置](47.html)

### jsonp服务
RequireJS是通过script标签来加载模块
```javascript
require(['http://www.baidu.com/user'], function(user) {});
```
```javascript
define({
	username: 'xiaoMing',
	name: '小明',
	age: 18,
	sex: '男'
});
```
[传统jsonp服务](http://127.0.0.1/ajax/48.html)
[RequireJS的jsonp服务](http://127.0.0.1/ajax/49.html)

## 插件
### text插件
使用text插件加载html

** 插件text.js **
用于加载文本文件的RequireJS插件
通过ajax请求来加载文本
```javascript
require(['text!/user.html'], function(template) {
	$('#userinfo').html(template);
});
```
```javascript
requirejs.config({
    config: {
        text: {
            onXhr: function (xhr, url) {
                //Called after the XHR has been created and after the
                //xhr.open() call, but before the xhr.send() call.
                //Useful time to set headers.
                //xhr: the xhr object
                //url: the url that is being used with the xhr object.
            },
            createXhr: function () {
                //Overrides the creation of the XHR object. Return an XHR
                //object from this function.
                //Available in text.js 2.0.1 or later.
            },
            onXhrComplete: function (xhr, url) {
                //Called whenever an XHR has completed its work. Useful
                //if browser-specific xhr cleanup needs to be done.
            }
        }
    }
});
```

[text.js插件](http://127.0.0.1/ajax/50.html)

### css插件
使用css插件加载样式

** css.js插件 **
用于加载样式文件的RequireJS插件
```javascript
require([
	'./app/api',
	'backbone',
	'jquery-ui',
	'css!/css/jquery-ui/jquery-ui.css',
	'css!/css/jquery-ui/jquery-ui.theme.css'
],function(api) {});
```
```javascript
map: {
	'*': {
		'css': './lib/require/css'
	}
}
```

[css.js插件](51.html)

### i18n插件
使用i48n插件支持国际化，比如同时支持英文和中文
```javascript
require(['i18n!./nls/message'], function(i18n) {})
```

如何指定使用哪种语言
>浏览器的navigator.language或navigator.userLanguage
>配置语言
>>
```javascript
config: {
	i18n: {
		locale: 'zh'
	}
}
```

[i18n插件](http://127.0.0.1/ajax/52.html)

## 打包压缩
### 基本使用方法
#### 使用r.js工具打包
安装
```
npm install -g requirejs
```
打包
```
r.js -o baseUrl=js name=app out=bulit.js
node r.js -o baseUrl=js name=app out=bulit.js
```

### 打包多模块
### 打包插件
## 结合maven自动打包
### npm打包
### maven自动打包

# webpack
## 命令行
### 安装
安装webpack
```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install --save-dev webpack
```
安装打包css的loader
```
npm install css-loader style-loader --save-dev
```
### 简单使用
直接打包
```
webpack hello.js hello.bundle.js
```
### 其他参数

识别css文件需要用到css-loader，执行css文件需要用到style-loader
```javascript
require('./world.js');
require('style-loader!css-loader!./style.css');
```
每一个css都这样写就太麻烦了，所以↓
```javascript
require('./world.js');
require('./style.css');
```
```
webpack hello.js hello.bundle.js --module-bind "css=style-loader!css-loader"
```
自动更新自动打包↓
```
webpack hello.js hello.bundle.js --module-bind "css=style-loader!css-loader" --watch
```
可以看到打包过程
```
webpack hello.js hello.bundle.js --module-bind "css=style-loader!css-loader" --progress
```
查看打包的模块
```
webpack hello.js hello.bundle.js --module-bind "css=style-loader!css-loader" --progress --display-modules
```
查看打包的原因
```
webpack hello.js hello.bundle.js --module-bind "css=style-loader!css-loader" --progress --display-modules --display-reasons
```
[webpack简单使用](53.html)

## 配置文件
默认配置文件 webpack.config.js
```javascript
var path = require('path');
module.exports = {
	// 打包入口文件
	entry: './src/script/main.js',
	// 打包输入
	output: {
		// 路径
		path: path.resolve(__dirname, "./dist/js"),
		// 文件名
		filename: 'bundle.js'
	}
};
```
```
webpack
```

如果配置文件为 webpack.dev.config.js
```
webpack --config webpack.dev.config.js
```

** 更改参数 **
在根目录下package.json中的script中添加
```
"webpack": "webpack --config webpack.config.js --progress --display-modules --colors --display-reasons"
```
再执行
```
npm run webpack
```

## entry 和 output
### entry
第一种写法
```javascript
entry: './src/script/main.js',
```

第二种写法
>多个js文件

```javascript
entry: ['./src/script/main.js', './src/script/a.js'],
```

第三种写法
>多页面

```javascript
entry: {
	page1: './page1',
	page2: ['./entry1', './entry2']
}
```

### output
多个输入时
如果指定名称，则后面生成的会覆盖前面的
所以需要占位符
>[name] entry对象中的key
>[hash] 这次打包的hash
>[chunkhash] 每个chunk的hash
```javascript
output: {
	path: path.resolve(__dirname, "./dist/js"),
	filename: '[name]-[chunkhash].js'
}
```

### 自动化生成项目中的html页面
#### 安装
```
npm install html-webpack-plugin --save-dev
```
#### 配置文件
```javascript
var htmlWebpackPlugin = require('html-webpack-plugin');
```
```javascript
plugins: [new htmlWebpackPlugin()]
```
自动生成的index.html在dist/js

将自动生成的index.html与根目录下的index.html建立联系
```javascript
// 默认路径上下文为根目录
plugins: [new htmlWebpackPlugin(
	template: 'index.html'
)]
```
生成的文件依然在dist/js
更改输出路径
```javascript
output: {
	path: path.resolve(__dirname, "./dist"),
	filename: 'js/[name]-[chunkhash].js'
}
```
** 其他plugin **
```javascript
plugins: [new htmlWebpackPlugin(
	filename: 'index-[hash].html',
	template: 'index.html',
	// script标签在文件中的位置
	inject: 'head',
	// 在参数中传参，在模板中引用
	title: 'webpack is good',
	date: new Date(),
)]
```
在模板中引用
```html
<title><%= htmlWebpackPlugin.options.title %></title>
<body><%= htmlWebpackPlugin.options.date %></body>
```
遍历
```html
<body>
	<% for(var key in htmlWebpackPlugin) { %>
		<%= key %>
	<% } %>


	<% for(var key in htmlWebpackPlugin.files) { %>
		<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %>
	<% } %>
	<% for(var key in htmlWebpackPlugin.options) { %>
		<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.options[key]) %>
	<% } %>
</body>
```
将两个script标签放到不同位置加载
```html
<head>
	<script src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script>
</head>
<body>
	<script src="<%= htmlWebpackPlugin.files.chunks.a.entry %>"></script>
</body>
```
上线后路径改变，修改配置文件
```javascript
output:{
	publicPath: 'http://cdn.com/'
}
```
上线压缩
```javascript
plugins: {
	minify: {
		//删除注释
		removeComments: true,
		//删除空格
		collapseWhitespace: true
	}
}
```
多页面生成
>再次new htmlWebpackPlugin({})就好了
```javascript
plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index.html',
			inject: 'body',
			title: 'this is a.html',
			date: new Date(),
			excludeChunks: ['b', 'c']
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index.html',
			inject: 'body',
			title: 'this is b.html',
			date: new Date(),
			chunks: ['b']
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index.html',
			inject: 'body',
			title: 'this is c.html',
			date: new Date(),
			chunks: ['c']
		}),
	]
```

添加行内的JavaScript
```html
<head>
	<script>
		<%= compilation.assets[htmlWebpackPlugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
	</script>
</head>
```
同时在body中引用其他外部JavaScript
```html
<% for(var k in htmlWebpackPlugin.files.chunks) { %>
	<% if(k != 'main') { %>
		<script src="<%= htmlWebpackPlugin.files.chunks[k].entry %>"></script>
	<% } %>
<% } %>
```

## loader
处理资源文件，接受资源文件为一个参数，然后返回一个新的资源
### 使用babel-loader转换ES6代码
安装babel
```
npm install --save-dev babel-loader babel-core

npm install --save-dev babel-preset-env
```

在配置文件中使用
```javascript
module: {
	rules: [
		{
			// 正则匹配文件以js结尾
			test: /\.js$/,
			// 使用babel-loader
			loader: 'babel-loader',
			// 不处理某个目录
			exclude: path.resolve(__dirname, "./node_modules/"),
			// 只处理某个范围（减小范围提高速度）
			include: path.resolve(__dirname, "./src/"),
			// 版本es2015 ex2016 es2017 env
			query: {
				presets: ['env']
			}
		}
	]
},
```

### style-loader css-loader
安装
```
npm install style-loader css-loader --save-dev
```

在app.js中引用
```javascript
import './css/common.css';
```

在配置文件中使用
```javascript
module:{
	rules:[
		{
			test: /\.css$/,
			// 先css-loader处理，再style-loader
			// loader的处理方式使从右到左
			loader: 'style-loader!css-loader'
		}
	]
}
```

### postcss-loader
>css后处理
```
npm install postcss-loader --save-dev
```
>解决css样式兼容问题，比如添加-webkit- -moz- 等前缀
安装
```
npm install autoprefixer --save-dev
```

配置文件
```javascript
module:{
	rules:[
		{
			test: /\.css$/,
			// loader的处理方式使从右到左
			loader: 'style-loader!css-loader!postcss-loader'
			/*
			* 上下写法均可
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
			*/
		}
	]
},
```
之后新建postcss.config.js
```javascript
module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['last 5 versions']
		})
	]
}
```

使@import的css样式生效
```javascript
module:{
	rules:[
		{
			test: /\.css$/,
			use: [
				'style-loader',
				// css-loader之后，指定几个数量的loader来处理import资源
				'css-loader?importLoaders=1',
				'postcss-loader'
			]
		}
	]
},
```

## 使用less和sass
安装
```
npm install less --save-dev
npm install less-loader --save-dev

cnpm install node-sass
npm install sass-loader --save-dev
```
配置文件
```javascript
module:{
	rules:[
		{
			test: /\.less$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'less-loader'
			]
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'sass-loader'
			]
		}
	]
},
```
* 如果在less或者sass中使用import引入文件，不需要修改配置文件 *

## 处理模板文件
### html-loader

安装
```
npm install html-loader --save-dev
```
配置文件
```javascript
module: {
	rules: [
		{
			test: /\.html$/,
			use: [
				'html-loader'
			]
		}
	]
}
```
* 这里的html-loader会把html作为字符串解析，因此之前htmlWebpackPlugin中的<% %>会失效 *

### ejs-loader
安装
```
npm install ejs-loader --save-dev
```
配置文件
```javascript
module: {
	rules: [
		{
			test: /\.ejs$/,
			use: [
				'ejs-loader'
			]
		}
	]
}
```

## 处理图片文件
### file-loader
安装
```
npm install file-loader --save-dev
```
配置
```javascript
module: {
	rules: [
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			query: {
				name: 'assets/[name]-[hash:5].[ext]'
			}
		}
	]
}
```
在css模板中可以直接使用绝对路径或相对路径
在ejs模板中可以使用绝对路径或${ require('../../assets/bg.jpg') }
在index.html模板中使用绝对路径

### url-loader
安装
```
npm install url-loader --save-dev
```
配置
```
module: {
	rules: [
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'url-loader',
			query: {
				// 限制文件大小，小于限制的文件转换为base64编码
				limit: 15000,
				name: 'assets/[name]-[hash:5].[ext]'
			}
		}
	]
}
```

### image-webpack-loader
>压缩图片

安装
```
npm install image-webpack-loader --save-dev
```
配置
```javascript
{
	test:/\.(png|jpg|gif|svg)/,
	use: [
		'url-loader?limit=10&name=assets/[name]-[hash:5].[ext]',
		'image-webpack-loader'
	]
}
```

# React
## 初识React
1.React不是一个完整的MVC，MVVM框架
2.React跟Web Components不冲突
3.React的特点就是“轻”
4.组件化的开发思路

## React应用场景
1.复杂场景下的高性能
2.重用组件库，组件组合
3.“懒”

## React的JSX和Style
### JSX
JSX：JavaScript XML
语法糖，也成为糖衣语法
>对语言的功能没有影响
>更方便程序员使用，减少出错几率
>类似的有CoffeeScript  TypeScript
>最终都会被解析为JS，但是必须引入解析库
```html
<script type="text/jsx">
	ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('root')
	);
</script>
```

### Style
代码中使用的标签包括div等，为React Components，通过ReactDOM.render实现
div等添加样式
>class在ES6为关键字，应使用className
>行内样式不是字符串格式，应为样式对象
>>key值为驼峰写法，value值为字符串
>>两个大括号，第一个用来执行JS表达式，第二个为JS表达式即对象的大括号

```html
<style>
	.alert-text {
		font-size: 36px;
	}
</style>
<script type="text/jsx">
	var Hello = React.createClass({
		render: function() {
			return <div style={{color: 'red',paddingLeft: '50px'}} className="alert-text">Hello {this.props.title} {this.props.name}</div>;
		}
	});
	ReactDOM.render(
		<Hello name="World" title="Mr"/>,
		document.getElementById('root')
	);
</script>
```

## React Components生命周期

每一个状态React都封装了对应的hook函数

Mounted
>React Components被render解析生成对应的DOM节点并被插入浏览器的DOM结构的一个过程
>>getDefaultProps()
>>getInitialState()：初始化React Component State
>>>state：state是React中组件的一个对象，更新组件的state，会导致重新渲染用户的界面
>>>>props是组件调用方在调用组件时候指定的，我们认为props一旦指定，一般是不会变的
>>>>state是私处于当前组件的，state值时可变的
>>>>>常用的通知React数据变化的方法是调用setState

>>componentWillMount：Mounting前被调用
>>render
>>componentDidMount：Mounting后被调用

>
```JSX
var Hello = React.createClass({
	getInitialState: function() {
		alert('init');
	 	return {
			opacity: 1.0,
			fontSize: '12px'
	 	};
	},
	render: function() {
		return <div style={this.state}>Hello {this.props.name}</div>;
	},
	componentWillMount: function() {
		alert('will');
	},
	componentDidMount: function() {
		alert('did');

		var _self = this;
		window.setTimeout(function() {
			_self.setState({
				opacity: 0.5,
				fontSize: '44px'
			});
		}, 1000);
	}
});
ReactDOM.render(
	<Hello name="World" />,
	document.getElementById('root')
);
```

Update
>一个mounted的React Components被重新render的过程，但不一定所有的都会重新渲染
>>componentWillReceiveProps
>>>当一个Mounted的component将要接收props时调用，参数为新的props对象，在函数体内比较这个参数和this.props，从而执行类如修改state的操作

>>shouldComponentUpdate
>>>在一个Mounted的component接收到props后，判断是否有必要去更新DOM结构，有两个参数（新的props对象，新的state对象），分别对比，来决定是否更新DOM结构，返回true或false

>>componentWillUpdate
>>render
>>componentDidUpdate

Unmounted
>一个mounted的React Components对应的DOM节点被从DOM结构中移出的这样一个过程
>>componentWillUnmount
>>>可以在这个函数中执行一些cleanup的操作，比如释放内存、图片资源，（一般来说用的比较少）

## React event listener
最新版本
```JSX
var TestClickComponent = React.createClass({
	handleClick: function(event) {
		var tipE = ReactDOM.findDOMNode(this.refs.tip);

		if (tipE.style.display === 'none') {
			tipE.style.display = 'inline';
		}else{
			tipE.style.display = 'none';
		}

		event.stopPropagation();
		event.preventDefault();
	},
	render: function() {
		return (
			<div>
				<button onClick={this.handleClick}>显示|隐藏</button>
				<span ref="tip">测试点击</span>
			</div>
		);
	}
});
var TestInputComponent = React.createClass({
	getInitialState: function() {
		return {
			inputContent: ''
		};
	},
	changeHandler: function(event) {
		this.setState({
			inputContent: event.target.value
		});

		event.preventDefault();
		event.stopPropagation();
	},
	render: function() {
		return (
			<div>
				<input type="text" onChange={this.changeHandler}/>
				<span>{this.state.inputContent}</span>
			</div>
		);
	}
});
ReactDOM.render( 
	<div>
		<TestClickComponent />
		<br />
		<TestInputComponent />
	</div>,
	document.getElementById('container')
);
```
[稍旧一点版本](55.html)

## 实战

测试
Firefox 15
safari

[gallery-by-react](http://www.dark-wing.com/gallery-by-react)
[MusicPlayer-by-React](http://www.dark-wing.com/MusicPlayer-by-React)

# React Native
## 为什么要用React Native
### 传统开发的痛点
人员稀缺
开发成本高
代码复用率低
无法动态更新

### React Native的优点
跨平台
低投入高回报
性能高
支持动态更新
>一才两用
>开发成本低
>代码复用率高
>支持动态更新

## 开发环境搭建
### 需要安装的工具
Node.js
React Native Command Line
Android Studio/XCode

### 搭建React Native开发环境
#### Windows
安装React Native
安装Android Studio
创建项目
>
```
react-native init FirstApp
```
>得到
>
```
To run your app on iOS:
   cd E:\双\0000\review_js\React Native\FirstApp
   react-native run-ios
   - or -
   Open ios\FirstApp.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd E:\双\0000\review_js\React Native\FirstApp
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
```

运行，启动安卓模拟器

```
npm start
```

#### Mac

##组件
NavigationBar
react-native-scrollable-tab-view
RepositoryCell
react-native-tab-navigator

### 生命周期
| ES5 | ES6 |
|:---:|:---:|
|**Mounting**|
| getDefaultProps | static defaultProps |
| getInitialState | construtor(props) |
| componentWillMount |
| render |
| componentDidMount |
|**Updating**|
| componentWillReceiveProps |
| shouldComponentUpdate |
| componentWillUpdate |
| render |
| componentDidUpdate |
|**Unmounting**|
| componentWillUnmount |


### 小技巧
延展操作符
```
let params = {name:'小红',age:80,sex:'女'};

render() {
	<View>
		<PropsTest {...params}/>
	</View>
}
```

解构赋值
```
let params = {name:'小红',age:80,sex:'女'};
let {name, sex} = params;

render() {
	<View>
		<PropsTest name={name} sex={sex} />
	</View>
}
```

### 布局
#### 像素无关
在RN中尺寸是没有单位的，它代表了设备独立像素
```
<View style={{width:100,height:100,margin:40,backgroundColor:'gray'}}>
	<Text style={{fontSize:16,margin:20}}>尺寸</Text>
</View>
```

#### FlexBox不同之处
>flexDirection: React Native中默认为flexDirection:'column'，在Web CSS中默认为flex-direction:'row'
>alignItems: React Native中默认为alignItems:'stretch'，在Web CSS中默认align-items:'flex-start'
>flex: 相比Web CSS的flex接受多参数，如:flex: 2 2 10%;，但在 React Native中flex只接受一个参数
>不支持属性：align-content，flex-basis，order，flex-basis，flex-flow，flex-grow，flex-shrink

其余完全相同

#### 父视图属性(容器属性)
##### flexWrap
flexWrap属性定义了子元素在父视图内是否允许多行排列，默认为nowrap。
>nowrap flex的元素只排列在一行上，可能导致溢出。
>wrap flex的元素在一行排列不下时，就进行多行排列。

##### justifyContent
justifyContent属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-start。
>flex-start(default) 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
>flex-end 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
>center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
>space-between 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
>space-around 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。

##### alignItems
alignItems属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为stretch。
>flex-start 元素向侧轴起点对齐。
>flex-end 元素向侧轴终点对齐。
>center 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
>stretch 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。

#### 子视图属性
##### alignSelf
lignSelf属性以属性定义了flex容器内被选中项目的对齐方式。注意：alignSelf 属性可重写灵活容器的 alignItems 属性。
>auto(default) 元素继承了它的父容器的 align-items 属性。如果没有父容器则为 “stretch”。
>stretch	元素被拉伸以适应容器。
>center	元素位于容器的中心。
>flex-start	元素位于容器的开头。
>flex-end	元素位于容器的结尾。

##### flex
flex 属性定义了一个可伸缩元素的能力，默认为0。

### 按钮
#### TouchableWithoutFeedback
onPress
onLongPress
disabled
onPressIn
onPressOut
TouchableHighlight
>当手指按下的时候，该视图的不透明度会降低，同时会看到相应的颜色(视图变暗或者变亮)
>>activeOpacity
>>>我们可以通过activeOpacity来设置TouchableHighlight 被按下时的不透明度，默认不透明度为0.85

>>underlayColor 
>>>通过underlayColor 属性来设置TouchableHighlight 被按下去的颜色，默认状态下为balck黑色。

>>onHideUnderlay 
>>>当衬底(也就是上文讲到的最外层的View)被隐藏的时候调用。

>>onShowUnderlay 
>>>当衬底(也就是上文讲到的最外层的View)显示的时候调用。

TouchableNativeFeedback
>当按钮被按下时产生一个涟漪状的背景，你可以通过color参数来指定颜色，如果参数borderless是true，那么涟漪还会渲染到视图的范围之外。（参见原生的actionbar buttons作为该效果的一个例子）。**这个背景类型只在Android API level 21+适用也就是Android5.0或以上设备。**


### 图片
#### 使用本地图片
不添加宽高会以默认大小出现
```
<Image
	style={{width:500,height:100,borderWidth:1}}
	source={require('./qiqiu.png')}
	/*
	resizeMode={'cover'}  //默认
	resizeMode={'contain'}  //缩放至合适
	resizeMode={'stretch'}  //拉伸
	resizeMode={'repeat'}  //平铺 只适用于IOS
	resizeMode={'center'}  //居中
	*/
/>
```

#### 使用网络图片
不添加宽高RN无法渲染
```
<Image
	style={{width:100,height:100,borderWidth:1}}
	source={{uri:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=fd307e4fdd54564ee565e33f8be5fbbf/10dfa9ec8a136327d6b4806f918fa0ec08fac715.jpg'}}
/>
```
**注意：这是uri!!!**

#### 使用原生图片
不添加宽高RN无法渲染
```
<Image
	style={{width:100,height:100,tintColor:'red'}}
	source={{uri:'icon_1'}}
/>
```
tintColor改变图片颜色（png）

#### 使用本地图片

#### 使用不同分辨率的图片
图片命名为@2x @3x，使用时使用原始图片，RN根据用户分辨率加载不同的图片
```
<Image
	style={{width:100,height:100,borderWidth:1}}
	source={require('./icon_launcher.png')}
/>
```

## 实战
### 软件开发流程
需求分析 → UI界面设计 → 编码开发 → 测试 → 上线

### 流程结构
App启动 → 启动页（读取预配置文件） → 状态初始化（从服务器获取配置，更新本地数据状态） → 首页

最热
>搜索
>>添加搜索标签、收藏、查看、搜索开源项目

>菜单
>>标签排序、自定义标签、删除标签、自定义主题、分享、反馈、关于

详情
>查看
>分享

趋势
>时间
>>本月、本周、本日

>菜单
>>语言排序、自定义语言、自定义主题、分享、反馈、关于

列表
>离线缓存下拉刷新
>收藏项目

收藏
>最热与趋势的收藏
>自定义主题、分享、反馈、关于

我的
>标签排序、自定义标签、删除标签、语言排序、自定义语言
>自定义主题、分享、反馈、关于App、关于作者

| 最热 | 趋势 | 列表 | 收藏 | 我的 |
|:----:|:----:|:----:|:----:|:----:|
| | | 详情 | | |

高级功能
>多彩主题之谜、启动白屏、Native组件的封装
>统计、分享、CodePush热更新

### 技术栈
JavaScript、ES6、React、Flexbox、AsyncStorage、Fetch、Native Modules、Android&iOS

第三方库
>@react-native-check-box(复选框)
>@react-native-easy-toast(提示框)
>@react-native-splash-screen(启动屏)
>@react-native-htmlview(Html渲染)
>@react-native-scrollable-tab-view(标签切换)
>@react-native-sortable-listview(列表排序)
>@react-native-tab-navigator(底部导航)
>@react-native-parallax-scroll-view(视差滚动)
>分享SDK

自定义组件
>自定义NavigationBar
>自定义MoreMenu
>自定义启动屏
>自定义复选框
>自定义提示框

高层封装
>Native模块封装
>BaseCommon封装
>网络操作封装
>数据库操作封装
>数据解析封装
>Promise封装
>其他工具封装

### 项目结构
react-native项目结构

- index.ios.js
- index.android.js
- android  Android native 项目
- ios  ios native 项目
- res  全局资源（图片，音视频等）
- doc  文档说明
- js
	- common  可复用的组件（非完整页面）
	- expand  扩展
	- page		完整页面
	- config	配置项（常量、接口地址、路由、多语言化等预制数据）
	- util		工具类（非UI组件）

### 实战
```
react-native init GitHubApp
react-native run-android
npm start
```

```
npm install react-native-tab-navigator
```

####  官方组件 Navigator
##### 什么是 Navigator
Navigator 是一个导航组件
> 进入下一个界面，返回上一个界面
> 传递数据给下一个界面，返回数据给上一个界面

##### Navigator 的基本使用
- 导入 Navigator
- render 中返回 Navigator 
- 调用 Navigator 的相应方法











# Angular
## Angular 2
### 重要特性
新特性
>移除controller+$scope设计，改用组建式开发（更容易上手）
>性能更好（渲染更快，变化检测效率更高）
>优先为移动应用设计（Angular Mobile Toolkit）
>更加贴合未来的标准（如ES6/7、WebComponent）

无缝升级方案
>UpgradeAdapter

### 核心概念
Component(组件)、Metadata(元数据)、Templates(模板)、Data binding(数据绑定)、Services(服务)、Directives(指令)、Dependency Injection(依赖注入)、Modules(模块)

#### 组件
| 全生命周期支持 |  |
|:---:|:---:|
|Constructor|构造器初始化|
|OnChanges|第一次触发数据变化钩子|
|OnInit|组件初始化|
|OnChanges|运行期间触发数据变化钩子|
|OnDestroy|组建销毁前|

```TypeScript
@Component({ // 装饰器
	/*
	 * 元数据
	 */
	selector: 'hello',
	template: '<p>{{greeting}}</p>' // 模板
})

export class HelloComponent { //组件类
	private greeting: string;
	constructor() {
		this.greeting = 'Hello, Angular 2!'
	}
}
```

||元数据↓||
|:---:|:---:|:---:|
|普通类→|装饰器@Component|→组件|

模板
>内部模板
>> ```template: '<p>{{greeting}}</p>'```

>外部模板
>> ```templateUrI: "path/to/hello.html"```

>数据绑定
>>插值（interpolation）
>>> ```{{greeting}}```

>>属性绑定-[value]
>>>把组件类的数据传递到组件模板上
>>> ```<input [value]="myData" />```

>>事件绑定-(keyup)
>>> 把模板产生的数据通过函数调用的方式传递到组件类
>>>```<input (keyup)="handle($event)" />```

>>双向绑定-[(ngModel)]
>>> 数据双向流动
>>>```<input [(ngModel)]="myData" />```

组件渲染
> ```<hello></hello>```
> ```selector: 'hello'```
>
```TypeScript
<hello>
	<p>Hello, Angular 2!</p>
</hello>
```

组件树
>子组件
>>
```TypeScript
@Component({
	selector: 'contact',
	template: '...'
})
export class ContactComponent {
	@Input() data: IContact;
}
```

>父组件
>>
```TypeScript
@Component({
	selector: 'contact-list',
	template: `
		<ul>
			<li *ngFor="let item of datas">
				<contact [data]="item"></contact>
			</li>
		</ul>
	`,
})
export class ContactListComponent {
	private datas: IContact[];
	//...
}
```

>数据流向
>> ```{父组件-组件类} →属性绑定→ <父组件-模板> →属性绑定@Input→ {子组件-组件类} →属性绑定→ <子组件-模板>```
>> ```{父组件-组件类} ←事件绑定← <父组件-模板> ←事件绑定@Output← {子组件-组件类} ←事件绑定← <子组件-模板>```

#### 指令
组件继承自指令，组件是自身带有模板的指令

指令
>属性指令
>> 改变组件模板的外管或者行为，如样式等

>结构指令
>>改变组件模板的DOM结构，如ngIf用来插入或者移除DOM节点

示例
>>
```TypeScript
// textColor = "red"
template: "<p [style.color]="textColor">{{greeting}}</p>"
```

>↓
>>
```TypeScript
<hello>
	<p style="color:red">Hello, Angular 2!</p>
</hello>
```

自定义指令
>
```TypeScript
// import ElementRef, Renderer

@Directive({
	selector: '[highlight]'
})
export class HighlightDirective {
	constructor(el: ElementRef, renderer: Renderer) {
		renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
	}
}
```
>
```TypeScript
template: '<p highlight>{{greeting}}</p>'
```

#### 服务和依赖注入
##### 服务
服务是实现专一目的的逻辑单元，如日志服务
```TypeScript
export class LoggerService {
	constructor() {}

	debug(msg: string) {
		console.log(msg);
	}
	error(msg: string) {
		console.log(msg);
	}
}
```

##### 依赖注入
组件引入外部构建（如服务）的一种机制
> LoggerService →实例化→ **依赖注入** →注入→ 组件
```TypeScript
// import LoggerService

@Component({
	selector: 'hello',
	template: '<p>{{greeting}}</p>'
	providers: [LoggerService]  //依赖注入配置
})
export class HelloComponent {
	private greeting: string;
	constructor(logger: LoggerService) {  // 自动传入LoggerService实例
		this.greeting = 'Hello, Angular 2!';
		logger.debug('构造函数执行完毕');
	}
}
```

分层注入（hierarchical dependency injection）
>可以在适当的位置重新创建一个新的实例
>>根组件  注入LoggerService( warn )
>>子组件B  重新注入LoggerService( debug )

>分层注入不会影响到组件树中的其他分支
>>所以子组件A依然使用原来的warn级别的服务

#### 模块
模块由两层含义
>代码框架以模块形式组织（文件模块）
>功能单元以模块形式组织（应用模块）

##### 文件模块
Angular 2
>@Angular/core 核心模块
>>变化检测、依赖注入、渲染

>@Angular/common 通用模块
>> 常用的内置指令

>@Angular/forms 表单模块
>> 表单相关的组件和指令

>@Angular/http 网络模块
>> 处理网络请求相关的服务

>... ...

文件模块使用
```TypeScript
import { Http } from "@angular/http"

// @Component装饰器
import { Component } from "@angular/core"
// @Directive装饰器
import { Directive } from "@angular/core"

import { ELementRef, Renderer } from "@angular/core"
```

##### 应用模块
应用模块就是对应用内零散的组件、服务、指令等按功能进行分类包装
一个组件可以任意使用本模块的指令，但是不能跨模块使用别的模块的指令，若要实现跨模块的使用，则需要使用导入导出功能

>declaration: 包装组件或指令等
>providers: 依赖注入
>>使用方法大致相同，区别在于作用域，注入在模块中的服务可以在应用全局使用；而注入在组件中的仅能在该组件以及它的子组件使用

>imports: 导入其他模块
>>导入之后就能继承其他模块暴露出的组件和指令等

>bootstrap: 设置根组件
>>指定Angular2应用组件树中的根组件，这个属性只在跟模块中使用

>exports: 导出组件或指令等
>>用来设置该模块对外暴露的组件或指令

```TypeScript
@NgModule({
	declaration: [
		AppComponent,
		SomeDirective
	],
	providers: [ LoggerService ],
	imports: [ OtherModule ],
	bootstrap: [ AppComponent ],
	exports: [ SomeDirective ]
})
export class AppModule {}
```

** 服务不在导入导出的范围 **
** 应用模块支持懒加载 **

## 快速上手
### TypeScript
TypeScript是微软开发的编程语言
>是JavaScript的超集，完全兼容JavaScript
>运行前需要预编译生成JavaScript代码
>加入类型判断，编译时进行类型检查
>文件扩展名为.ts

TypeScript = Type + JavaScript
>简单语法
>>
```TypeScript
var book: string = "Angular 2";
var num: number = 123;

function log(msg: string): void {
	console.log(msg);
}
```

>类和接口
>>
```TypeScript
// 接口
interface Shape {
	area(): number;
}
// 类
class Rectangle implements Shape {
	constructor(
		private width: number,
		private length: number
	) {}
	// 实现接口的方法
	area() {
		return this.width * this.length;
	}
}
```

>装饰器
>>一种特殊类型的声明
>>能够被附加到类，方法，访问符，属性或参数上
>>>
```TypeScript
@SomeDecorator({
	// 配置
})
class SomeClass {}
```
>>>
```
function SomeDecorator(config: any) {
	return function(cls: any) { // cls为类的构造函数
		cls.isSealed = true;
		return cls;
	}
}
```



## Angular CLI
简明框架
>Amber CLI → Angular CLI ← Webpack

### Hello Angular CLI
```
ng new my-first-AngularApp

cd my-first-AngularApp

ng serve
```

### 重要指令
ng help
#### ng new
开发辅助  --dry-run
> 只是将流程走一遍，并不实际创建项目

修改项目默认值  --prefix

#### ng serve
--port 4201
>更改端口号

--open
>自动打开浏览器

#### ng generate
```
ng generate component test
```

```
ng g service test -m app.module
```

#### ng test
```
ng test
```

#### ng build
```
ng build
```

--aot
>优化，Angular预编译

-prod
>生产模式


## Angular 4.0
### Angular 新特性
全新命令行工具AngularCLI
服务器端渲染
移动和桌面兼容

### 开发
安装jquery、bootstrap、类型描述文件
```
npm install jquery --save-dev
npm install bootstrap --save-dev
npm install @types/jquery --save-dev
npm install @types/bootstrap --save-dev
```

生成组件
```
// 导航栏
ng generate component navbar 
// 底部
ng g component footer 
// 搜索
ng g component search 
// 轮播图
ng g component carousel 
// 产品
ng g component product 
// 星级评价
ng g component stars 
```

指令
>>
```TypeScript
<div *ngFor="let product of products"></div>
```
>>> products与后台的products绑定在一起
>>> ```*ngFor```是循环product的属性
>>> 每次循环的元素放在product这个变量中
>>> 之后就可以使用插值表达式例如`{{product.price}}`
>>>> 数据绑定，用后台数据来驱动页面

>属性绑定
>>
```TypeScript
private imgUrl = "https://placekitten.com/320/150";
```
>>
```TypeScript
<img [src]="imgUrl">
```

### 路由
>Routes
>> 路由配置，保存着哪个URL对应展示哪个组件，以及在哪个RouterOutlet中展示组件

>RouterOutler
>> 在HTML中标记路由内容呈现位置的占位符指令

>Router
>>负责在运行时执行路由的对象，可以通过调用其navigate()和navigateByUrl()方法来导航到一个指定的路由

>RouterLink
>> 在HTML中声明路由导航用的指令

>ActivatedRoute
>>当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等

```
ng new router --routing

ng g component home
ng g component product
ng g component code404
```
在app-routing.module.ts
```TypeScript
import {HomeComponent} from "./home/home.component"
import {ProductComponent} from "./product/product.component"
import {Code404Component} from './code404/code404.component'

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'product', component: ProductComponent},
	{path: '**', component: Code404Component}
];
// 注意，path中不加斜杠
```
在app.component.html
```TypeScript
<a [routerLink]="['/']">主页</a>
<a [routerLink]="['/product']">商品详情</a>
// 注意，这里的路径一定要加斜杠
// 参数是数组，可以传递一些参数

<input type="button" value="商品详情" (click)="toProductDetails()">
// 事件绑定

<router-outlet></router-outlet> //组件显示在这个插座后面
```
在app.component.ts
```TypeScript
export class AppComponent {
	title = 'app works';

	constructor(private router: Router){}

	toProductDetails() {
		this.router.navigate(['./product']);
	}
}
```
在code404.component.html
```
<p>页面不存在</p>
```

#### 传递数据
在路由时传递数据
>在查询参数中传递数据
>>
```
/product?id=1&name=2  =>  ActivatedRoute.queryParam[id]
```
>>app.component.html
>>>
```TypeScript
<a [routerLink]="['/product']" [queryParams]="{id:1}"></a>
```

>>在product.component.ts获取
>>>
```TypeScript
export class ProductComponent implements OnInit {
	private productId: number;
	constructor(private routeInfo: ActivatedRoute) {}
	ngOnInit() {
		this.productId = this.routeInfo.snapshot.queryParams["id"];
	}
}
```

>>在product.component.html
>>>
```HTML
<p>
	商品ID是：{{productId}}
</p>
```

> 在路由路径中传递数据
>>
```
{{path:/product/:id}} => /product/1 => ActivatedRoute.queryParam[id]
```
>>在app.component.ts
>>>
```TypeScript
const routes: Routes = [
	{path: 'product/:id', component: ProductComponent}
]
```

>>在app.component.html
>>>
```HTML
<a [routerLink]="['/product', 1]"></a>
```

>>在product.component.ts获取
>>>
```TypeScript
export class ProductComponent implements OnInit {
	private productId: number;
	constructor(private routeInfo: ActivatedRoute) {}
	ngOnInit() {
		this.productId = this.routeInfo.snapshot.params["id"];
		// snapshot 参数快照
	}
}
```

> 在路由配置中传递数据
>>
```
{path:/product, component: ProductComponent, data:[{isProd: true}]} => ActivatedRoute.data[0][isProd]
```

参数快照、参数订阅
>app.component.ts
>
```TypeScript
toProductDetails() {
	// 参数订阅
	this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);
	this.router.navigate(['./product', 2]);
}
```

#### 重定向路由
>用户在访问一个特定的地址时，将其重定向到另一个指定的地址
>> `www.aaa.com => www.aaa.com/products`
>> `www.aaa.com/x => www.aaa.com/y`

>app-routing.module.ts
>>
```TypeScript
const routes: Routes = [
	{path: 'home', component: HomeComponent}
]
```

>app.component.html
>>
```html
<a [routerLink]="['/home']">主页</a>
```

>app-routing.module.ts
>>
```TypeScript
const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent}
]
```

#### 子路由
```
{path: 'home', component: HomeComponent, 
	children: [
		{
			path: '', component: XxxComponent
		},
		{
			path: '/yyy', component: YyyComponent
		}
	]
}
```
↓
新建组件
```
ng g component productDesc
ng g component sellerInfo
```

product-desc.component.html
```HTML
<p>这是一个牛X的商品</p>
```
seller-info.component.html
```HTML
<p>销售员ID是{{sellerId}}.</p>
```
seller-info.component.ts
```TypeScript
export class SellerInfoComponent implement OnInit {
	private sellerId: number;
	constructor(private routeInfo: ActivatedRoute) {}
	ngOnInit(){
		this.sellerId = this.routeInfo.snapshot.params["id"];
	}
}
```
app.component.module.ts
```TypeScript
const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'product/:id', component: ProductComponent, children: [
		{path: '', component: ProductDescComponent},
		{path: 'seller/:id', component: SellerInfoComponent}
	]},
	{path: '**', component: Code404Component}
];
```
product.component.html
```HTML
<a [routerLink]="['./']">商品描述</a>
<a [routerLink]="['./seller', 99]">销售员信息</a>
<router-outlet></router-outlet>
```

#### 辅助路由
```
<router-outlet></router-outlet>
<router-outlet name="aux"></router-outlet>

{path: 'xxx', component: XxxComponent, outlet: "aux"}
{path: 'yyy', component: YyyComponent, outlet: "aux"}

<a [routerLink]="{'/home', {outlet: {aux: 'xxx'}}}">Xxx</a>
<a [routerLink]="{'/product', {outlet: {aux: 'yyy'}}}">Yyy</a>
```
↓
app.component.html
```html
<a [routerLink]="[{outlets: {primary: 'home', aux: 'chat'}}]">开始聊天</a>
<a [routerLink]="[{outlets: {aux: null}}]">结束聊天</a>

<router-outlet></router-outlet>
<router-outlet name="aux"></router-outlet>
```

```
ng g component chat
```

chat.component.html
```html
<textarea placeholder="请输入聊天内容" class="chat"></textarea>
```

chat.component.css
```css
.chat {
	background: green;
	height: 100px;
	width: 30%;
	float: left;
	box-sizing: border-box;
}
```

product 和 home 组件分别占其余的70%


app-routing.module.ts
```TypeScript
{path: 'chat', component: ChatComponent, outlet: 'aux'}
```

#### 路由守卫（钩子）
只有当用户已经登录并拥有某些权限时才能进入某些路由
一个由多个表单组件组成的向导，例如注册流程，用户只有在当前路由的组件中填写了满足要求的信息才可以导航到下一个路由
当用户未执行保存操作而试图离开当前导航时提醒用户

> CanActivate: 处理导航到某路由的情况
> CanDeactivate: 处理从当前路由离开的情况
> Resolve: 在路由激活之前获取路由数据

guard > login.guard.ts
```TypeScript
import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
	canActivate() {
		
		let loggedIn: boolean = Math.random() < 0.5;

		if(!loggedIn) {
			console.log("用户未登录")
		}

		return loggedIn;
	}
}
```

app-routing.module.ts
```TypeScript
const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'product/:id', component: ProductComponent, children: [
		{path: '', component: ProductDescComponent},
		{path: 'seller/:id', component: SellerInfoComponent}
	], canActivate: [LoginGuard]},
	{path: '**', component: Code404Component}
];

@NgModule({
	providers: [LoginGuard]
})
```


guard > unsaved.guard.ts
```
import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';

export class UnsaveGuard implements CanDeactivate<ProductComponent> {
	canDeactivate(component: ProductComponent) {
		return window.confirm('你还没有保存，确定要离开么？')
	}
}
```

app-routing.module.ts
```TypeScript
const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'product/:id', component: ProductComponent, children: [
		{path: '', component: ProductDescComponent},
		{path: 'seller/:id', component: SellerInfoComponent}
	], canActivate: [LoginGuard], canDeactivate: [UnsaveGuard]},
	{path: '**', component: Code404Component}
];

@NgModule({
	providers: [LoginGuard, UnsaveGuard]
})
```

guard > product.resolve.ts

product.component.ts
```TypeScript
export class ProductComponent implements OnInit{
	private productId: number;

	private productName: string;

	constructor(private routeInfo: ActivatedRoute){

	}
	ngOnInit() {


		this.routeInfo.data.subscribe((data: {product: Product}) => {
			this.productId = data.product.id;
			this.productName = data.product.name;
		});
	}
}

export class Product {
	constructor(public id: number, public name: string){

	}
}
```

product.resolve.ts
```TypeScript
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../product/product.component'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable()
export calss ProductResolve implements Resolve <Product> {

	private productId: number;

	private productName: string;
	
	constructor(private router: Router){

	}

	resolve(route: ActivatedRouteSnapshot, state: RouteStateSnapshot): Observable<Product>|Promise<Product>|Product {
		
		let productId: number = route.param["id"];

		// 这里认为产品ID为1时正确
		if(productId == 1){
			return new Product(1, "iPhone 7");
		} else {
			this.router.navigate(['/home']);
			return undefined;
		}

	}
}
```

app-routing.module.ts
```TypeScript
const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'product/:id', component: ProductComponent, children: [
		{path: '', component: ProductDescComponent},
		{path: 'seller/:id', component: SellerInfoComponent}
	], resolve: {product: ProductResolve}},
	{path: '**', component: Code404Component}
];

@NgModule({
	providers: [LoginGuard, UnsaveGuard, ProductResolve]
})
```

product.component.html
```html
<p>商品名称是：{{productName}}</p>
```

### 依赖注入
依赖注入：Dependency Injection 简称 DI
>侧重于描述手段，如何实现控制反转，使用的手段叫作依赖注入
>
```
var product = new Product();
creatShipment(product);
```
>
```
var product = new MockProduct();
creatShipment(product);
```
>
```
var product = new Product();
var shipCompany = new shipCompany();
var address = new Address();
var order = new Order();
order.setAddress(address);
createShipment(product, shipCompany, order);
```

控制反转：Inversion of Control 简称IOC
>侧重于描述目的，代码的控制权由内部转移至外部，实现的框架叫作IOC容器

#### 使用依赖注入模式的好处
##### 松耦合，可重用
```TypeScript
@NgModule({
	providers: [ProductService]
	// 相当于 providers: [{provide:ProductService, useClass: ProductService}]

	...
})
export class AppModule{ }

@Component({
	...
})
export class ProductComponent {
	product: Product;
	constructor(productService: ProductService) {
		this.product = productService.getProduct();
	}
}
```

```
@NgModule({
	providers: [{provide:ProductService, useClass: AnotherProductService}]

	...
})
export class AppModule{ }

@Component({
	...
})
export class ProductComponent {
	product: Product;
	constructor(productService: ProductService) {
		this.product = productService.getProduct();
	}
}
```

##### 可测试性

#### 注入器和提供器
##### 注入器
```
constructor(private productService: ProductService){...}
```

##### 提供器
```
providers: [ProductService]

providers: [{provide: ProductService, useClass: ProductService}]

providers: [{provide: ProductService, useFactory: () => {...}}]
```


##### 例
```
ng g component product1
ng g service shared/product
```

product.service.ts
```TypeScript
export class ProductService {
	constructor() { }

	getProduct(): Product {
		return new Product(0, "iPhone X", 123456, "最新款")
	}
}

export class Product {
	constructor(
		public id: number,
		public title: string,
		public price: number,
		public desc: string
	){

	}
}
```

app.module.ts
```
import { ProductService } from "./shared/product.service"

@NgModule({
	providers: [ProductService]
})
```

product1.component.ts
```TypeScript
export class Product1Component implement OnInit {
	product: Product;

	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.product = this.productService.getProduct();
	}
}
```

product1.component.html
```HTML
<div>
	<h1>商品详情</h1>
	<h2>名称：{{product.title}}</h2>
	<h2>价格：{{product.price}}</h2>
	<h2>描述：{{product.desc}}</h2>
</div>
```

app.component.html
```HTML
<div>
	<div>
		<h1>基本的依赖注入样例</h1>
	</div>
	<div>
		<app-product1></app-product1>
	</div>
</div>
```
↓↓↓
```
ng g component product2
ng g service shared/anotherProduct
```

another-product.service.ts
```TypeScript
export class AnotherProductService implements ProductService {

	getProduct(): Product {
		return new Product(1, "iPhone XXX", 654321, "最最新款")
	}

	constructor() {}
}
```

product2.component.ts (和上面几乎一毛一样)
```TypeScript
@Component({
	providers: [{
		provider:ProductService, useClass: AnotherProductService
	}]
})

export class Product1Component implement OnInit {
	product: Product;

	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.product = this.productService.getProduct();
	}
}
```

product.component.html (和上面真的一毛一样)
```HTML
<div>
	<h1>商品详情</h1>
	<h2>名称：{{product.title}}</h2>
	<h2>价格：{{product.price}}</h2>
	<h2>描述：{{product.desc}}</h2>
</div>
```

app.component.html
```HTML
<div>
	<div>
		<h1>基本的依赖注入样例</h1>
	</div>
	<div>
		<app-product1></app-product1>
		<app-product2></app-product2>
	</div>
</div>
```
↓↓↓
```
ng g service shared/logger
```

logger.service.ts
```TypeScript
export class LoggerService {
 	constructor() {}

 	log(message: string) {
		console.log(message);
 	}
}
```

product.service.ts
```TypeScript
import { Injectable } from '@angular/core';
import { LoggerService } form "./shared/logger.service";

@Injectable()
export class ProductService {
	constructor(private logger LoggerService) {}

	getProduct(): Product {
		this.logger.log("getProduct方法被调用");
		//...
	}
}
```

app.module.ts
```TypeScript
@NgModule({
	providers: [ProductService, LoggerService]
})
```

#### 使用工厂和值声明提供器
首先删除product2.component.ts中的providers
此时product1和product2一样

app.module.ts
```TypeScript
@NgModule({
	providers: [{
		provide: ProductService,
		useFactory: () => {
			let logger = new LoggerService();
			let dev = Math.random() > 0.5;
			if(dev) {
				return new ProductService(logger);
			} else {
				return new AnotherProductService(logger);
			}
		}
	}, LoggerService]
})
```

another-product.service.ts
```TypeScript
constructor(public logger: LoggerService) {}
```

product.service.ts
```TypeScript
constructor(public logger: LoggerService) {}
```
↓↓↓
app.module.ts
```TypeScript
@NgModule({
	providers: [
		{
			provide: ProductService,
			useFactory: (logger: LoggerService, isDev) => {
				if(isDev) {
					return new ProductService(logger);
				} else {
					return new AnotherProductService(logger);
				}
			},
			deps:[LoggerService, "IS_DEV_ENV"]
		}, 
		LoggerService, 
		{
			provide: "IS_DEV_ENV", useValue: false
			/*
			 * provide: "APP_CONFIG", useValue: {isDev: false}
			 */
		}
	]
})
```
或者
```TypeScript
@NgModule({
	providers: [
		{
			provide: ProductService,
			useFactory: (logger: LoggerService, appConfig) => {
				if(appConfig.isDev) {
					return new ProductService(logger);
				} else {
					return new AnotherProductService(logger);
				}
			},
			deps:[LoggerService, "APP_CONFIG"]
		}, 
		LoggerService, 
		{
			provide: "APP_CONFIG", useValue: {isDev: false}
		}
	]
})
```

#### 注入器的层级关系
应用级注入器
> 主组件注入器
>> 子组件注入器
>>> ...

↓↓↓ 只是一个例子，实际中尽量不要用这种方法，用上面那个，除非你在写框架
```
@import { Injector } from '@angular/core';

export class Product2Component implements OnInit {
	product: Product;

	private productService: ProductService;

	constructor(private injector: Injector) {
		this.productService = injector.get(ProductService)
	}

	ngOnInit() {
		this.product = this.productService.getProduct();
	}
}
```

### 数据绑定、响应式编程和管道
#### 数据绑定
```
<h1>{{productTitle}}</h1>
// 使用插值表达式将一个表达式的值显示在模板上

<img [src] = "imgUrl">
// 方括号将HTML标签的一个属性绑定到一个表达式上

<button (click)="toProductDetials()">商品详情</button>
// 使用小括号将组件控制器的一个方法绑定为模板上一个事件的处理器
```

##### 事件绑定
```
<input (input)="onInputEvent($event)">
```
>小括号表示这是一个事件绑定，括号内为事件的名称；当被触发时，等号右侧双引号内的表达式将会被执行
>等号后面也可以不是一个函数调用，可以是一个属性赋值
>>
```
<button (click)="saved = true">
```

>绑定的时间既可以是标准的DOM事件，也可以是自定义事件

##### DOM属性绑定
插值表达式和属性绑定
>插值表达式和属性绑定是一个东西
>>component.html
```HTML 
<img [src]="imgUrl"><br>
<img src="{{imgUrl}}">

// 在渲染这个视图之前，Angular会把所有的插值表达式翻译成相应的属性绑定
// 从技术的角度是一毛一样的，用哪个都可以，但是要尽量统一风格
```

HTML属性和DOM属性的区别
>HTML属性指定了初始值，DOM属性表示当前值，HTML属性初始化DOM属性，然后它的任务就完成了。DOM属性的值可以改变，但是HTML属性的值不可以改变
>>component.html
```HTML
<input value="Tom" (input)="doOnInput($event)">
<button disabled>点我</button>
```
>>component.ts
```TypeScript
doOnInput(event: any) {
	// DOM属性
	console.log(event.target.value);
	// HTML属性
	console.log(event.target.getAttribute('value'))
}
```

HTML属性和DOM属性的关系
> 少量HTML属性和DOM属性之间有着一对一的映射，如id
> 有些HTML属性没有对应的DOM属性，如colspan
> 有些DOM属性没有对应的HTML属性，如textContent
> 就算是名字相同，HTML属性和DOM属性也不是同一样东西
> HTML属性的值指定了初始值；ODM属性的值表示当前值。DOM属性的值可以改变；HTML属性的值不能改变
> 模板绑定是通过DOM属性和事件来工作的，而不是HTML属性

##### HTML属性绑定
基本HTML属性绑定
>
```HTML
<td [attr.colspan="tableColspan"]>Something</td>
```

CSS类绑定
>
```HTML
<div class="aaa bbb" [class]="someExpression">something</div>
<div [class.special]="isSpecial">something</div>
<div [ngClass]="{aaa: isA, bbb: isB}"></div>
```

样式绑定
>
```HTML
<button [style.color]="isSpecial ? 'red' : 'green">Red</button>
<div [ngStyle]="{'font-style':this.canSave ? 'italic' : 'normal'}"></div>
```

例↓
基本HTML属性绑定
>component.html
```HTML
<table>
	/*
	 * 这样会报错
	 * <tr><td colspan="{{1+1}}">慕课网</td></tr>
	 */

	 <tr><td [attr.colspan]="size">慕课网</td></tr>
	 // 这样好了
</table>
```

CSS类绑定
>component.html
```HTML
<div class="a b c">慕课网</div>
```
component.css
```CSS
.a {
	background: yellow;
}
.b {
	color: red;
}
.c {
	font-size: 60px;
}
```
>> 替换一下↓

>component.html
```HTML
<div [class]="divClass">慕课网</div>
```
component.ts
```TypeScript
divClass: string;

constructor() {
	setTimeout(() => {
		this.divClass = "a b c";
	}, 3000)
}
```
>> 再替换下

>component.html
```HTML
<div class="a b" [class.c]="isBig">慕课网</div>
```
component.ts
```TypeScript
isBig: boolean = false;

constructor() {
	setTimeout(() => {
		this.isBig = true;
	}, 3000)
}
```
>> 继续替换

> component.html
```HTML
<div [ngClass]="divClass">慕课网</div>
```
component.ts
```TypeScript
divClass: any = {
	a: false,
	b: false,
	c: false
}
constructor() {
	setTimeout(() => {
		this.divClass={
			a: true,
			b: true,
			c: true
		};
	}, 3000)
}
```

样式绑定
>component.html
```HTML
<div [style.color]="idDev ? 'red' : 'blue">慕课网</div><hr>
<div [style.font-size.em]="idDev ? 3 : 1>慕课网</div>
```
component.ts
```TypeScript
idDev: boolean = true;
constructor() {
	setTimeout(() => {
		this.isDev = false;
	}, 3000)
}
```
>> 设置多个内联样式

>component.html
```HTML
<div [ngStyle]="divStyle">慕课网</div>
```
component.ts
```TypeScript
divStyle: any = {
	color: 'red',
	background: 'yellow'
}
constructor() {
	setTimeout(() => {
		this.divStyle = {
			color: 'yellow',
			background: 'red'
		}
	}, 3000)
}
```

##### 双向绑定
可以使视图和模型保持同步，无论视图和模型哪一方进行改变，另一方都会立即同步
>component.html
```HTML
<input [value]="name" (input)="doOnInput($event)">
{{name}}
```
component.ts
```TypeScript
name: string;
constructor() {
	setInterval(() => {
		this.name = "Tom";
	}, 3000)
}

doOnInput(event) {
	this.name = event.target.value;
}
```
>> 简化

>component.html
```HTML
<input [(ngModel)]="name">
// 注意：方括号在外面，小括号在里面
{{name}}
```

#### 响应式编程

#### 管道
管道负责原始值到显示值的转换
管道把数据作为输入，然后转换它，给出期望的输出
component.html
```HTML
<p>我的生日是{{birthday}}</p>
<p>我的生日是{{birthday | date}}</p>

<p>我的生日是{{birthday | date | uppercase}}</p>
<p>我的生日是{{birthday | date | lowercase}}</p>

<p>我的生日是{{birthday | date:'yyyy-MM-dd HH:mm:ss'}}</p>
<p>我的生日是{{birthday | date:'yyyy-MM-dd hh:mm:ss'}}</p>
// 严格注意大小写，H为24小时制，h为12小时制

<p>圆周率是{{pi}}</p>
<p>圆周率是{{pi | number:'2.1-4'}}</p>
// 第一个2是两位整数；1-4是最少一位小数，最多四位小数

<p>圆周率是{{pi | async}}</p>
// 异步管道，处理异步的流
```
component.ts
```TypeScript
birthday: Date = new Date();
pi: number = 3.1415926;
```

自定义管道
```
ng g pipe pipe/multiple
```
**管道和组件一样，需要声明在app.module.ts的@NgModule的declarations中**
pipe/mutiple.pipt.ts
```TypeScript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'multiple'
})
export class MultiplePipe implements PipeTransform{
	transform(value: number, args?: number): any {
		if(!args) {
			args = 1;
		}
		return value * args;
	}
}
```

bind/bind.component.html
```HTML
<p>试试我自己写的管道{{size | multiple}}</p>
// 输出 7

<p>试试我自己写的管道{{size | multiple:'2'}}</p>
// 输出14
```

bind/bind.component.ts
```TypeScript
size: number = 7;
```

### 组件间通讯
#### 输出属性
通过输出属性来向组件外发射事件，并通过事件携带数据

模拟股票报价
```
ng g component priceQuote
```

price-quote.component.ts
```TypeScript
export class PriceQuoteComponent implements OnInit {
	stockCode: string = "IBM";

	price: number;

	constructor() {}

	ngOnInit() {}
}
export class PriceQuote {
	constructor(
		public stockCode: string,
		public lastPrice: number
	){}
}
```

price-quote.component.html
```HTML
<div>
	这里是报价组件
</div>
<div>
	股票代码是{{stockCode}}，股票价格是{{price | number: '2.2-2'}}
</div>
```

app.component.html
```HTML
<app-price-quote></app-price-quote>
```

通过定时器模拟股票价格变化
price-quote.component.ts
```TypeScript
export class PriceQuoteComponent implements OnInit {
	stockCode: string = "IBM";

	price: number;

	constructor() {
		setInterval(() => {
			let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());

			this.price = priceQuote.lastPrice;
		}, 1000)
	}

	ngOnInit() {}
}
```

输出出去
price-quote.component.ts
```TypeScript
import { EventEmitter } from "@angular/core";

export class PriceQuoteComponent implements OnInit {
	stockCode: string = "IBM";

	price: number;

	@Output()
	/*
	 * 如果需要改名字，直接在Output中添加就可以
	 * @Output('priceChange')
	 * 之后捕捉事件时也需要同步修改
	 */
	lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

	constructor() {
		setInterval(() => {
			let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());

			this.price = priceQuote.lastPrice;

			this.lastPrice.emit(priceQuote);
		}, 1000)
	}

	ngOnInit() {}
}
```

父组件接收
app.component.ts
```TypeScript
export class AppComponent {
	stock = "";

	priceQuote:PriceQuote = new PriceQuote("", 0);

	priceQuoteHandler(event: PriceQuote) {
		this.priceQuote = event;
	}
}
```

捕捉事件
app.component.html
```HTML
<app-price-quote (lastPrice)="priceQuoteHandler($event)"></app-price-quote>
/*
 * 就是这里
 * <app-price-quote (priceChange)="priceQuoteHandler($event)"></app-price-quote>
 */
<div>
	这是在报价组件外部
</div>
<div>
	股票代码是{{priceQuote.stockCode}}，股票价格是{{priceQuote.lastPrice | number: '2.2-2'}}
</div>
```

#### 中间人模式
中间人负责从一个组件接收数据，并发送给另一个组件

股票添加下单功能
price-quote.component.html
```HTML
<div>
	我是报价组件
</div>
<div>
	股票代码是{{stockCode}}，股票价格是{{price | number: '2.2-2'}}
</div>
<div>
	<input type="button" value="立即购买" (click)="buyStock($event)">
</div>
```

price-quote.component.ts
```TypeScript
import { EventEmitter } from "@angular/core";

export class PriceQuoteComponent implements OnInit {
	stockCode: string = "IBM";

	price: number;

	@Output()
	lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

	@Output()
	buy: EventEmitter<PriceQuote> = new EventEmitter();

	constructor() {
		setInterval(() => {
			let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());

			this.price = priceQuote.lastPrice;

			this.lastPrice.emit(priceQuote);
		}, 1000)
	}

	buyStock(event) {
		this.buy.emit(new PriceQuote(this.stockCode, this.price));
	}

	ngOnInit() {}
}
```

app.component.html
```HTML
<app-price-quote (buy)="buyHandler($event)"></app-price-quote>
<app-order [priceQuote]="priceQuote"></app-order>
```

app.component.ts
```TypeScript
export class AppComponent {
	stock = "";

	priceQuote:PriceQuote = new PriceQuote("", 0);

	buyHandler(event: PriceQuote) {
		this.priceQuote = event;
	}
}
```

order/order.component.ts
```TypeScript
export class OrderComponent implements OnInit {
	@Input()
	priceQuote: PriceQuote;

	constructor() {}

	ngOnInit() {}
}
```

order/order.component.html
```HTML
<div>
	我是下单组件
</div>
<div>
	买100手{{priceQuote.stockCode}}股票，买入价格是{{priceQuote.lastPrice | number: '2.2-2'}}
</div>
```

#### 组件生命周期钩子
组件初始化
> constructor
>> ngOnChanges

> ngOnInit
>> ngDoCheck

> ngAfterContentInit
>> ngAfterContentChecked

> ngAfterViewInit
>> ngAfterViewChecked

↓ ↓ ↓
组件检测
>> ngOnChanges
>> ngDoCheck
>> ngAfterContentChecked
>> ngAfterViewChecked

↓ ↓ ↓
组件销毁
> ngOnDestroy


*一级只会调用一次，二级可以多次调用，其中组件初始化和变更检测的钩子是一样的，所以一共九个钩子*

```
ng g component life
```
life.component.ts
```TypeScript
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core'

let logIndex:number = 1;

export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input()
	name: string;
	
	logIt(msg:string) {
		console.log(`#${logIndex++} ${msg}`);
	}

	constructor() {
		this.logIt("name属性在constructor里的值是："+name);
	}

	ngOnInit() {
		this.logIt("ngOnInit");
	}

	ngOnChanges(changes: SimpleChanges): void {
		let name = changes['name'].currentValue;
		this.logIt("name属性在ngOnChanges里的值是："+name);
	}

	ngDoCheck(): void{
		this.logIt("ngDoCheck");
	}

	ngAfterContentInit(): void{
		this.logIt("ngAfterContentInit");
	}

	ngAfterContentChecked(): void{
		this.logIt("ngAfterContentChecked");
	}

	ngAfterViewInit(): void{
		this.logIt("ngAfterViewInit");
	}

	ngAfterViewChecked(): void{
		this.logIt("ngAfterViewChecked");
	}

	ngOnDestroy(): void{
		this.logIt("ngOnDestroy");
	}

}
```

*本案例只观察钩子调用顺序*

app.component.ts
```TypeScript
export class AppComponent {
	title = 'Tom';
}
```

app.component.html
```HTML
<app-life [name]="title"></app-life>
```

最终得到
> `#1 name属性在constructor里的值是：`
>> 当一个组件被创建时，它的构造函数首先会被调用，构造函数一定存在，所以一定会被调用

> `#2 name属性在ngOnChanges里的值是：Tom`
>> 当一个父组件修改或初始化一个子组件的输入属性的时候被调用的，如果没有输入属性，ngOnChanges永远不会被调用，并且首次调用一定在ngOnInit之前，可以被多次调用，每次输入属性变化都会被调用
>> 输入属性name在构造函数中是未赋值的，它是在第一次调用ngOnChanges时被调用初始化的
>> 如果你的组件的初始化逻辑需要依赖输入属性的值，这些初始化逻辑要写在ngOnInit中而不是constructor中

> `#3 ngOnInit`
>> 如果有输入属性，则在ngOnChanges首次被调用之后被调用，用来初始化组件或指令

> `#4 ngDoCheck`
>> 用来检测，是在Angular变更检测周期中被调用

> `#5 ngAfterContentInit`
> `#6 ngAfterContentChecked`
>> 与组件的内容投影相关

> `#7 ngAfterViewInit`
> `#8 ngAfterViewChecked`
>> 与组件模板View视图的初始化和检查相关

> `#9 ngOnInit`
> `#10 ngOnInit`
> `#11 ngOnInit`

#### OnChanges钩子
##### 可变对象和不可变对象

字符串是不可变的
> "Hello"和"Hello World"是不变的，greeting的值是可变的，它指向的内存地址从第一个字符串的地址，变为了第二个字符串的地址

对象是可变的
> 改的是user这个内存地址的对象的内容，而user指向的内存地址并没有变

app.component.ts
```TypeScript
export class AppComponent {
	title = 'Tom';

	constructor() {
		var greeting = "Hello"; 
		greeting = "Hello World";

		var user = {name: "Tom"}
		user.name = "Jerry";
	}
}
```

##### OnChanges
```
ng g component child
```

child.component.ts
```TypeScript
export class ChildComponent implements OnInit, OnChanges {
	@Input()
	greeting: string;

	@Input()
	user: {name: string};

	message: string = "初始化消息";

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(JSON.stringify(changes, null, 2));
	}
}
```

child.component.html
```HTML
<div class="child">
	<h2>我是子组件</h2>
	<div>问候语：{{greeting}}</div>
	<div>姓名：{{user.name}}</div>
	<div>消息：<input [(ngModel)]="message"></div>
</div>
```

child.component.css
```CSS
.child {
	background: lightgreen;
}
```

app.component.ts
```TypeScript
export class AppComponent {
	greeting:string = "Hello";

	user: {name: string} = {name: "Tom"};

	constructor() {}
}
```

app.component.html
```HTML
<div class="parent">
	<h2>我是父组件</h2>
	<div>问候语：<input type="text" [(ngModel)]="greeting"></div>
	<div>姓名：<input type="text" [(ngModel)]="user.name"></div>
	<app-child [greeting]="greeting" [user]="user"></app-child>
</div>
```

app.component.css
```CSS
.parent {
	background: cyan;
}
```

最后，只有更改greeting时，控制台才会打印出日志

#### 变更检测机制
由zone.js实现
> 主要目的是保证组件的属性的变化和页面的变化是同步的，浏览器中发生的任何异步事件都会触发变更检测，比如点击按钮、输入数据、数据从服务器返回、调用setTimeout方法
> 只是将组件属性的改变反映到模板上，变更检测机制本身永远不会改变组件属性的值

改一下之前的案例
child.component.ts
```TypeScript
export class ChildComponent implements OnInit, OnChanges, DoCheck {
	@Input()
	greeting: string;

	@Input()
	user: {name: string};

	message: string = "初始化消息";

	oldUsername:string;

	/* 检测是否变化 */
	changeDetected: boolean = false;

	/* 没变化计数器 */
	noChangeCount: number = 0;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(JSON.stringify(changes, null, 2));
	}

	ngDoCheck(): void {
		if(this.user.name !== this.oldUsername) {
			this.changeDetected = true;
			console.log("DoCheck: user.name" + this.oldUsername + "变为" +  this.user.name);
			this. oldUsername = this.user.name;
		}

		if(this.changeDetected) {
			this.noChangeCount = 0；
		} else {
			this.noChangeCount++;
			console.log("DoCheck:user.name没变化时ngDoCheck已经被调用"+ this.noChangeCount +"次")
		}

		this.changeDetected = false;
	}
}
```

*因为DoCheck会有很多不必要的渲染页面，所以谨慎使用，很容易引起性能问题*

#### View钩子
##### 在父组件中调用子组件
```
ng g component child
```

child.component.ts
```TypeScript
greeting(name: string) {
	console.log("hello " + name);
}
```

app.component.html
```HTML
<app-child #child1></app-child>
```

在父组件中调用
app.component.ts
```TypeScript
@ViewChild("child1")
child: ChildComponent;

constructor() {}

ngOnInit(): void {
	this.child1.greeting("Tom");
}
```

在父组件的模板中调用
app.component.html
```HTML
<app-child #child1></app-child>
<app-child #child2></app-child>
<button (click)="child2.greeting('Jerry')">调用child2的greeting方法</button>
```

##### ngAfterViewInit ngAfterViewChecked
这两个钩子是在组件的模板所有的内容都被组装完成以后，组件的模板已经呈现给用户看了，这个动作完成之后，这两个钩子才会被调用
app.component.ts
```TypeScript
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit {
	ngAfterViewInit(): void {
		console.log("父组件的视图初始化完毕");
	}

	ngAfterViewChecked(): void {
		console.log("父组件的视图变更检测完毕");
	}

	ngOnInit(): void {
		setInterval(() => {
			this.child1.greeting("Tom")
		}, 5000);
	}
}
```

child.component.ts
```TypeScript
export class ChildComponent implements OnInit, AfterViewChecked, AfterViewInit {
	ngAfterViewInit(): void {
		console.log("子组件的视图初始化完毕");
	}

	ngAfterViewChecked(): void {
		console.log("子组件的视图变更检测完毕");
	}
}
```

> 先所所有的子组件初始化、变更检测，再父组件初始化、变更检测
> 初始化只触发一次
> 变更检测(ngAfterViewChecked)会被多次触发，即使在视图没有发生改变时，因此在使用这个钩子时，代码一定要精简，防止性能问题

app.component.html
```HTML

```

app.component.ts
```TypeScript
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit {

	/*
	 *  message: string;
	 * 
	 *  ngAfterViewInit(): void {
	 * 	  console.log("父组件的视图初始化完毕");
	 *		this.message = "Hello"
	 *  }
	 *
	 *	这样写Angular会抛出异常
	 *	在变更检测周期中，Angular禁止在一个视图已经组装好之后再更新组件中一个被绑定的属性
	 *	ngAfterViewInit这个钩子就是在组件的视图已经被组合好之后触发的
	 *	ngAfterViewChecked也一样会触发异常
	 *	解决方法：只要将这个改变放到另一个时间循环中去，让他在另一个JavaScript运行周期中运行就好了
	 */

	message: string;

	ngAfterViewInit(): void {
		console.log("父组件的视图初始化完毕");
		setTimeout(() => {
			this.message = "Hello";
		}, 0)
	}

	ngAfterViewChecked(): void {
		console.log("父组件的视图变更检测完毕");
	}

	ngOnInit(): void {
		setInterval(() => {
			this.child1.greeting("Tom")
		}, 5000);
	}
}
```

#### 投影
##### ngContent指令
使用ngContent指令将父组件模板中的任意片段投影到它的子组件上

```
ng g component child
```

child.component.html
```HTML
<div class="wrapper">
	<h2>我是子组件</h2>
	<div>这个div定义在子组件中</div>
	<ng-content></ng-content>
	<!-- 这里使用ng-content标记一个投影点 -->
</div>
```

app.component.html
```HTML
<div class="wrapper">
	<h2>我是父组件</h2>
	<div>这个div定义在父组件中</div>
	<app-child>
		<div>这个div是父组件投影到子组件中的</div>
	</app-child>
</div>
```

child.component.css
```CSS
.wrapper {
	background: lightgreen;
}
```

app.component.css
```CSS
.wrapper {
	background: cyan;
}
```
*这里样式虽然都是wrapper，但是样式并不会冲突*

增加子组件页头页脚
child.component.html
```HTML
<div class="wrapper">
	<h2>我是子组件</h2>
	<ng-content select=".header"></ng-content>
	<div>这个div定义在子组件中</div>
	<ng-content select=".footer"></ng-content>
	<!-- 这里使用ng-content标记一个投影点 -->
</div>
```

app.component.html
```HTML
<div class="wrapper">
	<h2>我是父组件</h2>
	<div>这个div定义在父组件中</div>
	<app-child>
		<div class="header">这是页头，这个div是父组件投影到子组件中的，title是{{title}}</div>
		<div class="footer">这是页脚，这个div是父组件投影到子组件中的</div>
	</app-child>
</div>
```

##### innerHTML
还可以通过属性绑定的方法插入一段自定义的HTML
app.component.html
```HTML
<div class="wrapper">
	<h2>我是父组件</h2>
	<div>这个div定义在父组件中</div>
	<app-child>
		<div class="header">这是页头，这个div是父组件投影到子组件中的，title是{{title}}</div>
		<div class="footer">这是页脚，这个div是父组件投影到子组件中的</div>
	</app-child>
</div>

<div [innerHTML]="divContent"></div>
```

app.component.ts
```TypeScript
export class AppComponent {
	title = 'app works!';

	divContent = "<div>慕课网</div>"
}
```

> 在这两种方法中，innerHTML只能在浏览器中使用，而ngContent是平台无关的，在转化为app时，ngContent会有更好的移植性
> 使用ngContent可以定义多个投影点，而innerHTML只能插一段
> ngContent只能绑定父组件中的属性，而innerHTML只能绑定当前组件的内容
>> 还是优先考虑ngContent

#### ngAfterContentInit ngAfterContentChecked
在投影进来的内容组装完之后调用的
app.component.ts
```TypeScript
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {
	ngAfterContentInit(): void {
		console.log("父组件投影内容初始化完毕");
	}

	ngAfterContentChecked(): void {
		console.log("父组件投影内容变更检测完毕");
	}

	ngAfterViewInit(): void {
		console.log("父组件视图内容初始化完毕");
	}

	title = 'app works!';
}
```

child.component.ts
```TypeScript
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked {
	ngAfterContentInit(): void {
		console.log("子组件投影内容初始化完毕");
	}

	ngAfterContentChecked(): void {
		console.log("子组件投影内容变更检测完毕");
	}

	constructor() {}
	ngOnInit() {}
}
```

**说明**
> 当一个组件在组装它的视图时，首先组装的是投影进来的内容，然后组装的是子组件中视图的内容，这些总共是父组件视图内容初始化完毕

AfterViewInit无法改变已经绑定的属性，但是AfterContentInit可以，因为AfterContentInit被调用时，整个视图还没有被组装完毕，只是投影进来的内容被组装完毕了

#### ngOnDestroy
在路由中，从一个路由地址跳往另一个路由地址时，前一个路由地址对应的组件会被销毁

```
ng g component child2
```

app.component.ts
```TypeScript
var routeConfig: Routes = [
	{path: '', component: ChildComponent},
	{path: 'child2', component: Child2Component}
]
@NgModule({
	imports: [
		RouterModule.forRoot(routeConfig);
	]
})
```

app.component.html
```HTML
<a [routerLink]="['/']">child</a>
<a [routerLink]="['/child2']">child2</a>
<router-outlet></router-outlet>
```

child.component.html
```HTML
<div>child1</div>
```

child.component.ts
```TypeScript
export class ChildComponent implements OnInit, OnDestroy {
	ngOnDestroy(): void {}
	console.log("child组件被销毁");
}
```

child2.component.ts
```TypeScript
export class Child2Component implements OnInit, OnDestroy {
	ngOnDestroy(): void {}
	console.log("child2组件被销毁");
}
```

*我们一般使用这个钩子去销毁一些引用的资源，比如反订阅一个流，或者清除定时器之类*

#### 小结
- 父子组件之间应该避免直接访问彼此的内部，而应该通过输入输出属性来通讯
- 组件可以通过输出属性发射自定义事件，这些事件可以携带任何你想携带的数据
- 在没有父子关系的组件之间，尽量使用中间人模式进行通讯
- 父组件可以在运行时投影一个或多个模板片段到子组件中
- 每个Angular组件都提供了一组生命周期钩子，供你在某些特定的事件发生时执行相应的逻辑
- Angular的变更检测机制会监控组件属性的变化并自动更新视图，这个检测非常频繁并且默认是针对整个组件树的，所以实现相关钩子时要谨慎
- 你可以标记你的组件树中的一个分支，使其被排除在变更检测机制之外

### 表单处理
#### 表单简介
纯HTML表单
> 显示表单项
> 校验用户输入
> 提交表单数据
>
```HTML
<form action="/regist" method="post">
	<div>用户名：<input type="text" required pattern="[a-zA-Z0-9]+"></div>
	<div>手机号：<input type="text"></div>
	<div>密码：<input type="password"></div>
	<div>确认密码：<input type="password"></div>
	<button type="submit">注册</button>
</form>
```

Angular表单
> 模板式表单
>> 表单的数据模型是通过组件模板中的相关指令来定义的，因为使用这种方式定义表单的数据模型时，我们会受限于HTML的语法，所以，模板驱动方式只适合用于一些简单的场景

> 响应式表单
>> 使用响应式表单时，你通过编写TypeScript代码而不是HTML代码来创建一个底层的数据模型，在这个模型定义好以后，你使用一些特定的指令，将模板上的HTML元素与底层的数据模型连接在一起

> 对比
>> 不管是哪种表单，都有一个对应的数据模型来储存表单的数据。在模板式表单中，数据模型是由angular基于你组件模板中的指令隐式创建的。而在响应式表单中，你通过编码明确的创建数据模型然后将模板上的HTML元素与底层的数据模型连接在一起
>> 数据模型并不是一个任意的对象，它是一个由angular/forms模块中的一些特定的类，如FormControl、FormGroup、FormArray等组成的。在模板式表单中，你是不能直接访问到这些类的
>> 相应式表单并不会替你生成HTML，模板仍然需要你自己来编写

使用
> 在app.module.ts中引用，使用模板式表单引入FormsModule，使用响应式表单引入ReactiveFormModule

#### 模板式表单
只能使用指令来定义数据模型
> FormsModule
>> NgForm
>>> 用来代表整个表单，在angular应用中，它会被**自动的**添加到每个form标签上
>>> 隐式创建FormGroup类的实例，这个类用来代表表单的数据模型，并且存储表单的数据
>>> 可以被一个模板本地变量引用，以便在模板中访问ngForm对象实例
>>> *注意*
>>>> NgForm可以在form标签之外使用，比如div
>>>> 如果你不希望angular接管这个form，你需要明确的在form标签上添加ngNoForm

>> NgModel
>>> 标有NgForm指令的HTML标签会自动发现其标有NgModel这个指令的子元素，并将它们的值添加到表单的数据模型中
>>> 代表表单中的一个字段
>>> 这个指令会隐式的创建一个FormControl的实例，来代表字段的数据模型，并用这个FormControl类型的对象来存储字段的值
>>> 使用时不需要方括号和小括号，但是需要指定一个name属性
>>> 与NgForm指令类似，NgModel指令创建的对象也可以一个模板对象来引用，并通过这个模板变量的value属性来访问字段的值

>> NgModelGroup
>>> 代表的表单的一部分，它允许你将一些表单字段组织在一起，形成更清晰的层次关系
>>> 与NgForm指令类似，NgModelGroup也会创建一个FormGroup类的实例，这个实例会在NgForm对象的value属性中表现为一个嵌套的对象，所有NgModelGroup的子属性都会变成这个嵌套对象的子属性

template-form.component.html
```HTML
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
	<div ngModelGroup="userInfo">
		<div>用户名：<input #username="ngModel" ngModel name="username" type="text"></div>
		<div>手机号：<input type="text"></div>
	</div>
	<div>密码：<input type="password"></div>
	<div>确认密码：<input type="password"></div>
	<button type="submit">注册</button>
</form>

<div>{{myForm.value | json}}</div>
<div>{{username.value}}</div>
```

template-form.component.ts
```TypeScript
onSubmit(value: any) {
	console.log(value);
}
```

重构上一个表单
template-form.component.html
```HTML
<form #mgForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
	<div>用户名：<input ngModel name="username" type="text"></div>
	<div>手机号：<input ngModel name="tel" type="number"></div>
	<div ngModelGroup="passwordGroup">
		<div>密码：<input ngModel name="password" type="password"></div>
		<div>确认密码：<input ngModel name="passwordConfirm" type="password"></div>
	</div>
	<button type="submit">注册</button>
</form>
```

#### 响应式表单
- 编码创建一个数据模型
- 使用一些指令将模板中的HTML元素连接到数据模型上

数据模型是指一个用来保存表单数据的数据结构，简称模型，它由定义在 angular/forms 模块的三个类组成
> FormControl
>> 通常情况下它用来代表一个input元素，但是它也可以代表一个更复杂的UI组件，如日历，下拉选择框
>> 保存着与其关联的HTML元素当前的值以及元素的校验状态和元素是否被修改过等信息

> FormGroup
>> 既可以代表表单的一部分，也可以用来代表整个表单
>> 它是多个FormControl的集合，FormGroup将多个FormControl的值和状态聚合在一起，如果一个FormControl是无效的，则整个FormGroup都是无效的
>> 在管理表单中相关联的字段时，FormGroup是很方便的
>>> 比如一个日期范围在表单上一般会表现为两个input字段，一个起始日期一个截止日期，这两个input就可以被放到一个FormGroup里，这样，当这两个值中的任意一个无效时都会显示错误信息

> FormArray
>> 与FormGroup类似，但是它有一个额外的长度属性
>> 一般来说，FormGroup用来代表整个表单或者表单字段的一个固定的子集，而FormArray通常代表一个可以增长的字段集合
>>> 比如表单中的email，用户可能有多个email，使用FormArray让用户可以输入任意数量的email地址

>> FormArray与FormGroup不同，没有key，需要使用序号来访问FormArray中的元素

reactive-form.component.ts
```TypeScript
export class ReactiveFormComponent implements OnInit {
	// 定义初始值
	username: FormControl = new FormControl('aaa');

	// 创建FormGroup
	formModel：FormGroup = new FormGroup({
		from: new FormControl(),
		to: new FormControl()
	});
	
	// FormArray
	emails: FormArray = new FormArray([
		new FormControl('a@a.com'),
		new FormControl('b@b.com')
	]);
}
```

相应式表单指令
> 这些指令全部来源于ReactiveFormsModule这个模块
> 相应式表单的指令是不可引用的，不能创建一个模板本地变量来引用这个指令的实例（这个angular故意的，为了区分这两种方式）

| 类名 | 指令 | 指令 |
|:---:|:---:|:---:|
| FormGroup | formGroup | formGroupName|
| FormControl | formControl | formControlName |
| FormArray |  | formArrayName |

reactive-form.component.html
```HTML
<input [formControl]="username">

// formGroup是后台的值是后台的一个属性，所以要用属性绑定方括号的语法
<form [formGroup]="formModel" (submit)="onSubmit()">
	
	<input formControlName="username">

	// formGroupName指令的值是一个字符串，所以不用属性绑定
	<div formGroupName="dateRange">
		// formControlName指令的值也是一个字符串
		起始日期<input type="date" formControlName="from">
		截止日期<input type="date" formControlName="to">
	</div>
	<div>
		<ul formArrayName="emails">
			<li *ngFor="let e of this.formModel.get('emails').controls; let i = index;">
				// 这里需要使用属性绑定的语法
				<input type="text" [formControlName]="i">
			</li>
		</ul>
		<button type="button" (click)="addEmail()">增加Email</button>
	</div>
	<div>
		<button type="submit">保存</button>
	</div>
</form>
```

reactive-form.component.ts
```TypeScript
export class ReactiveFormComponent implements OnInit {
	formModel：FormGroup = new FormGroup({

		username: new FormControl("aaa"),

		dateRange: new FormGroup({
			from: new FormControl(),
			to: new FormControl()
		}),
		emails: new FormArray([
			new FormControl('a@a.com'),
			new FormControl('b@b.com')
		])
	});

	username: FormControl = new FormControl("aaa");

	onSubmit() {
		console.log(this.formModel.value);
	}

	addEmail() {
		let emails = this.formModel.get('emails') as FormArray;
		emails.push(new FormControl());
	}
}
```

重构之前的注册表单

reactive-regist.component.ts
```TypeScript
export class ReactiveRegistComponent implements OnInit {
	formModel: FormGroup;

	constructor() {
		this.formModel = new FormGroup({
			username: new FormControl(),
			tel: new FormControl(),
			passwordsGroup: new FormsGroup({
				password: new FormControl(),
				passwordConfirm: new FormControl()
			})
		})
	}

	onSubmit() {
		console.log(this.formModel.value);
	}

	ngOnInit() {}
}
```

reactive-regist.component.html
```HTML
<form [formGroup]="formModel" (submit)="onSubmit()">
	<div>用户名：<input type="text" formControlName="username"></div>
	<div>手机号：<input type="text" formControlName="tel"></div>
	<div formGroupName="passwordsGroup">
		<div>密码：<input type="password" formControlName="password"></div>
		<div>确认密码：<input type="password" formControlName="passwordConfirm"></div>
	</div>
	<button type="submit">注册</button>
</form>
```

使用FormBuilder重构代码
reactive-regist.component.ts
```TypeScript
constructor(fb: FormBuilder) {
	this.formModel = fb.group({
		username: [''],
		tel: [''],
		passwordsGroup: fb.group({
			password: [''],
			passwordConfirm: ['']
		})
	})
}
```

FormBuilder
> 调用group方法相当于new了一个Group
> FormBuilder中的group可以接受一个额外的参数，可以用来校验FormGroup
> FormBuilder还允许使用一个数组来实例化一个FormControl的实例，数组的第一个元素是FormControl的初始值，第二个元素是一个校验方法，第三个元素是一个异步的校验方法，当元素多余三个时，其余的会被忽略掉

#### 表单校验
##### 普通校验器
reactive-regist.component.ts
```TypeScript
export class ReactiveRegistComponent implements OnInit {
	// 校验电话号码
	telValidator(control: FormControl):any {
		var myreg = /^(((13[0-9]{1})|(15[0-9{1}])|(18[0-9]{1}))+\d{8})$/;
		let vaild = myreg.test(control.value);
		console.log("tel的校验结果是：" + valid);
		return valid ? null : {tel: true};
	}
	// 校验密码
	equalValidator(group: FormGroup): any {
		let password: FormGroup = group.get("password") as FormControl;
		let passwordConfirm: FormGroup = group.get("passwordConfirm") as FormControl;
		let valid: boolean = (password.value === passwordConfirm.value);
		console.log("密码校验结果：" + valid);
		return valid ? null : {equal: true};
	}

formModel：FormGroup;

	constructor(fb: FormBuilder) {
		this.formModel = fb.group({
			// 添加校验器：必需，最小长度6
			username: ['', [Validators.required, Validators.minLength(6)]],
			tel: ['', this.telValidator],
			passwordsGroup: fb.group({
				password: ['', Validators.minLength(6)],
				passwordConfirm: ['']
			}, {validator: this.equalValidator})
		})
	}
	
	onSubmit() {
		let isValid:boolean = this.formModel.get("username").valid;
		console.log("username的校验结果：" + isValid);
		let errors: any = this.formModel.get("username").errors;
		console.log("username的错误信息是：" + JSON.stringify(errors));
	
		console.log(this.formModel.value);
	}
	
	ngOnInit() {}
}
```

校验器不一定要写在组建中，可以写在一个单独的js文件中，并通过export关键字暴露出来

↓↓↓改造一下

新建validator/validatators.ts
```TypeScript
import {FormControl, FormGroup} from "@angular/forms";

export function telValidator(control: FormControl):any {
	var myreg = /^(((13[0-9]{1})|(15[0-9{1}])|(18[0-9]{1}))+\d{8})$/;
	let vaild = myreg.test(control.value);
	console.log("tel的校验结果是：" + valid);
	return valid ? null : {tel: true};
}
export function equalValidator(group: FormGroup): any {
	let password: FormGroup = group.get("password") as FormControl;
	let passwordConfirm: FormGroup = group.get("passwordConfirm") as FormControl;
	let valid: boolean = (password.value === passwordConfirm.value);
	console.log("密码校验结果：" + valid);
	return valid ? null : {equal: true};
}
```

组件中直接import然后使用即可
reactive-regist.component.ts
```TypeScript
import {telValidator, equalValidator} from  '../validator/validatators'

onSubmit() {
	if(this.formModel.valid) {
		console.log(this.formModel.value);
	}
}
```

添加给用户看的提示信息
reactive-regist.component.html
```HTML
<form [formGroup]="formModel" (submit)="onSubmit()">
	<div>用户名：<input type="text" formControlName="username"></div>
	<div [hidden]="!formModel.hasError('required', 'username')">用户名是必填项</div>
	<div [hidden]="!formModel.hasError('minlength', 'username')">用户名最小程度是6</div>
	<div>手机号：<input type="text" formControlName="tel"></div>
	<div [hidden]="!formModel.hasError('tel', 'tel')">请输入正确的手机号</div>
	<div formGroupName="passwordsGroup">
		<div>密码：<input type="password" formControlName="password"></div>
		<div [hidden]="!formModel.hasError('minlength', ['passwordsGroup','password'])">密码的最小长度是6</div>
		<div>确认密码：<input type="password" formControlName="passwordConfirm"></div>
		<div [hidden]="!formModel.hasError('equal', 'passwordsGroup')">密码和确认密码不一致</div>
	</div>
	<button type="submit">注册</button>
</form>
```

这是直接写在模板上的，也可以写在JavaScript
validatators.ts
```TypeScript
import {FormControl, FormGroup} from "@angular/forms";

export function telValidator(control: FormControl):any {
	var myreg = /^(((13[0-9]{1})|(15[0-9{1}])|(18[0-9]{1}))+\d{8})$/;
	let vaild = myreg.test(control.value);
	console.log("tel的校验结果是：" + valid);
	return valid ? null : {tel: true};
}
export function equalValidator(group: FormGroup): any {
	let password: FormGroup = group.get("password") as FormControl;
	let passwordConfirm: FormGroup = group.get("passwordConfirm") as FormControl;
	let valid: boolean = (password.value === passwordConfirm.value);
	console.log("密码校验结果：" + valid);
	/*
	 *	注意，改的是这里
	 *	desc是关键字，不能用
	 */
	return valid ? null : {equal: {descxxx:"密码和确认密码不匹配"}};
}
```

然后加到模板上
reactive-regist.component.html
```HTML
<form [formGroup]="formModel" (submit)="onSubmit()">
	<div>用户名：<input type="text" formControlName="username"></div>
	<div [hidden]="!formModel.hasError('required', 'username')">用户名是必填项</div>
	<div [hidden]="!formModel.hasError('minlength', 'username')">用户名最小程度是6</div>
	<div>手机号：<input type="text" formControlName="tel"></div>
	<div [hidden]="!formModel.hasError('tel', 'tel')">请输入正确的手机号</div>
	<div formGroupName="passwordsGroup">
		<div>密码：<input type="password" formControlName="password"></div>
		<div [hidden]="!formModel.hasError('minlength', ['passwordsGroup','password'])">密码的最小长度是6</div>
		<div>确认密码：<input type="password" formControlName="passwordConfirm"></div>
		/*
		 *	注意，改的是这里
		 */
		{{formModel.getError('equal', 'passwordsGroup')?.descxxx}}
	</div>
	<button type="submit">注册</button>
</form>
```

##### 异步校验器
validatators.ts
```TypeScript
import {FormControl, FormGroup} from "@angular/forms";

export function telValidator(control: FormControl):any {
	var myreg = /^(((13[0-9]{1})|(15[0-9{1}])|(18[0-9]{1}))+\d{8})$/;
	let vaild = myreg.test(control.value);
	console.log("tel的校验结果是：" + valid);
	return valid ? null : {tel: true};
}
export function telAsyncValidator(control: FormControl):any {
	var myreg = /^(((13[0-9]{1})|(15[0-9{1}])|(18[0-9]{1}))+\d{8})$/;
	let vaild = myreg.test(control.value);
	console.log("tel的校验结果是：" + valid);
	// 这里延迟5秒只是为了模拟服务器处理了5秒钟返回结果
	return Observable.of(valid ? null : {tel: true}).delay(5000);
}
export function equalValidator(group: FormGroup): any {
	let password: FormGroup = group.get("password") as FormControl;
	let passwordConfirm: FormGroup = group.get("passwordConfirm") as FormControl;
	let valid: boolean = (password.value === passwordConfirm.value);
	console.log("密码校验结果：" + valid);
	return valid ? null : {equal: {descxxx:"密码和确认密码不匹配"}};
}
```

reactive-regist.component.ts
```TypeScript
	constructor(fb: FormBuilder) {
		this.formModel = fb.group({
			// 添加校验器：必需，最小长度6
			username: ['', [Validators.required, Validators.minLength(6)]],
			tel: ['', this.telValidator, telAsyncValidator],
			passwordsGroup: fb.group({
				password: ['', Validators.minLength(6)],
				passwordConfirm: ['']
			}, {validator: this.equalValidator})
		})
	}
```

reactive-regist.component.html
```
<form [formGroup]="formModel" (submit)="onSubmit()">
	<div>用户名：<input type="text" formControlName="username"></div>
	<div [hidden]="!formModel.hasError('required', 'username')">用户名是必填项</div>
	<div [hidden]="!formModel.hasError('minlength', 'username')">用户名最小程度是6</div>
	<div>手机号：<input type="text" formControlName="tel"></div>
	<div [hidden]="!formModel.hasError('tel', 'tel')">请输入正确的手机号</div>
	<div formGroupName="passwordsGroup">
		<div>密码：<input type="password" formControlName="password"></div>
		<div [hidden]="!formModel.hasError('minlength', ['passwordsGroup','password'])">密码的最小长度是6</div>
		<div>确认密码：<input type="password" formControlName="passwordConfirm"></div>
		<div [hidden]="!formModel.hasError('equal', 'passwordGroup')">{{formModel.getError('equal', 'passwordsGroup')?.descxxx}}</div>
	</div>
	<button type="submit">注册</button>
</form>

<div>
	{{formModel.status}}
</div>
```

这个最后显示
INVALID → PENDING(5s) → VALID

##### 状态字段
touched和untouched
> 这两个字段用来判断用户是否访问过字段，也就是这个字段是否获取过焦点
>>reactive-regist.component.html
```HTML
<div>用户名：<input type="text" formControlName="username"></div>
	<div [hidden]="formModel.get('username').valid || formModel.get('username').untouched">
		<div [hidden]="!formModel.hasError('required', 'username')">用户名是必填项</div>
		<div [hidden]="!formModel.hasError('minlength', 'username')">用户名最小程度是6</div>
	</div>
```

pristine和dirty
> 如果一个字段的值从来没有改变过，它的pristine为true，dirty为false
>>reactive-regist.component.html
```HTML
<div>手机号：<input type="text" formControlName="tel"></div>
	<div [hidden]="formModel.get('tel').valid || formModel.get('tel').pristine">
		<div [hidden]="!formModel.hasError('tel', 'tel')">请输入正确的手机号</div>
	</div>
```

pending
> 当一个字段处于异步校验时，pending属性为true，这时候可以显示图片或文字提示用户正在校验
>>reactive-regist.component.html
```HTML
<div>手机号：<input type="text" formControlName="tel"></div>
	<div [hidden]="formModel.get('tel').valid || formModel.get('tel').pristine">
		<div [hidden]="!formModel.hasError('tel', 'tel')">请输入正确的手机号</div>
	</div>
	<div [hidden]="!formModel.get("tel").pending">正在校验手机号合法性</div>
```

这些是可以改变样式的，举个栗子
reactive-regist.component.css
```CSS
/*
 *	.ng-invalid {
 *		border: 1px solid red;
 *	}
 *
 *	这样虽然是可以，但是误伤范围有点大，所以要自定义一下
 */
.usernameHasError {
	border: 1px solid red;
}
```

reactive-regist.component.html
```HTML
<div>用户名：<input [class.usernameHasError]="formModel.get('username').invalid && formModel.get('username').touched" type="text" formControlName="username"></div>
	<div [hidden]="formModel.get('username').valid || formModel.get('username').untouched">
		<div [hidden]="!formModel.hasError('required', 'username')">用户名是必填项</div>
		<div [hidden]="!formModel.hasError('minlength', 'username')">用户名最小程度是6</div>
	</div>
```

##### 模板式表单校验
在响应式表单中，我们在后台有一个编码的数据模型，只需要把校验器的方法挂接到指定的字段上就可以了，但是在模板式表单中，后台是没有这样一个数据模型的，在模板式表单中，指令是为一个能用的东西，所以需要将我们需要的校验器方法包装成一个指令，然后才能在模板中使用

新建指令
> 指令简单理解为就是一个没有模板的组件
```
ng g directive directives/telValidator
ng g directive directives/equalValidator
```

tel-validator.component.ts
```TypeScript
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import {telValidator} from '../validator/validatators';

@Directive({
	selector: '[tel]',
	providers: [{provide:NG_VALIDATORS, useValue: telValidator, multi: true}]
})

export class MobileValidatorDirective {
	constructor() {}
}
```

equal-validator.component.ts
```TypeScript
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import {equalValidator} from '../validator/validatators';

@Directive({
	selector: '[equal]',
	providers: [{provide:NG_VALIDATORS, useValue: equalValidator, multi: true}]
})

export class MobileValidatorDirective {
	constructor() {}
}
```

template-form.component.html
```HTML
<form #mgForm="ngForm" (ngSubmit)="onSubmit(myForm.value, myForm.valid)" novalidate>
	<div>用户名：<input required minLength="6" ngModel name="username" type="text" (input)="onUsernameInput(myform)"></div>
	<div [hidden]="usernameValid || usernameUntouched">
		<div [hidden]="!myform.form.hasError('required', 'username')">用户名是必填项</div>
		<div [hidden]="!myform.form.hasError('minlength', 'username')">用户名最小程度是6</div>
	</div>
	<div>手机号：<input tel ngModel name="tel" type="number"></div>
	<div [hidden]="!myform.form.hasError('tel', 'tel')">请输入正确的手机号</div>
	<div ngModelGroup="passwordGroup" equal>
		<div>密码：<input minLength="6" ngModel name="password" type="password"></div>
		<div [hidden]="!myform.form.hasError('minlength', ['passwordsGroup','password'])">密码的最小长度是6</div>
		<div>确认密码：<input ngModel name="passwordConfirm" type="password"></div>
		<div [hidden]="!myform.form.hasError('equal', 'passwordGroup')">{{myform.form.getError('equal', 'passwordsGroup')?.descxxx}}</div>
	</div>
	<button type="submit">注册</button>
</form>
```

template-form.component.ts
```TypeScript
onSubmit(value: any, valid: boolean) {
	console.log(valid);
	console.log(value);
}

usernameValid:boolean = true;
usernameUntouched:boolean = true;

onUsernameInput(form: NgForm) {
	if(form) {
		this.usernameValid = form.form.get('username').valid;
		this.usernameUntouched = form.form.get('username').untouched;
	}
}
```

#### 小结
模板式表单相对来说更容易使用，配置也更简单，开发速度更快，但是它只适用于一些简单的场景

相应式表单更容易来测试，有更多的灵活性，而且能为你的表单提供更多的控制，并且可以适配多个渲染器的（PC 移动）

表单验证

### 与服务器通讯
angular可以和任何支持HTTP协议和WebSocket协议的服务器通讯

#### 创建web服务器
创建server文件夹
```
npm init -y
```

引入node的类型文件
```
npm i @types/node --save
```

node本身是不人TypeScript的，所以我们需要将TypeScript变异成JavaScript
新建编译文件tsconfig.json
```JSON
{
	// 编译器的配置
	"compilerOptions": {
		// 目标是编译成es5规范的脚本
		"target": "es5",
		// 模块的规范是commonjs
		"module": "commonjs",
		// 保留装饰器的原数据
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		// 编译完的js文件放到build目录
		"outDir": "build",
		// 开发时的语法
		"lib": ["es6"]
	},
	// 编译时排除的目录
	"exclude": [
		"node_modules"
	]
}
```

编译（需要全局安装typescript）
```
tsc
```

运行服务器
```
node build/hello_server.js
```

安装express
```
npm install express --save
```

安装编译文件
```
npm install @types/express --save
```

再次运行服务器
```
node build/auction_server.js
```

在这里服务器文件发生变化是，node是不会加载变化的文件的，只能重新启动node服务器
所以安装一个工具
```
npm install -g nodemon
```

然后使用nodemon启动服务器
```
nodemon build/auction_server.js
```

#### HTTP通讯
新建一个新的angular项目

```
ng g component product
```

product.component.ts
```TypeScript
import 'rsjx/Rx'

export class ProductComponent implements OnInit {
	dataSource: Observable<any>;

	products: Array<any> = [];

	constructor(private http: Http) {
		this.dataSource = this.http.get('./products')
			.map((res) => res.json());
	}

	ngOnInit() {
		this.dataSource.subscribe(
			(data) => this.products = data
		)
	}
}
```

product.component.html
```HTML
<div>商品信息</div>
<div>
	<li *ngFor="let product of products">
		{{product.title}}
	</li>
</div>
```

app.component.html
```HTML
<app-product></app-product>
```

为了能显示其他路径的数据，新建配置文件proxy.conf.json
```JSON
{
	"/api": {
		"target": "http://127.0.0.1:8000"
	}
}
```

再修改package.json
```JSON
"start": "ng serve --proxy-config proxy.conf.json"
```

所以product.component.ts
```TypeScript
constructor(private http: Http) {
	this.dataSource = this.http.get('/api/products')
		.map((res) => res.json());
}
```
同样auction_server.ts也要改
**注意：这里发送HTTP请求并不是get，而是subscribe**
> get方法只是定义了一个HTTP请求，只有当subscribe订阅了这个方法的时候，这个请求才真正的发送出去

还可以在模板上使用管道（async）来处理这个流，异步管道可以接受一个流来作为它的输入，然后自动的去订阅这个流
product.component.html
```HTML
<div>商品信息</div>
<div>
	<li *ngFor="let product of products | async">
		{{product.title}}
	</li>
</div>
```

product.component.ts
```TypeScript
export class ProductComponent implements OnInit {

	products: Observable<any>;

	constructor(private http: Http) {
		this.products = this.http.get('./products')
			.map((res) => res.json());
	}

	ngOnInit() {
	}
}
```

在发送HTTP请求的时候带上请求头
product.component.ts
```TypeScript
import {Http, Headers} from '@angular/http';

export class ProductComponent implements OnInit {
	products: Observable<any>;

	constructor(private http: Http) {
		let myHeaders: Headers = new Headers();
		myHeaders.append("Authorization", "Basic 123456")

		this.products = this.http.get('./products', {headers: myHeaders})
			.map((res) => res.json());
	}

	ngOnInit() {
	}
}
```

#### WebSocket通讯
WebSocket协议是一种低负载的二进制协议，目前主流的浏览器都已经内置了对WebSocket的支持
WebSocket允许在同一个连接中，同时进行双方向的数据传递，也就是说在发送请求的时候同时还能接受数据（区别http协议）
WebSocket是一个长连接协议，不需要在每次发送和接受数据时重新建立连接，所以WebSocket协议比http协议的延迟要低，且不需要每次连接时都携带一些与连接相关的信息

在server中
```
npm install ws --save

npm install @types/ws --save-dev
```

#### 本章小结
Http服务，它来字HttpModule，只有在调subscribe时才发请求
WebSocket协议，它更加简洁和高效，它是双向的
使用NodeJS和Express创建web服务器时是非常简单的

### 构建和部署
####构建：编译和合并
```
ng build
```

####部署：与服务器整合
部署到 nodeJS 服务器上

- 在 server 文件夹中新建 client 
- 将之前生成的内容复制粘贴

####多环境：一套代码支持多种环境
开发、测试、生产
环境文件environments

在 angular-cli.json 中声明自己的配置文件
```
"environments": {
	"source": "environments/environments.ts",
	"dev": "environments/environments.ts",
	"test": "environments/environments.test.ts",
	"prod": "environments/environments.prod.ts"
}
```

默认情况下使用 dev 配置

启动生产模式
package.json
```
"start": "ng serve --env=prod --proxy-config proxy.conf.json --open"
```

构建时也可以使用
```
ng build --env=prod
```

### 总结
#### 开发流程
设计！设计！！设计！！！
先画一个组件树，根据组件树指定开发计划

- 使用 Angular-CLI工具创建一个新的项目
- 按照之前设计的组件关系开始从下往上编写组件
- 按照父子关系组装组件并配置路由
- 在开发环境上测试应用
- 构建应用并部署到测试/生产环境

#### 后续学习
> 高级特性：动画、指令、安全等
> 周边生态：
>> angular CLI，angular marterial(官方的一个 marterial 风格的一个控件库)，angular universal(官方的一个服务器端渲染的项目)
>> 第三方的组件，UI库，框架等
>>> ionic, native script

























# Canvas
## Canvas 是什么
Canvas是HTML5新增的脚本化的图形，用于实时生成图像的图片

Canvas本身没有行为，我们通过它的API用JavaScript来控制它显示什么，怎么显示

Canvas的绘图使用矢量图的逻辑，但是它渲染到画布上是以位图的形式

Canvas作为载体在游戏，2D/3D动画展示上有了越来越多的应用

## Canvas 与 HTML 和 CSS

```
<canvas></canvas>
```

```
<canvas>
	不支持canvas可以看到这句话
</canvas>
```

```
<canvas>
	<video> src=""></video>
</canvas>
```































# Git
```
// 初始化版本库
git init
git remote add origin <你的项目地址>
// 克隆一个项目
git clone <项目地址>
// pull
git pull origin master
// 添加到提交清单
git add <文件>
// 查看文件状态
git status
// 提交
git commit -m "提交原因"
// push
git push origin master
```
代码冲突时
```
// 舍弃线上版本
git push origin master -f
// 保留线上版本
git push origin master
```

