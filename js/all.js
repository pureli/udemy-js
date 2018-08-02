// 加總練習
function count(oneNum,twoNum){
    var total = oneNum + twoNum;
    console.log('總價格為:'+total+'元');
}

count(10,2);

// 匯率換算：台幣轉日幣
function calculator(ntdDollar){
    var jpDollar = ntdDollar * 0.27;
    console.log(jpDollar);
}

calculator(10000);

// 菜市場花費加總
function marketCost(apple,milk,cookie){
    var total = apple*20 + milk*30 + cookie*20;
    console.log(total);
}

marketCost(3,2,1);