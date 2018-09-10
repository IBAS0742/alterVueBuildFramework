// module.exports = (copyFile,theme,srcPath,dataImportStr,dataStr,tplStatementStr) => {
//     copyFile('./../createComponents/tpl/App.vue/' + theme + '.txt',srcPath + 'theme/' + theme + '/App.vue',{
//         dataImportStr: dataImportStr.join('\r\n\t'),
//         dataStr: dataStr.join(',\r\n\t\t\t\t'),
//         tplStatementStr: tplStatementStr.join('\r\n\t\t')
//     })
// };

module.exports = (copyFile,srcPath,importStr,routers) => {
  copyFile('',srcPath + 'routes.js','/**\r\n * createTime: ' + (new Date()).toISOString() + '\r\n */\r\n' + importStr.join('\r\n') + '\r\nlet routers = [\r\n\t' + routers.join(',') + '\r\n];\r\nexport default routers;');
};
