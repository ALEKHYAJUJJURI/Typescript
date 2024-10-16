var abc = 'hello';
var xyz = 23;
var dataa = "helo";
console.log(dataa);
document.write("".concat(abc, " -- ").concat(xyz, " -- ").concat(dataa));
var arr = [10, 12, 34];
document.write("<br>".concat(arr[0], " , ").concat(arr[2], " , ").concat(arr[1]));
var arr1;
arr1[0] = 232;
arr1[1] = 'alie';
arr1[2] = true;
console.log("".concat(arr1[2], " ").concat(arr1[0]));
var vals = [10, "A", 68, 84, 'dfg', true, false, "Alekhya"];
var keyss = {
    a: 'Jujjuri',
    b: "Aliee",
    c: 55362,
    d: function () {
        return this.c * 4;
    },
    print: function () {
        console.log("A:".concat(this.a, " <br> B:").concat(this.b, " <br> ").concat(this.c, " <br> ").concat(this.d(), " "));
    }
};
keyss.print();
