module.exports = {
  configureWebpack: {
    module: {}
  },
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? '/' // prod
      : '/', // dev
  devServer: {
    watchOptions: {
      poll: true
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  pwa: {
    name: 'Devote',
    themeColor: '#ff5104',
    msTileColor: '#ff5104',
    appleMobileWebAppCapable: 'yes',
    assetsVersion: '5',
    appleMobileWebAppStatusBarStyle: '#ff5104'
  }
}
