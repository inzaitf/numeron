var path = require("path");

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: './',
  assetsDir: "src/assets",
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    performance: {
      maxEntrypointSize: 600000,
      maxAssetSize: 300000
    }
  },
};