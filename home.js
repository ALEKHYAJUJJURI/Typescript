var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var passWord = 'akhya23';
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
var details = {
    Id: 1,
    Name: 'mobile',
    Stock: true,
    Quantity: 3,
    Price: 10000,
    Total: function () {
        return this.Quantity * this.Price;
    },
    Print: function () {
        console.log("".concat(this.Id, " ").concat(this.Name, " ").concat(this.Price, " ").concat(this.Stock, " ").concat(this.Total(), " ").concat(this.Quantity, " ").concat(this.Description, " ").concat(this.vendor));
    },
    Description: "loredk",
    vendor: 200
};
details.Print();
var Company = /** @class */ (function () {
    function Company() {
        this.UName = "Alekhya";
        this.Password = "Alekhya_970";
    }
    return Company;
}());
var obj = new Company;
console.log(obj.Password);
var ProductTemp = /** @class */ (function () {
    function ProductTemp() {
        this.Id = 0;
        this.Price = 0;
        this.Name = '';
    }
    return ProductTemp;
}());
var ProdDeltails = /** @class */ (function (_super) {
    __extends(ProdDeltails, _super);
    function ProdDeltails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Id = 2;
        _this.Name = 'ale';
        _this.Price = 2300;
        return _this;
    }
    ProdDeltails.prototype.Print = function () {
        console.log("".concat(this.Id, " ").concat(this.Name, " ").concat(this.Price));
    };
    return ProdDeltails;
}(ProductTemp));
var ob = new ProdDeltails();
ob.Print();
console.log(ob.Price);
//Generic functions
//generics will not allow operators 
//you have to handle using methods and functions
function Sum(a, b) {
    return a + b;
}
function Print(a, b) {
    return Sum(a, b);
}
console.log(Print(2, 6));
console.log(Print('AB', 'CD'));
