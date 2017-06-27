(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.nodeJSWebServer = global.nodeJSWebServer || {})));
}(this, (function (exports) { 'use strict';

var Example = (function () {
    function Example() {
        this.a = 2;
    }
    return Example;
}());

exports.Example = Example;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
