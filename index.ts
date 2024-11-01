var abc = 'hello';
var xyz:number = 23;
var dataa = "Alekhya" 
console.log(dataa)

document.write(`${abc} -- ${xyz} -- ${dataa}`)

var arr:number[]= [10,12,34]
document.write(`<br>${arr[0]} , ${arr[2]} , ${arr[1]}`)




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
            document.write(`A:${this.a} \n B:${this.b} \n ${this.c} \n ${this.d()} \n`)
        }      
}
keyss.print();

var vals:any[] = new Array();
vals[0] = 10;
vals[1]= 'A'
vals[2] = true 
document.write(`${vals[0]},${vals[1]},${vals[2]}`)



var uName:string|null;
//uName = prompt('enter name')
//if (uName){
  //  console.log('thank you')
//}
//else{
  //  console.log('try again')
//}