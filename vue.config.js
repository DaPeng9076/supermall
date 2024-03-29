const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports={
    runtimeCompiler: true,

    chainWebpack:(config)=>{
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('css',resolve('./src/assets/css'))
        .set('img',resolve('./src/assets/img'))
        .set('views',resolve('./src/views'))
        .set('network',resolve('./src/network'))
        .set('common',resolve('./src/common'))
        //注意 store 和 router 没必要配置
　　　　
    },

    productionSourceMap: false
}