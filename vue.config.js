// vue.config.js
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 4000,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles',
        'images': '@/assets/images',
      },
    },
  },
  publicPath: isProduction ? '/vue-demo-qunar/dist/' : '/',
  productionSourceMap: false,
};
