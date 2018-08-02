// 按鈕計算總價功能

// 第一種做法
// document.getElementById("calculate_button").onclick = calculator;
// function calculator (){
//     var hambergerNum;
//     hambergerNum = document.getElementById('hamberger').value;

//     var colaNum;
//     colaNum = document.getElementById('cola').value;

//     var total;
//     total = hambergerNum*80 + colaNum*30;
    
//     document.getElementById('totalPrice').textContent = total;
    
// }

// 第二種做法
// 1.讓按鈕綁定事件
document.getElementById('calculate_button').onclick = function () {
   // 2.指定價錢
    var hamPrice = 80;
    var colaPrice = 30;

   // 3.撈出表單元素中的欄位裡面的內容(value)，並乘以價錢
   var hambergerNum = parseInt(document.getElementById('hamberger').value)*hamPrice;
   var colaNum = parseInt(document.getElementById('cola').value)*colaPrice; 

   // 4.計算出並顯示在總價欄位上
   document.getElementById('totalPrice').textContent = hambergerNum + colaNum;

}


