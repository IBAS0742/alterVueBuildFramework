const log4js = require('log4js');
log4js.configure({
  appenders: {
    xcLogFile: {
      type: "dateFile",
      filename: __dirname +'/../logs/LogFile',//
      alwaysIncludePattern: true,
      pattern: "-yyyy-MM-dd.log",
      encoding: 'utf-8',//default "utf-8"，文件的编码
      maxLogSize: 11024 }, //文件最大存储空间
    xcLogConsole: {
      type: 'console'
    }
  },
  categories: {
    default: {
      appenders: ['xcLogFile'],
      level: 'all'
    },
    xcLogFile: {
      appenders: ['xcLogFile'],
      level: 'all'
    },
    xcLogConsole: {
      appenders: ['xcLogConsole'],
      level: log4js.levels.ALL
    }
  }
});
module.exports = log4js.getLogger('xcLogFile');
