const formInfo = require('./formInfo');
const makeApp = require('./makRouters');
const copyFile = require('./../copyFile');

let main = () => {
    let info = formInfo();
    let srcPath = './../../src/';
    makeApp(copyFile,srcPath,info.importStr,info.routers);
};

let run = () => {
    main();
}

module.exports.run = run;
module.exports.main = main;
