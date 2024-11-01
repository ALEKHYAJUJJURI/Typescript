console.log('HEllo WORLD')
var keys:{
    a:string,
    b:string,
    c?:number,
    d?():number,
    print():void
 }  =  {
        a:'Jujjuri',
        b:"Aliee",
        c:56789,
        d:function(){
            return this.c*4
        },
        print:function(){
            console.log(`<br>${this.a} <br> ${this.b} <br>${this.c} <br> ${this.d()} `)
        }      
}
keys.print();
let values:Map<string,any> = new Map()
values.set('1','one')
console.log(values.get('1')) 

let mapVals:Map<number,any> =new Map()
mapVals.set(1,`<br><b>KrishnaVeni</b><br>`)
mapVals.set(2,`<b>GangaChari</b><br>`)
console.log(mapVals.get(1))
console.log(mapVals.get(2))

let passWord:string = 'AlEkhya23'; 
let pattern:RegExp = /(?=.*[A-Z])\w{5,20}/;
if(passWord.match(pattern)){
    console.log('Login Success')
}
else{
    console.log(`<a href="index.html">Try Again! </a>`)
}
function Abc(){
    let a:number = 90
    let b:number = 34.56
    console.log(`<br>${a*b}<br>`)
} 
Abc();

let arrayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let exp:Date = new Date()
console.log(`<br>${exp}<br>`)
console.log(`<br>${arrayList[exp.getDay()]}<br>${exp.getFullYear()}, ${exp.getMonth()} <br> ${exp.toLocaleTimeString()}`)

function Details(a:number,b:number,c?:string):void{
console.log(`${a} + ${b} is to ${a-b}`)
}
Details(10,20,"equal")
//if we define any optional parameters they must be at the end
//rest parameters 
function RestParameters(...products:any[]):void{
    let [id,name,stock,price] = products;
    console.log(`${id} ${name} ${stock} ${price}`)

}
RestParameters(111,"aliee",true,4000)

