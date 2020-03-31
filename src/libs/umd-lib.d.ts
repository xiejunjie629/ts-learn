declare namespace umdLib {
    const version: string
    function doSomething():void
}

export as namespace umdLib

export = umdLib
// 可全局引入