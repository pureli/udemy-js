// 新的 html 標籤：data-*（*為自訂名稱）
// 透過 dataset 撈出並讀取自訂資料

// 練習：點擊list上的資料時，秀出自訂資料
// var listData = document.querySelector('.list li');
//  function show(e){   
//     var data1 = e.target.dataset.book;
//     console.log('我總共有'+data1+'本書');
// }

// 呈上，多重選擇練習：點擊list上的資料時，秀出自訂資料
var listData = document.querySelectorAll('.list li');
for(var i = 0; i<listData.length; i++){ 
    listData[i].addEventListener('click',show,false);
}


function show(e){   
    var data1 = e.target.dataset.book;
    console.log('我總共有'+data1+'本書');
}


// 其他多重選擇練習
var text = document.querySelectorAll('.textContent');
for( var i = 0; i<text.length; i++){
text[i].textContent = 'hello'; 
}