const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.glsl$/,
          use: "raw-loader",
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
  },
})
