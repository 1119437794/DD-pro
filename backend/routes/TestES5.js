"use strict";
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  default: {
    enumerable: true,
    get: function() {
      return $__default;
    }
  }
});
var $__default = function(express, routesCom) {
  var router = express.Router({caseSensitive: true});
  var coData = {title: 'demo测试'};
  router.get('/index.html', function(req, res) {
    var renderData = {content: '这是一个demo'};
    routesCom.render(req, res, 'index2', coData, renderData);
  });
  return router;
};
//# sourceURL=<compile-source>
