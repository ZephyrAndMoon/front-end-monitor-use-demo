const Koa = require("koa2");
const app = new Koa();
const cor = require("./utils/cor");
const path = require("path");
const router = require("koa-router")();
const static = require("koa-static");

const koaBody = require("koa-body");

const {
  removeFile,
  analysisErrorInfo,
  processSourceFile,
} = require("./utils/util");

const port = 3000;

// 配置跨域
app.use(cor);
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024,
    },
  })
);

// 监控信息上报
router.post("/monitor", async (ctx) => {
  const { logInfo } = ctx.request.body;
  const stack = JSON.parse(logInfo).stack;

  const stackAnalysisResult = await analysisErrorInfo(
    stack,
    path.resolve(__dirname, "source")
  );
  console.log("上报的错误信息: ", { ...ctx.request.body, stackAnalysisResult });
  ctx.body = undefined;
});

// 监控信息上报
router.post("/performance", async (ctx) => {
  console.log("上报的性能信息: ", ctx.request.body);
  ctx.body = undefined;
});

// sourcemap 资源上传并解压
router.post("/sourcemapUpload", async (ctx) => {
  const { isSuccess, msg } = await processSourceFile({
    file: ctx.request.files?.file,
    extractPath: path.resolve(__dirname),
    preFunc: () => removeFile("./source"),
    afterFun: () => removeFile("./sourcemap.zip"),
  });
  ctx.body = msg;
});

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());

/* 设置静态文件目录 */
app.use(static(__dirname + "/build"));

app.listen(port, () => {
  console.log(`server is running: http://localhost:${port}`);
});
