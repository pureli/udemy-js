// for 數量加總練習：以農場香蕉數量為例
var farms = 
[
    {
        farmer : 'Newyellow',
        chick : 200,
        banana : 1000
    },
    {
        farmer : 'pure',
        chick : 300,
        banana : 2000
    },
    {
        farmer : 'Papa',
        chick : 200,
        banana : 5000
    }
]

// 第一種寫法
console.log(farms[0].banana + farms[1].banana + farms[2].banana);

// 第二種寫法
var bananaTotal = 0;
for( var i = 0; i < farms.length; i++){
    bananaTotal = bananaTotal + farms[i].banana;
}
console.log(bananaTotal);