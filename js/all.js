// 練習 DOM

// 一、動態塞文字
// 第一種寫法
var weatherAdj = document.querySelector('.weather em');
weatherAdj.textContent = '晴朗';
// 第二種寫法
document.querySelector('.weather em').textContent = '棒棒';



// 二、動態增加 HTML 上的屬性
// 練習一 動態增加（改變） HTML 上 href
var loveSong = document.querySelector('.song a');
loveSong.setAttribute('href','http://www.google.com');

// 練習二 呈上
var el = document.querySelector('.titleClass a');
// **注意** setAttribute('屬性','塞值')
el.setAttribute('href','http://www.google.com');

// 練習三 動態加上 class
// **注意** setAttribute('屬性','塞值')
var flowerText = document.querySelector('.flower');
flowerText.setAttribute('class','flowerColor');

// 練習四 動態取值，如取出 href 
var link = document.querySelector('.song a').getAttribute('href');
console.log(link);

// 練習五 動態取直，如取出文字
var link = document.querySelector('.song a').textContent;
console.log(link);

// 另一種寫法
var link = document.querySelector('.song a').innerHTML;
console.log(link);
 