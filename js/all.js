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

// 假設超過100隻，就跟他買
// 想要買100隻小雞，所以要確定誰的小雞數量夠
    for( var i=0 ; i<farms.length ; i++){
        if(farms[i].chick > 100){
            console.log(farms[i].farmer +'的小雞數量夠');

            //問如果買了100隻後，該農場主人還剩幾隻
            // 第一種寫法
            var chickTotal = farms[i].chick -100;
            console.log(farms[i].farmer+'剩下'+chickTotal+'隻小雞');

            // 第二種寫法
            // farms[i].chick-=100;
            // console.log(farms[i].farmer+'剩下'+farms[i].chick+'隻小雞');
            break;
        }
       
    }
    