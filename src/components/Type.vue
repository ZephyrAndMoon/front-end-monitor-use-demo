<template>
  <div class="wrapper">
    <div class="hello">
      <el-button class="btn" @click="vueErrorOccurHandler"
        >Vue类型报错</el-button
      >
      <el-button class="btn" @click="promiseErrorOccurHandler"
        >promise未捕获异常信息</el-button
      >
      <el-button class="btn" @click="consoleErrorOccurHandler"
        >console.error错误信息捕获</el-button
      >
      <el-button class="btn" @click="jsErrorOccurHandler"
        >JavaScript错误信息监控</el-button
      >
      <el-button class="btn" @click="URLErrorOccurHandler"
        >URL JavaScript错误信息监控</el-button
      >
      <el-button class="btn" @click="resourceErrorOccurHandler"
        >资源错误信息捕获</el-button
      >
    </div>
    <el-button
      class="btn"
      @click="reset"
      style="display:block;margin:40px auto 0px"
      >重置图片</el-button
    >
    <img
      :src="src"
      alt="测试图片"
      width="300"
      height="200"
      style="margin-top:10px"
    />
  </div>
</template>

<script>
export default {
  name: "Type",
  data() {
    return {
      tempSrc: "https://i.ytimg.com/vi/88Z0MKYH_Ns/maxresdefault.jpg",
      src: "https://i.ytimg.com/vi/88Z0MKYH_Ns/maxresdefault.jpg",
    };
  },

  methods: {
    vueErrorOccurHandler() {
      vueError();
    },
    promiseErrorOccurHandler() {
      fetch("https://no-such-server.blabla") // rejects
        .then((response) => response.json())
        .catch((err) => {
          throw new Error(err);
        });
    },
    consoleErrorOccurHandler() {
      console.Error("A printing error occurred...");
    },
    jsErrorOccurHandler() {
      setTimeout(() => {
        const a = 0;
        a = 1;
      }, 1000);
    },
    URLErrorOccurHandler() {
      setTimeout(() => {
        decodeURI("%2");
      }, 0);
    },
    resourceErrorOccurHandler() {
      this.src = "";
    },

    reset() {
      this.src = this.tempSrc;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  display: block;
  margin: 10px auto;
}
</style>
