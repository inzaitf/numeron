var path = require("path");

module.exports = {
  "transpileDependencies": [
  "vuetify"
  ],
  publicPath: './',
  assetsDir: "",
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src/'), 
      },
    },
  },
};