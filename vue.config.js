'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'QIHO 样式库'

const port = process.env.port || process.env.npm_config_port || 9528

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  // s是否添加eslint验证，开发环境打开，生产环境取消
  lintOnSave: process.env.NODE_ENV === 'production',
  productionSourceMap: false,
  devServer: {
    port: port,
    // host: 'localhost',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   '/file': {
    //     // target: "http://file.qihoinfo.com",
    //     target: protocol + 'fss.test.cse.com.cn',
    //     changeOrigin: true,
    //     secure: true,
    //     pathRewrite: {
    //       '^/file': ''
    //     }
    //   }
    // },
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    config.plugins.delete('prefetch')

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
