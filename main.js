const studentRecord = [
    {
        studentID: 1,
        studentName: "Min Kyaw Thu",
        studentAge: 20,
        studentPhone: 09777341100,
        studentEmail: "supermkt2001@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 2,
        studentName: "Yeh Paing Aung",
        studentAge: 21,
        studentPhone: 09250616718,
        studentEmail: "yeh8p.ag@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 3,
        studentName: "Aung Pyae Win",
        studentAge: 23,
        studentPhone: 09261191166,
        studentEmail: "aungpyaewin.apw@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 4,
        studentName: "Min Myat Lwin",
        studentAge: 27,
        studentPhone: 09791718264,
        studentEmail: "myat2.snow@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 5,
        studentName: "Thu Ra Naing",
        studentAge: 22,
        studentPhone: 09784172525,
        studentEmail: "thuranaingkuk2525@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 6,
        studentName: "Htet Myet Lwin",
        studentAge: 27,
        studentPhone: 09456789123,
        studentEmail: "htetmyatlwin@gmail.com",
        studentIsAttendance: false,
    },
    {
        studentID: 7,
        studentName: "Myat Kaung Khant",
        studentAge: 21,
        studentPhone: 09753951456,
        studentEmail: "myatkaungkhant@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 8,
        studentName: "Han Htoo Zaw",
        studentAge: 19,
        studentPhone: 09450244925,
        studentEmail: "Hanzaw362@gmail.com",
        studentIsAttendance: false,
    },
    {
        studentID: 9,
        studentName: "Zaw Ye Htet",
        studentAge: 19,
        studentPhone: 09795594996,
        studentEmail: "zawyehtet2642019@gmail.com",
        studentIsAttendance: true,
    },
    {
        studentID: 10,
        studentName: "Kaung Sett",
        studentAge: 25,
        studentPhone: 09777771723,
        studentEmail: "iscomputing@gmail.com",
        studentIsAttendance: false,
    }
];

const forAttendancePresent = studentRecord.filter(function(x){
    return x.studentIsAttendance === true;
});
console.log(forAttendancePresent);

const forAttendanceAbsent = studentRecord.filter(function(x){
    return x.studentIsAttendance === false;
});
console.log(forAttendanceAbsent);

const nameForAttendancePresent = studentRecord.filter(function(x){
    return x.studentIsAttendance === true;
}).map(function(y){
    return y.studentName;
});
console.log(nameForAttendancePresent);

const nameForAttendanceAbsent = studentRecord.filter(function(x){
    return x.studentIsAttendance === false;
}).map(function(y){
    return y.studentName;
});
console.log(nameForAttendanceAbsent)