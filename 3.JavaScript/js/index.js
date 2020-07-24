// alert(123)

/*
    一.JS数据类型
    1.1 弱类型语言 JS:var a=10;  Java:int a=10;
    1.2 原始数据类型 number  string  boolean  引用数据类型  Object
    1.3 通过var进行声明变量，根据你的赋值情况来判定当前数据的类型，可以通过typeof查看数据类型
 */
// var a1 = 11;
// alert(a1);
// alert(typeof a1);  //number

// var a2 = 12.2;
// alert(a2);
// alert(typeof a2);  //number

// var a3 = "abc";
// var a4 = 'aaa';
// alert(a3);
// alert(typeof a3); //string
// alert(a4);
// alert(typeof a4); //string

// var a5 = false;
// alert(a5);
// alert(typeof a5); //boolean

// var a6;
// alert(a6);         //undefined
// alert(typeof a6);  //undefined

// var a7 = null;
// alert("-->a7:"+a7); //null
// alert(typeof a7);   //object
// alert(a7 == null);  //true
// var a8 = [];
// alert("-->a8:"+a8); //[]
// alert(typeof a8);   //object
// alert(a8 == null);  //false


/*
    二.JS转换函数
    1. Number() 将指定的变量转化成数字
            字符串类型:  必须变量中没有字母出现时，可以转换成数字，否则皆是NaN
            布尔类型:    false转换成数值0，true转换成数值1
            Object类型:  null空对象或者[]空数组转换成数值0，否则皆是NaN

    2. Boolean() 将指定的变量转化成boolean类型
            字符串类型:   ""转换成false， 非空串转换成true
            Number类型:  0转换成false，非0转换成true
            Object类型:  undefined或者null空对象转换成false，其他皆是true

    3. parseInt() 将字符串转换成数字number类型，但是需要以数字开头
 */
//Number()
// var a1 = "abc";
// alert("-->a1 = "+Number(a1));  //NaN not a number 不是一个是数字
// var a2 = "123";
// alert("-->a2 = "+Number(a2));  //123
// var a3 = "123abc";
// alert("-->a3 = "+Number(a3));  //NaN not a number 不是一个是数字

// var a4 = false;
// alert("a4 = "+Number(a4));  //0
// var a5 = true;
// alert("a5 = "+Number(a5));  //1

// var a6 = null;
// alert("a6 = "+Number(a6));  //0
// var a7 = [];
// alert("a7 = "+Number(a7));  //0
// var a8;
// alert("a8 = "+Number(a8));  //NaN
// var a9 = new Object();
// alert("a9 = "+Number(a9));  //NaN


//Boolean()
// var a1 = "abc";
// alert("-->a1 = "+Boolean(a1));  //true
// var a2 = "";
// alert("-->a2 = "+Boolean(a2));  //false

// alert(Boolean(123));  //true
// alert(Boolean(0));    //false

// var a6 = null;
// alert("a6 = "+Boolean(a6));  //false
// var a7 = [];
// alert("a7 = "+Boolean(a7));  //true
// var a8;
// alert("a8 = "+Boolean(a8));  //false
// var a9 = new Object();
// alert("a9 = "+Boolean(a9));  //true


//parseInt()
// alert(parseInt("123.4.5"));  //123
// alert(parseInt("111abc"));   //111
// alert(parseInt("aaa222"));   //NaN


/*
    三.运算符
    + - * / %
    + 拼接字符串
    ==判断值是否相等
    ===判断值与类型都是否相等 恒等于
    && || 逻辑运算符
    三目运算符
 */
// alert(1+1);  //加法
// alert("aaa"+"bbb");  //字符串拼接

// var a1 = "111";
// var a2 = 111;
// alert(typeof a1);  //string
// alert(typeof a2);  //number
// alert("== "+ (a1 == a2));   // true  ==判断数值是相等的
// alert("=== "+ (a1 === a2)); //false  ===判断数值和数据类型是否都相同，由于两者类型不同，返回false

// alert((1>2) && (1<2));  //false   &&逻辑与：两者皆为真，结果才为真。存在短路现象（第一个为假，则不看第二个）
// alert((1<2) || (1>2));  //true    ||逻辑或：有一为真，结果就为真。存在短路现象（第一个为真，则不看第二个）

//三目运算符
//alert((1>2)?'真':'假');  //表达式成立，则值为?后的值，若不成立则为:后的值


/*
    四.控制和循环语句
    if语句  switch...case语句   for循环语句
 */
//if语句
// var a = 10;
// if(a<=10){
//     alert("a小于等于10");
// }else{
//     alert("a大于10");
// }

//switch语句
// var a = false;
// switch (a) {
//     case true:
//         alert("真");
//         break;
//     case false:
//         alert("假");
//         break;  //跳出当前循环
//     default:
//         alert("以上都不是，则进入default");
//         break;
// }

//for循环
//var arr = ["aaa","bbb","ccc"];
// for(var i=0;i<arr.length;i++){
//     alert(arr[i])
// }

// for(var a in arr){
//     alert(arr[a])
// }

//while
// var i=0;
// while(i<arr.length){
//     alert(arr[i]);
//     i++;
// }

//do  while
// var i = 3;
// do{
//     alert(i);
//     i++;
// }while(i<3);

//break;  跳出当前循环
var sum = 0;
for(var i=1;i<=10;i++){
    sum+=i;
    if(sum>10){
        alert(i);
        break;
    }
}
alert("sum = "+sum);


//continue; 跳出本次循环,开启新的循环
// var sum = 0;
// for(var i=1;i<=10;i++){
//     //输出奇数的和
//     if(i%2==0){ //i偶数
//         continue;
//     }
//     alert(i);
//     sum +=i;
// }
// alert(sum);
