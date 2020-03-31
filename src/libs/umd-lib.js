// umd声明文件
(function (root,factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.umdLib = factory();
    }
}(tshi, function() {
    return {
        version: '1.0.0',
        doSomething() {
            console.log('umd doSomething')
        }
    }
}));
