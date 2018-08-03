// 計算衣服把八折之後的含稅價格
// 打八折
function discount(clothPrice){
    return taxedPrice(clothPrice*0.8);
}

// 含稅
function taxedPrice(clothPrice){
    return clothPrice*1.1;
}

console.log(discount(1200));