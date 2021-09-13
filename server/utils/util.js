const fs = require("fs");
const sourceMapTool = require("source-map");
const StreamZip = require("node-stream-zip");

const removeFile = (url) => {
  if (!fs.existsSync(url)) return;
  const STATUS = fs.statSync(url);
  if (STATUS.isFile()) {
    fs.unlinkSync(url);
  } else if (STATUS.isDirectory()) {
    fs.readdirSync(url).forEach((item) => removeFile(`${url}/${item}`));
    fs.rmdirSync(url);
  }
};

// 解析错误位置
const analysisErrorPosition = (sourcemapFile, line, col) => {
  return new Promise((resolve) => {
    fs.readFile(sourcemapFile, "utf8", function readContent(
      err,
      sourcemapContent
    ) {
      // sourcemapContent 文件内容
      if (err) {
        throw err;
      }
      // SourceMapConsumer.with 是该模块提供的消费 source-map 的一种方式
      sourceMapTool.SourceMapConsumer.with(sourcemapContent, null, (consumer) =>
        resolve(
          consumer.originalPositionFor({
            line: parseInt(line),
            column: parseInt(col),
          })
        )
      );
    });
  });
};

// 解析错误信息
const analysisErrorInfo = async (stack = [], sourceUrl) => {
  let stackAnalysisResult = [];
  for (let error of stack) {
    const { FILE_NAME, COLUMN_NUMBER, LINE_NUMBER } = error;
    const fileName = FILE_NAME.slice(FILE_NAME.lastIndexOf("/"));
    const filePath = `${sourceUrl}${fileName}.map`;
    const parseInfo = await analysisErrorPosition(
      filePath,
      LINE_NUMBER,
      COLUMN_NUMBER
    );
    stackAnalysisResult.push(parseInfo);
  }

  return stackAnalysisResult;
};

// 处理上传的 sourcemap 文件
const processSourceFile = ({ file, extractPath, preFunc, afterFun }) => {
  return new Promise((resolve) => {
    preFunc ? preFunc() : void 0;
    const fileName = `${extractPath}/${file.name}`;
    const path = file.path;
    const fileWrite = fs.createWriteStream(fileName);
    fs.createReadStream(path).pipe(fileWrite);

    fileWrite.on("finish", () => {
      // 写入文件数据
      const zip = new StreamZip({
        file: fileName,
        storeEntries: true,
      });
      zip.on("ready", () => {
        zip.extract(null, "./", (err, count) => {
          resolve({
            isSuccess: !Boolean(err),
            msg: err ? "文件处理失败" : `文件上传并解压成功`,
          });
          zip.close();
          afterFun ? afterFun() : void 0;
        });
      });
    });
  });
};

module.exports = {
  removeFile,
  analysisErrorInfo,
  processSourceFile,
};
