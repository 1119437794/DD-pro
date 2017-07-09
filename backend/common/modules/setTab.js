/*
* 设置选项卡选中
* @tab -- 所有选项卡
* @key -- 某一个选项卡
* */
module.exports = function (tab, key) {
    for(var i in tab){
        if(i == key){
            tab[i] = true;
        }else {
            tab[i] = false;
        }
    }

    return tab;
}