// 練習：鍵盤點下，火箭上升
var body = document.body;

function upFunc(e){
    // 當按1時，火箭一往上升
    // 以此類推

    switch(e.keyCode){
        case 49:
            document.querySelector('.rocket1').style.bottom = '2000px';
            break;
        case 50:
            document.querySelector('.rocket2').style.bottom = '2000px';
            break;
        case 51:
            document.querySelector('.rocket3').style.bottom = '2000px';
            break;        
        
    }
}


body.addEventListener('keydown',upFunc,false);
