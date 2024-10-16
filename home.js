console.log('HEllo WORLD');
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
