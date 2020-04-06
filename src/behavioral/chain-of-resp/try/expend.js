/***
 * 意识也是以类似链条一样的形式，进行的，能对这个进行模拟吗？
 * 除了意识以外，时空关系也是一个链式的关系，能模拟吗？
 */

/**
  * 传入初始值和流程，可以按照给的流程进行链式的处理
  * 如果有一套流程，使用者可能会动态的调整顺序，这样写就会很方便
  * @param {*} paramater 
  * @param {Array} flow 
  */
 function DynamicFlow(paramater, flow){
  let result = paramater;
  flow.forEach((flowKey) => {
    let execFunction = flowLib[flowKey];
    result = execFunction(result);
  })
  return result;
 }

 lineFlow = (paramater) => {
  paramater.push('葫芦娃线条');
  return paramater;
 }

 colorFlow = (paramater) => {
  paramater.push('大娃红');
  return paramater;
 }

 let flowLib = {
  lineFlow,
  colorFlow
}
 
 /***
  * 如果有一套流程，使用者可能会动态的调整顺序，这样写就会很方便
  */

 let painting = DynamicFlow(['白纸'], ['lineFlow', 'colorFlow']); 
 console.log('painting', painting);
 