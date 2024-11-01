console.log('HEllo WORLD');
var keys = {
    a: 'Jujjuri',
    b: "Aliee",
    c: 56789,
    d: function () {
        return this.c * 4;
    },
    print: function () {
        console.log("<br>".concat(this.a, " <br> ").concat(this.b, " <br>").concat(this.c, " <br> ").concat(this.d(), " "));
    }
};
keys.print();
var values = new Map();
values.set('1', 'one');
console.log(values.get('1'));
var mapVals = new Map();
mapVals.set(1, "<br><b>KrishnaVeni</b><br>");
mapVals.set(2, "<b>GangaChari</b><br>");
console.log(mapVals.get(1));
console.log(mapVals.get(2));
var passWord = 'AlEkhya23';
var pattern = /(?=.*[A-Z])\w{5,20}/;
if (passWord.match(pattern)) {
    console.log('Login Success');
}
else {
    console.log("<a href=\"index.html\">Try Again! </a>");
}
function Abc() {
    var a = 90;
    var b = 34.56;
    console.log("<br>".concat(a * b, "<br>"));
}
Abc();
var arrayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var exp = new Date();
console.log("<br>".concat(exp, "<br>"));
console.log("<br>".concat(arrayList[exp.getDay()], "<br>").concat(exp.getFullYear(), ", ").concat(exp.getMonth(), " <br> ").concat(exp.toLocaleTimeString()));
function Details(a, b, c) {
    console.log("".concat(a, " + ").concat(b, " is to ").concat(a - b));
}
Details(10, 20, "equal");
//if we define any optional parameters they must be at the end
//rest parameters 
function RestParameters() {
    var products = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        products[_i] = arguments[_i];
    }
    var id = products[0], name = products[1], stock = products[2], price = products[3];
    console.log("".concat(id, " ").concat(name, " ").concat(stock, " ").concat(price));
}
RestParameters(111, "aliee", true, 4000);
