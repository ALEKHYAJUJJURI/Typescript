var abc = 'hello';
var xyz = 23;
var dataa = "Alekhya";
console.log(dataa);
document.write("".concat(abc, " -- ").concat(xyz, " -- ").concat(dataa));
var arr = [10, 12, 34];
document.write("<br>".concat(arr[0], " , ").concat(arr[2], " , ").concat(arr[1]));
var vals = [10, "A", 68, 84, 'dfg', true, false, "Alekhya"];
var keyss = {
    a: 'Jujjuri',
    b: "Aliee",
    c: 55362,
    d: function () {
        return this.c * 4;
    },
    print: function () {
        document.write("A:".concat(this.a, " \n B:").concat(this.b, " \n ").concat(this.c, " \n ").concat(this.d(), " \n"));
    }
};
keyss.print();
var vals = new Array();
vals[0] = 10;
vals[1] = 'A';
vals[2] = true;
document.write("".concat(vals[0], ",").concat(vals[1], ",").concat(vals[2]));
var uName;
//uName = prompt('enter name')
//if (uName){
//  console.log('thank you')
//}
//else{
//  console.log('try again')
//}
