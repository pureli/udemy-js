// 練習 localStorage 存、取資料到瀏覽器資料庫

// var str = 'hello';
// localStorage.setItem("myName",str);
// console.log(localStorage.getItem('myName'));

// 練習撈文字
// 第一步：click按鈕存資料到 local storage
var btn = document.querySelector('.btnClass');


btn.addEventListener('click',saveToStorage,false);
function saveToStorage(){
    // 存到 local storage
    var text = document.querySelector('.textClass').value;
    localStorage.setItem('myName',text);
}
// 第一步：新增一個按鈕，呼叫存到 local storage 裡的名字
var btnCall = document.querySelector('.btnCall');
btnCall.addEventListener('click',callFun,false);
function callFun(){
    // 撈出key資料
    var str = localStorage.getItem('myName');
    alert(str);
}




