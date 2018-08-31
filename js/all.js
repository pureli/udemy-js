var farms = 
[
    {
        farmer: 'Papa'
    },
    {
        farmer: 'Newyellow'
    },
    {
        farmer: 'ArPu'
    }
]

var list = document.querySelector('.list');

// 更新農場資料:動態產生資料在網頁上
function updateList(){
    var str = '';
    for(var i = 0; i < farms.length; i++){
        var farmer = farms[i].farmer;
        // 在li裡加入num，用意為方便之後取出第幾個農夫，才可以叫出他的名字
        str+='<li data-num="'+i+'">'+farmer+'</li>' 
       
        list.innerHTML = str;
    }
}
updateList();

// 點擊事件：確認點擊的農夫是誰
// splice - 刪除 array 資料
function checkList(e){
    // 偵測目前點擊的東西是什麼
    var num = e.target.dataset.num;
    if(e.target.nodeName !== "LI"){return}
    // return 可惟一個中斷點，不執行下面東西
    // 編號
    farms.splice(num,1);
    updateList();
    
}
list.addEventListener('click',checkList,false);