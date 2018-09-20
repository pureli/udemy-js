// 任務：將使用者帳密存起來，送到伺服器存檔，並回傳 alert 註冊成功或失敗

// 第一步：取得使用者輸入帳密
var accountStr = document.querySelector('.account').value;
var passwordStr = document.querySelector('.password').value;
var send = document.querySelector('.send');


// 第二步：按鈕 click 送出 email、password 功能，傳送到伺服器，並回傳成功或失敗訊息
function sendFunc(){
    // 將帳號、密碼從成物件（JSON 格式）
    var data = {};
    data.email = accountStr;
    data.password = passwordStr;
    
    // 傳到伺服器
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    // 送出資料前，先將資料轉成字串
    var dataStr = JSON.stringify(data);
    xhr.send(dataStr);

    // 當執行完上述，表示伺服器已撈到資料，即可進行接下來
    xhr.onload = function(){
        // 將回傳資料（字串）轉成物件格式
        // responseText 為整個存起來的物件（含帳密）
        var callBackData = JSON.parse(xhr.responseText);
        if(callBackData.message == '帳號註冊成功'){
            alert('恭喜你註冊成功');
        }
        if(callBackData.message == '此帳號已被使用'){
            alert('此帳號已被使用');
        }
        
    }

}

send.addEventListener('click',sendFunc,false);