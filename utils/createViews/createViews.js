const copyFile = require('./../copyFile');
let syncTools = require('./../themeUtil/syncTools');
let fs = require('fs');

const name = 'testOne';
const dir = '/test1/'
const ui = 'elm';
const title = '测试';

const uis = {
  ydui: {
    name: 'ydui',
    path: './base/ydui.js.tpl',
    homeUrl: 'http://vue.ydui.org/docs'
  },
  elm: {
    name: '饿了么',
    path: './base/elm.js.tpl',
    homeUrl: 'http://element-cn.eleme.io/#/zh-CN/component/quickstart'
  },
};
const html = {
  ydui: {
    name: 'ydui',
    path: './base/title.html'
  },
  elm: {
    name: '饿了么',
    path: './base/elm.html'
  }
};

let ps = dir.split('/').length;
let jsPath = './';
for (var i = 1;i < ps;i++) {
  jsPath += '../'
}
const setting = {
  //html
  title,
  //js
  Name: name[0].toUpperCase() + name.substring(1),
  //路径
  dir: dir + name,
  //文件名称
  name: name,
  path: jsPath
};
if (!fs.existsSync("./../../src/pages/" + dir)) {
  fs.mkdirSync("./../../src/pages/" + dir);
}
if (!fs.existsSync("./../../src/pages/" + setting.dir)) {
  fs.mkdirSync("./../../src/pages/" + setting.dir);
}

[
  {
    // vue
    from: './base/title.vue.tpl',
    to: "./../../src/pages/" + setting.dir + '/' + setting.name + '.vue',
    obj: setting
  },
  {
    // html
    from: html[ui].path,
    to: "./../../src/pages/" + setting.dir + '/' + setting.name + '.html',
    obj: setting
  },
  {
    // js
    from: uis[ui].path,
    to: "./../../src/pages/" + setting.dir + '/' + setting.name + '.js',
    obj: setting
  }
].forEach(obj => copyFile(obj.from,obj.to,obj.obj,'#'));

syncTools.main();


console.log('创建成功')
