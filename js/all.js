// //練習班級1
// var appleClass = [];
// appleClass.push('黃新');
// appleClass.push('映君');
// appleClass.push('阿帕');

// appleClass[0] = '萊恩';

// console.log(appleClass);
// console.log('apple班總共有' + appleClass.length + '位小朋友！');




// //練習農場
// var farm = {
//     farmer : '黃新',
//     dog : ['阿帕','萊恩','阿毛'],
//     goDinner : function(){
//         console.log(farm.farmer + '吃晚餐柳！');
//     }
// };


// farm.goDinner();
// console.log(farm.dog[2]);




// // 陣列裡也可放數字、字串、物件
// var farms = [
//     {
//         farmer: ' 卡斯伯 '
//     },

//     [
//         farmer; '麗莎'
//     ]
// ]

// console.log(farm[1].dogs[0]);




// //練習班級2
// var MoonClass = {
//     teacher: "Gary",
//     student: ["Sam","Jenny","Rose"],
//     studentGrade: [88,79,99],
//     studentNumber: 3,
//     classRoom: "C104"
// };

// var myTeacher = MoonClass.teacher;
// MoonClass.classRoom = 'B106';
// MoonClass.ClassTime = '09:00AM';

// console.log(MoonClass);
// console.log(MoonClass.ClassTime);





// //練習班級3
// var SunClass = {
//     teacher: "Jane",
//     student: ["Andy","Peter","John"],
//     studentGrade: [89,100,99],
//     studentNumber: 3,
//     classRoom: "B107",
//     countStudent: function(){
//         console.log("學生共有"+SunClass.studentNumber+"位");
//     },
//     showClassRoom: function (){
//         console.log('SunClass班在' + SunClass.classRoom + '上課囉');
//     }
// };

// SunClass.showClassRoom();





// //陣列可包多個物件
// var hexSchool = [
//     //第一個物件
//     {
//         teacher: "Jane",
//         student: ["Andy","Peter","John"],
//         studentGrade: [89,100,99],
//         studentNumber: 3,
//         classRoom: "B104"
//     },

//     //第二個物件
//     {
//         teacher: "Gary",
//         student: ["Sam","Jenny","Rose"],
//         studentGrade: [88,79,99],
//         studentNumber: 3,
//         classRoom: "C104"
//     }
// ];

// var myTeacher = hexSchool[1].teacher;
// var mystudent = hexSchool[0].student[2];

// console.log(myTeacher);
// console.log(mystudent);





////////////壽星折扣案例///////////
// 一、判斷生日
// 第一種寫法
// var myBirth = 10;
// var thisMonth = 8;
// var chechBirth = function (){
//     if (myBirth == thisMonth){
//         document.getElementById('birthdayID').textContent = 'yes';
//     }
//     else{
//         document.getElementById('birthdayID').textContent = 'nope';
//     }
// }
// chechBirth();

// // 第二種寫法
// // var myBirth = 10;
// // var thisMonth = 8;
// // var checkBirth = myBirth == thisMonth;

// // document.getElementById('birthdayID').textContent = checkBirth;

// // 二、判斷人數（問人數是否沒到齊）
// var nowPeople = 1;
// var totalPeople = 3;
// var checkPeople = nowPeople !== totalPeople;

// document.getElementById('seatID').textContent = checkPeople;




////////////比較、邏輯運算///////////
// 簡易案例：到便利商店取貨，店員要看證件（有一張即可）
var isID = true;
var isHealth = false;
if(isID == true || isHealth == true){
    console.log('ok, here is your stuff.');
}else{
    console.log('you can not pick.');
}

// 複雜案例：餐廳滿千、VIP判斷送贈品
// 第一種寫法
// var vipID = false;
// var myCost = true;

// if (vipID == true && myCost == true){
//     document.getElementById('checkID').textContent = 'yes';
// }else{
//     document.getElementById('checkID').textContent = 'no';
// }

// if(vipID == true || myCost == true){
//     document.getElementById('checkID2').textContent = 'yes';
// }else{
//     document.getElementById('checkID2').textContent = 'yes';
// }

// 第二種寫法
var vipID = false;
var myCost = true;
var andCheck = vipID == true && myCost == true;
var orCheck = vipID == true || myCost == true;

document.getElementById('checkID').textContent = andCheck;
document.getElementById('checkID2').textContent = orCheck;