// 練習事件監聽 - 從父元素監聽子元素
// 點li的東西，會顯示li裡面的文字內容
var el = document.querySelector('.UL');
el.addEventListener('click',show,false);
function show(e){
    // 因為只希望點擊li出現文字，若點擊ul則不出現
    // reture 表示回傳空值，並且到此結束，不會執行接下來的程式碼
    if(e.target.nodeName == 'UL'){return};
    console.log(e.target.textContent);
    // console.log(e.target.nodeName);

}