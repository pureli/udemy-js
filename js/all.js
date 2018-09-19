var classroom = 
[
    {
        name: 'Banana'
    },
    {
        name: 'Apple'
    },
    {
        name: 'Quava'
    }
]

// 將班級名字印出來，包成 function
var list = document.querySelector('.list');

function updateList(){
    var str = '';
    for( var i = 0; i < classroom.length; i++){
        // var deletStr = '<a href="#" data-index='+i+'/>刪除</a>';
        // str+='<li>'+deletStr+''+classroom[i].name+'</li>';
        str+='<li><a href="#" data-index='+i+'/>刪除</a> <span>'+classroom[i].name+'</span></li>';
    }
    list.innerHTML = str; 
}
updateList();

// 點刪除鍵，名字消失
function deletFun(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var str = e.target.dataset.index;
    classroom.splice(str,1);
    updateList();
}
list.addEventListener('click',deletFun,false);




