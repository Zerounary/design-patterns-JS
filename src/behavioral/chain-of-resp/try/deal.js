
class C1 {
  constructor(){
    this.next = null;
  }
  setNext(fn){
    this.next = fn;
  }

  exec(params){
    params.push(1);
    return this.next.exec(params);
  }
}

class c2 {
  constructor(){
    this.next = null;
  }
  setNext(fn){
    this.next = fn;
  }

  exec(params){
    params.push(2);
    return this.next.exec(params);
  }
}

class c3 {
  constructor(){
    this.next = null;
  }
  setNext(fn){
    this.next = fn;
  }

  exec(params){
    params.push(3);
    return params;
  }
}

let fca = (c1) =>{
  return new c1();
};
let b = new c2();
let c = new c3();
let a = fca(C1);
a.setNext(b);
b.setNext(c);
let params = [1,2,3];
let rst = a.exec(params);
console.log('rst:', rst);
