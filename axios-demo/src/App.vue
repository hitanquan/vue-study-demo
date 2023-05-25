<template>
  <div id="app">
    <h3>axios请求fastmock接口案例</h3>
    <p>返回用户信息</p>
    <div>
      姓名：{{ this.username }}<br />
      性别：{{ sex }} <br />
      年龄：{{ age }} <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      username: "",
      sex: "",
      age: 1,
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const baseUrl = "https://www.fastmock.site/mock/1cee0a72cc7ff1285786df368d4646b9/test";
      axios.get(baseUrl + "/userInfo").then((res) => {
        this.username = res.data.data.username;
        this.sex = res.data.data.sex;
        this.age = res.data.data.age;
        console.log("请求响应", res);
        console.log("用户信息：", res.data);
        console.log("响应码：", res.data.code);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
