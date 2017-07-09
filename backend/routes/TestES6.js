// @param express -- express实例
// @param routesCom -- 路由公共模块

export default (express, routesCom) => {

    const router = express.Router({
        caseSensitive: true //路径大小写敏感
    });

    const coData = {
        title: 'demo测试'
    };

    router.get('/index.html', (req, res) => {
        let renderData = {
            content: '这是一个demo'
        };
        routesCom.render(req, res, 'index2', coData, renderData);
    })

    return router;
}