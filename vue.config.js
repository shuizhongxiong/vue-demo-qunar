// vue.config.js
const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: isProduction ? 'https://shuizhongxiong.github.io' : 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': isProduction ? resolve('/vue-demo-qunar/dist/mock') : resolve('/mock')
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'styles': resolve('src/assets/styles'),
        'images': resolve('src/assets/images')
      }
    }
  },
  publicPath: isProduction ? '/vue-demo-qunar/dist/' : '/',
  productionSourceMap: false
}
