// for 練習：印出陣列中的屬性
var classes = [{
    name : 'Apple Class',
    teacher : 'Sandy',
    student : ['papa','momo','dodo']
},
{
    name : 'Lemon Class',
    teacher : 'Newyellow',
    student : ['11','22','33']
}];

// 需求：印出兩個班級的名字
// 初始狀態 ; 條件 ; 更新內容 
for(var i=0;i<classes.length;i++){
    console.log('第'+(i+1)+'個班級名字叫'+classes[i].name);
}