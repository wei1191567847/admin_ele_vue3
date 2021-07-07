const path = require('path')



module.exports = {
    css:{
        loaderOptions:{
            scss:{
                prependData:`@import "~@/assets/main.scss";`
            },
        }
    },


    // webpack 定制webpack 配置
    chainWebpack:(config)=>{
        //拿到svg的默认的loader配置
        const svgLoader = config.module.rule('svg')
        // 让默认的SvgLoader 不去解析 src/icons/svg内部的图标
        //绝对路径
        svgLoader.exclude.add(path.resolve('./src/icons/svg'))
    
    config.module.rule('icons')
        .test(/\.svg$/)  //loader 是要解析什么类型的文件
        .include.add(path.resolve('./src/icons/svg'))   //只处理这个位置下的文件
        .end()  //跳出include 这一层 回到上一层
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({  //不是webpack  的配置
            symbolId:'icon-[name]'
        })
    },

/*
    /api/getSms/    -->http://localhost:8080/api/getSms
                    -->http://www.web-jshtml.cn/productapi/token/api/getSms/
                        pathRewrite  --> api 替换成空
                    -->http://www.web-jshtml.cn/productapi/token/getSms
*/
        devServer:{
            proxy:{
                //api指的是网络请求中包含/api这样的字符 才走后面的代码
                '^/api':{
                    target:"http://www.web-jshtml.cn/productapi/token",
                    changeOrigin:true, //开启后台代理
                    ws:true,
                    pathRewrite:{
                        '^/api' : ''
                    }
                }
            }
        }
}