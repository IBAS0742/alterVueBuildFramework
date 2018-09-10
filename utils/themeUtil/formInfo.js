var glob = require('glob');

module.exports = (theme) => {
    // 获取某个主题(theme)下的所有的组件 脚本信息
    let files = glob.sync('./../../src/pages/**/**.js');

    // 生成对组件 index.js 文件的引用
    // import blankLayout from './......./blankLayout/index.js';
    let importStr = ["import home from './home.vue'"];
    // 生成组件 routers 内容
    // { path: '/editAttr' , component: editAttr , name: 'editAttr' }
    let routers = [
      "{\
        path : '/',\
        component: home,\
        name: '主页'\
      }"
    ];

    files.forEach(file => {
        if (file.indexOf('/bak/') + 1) {
            return;
        }
        // 以
        let indexFilePath = file.replace('./../../src','.').replace('.js','.vue');
        let fss = file.split('/');
        let name = fss[fss.length - 1].split('.js')[0];
        importStr.push("import " + name + " from '" + indexFilePath + "';");
        console.log(name)
        routers.push("{\
          path: '/" + name +"" + "',\
          component: " + name + ",\
          name: '" + name + "" + "'\
        }");
    });

    return {
      importStr,
      routers
    }
};
