// js 塞 HTML 標籤

// 練習一、利用 js 在 html 中顯示文字＋樣式（textContent只是節點，不接受放樣式）

// 第一種寫法
// var dinner = document.getElementById('dinner');
// dinner.innerHTML = '<h1 class="dinnerColor">鹹酥雞</h1>';

// 第二種寫法
var dinner = document.getElementById('dinner');
var dinnerColor = '<h1 class="dinnerColor">鹹酥雞</h1>';
dinner.innerHTML = dinnerColor;



// 練習二、innerHTML 組字串的技巧
// 第一種寫法
// var loveVideo = document.querySelector('.video');
// loveVideo.innerHTML = '<li><a href="http:www.google.com">Hello Catie</a></li>';
// 第二種寫法
var loveVideo = document.querySelector('.video');
var link = 'http://www.yahoo.com.tw';
var name = '查理';
loveVideo.innerHTML = '<li><a href="'+link+'">我是'+name+'</a></li>';

// 練習三、innerHTML 與 for
// 從JSON資料依序撈出資料
var farms = 
[
    {
        name: 'papaFarm',
        farmer: 'ArPu',
        apple: 50
    },
    {
        name: 'newFarm',
        farmer: 'Newyellow',
        apple: 20
    }
]
// 錯誤寫法
for( var i=0; i<farms.length; i++ ){
    var farmName = farms[i].name;
    var farmerName = farms[i].farmer;
    console.log(farmName+'農場的主人是'+farmerName);
    // 練習顯示訊息在網頁上，by 動態塞值
    var farmsAll = document.querySelector('.farmsInfo');
    farmsAll.innerHTML = '<div>'+farmName+'農場的主人是'+farmerName+'</div>';
}
// 正確寫法
// **注意**因為 innerHTML 特性是後面資料會覆蓋掉前面，所以
    // 1.變數要全域變數
    // 2.需要一個空物件儲存每一筆撈出來的資料，再塞入 innerHTML

    var str = '';

    for( var i=0; i<farms.length; i++ ){
    var farmName = farms[i].name;
    var farmerName = farms[i].farmer;
    var farmsAll = document.querySelector('.farmsInfo');
    var content = '<div>'+farmName+'農場的主人是'+farmerName+'</div>';
    str+=content;
    }
    farmsAll.innerHTML = str;

