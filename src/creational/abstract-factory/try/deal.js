/***
 * 和origin 里面的一样，只是把 new之前的准备代码提到了一个函数里面，
 * 如果不喜欢在调用的时候使用 droidProducer('battle')(); 这样，
 * 可以在droidProducer返回的时候不回传函数，而是直接调用函数，返回函数结果
 */
function droidProducer(kind) {
    if (kind === 'battle') return battleDroidFactory;
    return pilotDroidFactory;
  }
  
  function battleDroidFactory() {
    return new B1();
  }
  
  function pilotDroidFactory() {
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
  
  let target = droidProducer('battle')();
  console.log('target', target);
  