// 練習取消元素默認行為、了解元素所在位置
// 此處開始
// var menuEl = document.querySelector('.menu');
// menuEl.addEventListener('click',function(e){

//     //取消元素原本的默認行為
//     //原本連結會跳轉到指定網頁
//     //submit按鈕，先透過我的js查詢表單有沒有錯誤，post去傳送
//     e.stopPropagation();
//     e.preventDefault();
    
//     // e.target 了解目前元素所在位置
//     console.log(e.target);
// },
//     'false');




// 練習 change - 表單內容更動時觸發
// 此處開始
    var farms = 
    [
        {
            name: 'Papa Farm',
            farmer: 'ArPu',
            disc: '文山區'
        },
        {
            name: 'New Farm',
            farmer: 'Newyellow',
            disc: '大安區'
        },
        {
            name: 'QQ Farm',
            farmer: 'Qbebe',
            disc: '大安區'
        }
    ]

        // change 事件：選到該區秀出該區域的農場名字
        var area = document.querySelector('.areaSelect');
        var list = document.querySelector('.listFrom');

        function changeFunc(e){
            //get到區域名字
            var areaName = e.target.value;
            var str = '';
            //當get到的區域名字等於陣列中的區域，秀出li字串
            for( var i = 0; i < farms.length; i++){
                if(areaName == farms[i].disc){  
                    // // 組字串
                    // finalPrint顯示在ul裡
                    str += '<li>'+farms[i].farmer+'</li>';
                }
            }
            list.innerHTML = str;
        }

        area.addEventListener('change',changeFunc, false);
