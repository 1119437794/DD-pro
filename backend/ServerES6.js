import ejs from 'ejs' //引入模板引擎
import express from 'express' //引入express框架
import ejsMate from 'ejs-mate' //引入layout
import compression from 'compression' // 引入压缩输出
import favicon from 'serve-favicon' //引入设置网页favicon
import bodyParser from 'body-parser' //引入解析body
import cookieParser from 'cookie-parser' //引入cookie解析
import devLogger from 'morgan' //引入开发日志记录
import productionLogger from 'express-logger' //引入生产日志记录

import routesCom from './common/modules/routesComLib.js' //公共方法模块
import Test from './routes/TestES5.js' //路由模块 -- 测试

const app = express();
const server = app.listen(process.env.PORT || 8080, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('DDNodeServer listening at http://%s:%s', host, port);
})
const viewsDir = `../frontend/remote/`;

app.disable('x-powered-by');//环境设置

//设置模板引擎信息 待解决？？？
 app.set('views', [
     `${viewsDir}Public/`,
     `${viewsDir}Test/`,
 ]);
app.set('view engine', 'html');
app.engine('html', ejsMate);
app.locals._layoutFile = 'layout.html';

//中间件配置
if(process.env.ENV){
    app.use(productionLogger({
        //???还可以配置 打印重要信息
        "path":`${__dirname}/logs/1.log`
    }));
}else {
    app.use(devLogger('dev'));
}
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression({level:9}));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(favicon(`${__dirname}/frontEnd/src/Img/favicon.ico`));

//路由分配
app.use(express.static(viewsDir));
app.use('/Test', Test(express, routesCom));

//404 以及 500
app.use((err, req, res, next) => res.status(500).send(`<pre><h1>EJS 语法错误</h1><br>${err.stack}</pre>`));
app.use((req, res, next) => res.status(404).send('Not Found!'));