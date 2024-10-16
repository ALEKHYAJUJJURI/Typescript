var abc = 'hello';
var xyz:number = 23;
var dataa = "helo" 
console.log(dataa)

document.write(`${abc} -- ${xyz} -- ${dataa}`)

var arr:number[]= [10,12,34]
document.write(`<br>${arr[0]} , ${arr[2]} , ${arr[1]}`)

let arr1:any[];
arr1[0] = 232
arr1[1] = 'alie'
arr1[2] = true
console.log(`${arr1[0]} ${arr1[1]}`)


var vals = [10,"A",68,84,'dfg',true,false,"Alekhya"]
const keyss:{
    a:string,
    b:string,
    c?:number,
    d?():number,
    print():void
 }  =  {
        a:'Jujjuri',
        b:"Aliee",
        c:55362,
        d:function(){
            return this.c*4
        },
        print:function(){
            console.log(`A:${this.a} <br> B:${this.b} <br> ${this.c} <br> ${this.d()} `)
        }      
}
keyss.print();



