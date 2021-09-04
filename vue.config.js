module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://localhost:5000'
      })
  }
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "NewWebsite";
            return args;
        })
 }
}
