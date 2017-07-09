
//这是将 ES6 -> ES5

var fs = require('fs');
var traceur = require('traceur');

// 此处还存在将引入的ES6文件转换成ES5问题
// 即common以及routes下文件
var arrDir = [
  './routes/', //路由文件
  //'./common/', //公共模块
];

//需要转换的文件
var arrFile = []; 
checkoutFilesByarrDir(arrDir);

// 监听文件变化
for(var i in arrFile){
  var tmp = arrFile[i];
  es6toes5(tmp);
  (function(tmp){
    fs.watch(tmp, function (event, filename) {
    if(event == 'change'){
      es6toes5(tmp);
    }
  })
})(tmp)
  
   console.log(tmp + " watching..."); 
}


//服务器文件转换
es6toes5('./ServerES6.js'); 
fs.watch('./ServerES6.js', function (event, filename) {
  if(event == 'change'){
      es6toes5('./ServerES6.js');
    }
})
console.log("./ServerES6.js watching..."); 


//根据给出的每个文件夹 检出其中的文件
function checkoutFilesByarrDir(arrDir) {
  for(var i=arrDir.length-1;i>=0;i--){
    var tmp = arrDir[i];
    var arrTmpDir = fs.readdirSync(tmp); //将旗下的文件夹以及文件名检出
    //检测arrTmpDir每一个元素是否为文件夹或文件
    for(var j=arrTmpDir.length-1;j>=0;j--){
      var tmpDirPath = tmp + arrTmpDir[j];
      if(fs.statSync(tmpDirPath).isFile()){
        //若是文件 那就是需要转换的 直接存入
        if(arrTmpDir[j].indexOf('ES5') == -1){
          arrFile.push(tmpDirPath);
        }
      }else if(fs.statSync(tmpDirPath).isDirectory()){
        //如果还是一个文件夹 那就继续 递归 查找
        checkoutFilesByarrDir([tmpDirPath+'/']);
      }
    }
  }

  return arrFile;
};

// 将ES6脚本转为字符串
function es6toes5(filename) {
  var contents = fs.readFileSync(filename).toString();
  var result = traceur.compile(contents, {
    filename: filename,
    sourceMap: true,
    // 其他设置
    //modules: 'commonjs'
});
if (result.error){
  throw result.error;    
}
  // result就是转换后的ES5代码
  fs.writeFileSync(filename.replace('6', '5'), result);
  console.log(filename + ' 转换成功')
}