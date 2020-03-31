// 全局声明文件
function globalLib(options) {
    console.log(options);
}

globalLib.version = '1.0.0'

globalLib.doSomething = function () {
    console.log('globalLib doSomething')
}
