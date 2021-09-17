# 使用

```bash
npm install / cnpm install / yarn install

// 先启动服务端
npm run serve

// 再开一个终端构建前端静态文件 资源会自动输出到 serve/build
npm run build

// 构建完成后访问 http://localhost:3000/ 查看前端测试页面
```

上报信息后可在服务端控制台看到上报的信息

错误信息中的 `stack` 通过 `sourcemap` 解析后，对应的源文件位置信息在属性 `stackAnalysisResult` 中

> 项目使用 [sourcemap-upload-webpack-plugin](https://github.com/ZephyrAndMoon/sourcemap-upload-webpack-plugin) 将打包后的 sourcemap 文件上传到服务端