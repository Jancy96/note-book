module.exports = {
    //axios域代理，解决axios跨域问题
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {     //这里最好有一个 /
                target: 'http://155.94.158.2:3000',  // 后台接口域名
                ws: true,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: false,  //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}