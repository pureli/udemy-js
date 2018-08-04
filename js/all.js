//練習班級1
var appleClass = [];
appleClass.push('黃新');
appleClass.push('映君');
appleClass.push('阿帕');

appleClass[0] = '萊恩';

console.log(appleClass);
console.log('apple班總共有' + appleClass.length + '位小朋友！');




//練習農場
var farm = {
    farmer : '黃新',
    dog : ['阿帕','萊恩','阿毛'],
    goDinner : function(){
        console.log(farm.farmer + '吃晚餐柳！');
    }
};


farm.goDinner();
console.log(farm.dog[2]);




// 陣列裡也可放數字、字串、物件
var farms = [
    {
        farmer: ' 卡斯伯 '
    },

    [
        farmer; '麗莎'
    ]
]

console.log(farm[1].dogs[0]);




//練習班級2
var MoonClass = {
    teacher: "Gary",
    student: ["Sam","Jenny","Rose"],
    studentGrade: [88,79,99],
    studentNumber: 3,
    classRoom: "C104"
};

var myTeacher = MoonClass.teacher;
MoonClass.classRoom = 'B106';
MoonClass.ClassTime = '09:00AM';

console.log(MoonClass);
console.log(MoonClass.ClassTime);





//練習班級3
var SunClass = {
    teacher: "Jane",
    student: ["Andy","Peter","John"],
    studentGrade: [89,100,99],
    studentNumber: 3,
    classRoom: "B107",
    countStudent: function(){
        console.log("學生共有"+SunClass.studentNumber+"位");
    },
    showClassRoom: function (){
        console.log('SunClass班在' + SunClass.classRoom + '上課囉');
    }
};

SunClass.showClassRoom();





//陣列可包多個物件
var hexSchool = [
    //第一個物件
    {
        teacher: "Jane",
        student: ["Andy","Peter","John"],
        studentGrade: [89,100,99],
        studentNumber: 3,
        classRoom: "B104"
    },

    //第二個物件
    {
        teacher: "Gary",
        student: ["Sam","Jenny","Rose"],
        studentGrade: [88,79,99],
        studentNumber: 3,
        classRoom: "C104"
    }
];

var myTeacher = hexSchool[1].teacher;
var mystudent = hexSchool[0].student[2];

console.log(myTeacher);
console.log(mystudent);