// vue.config.js
const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': resolve('/mock')
        }
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        'styles': resolve('src/assets/styles')
      }
    }
  }
}
