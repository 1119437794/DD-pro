var webpack = require('webpack'),
    localDir = __dirname + '/local/',
    remoteDir = __dirname + '/remote/',
    pulicDir = remoteDir + 'Public/',

    htmlWebpackPlugin = require('html-webpack-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    extractTextPlugin = require("extract-text-webpack-plugin"),
    uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            except: ['$super', '$', 'exports', 'require']
        }),
    hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin(),

    entry = {},
    allEntry = [
        'Test/index'
    ],

    plugins = [
        uglifyJsPlugin,//代码丑化
        hotModuleReplacementPlugin,//模块热部署
        new extractTextPlugin("[name].bundle.css"),
        new cleanWebpackPlugin('./remote/'), //清理文件
    ];


for(var i = allEntry.length-1; i >= 0; i--){
    var entryItem = allEntry[i],
        tmpVal = entryItem.split('/'),
        fileName = tmpVal[1],
        fileModule = tmpVal[0];
    entry[entryItem] = [
        "webpack/hot/only-dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        localDir + fileModule +'/js/entry/' + fileName + '.js'
    ];

    plugins.push(new htmlWebpackPlugin({
        filename: remoteDir + entryItem + '.html',
        template: localDir + fileModule + '/html/' + fileName +'.html',
        inject: false,
        minify: {
            removeComments: true,
            collapseWhitespace: true
        },
        version: Math.random()//生成版本号
    }));
}

module.exports = {
    entry: entry,
    output: {
        path: remoteDir,
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders : [
            //将图片编译到指定文件夹
            { test : /\.(png|jpe?g|gif)$/, loader : 'url?limit=30720&name=[path]/[name].[ext]'},
            //支持ES6 以及 jsx
            { test : /\.jsx?$/, loaders : ['react-hot', 'babel?presets[]=react,presets[]=es2015'], exclude : /node_modules/},
            { test : /\.css$/, loader : extractTextPlugin.extract("css-loader")},
            { test : /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader : 'url?prefix=font/&limit=10000'},
            { test : /\.scss$/, loader : extractTextPlugin.extract("css-loader!sass-loader")},
        ],
    },
    plugins: plugins,
    resolve: {
        root: pulicDir,
        alias: {
            //使用未压缩文件
            'css-1' : remoteDir + 'css/1.scss',
        },
    },
    //script引入如下文件
    externals: [{
        /*
            key是给require时用的，
            value表示的是在global（即window）中访问

            必须以定义变量方式赋值value
        */
        'react': 'const React',
        'redux': 'const Redux',
        'react-dom': 'const ReactDOM',
        'redux-thunk': 'const ReduxThunk',
        'react-redux': 'const ReactRedux',
    }],
    //WDS运行目录
    devServer:{
        contentBase:'./remote/'
    }
};

/*
    前提是执行webpack -w
    webpack-dev-server --inline --hot
*/