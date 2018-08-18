// 利用 createElement 在 html 上增加節點
// 相較於innereHTML的優點為：利用 js 把東西都組好後，再放到 html 上

// 練習一、
// 第一步：利用createElement增加html上的元素
var loveFood = document.createElement('em');

// 第二步：利用js動態增加好內容
loveFood.textContent = '蛋糕';
// 或想增加樣式
loveFood.setAttribute('class','foodColor');

// 第三步：使用appendChild將以上節點掛在想要顯示的地方（位置會出現在最後面）
document.querySelector('.food').appendChild(loveFood);


// 練習createElement 與 for 運用
// 挑戰：列出農夫的名字
var farms = [
    {
        name: 'MapleFarm',
        farmer: 'ArPu',
        duck: 200
    },
    {
        name: 'PapaFarm',
        farmer: 'Papa',
        duck: 300
    }
]

// 解法：組好形式與內容後，賦予子節點秀在網頁上
for( var i = 0; i < farms.length; i++){
    // 如何呈現
    var farmerList = document.createElement('li');
    // 內容    
    farmerList.textContent = farms[i].farmer;
    // 秀出
    document.querySelector('.farmerList').appendChild(farmerList);
}
