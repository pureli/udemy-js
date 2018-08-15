// for ＋ if 練習：鼓勵專櫃業績達標
var skm = 
[
    {
        name : '華哥爾內衣',
        todaySale : 20000
    },
    {
        name : '蕾戴絲內衣',
        todaySale : 15000
    },
    {
        name : '莎薇內衣',
        todaySale : 5000
    }
]

// 檢查品牌銷售業績
for( var i = 0; i < skm.length ; i++){
    // console.log(skm[i].todaySale);
    if(skm[i].todaySale >= 12000){
        console.log(skm[i].name+'達標，做得好喔！');
    }
}


