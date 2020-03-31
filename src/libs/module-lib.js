// 模块声明文件
const version = '1.0.0';

function doSomething() {
    console.log('module do smthing')
}

function moduleLib(options) {
    console.log(options);
}

moduleLib.version = version;
moduleLib.doSomething = doSomething;

module.exports = moduleLib;
