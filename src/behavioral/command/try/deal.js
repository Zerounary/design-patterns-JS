/***
 * 如果我们只需要执行某个实例的特定方法，而不关心它是什么
 * 比如，停止 这个动作本身，就只是停止的意思，并不明确所需要停止的对象
 * 停止电饭煲，停止供电，停止旅行等等
 */

class Stop {
  constructor(target){
    this.target = target;
  }
  exec(){
    this.target.stop();
  }
}

class Car {
  constructor(){
   this.status = '';
  }
  run(){
   this.status = 'RUN';
   console.log('🚗运行了');
  }
  stop(){
   this.status = 'STOP';
   console.log('🚗停止了');
  }
}

class Vedio {
 constructor(){
  this.status = '';
 }
 play(){
  this.status = 'PLAY';
  console.log('视频播放了');
 }
 stop(){
  this.status = 'STOP';
  console.log('视频停止了');
 }
}

class InstanceManager {
  constructor(){
    this.instances = {}
    let initArray = ['vedio', 'car'];
    initArray.forEach(element => {
      this.createInstance(element);
    });
  }
  createInstance(target){
    if(target === 'vedio' && !this.instances[target]){
      let vedio = new Vedio();
      vedio.play();
      this.instances.vedio = vedio;
    }
    if(target === 'car' && !this.instances[target]){
      let car = new Car();
      car.run();
      this.instances.car = car;
    }
  }
  get(target){
    return this.instances[target];
  }
}

let im = new InstanceManager();
let stoper = new Stop(im.get('car'));
stoper.exec();