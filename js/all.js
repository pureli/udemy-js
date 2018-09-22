var send = document.querySelector('.send');

function sendFunc (){
    // 按鈕 click 送出 email、password 功能，傳送到伺服器，並回傳成功或失敗訊息
    var accountData = document.querySelector('.account').value;
    var passwordData = document.querySelector('.password').value;
    var nameData = document.querySelector('.name').value; 

    // 傳送前要先存成物件格式
    var data = {};
    data.email = accountData;
    data.password = passwordData;

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    // 傳送前要存成字串
    var dataStr = JSON.stringify(data);
    xhr.send(dataStr);

    // 確認回傳值是否申請成功或失敗
    xhr.onload = function(){
        // 將server回傳資料變成物件
        var callBackData = JSON.parse(xhr.responseText);
        console.log(callBackData);
        if(callBackData.message == '帳號註冊成功'){
            alert('哈囉'+nameData+'！歡迎你加入叮叮咚喔！');
        }
        if(callBackData.message == '此帳號已被使用'){
            alert('哈囉'+nameData+'！抱歉您的帳號或密碼有誤');
        }
    }
}

send.addEventListener('click',sendFunc,false);