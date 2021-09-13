const SourcemapUploadWebpackPlugin = require("sourcemap-upload-webpack-plugin");
const path = require("path");

module.exports = {
  outputDir: "./server/build",
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new SourcemapUploadWebpackPlugin({
        url: "http://localhost:3000/sourcemapUpload",
        uploadPath: path.resolve(__dirname, "./server/build/js"),
      }),
    ],
  },
};
