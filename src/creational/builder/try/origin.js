class Vedio {
  constructor(){
    this.author = '';
    this.title = '';
    this.views = 0;
  }
}
let vedio = new Vedio();
vedio.author = '聂大婷'
vedio.title = '所以到底是哪个环节出了问题？'
vedio.views = 30000
console.log('vedio', vedio);

/***
 * 改成构造器的写法
 */

class VedioBuilder {
  constructor(){
    this.vedio = new Vedio();
  }
  author(author){
    this.vedio.author = author;
    return this;
  }
  title(title){
    this.vedio.title = title;
    return this;
  }
  views(views){
    this.vedio.views = views;
    return this;
  }
  build(){
    return this.vedio;
  }
}

builder = new VedioBuilder();
rst = builder
  .author('雨哥')
  .title('大战宝剑嫂')
  .views(300000)
  .build();

console.log('rst:', rst);
