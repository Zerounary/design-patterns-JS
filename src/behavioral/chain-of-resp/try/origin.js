/***
 * 链式模式的根本原因，就是因为有一组方法，需要按一定的顺序进行处理，后面方法可能会用到前面方法的处理结果。
 * 当函数链执行完成之后，最后的结果就是整个函数链需要达成的最终结果。
 */
let f1 = p => {
    let rst1 = 0;
    if( p.length > 3){
        rst1 = 0.3;
    }
    return rst1;
}

let f2 = (rst1, p) => {
    let rst2 = 0;
    return rst2;
}

let f3 = (rst2, p) => {
    let rst3 = 0;
    return rst3;
}
let p = [1]
let rst1 = f1(p);
let rst2 = f2(rst1 , p);
let rst3 = f3(rst2, p);

console.log('final result：', rst3);
