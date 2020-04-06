/***
 * 有多个不同的类，想通过一个方法，传递一个区分他们的字符串来创建不同的实例
 */
function droidProducer(kind) {
    if (kind === 'battle'){
        console.log('new B1 前准备代码');
        return new B1();
    };
    console.log('new Rx24 前准备代码');
    return new Rx24();
  }
  
  class B1 {
    info() {
      return "B1, Battle Droid";
    }
  }
  
  class Rx24 {
    info() {
      return "Rx24, Pilot Droid";
    }
  }
  
  let target = droidProducer();
  console.log('target:', target);
  