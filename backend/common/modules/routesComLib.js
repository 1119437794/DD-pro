/*
* 因为每个路由模块都需引入的方法
* setNav -- 设置网站导航
* render -- 重载res.render方法
* nodeReq -- node作为客户端发起http请求
* */

var ENV = process.env.ENV,
    request = require('../../node_modules/request');

module.exports = {

    /*
     * 设置导航选中状态
     * @key -- 设置某一个导航选中
     * */
    setNav : function (key) {
        var navActive = {
        'Index' : false,
        'WebCast' : false,
        'Organization' : false,
        'ActivityPage' :　false
    };

        for(var i in navActive){
        if(i == key){
            navActive[i] = true;
        }
    }

        return navActive;
    },


    /*
     * 重载render方法
     * @res -- 服务器响应
     * @view -- 相应视图
     * @coData -- 模块公共数据
     * @data -- 每一次请求特定数据
     * */
    render : function (req, res, view, coData, data) {
        for(var i in coData){
            data[i] = coData[i];
        }

        if(req.query.api){
            res.json(data)
        }else {
            res.render(view, data);
        }
    },


    /*
     * node作为客户端向其他服务器请求
     * 借助全局变量process来设置访问API地址
     *
     * @options -- 请求信息
     *  url -- 请求地址【相对地址】
     *  data -- 请求所含的参数
     *  success -- 请求成功
     *  error -- 请求失败
     * */
    nodeReq : function(options) {
        var type = options.type || 'post',
            restFulApiHostname = ENV ? '待定' : 'http://test2.ddcj.net',
            props = arguments,
            funcName = arguments.callee,
            url = props.length == 1 ? options.url : '/Public/refreshtoken';

        request[type]({
            url: restFulApiHostname + url,
            form: options.data || null,
            encoding:'utf8',
            headers: {
                'X-Requested-With' : 'XMLHttpRequest',
                'Authorization' : 'Bearer ' + (options.token || '')
            }
        }, function(error, response, body){


            var statusCode = response.statusCode;

            if(statusCode){
                console.log(response)
            }
            switch (statusCode){
                case 200:
                    if(props.length == 1){
                        options.success(body);
                    }else {
                        props[0].token = body && JSON.parse(body).data.token;
                        //options.error.cookie('loginInfo', )
                        funcName(props[0]);
                    }
                    break;

                case 412:
                    options.error.redirect('/LoginRegister/login.html');
                    break;

                case 401:
                    if(props.length == 1){
                        funcName(props[0], true);
                    }else {
                        options.error.redirect('/LoginRegister/login.html');
                    }
                    break;

                default:
                    options.error.status(500).send(error.syscall + error.code);
                    break;
            }
        });
    },
}