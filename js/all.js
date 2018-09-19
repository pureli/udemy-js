// 練習 AJAX
// 第一步：建立一個 XMLHttpRequest
// 第二步：傳送到對方伺服器要資料
// 第三步：回傳資料到自己的瀏覽器
// 第四步：拿到資料後再看要做什麼事
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// 第一步
var data = new XMLHttpRequest();

// 第二步
// readyState
// 0 - 你已經產生一個 XMLHttpRequest，但是還沒有連接你要撈的資料
// 1 - 你用了 open()，但你還沒有把資料傳過去
// 2 - 偵測到你有用 send
// 3 - loading
// 4 - 你撈到資料了，數據已經完全接收到了


// 格式、要讀取的網址、同步與非同步
// 格式：get（讀取資料）、post（傳送資料到伺服器）
// 同步與非同步：
// true - 非同步，不會等資料傳回來，就讓城市繼續往下跑，等到回傳才會自動回傳
// false - 他會等資料傳回來，才讓程式碼繼續往下跑

data.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);

// 第三步
// 傳空的資料
data.send(null);


// 第四部
// 顯示資料
data.onload = function(){
    // status 可判斷資料有無撈到
    // 200 資料有正確回傳，有撈到
    // 404 資料讀取錯誤，沒撈到
    if(data.status == 200){
        console.log(data.responseText);
        // 在網頁上顯示資料
        // 第一步：先將字串轉成陣列
        var str = JSON.parse(data.responseText);
        // 第二步：顯示在網頁上
        var show = document.querySelector('.show');
        show.textContent = str[0].name;
    }else{
        console.log('資料錯誤');
    }
}

// CORS 是否提供跨網域撈取資料
// 例如政府的 opendata 不能跨網域撈資料（資安問題）
// 要確認是否可跨網域撈，可到 test-cors.org 把 JSON 網址貼上，看狀態是否為 200
