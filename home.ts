console.log('HEllo WORLD')
let keyss:{
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