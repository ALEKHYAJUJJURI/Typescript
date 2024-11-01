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

let passWord:string = 'akhya23'; 
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
//Contracts is to define rules to design an component
// Interface is used to define a contract
// contract can have extended contract 
//contract can have readonly rules,optional rules

interface Iproduct{
    Id:number;
    Name:string;
    Stock:boolean;
    Quantity : number;
    Price:number;
    Total(): number;
    Print():void;
    readonly Description :string
} 
 
interface Ivendor extends Iproduct {
    Id:number;
    Name:string;
    Stock:boolean;
    Quantity : number;
    Price:number;
    Total(): number;
    Print():void;
    readonly Description :string,
    vendor : number
}
var details:Ivendor = {
    Id:1,
    Name:'mobile',
    Stock : true,
    Quantity : 3,
    Price : 10000,
    Total : function(){
        return this.Quantity*this.Price
    },
    Print : function(){ 
        console.log(`${this.Id} ${this.Name} ${this.Price} ${this.Stock} ${this.Total()} ${this.Quantity} ${this.Description} ${this.vendor}`)
    },
    Description:"loredk",
    vendor:200
}

details.Print()


interface IEmployee{
    UName:string;
    Password:string;
}
class Company implements IEmployee{
    public UName: string = "Alekhya";
    public Password: string = "Alekhya_970"; 
}
let obj = new Company
console.log(obj.Password)

interface Product{
    Id:number;
    Price:number;
    Name:string;
    Print():void;
}
abstract class ProductTemp implements Product{
    public Id: number = 0;
    public Price: number = 0;
    public Name: string = '';
     public abstract Print(): void 
}
class ProdDeltails extends ProductTemp {
    Id = 2;
    Name = 'ale';
    Price = 2300; 
     Print(){
        console.log(`${this.Id} ${this.Name} ${this.Price}`)
     } 
}
let ob = new ProdDeltails();
ob.Print()
console.log(ob.Price)

//Generic functions
//generics will not allow operators 
//you have to handle using methods and functions

function Sum(a:any,b:any){
    return a+b
}
function Print<T>(a:T,b:T){
    return Sum(a,b);  
}
console.log(Print<number>(2,6))
console.log(Print<string>('AB','CD'))