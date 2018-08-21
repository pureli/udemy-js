// 練習：mouseover - 當滑鼠滑到指定內容時觸發觸發
var screenX = document.querySelector('.screenX');
var screenY = document.querySelector('.screenY');

var pageX = document.querySelector('.pageX');
var pageY = document.querySelector('.pageY');

var clientX = document.querySelector('.clientX');
var clientY = document.querySelector('.clientY');

 // 滑鼠圖片
 var mouseImg = document.querySelector('.mouseImg');

// 事件監聽

function showFunc(e){
    screenX.textContent = e.screenX;
    screenY.textContent = e.screenY;
    pageX.textContent = e.pageX;
    pageY.textContent = e.pageY;
    clientX.textContent = e.clientX;
    clientY.textContent = e.clientY;
    // 滑鼠圖片
    mouseImg.style.left = e.clientX+'px';
    mouseImg.style.top = e.clientY+'px';
}

var el= document.body;
el.addEventListener('mousemove',showFunc,false);

// 碰到怪物跳出訊息
var box1 = document.querySelector('.box1');
box1.addEventListener('mousemove',box,false);

function box(){
    alert('hello');
}


