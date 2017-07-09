"use strict";
function $__interopRequire(id) {
  id = require(id);
  return id && id.__esModule && id || {default: id};
}
var ejs = $__interopRequire("ejs").default;
var express = $__interopRequire("express").default;
var ejsMate = $__interopRequire("ejs-mate").default;
var compression = $__interopRequire("compression").default;
var favicon = $__interopRequire("serve-favicon").default;
var bodyParser = $__interopRequire("body-parser").default;
var cookieParser = $__interopRequire("cookie-parser").default;
var devLogger = $__interopRequire("morgan").default;
var productionLogger = $__interopRequire("express-logger").default;
var routesCom = $__interopRequire("./common/modules/routesComLib.js").default;
var Test = $__interopRequire("./routes/TestES5.js").default;
var app = express();
var server = app.listen(process.env.PORT || 8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('DDNodeServer listening at http://%s:%s', host, port);
});
var viewsDir = "../frontend/remote/";
app.disable('x-powered-by');
app.set('views', [(viewsDir + "Public/"), (viewsDir + "Test/")]);
app.set('view engine', 'html');
app.engine('html', ejsMate);
app.locals._layoutFile = 'layout.html';
if (process.env.ENV) {
  app.use(productionLogger({"path": (__dirname + "/logs/1.log")}));
} else {
  app.use(devLogger('dev'));
}
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression({level: 9}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(viewsDir));
app.use('/Test', Test(express, routesCom));
app.use(function(err, req, res, next) {
  return res.status(500).send(("<pre><h1>EJS 语法错误</h1><br>" + err.stack + "</pre>"));
});
app.use(function(req, res, next) {
  return res.status(404).send('Not Found!');
});
//# sourceURL=<compile-source>
