/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var b = 33;


//function makeBuffer() { /* ваш код */ 
//    var bufer = "";
//    
//    function buf(val){
//        if(val !== undefined){
//            bufer += val+" ";
//        }
//        return bufer;
//    };
//    
//    buf.clear = function(){
//        bufer = '';
//    };
//    
//    return buf;
//}
//
//var text = makeBuffer();
//text('Dynamo');
//text('Kiev');
//text('Champions');
//
//console.log(text());
//text.clear();
//console.log(text());
//text('саша');
//console.log(text());

/**/
//function makeBuffer() { /* ваш код */ 
//    var bufer = "";
//    
//    return function(val){
//        if(val !== undefined){
//            bufer += val+" ";
//        }
//        return bufer;
//    };
//}
//
//var buffer = makeBuffer();
//
//// добавить значения к буферу
///*buffer('Замыкания');
//buffer(' Использовать');
//buffer(' Нужно!');*/
//
//// получить текущее значение
//buffer(222); // Замыкания Использовать Нужно!
//buffer(111);
//buffer(333);
//
//console.log(typeof buffer());
/**/


/*
 * счетчик
 * function makeCounter(){
    var counter = 0;
    
    function myCounter(){
        counter++;
        return counter;
    }
    myCounter.set = function(value){
        if(value !== undefined){
            counter = value;
        }
    };
    myCounter.reset = function(){
        counter = 0;
    };
    return myCounter;
}

var test1 = makeCounter();
console.log(test1());
console.log(test1());
console.log(test1());
test1.set(122);
console.log(test1());
console.log(test1());
console.log(test1());
test1.reset();
console.log(test1());*/

/*==5)arguments ==*/


/*==5)arguments ==*/

/*==4)Array ==*/
//#5
//function find(arr, value){
//    for(var i = 0; i<arr.length; i++)
//        if(arr[i]==value) return i;
//    return -1;
//}
//
//var styles = ["Джаз", "Блюз"];
//console.log(find(styles, "Блюз"));

//#4
//var styles = ["Джаз", "Блюз"];
//styles[styles.length] = "Рок-н-Ролл";
//styles[styles.length-2] = "Классика";
//alert( styles.shift() );
//styles.unshift('Рэп', 'Реги');
//console.log(styles);
//#3
//var goods = ["планшет", "телефон", "ноут"];
//goods.push("люстра");
//console.log(goods[goods.length-1]);

//#2
//var arr = ["sanya", true, 123];
//
//console.log(arr[arr.length-1]);
//
////for(var i = 0; i<arr.length; i++){
////    console.log(i+" - "+arr[i]);
////}


//#1
//var arr = [12, "st", true, null, undefined, {o:"tr", b:2}, function func(){},[1,2]];
//for(var i = 0; i<=arr.length-1;i++){
//    console.log(typeof arr[i]+"-"+arr[i]);
//}


/*==4)Array ==*/

/*==3)Object ==*/
//#5
//var salaries = {
//  "Вася": 100,
//  "Петя": 300,
//  "Даша": 450
//};
//
//var max = 0;
//var maxName = "";
//for (var name in salaries) {
//  if (max < salaries[name]) {
//    max = salaries[name];
//    maxName = name;
//  }
//}

//console.log( maxName || "нет сотрудников" );

//#4
//var salaries = {
//  "Вася": 100,
//  "Петя": 300,
//  "Даша": 250,
//  "Даш": 250
//};
//
//var cnt = 0;
//var sum = 0;
//for(var key in salaries){
//    sum += salaries[key];
//    cnt++;
//}
//cnt ? console.log(sum) :  console.log(0);


//#3
//var obj = {
//    name:"sasha",
//    age:29,
//    data:["c",2,true],
//    met:function met(){alert(1);}
//};
//
//var ob = {};
//
//function isEmpty(obj) {
//    var cnt = 0;
//    for(var key in obj){
//        cnt++;
//    }
//   return (cnt) ? false : true;
//}
//console.log(isEmpty(ob));

//#2
//var user = {};
//user.name = "Вася";
//user.surname = "Петров";
//user.name = "Петя";
//delete user.name;
//console.log(user.name);

//#1
//var obj = {
//    name: "vasta", 
//    age: 30, 
//    hello: function name(name){console.log(name);}
//};
//
//for(var key in obj){
//    console.log(key+" - "+obj[key]);
//}
//obj.hello("petya");
/*==3)Object ==*/



/*==2)String ==*/

//#5
//function extractCurrencyValue(str){
//    str = str.slice(1);
//    return parseInt(str);
//}
//console.log(extractCurrencyValue("$120"));

//#4
//function truncate(str, maxlength){
//    if(str.length>maxlength)
//        str = str.slice(0,maxlength) + "...";
//    return str;
//}
//console.log(truncate("Саня", 20));
//#3
//function checkSpam(str){
//    //str = str.toLowerCase().indexOf("viagra");
//    if(str.toLowerCase().indexOf("viagra") !== -1 || str.toLowerCase().indexOf("xxx")!== -1)
//        return true;
//    return false;
//    
//}
//console.log(checkSpam("adas  vsadasv"));

//var res = checkSpam("adas  viagra");
//console.log(res);

//#2
//function ucFirst(str){
//    var a = str.charAt(0).toUpperCase();
//    console.log(a + str.slice(1));
//}
//ucFirst("саша");
//#1
//var str = "Марсоход пока не обнаружил следы жизни на Красной планете";
//var firsProbel = str.indexOf(" ");
//var lastProbel = str.lastIndexOf(" ");
//console.log(str.slice(firsProbel, lastProbel));
/*==2)String ==*/

/*==1)Number ==*/

//#2
//alert( (0.1 + 0.2).toFixed(2) + '$' ); 

//#1
//var res1 = +prompt("Введите первое число");
//var res2 = +prompt("Введите второе число");
//alert(res1 + res2); dsfsd

/*==1)Number ==*/
function print(val){
    console.log(val);
}

// https://habrahabr.ru/post/309430/ //плагины js


