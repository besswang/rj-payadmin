module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
  // baseUrl: "/", // 构建好的文件输出到哪里
  // baseUrl: process.env.NODE_ENV === "production" ? "/admin/" : "/",
  // 生产环境下用admin
   baseUrl: process.env.NODE_ENV === "production" ? "/admin/" : "/",
   publicPath: './',
// 它支持webPack-dev-server的所有选项
  devServer: {
      host: "localhost",
      port: 8080, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://47.94.142.215:8082' // 配置跨域处理,只有一个代理

      // 配置多个代理
      // proxy: {
      //   "/api": {
      //     target: "<url>",
      //     ws: true,
      //     changeOrigin: true
      //   },
      //   "/foo": {
      //     target: "<other_url>"
      //   }
      // }
    }
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/admin/，则设置 baseUrl 为 /admin/
  // publicPath: process.env.NODE_ENV === 'production' ?
  //   '/admin/' :
  //   '/'
}
