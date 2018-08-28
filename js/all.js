// 透過 JSON.parse 和 JSON.stringify 編譯資料

// 練習1.將 array 轉為 string
// JSON.stringify()

// 練習2.將 string 轉為 array
// JSON.parse()
// 學以上兩點是因為 localStorage 只會保存 string 資料

// 此處開始
var country = [{farmer: "Ema"}];
// 第一步：先將陣 array 轉為 string
var countryString = JSON.stringify(country);
// 第二步：將資料存到 local storage
localStorage.setItem('countryItem',countryString);

// 若要取得陣列裡的資料
// 第三步：取得 localStorage 資料
var getData = localStorage.getItem('countryItem');
// 第四步：先將 string 轉為 array
var countryArray = JSON.parse(getData);

console.log(countryArray[0].farmer);