// 練習ㄧ、按鈕觸發事件：有兩種寫法
// 第一種寫法
// 從此處開始
// var button = document.querySelector('.btn');

//  button.onclick = function(){
//      alert('hello');
// }

// 第二種寫法：事件監聽(選擇事件,匿名function,false)
// 從此處開始
// button.addEventListener('click',function(){alert('新寫法')},false);




//練習二、利用 addEventListener 綁定按鈕兩個事件
//**注意**：使用 addEventListener 的好處是可以綁定好幾個事件，而 onclick 只能一個

// 綁定按鈕一：監聽一個事件
// 從此處開始
// var button1 = document.querySelector('.btn1');
// button1.addEventListener('click',function(){alert('我是按鈕一')},false);

// 綁定按鈕二：連續監聽兩個事件
// 從此處開始
// var button2 = document.querySelector('.btn2');
// button2.addEventListener('click',function(){alert('我是按鈕二')},false);
// button2.addEventListener('click',function(){alert('按鈕二再次出現')},false);



//練習三、說明 addEventListener 中，false、true 的差別
// false --> 從指定元素往外層
// true --> 從最外層找到指定元素
// 舉例
// 從此處開始
// var boxBtn = document.querySelector('.box');
// boxBtn.addEventListener('click',function()){alert('點到方塊囉');},false); 

// var bodyBtn = document.querySelector('.bodyClass');
// bodyBtn.addEventListener('click',function(){alert('你沒有點到方塊');},false);

// **注意**如果要解決點到重複元素的問題，須另加一行語法
var boxBtn = document.querySelector('.box');
boxBtn.addEventListener('click',function(e){e.stopPropagation();alert('點到方塊囉');},false); 

var bodyBtn = document.querySelector('.bodyClass');
bodyBtn.addEventListener('click',function(){alert('你沒有點到方塊');},false);
