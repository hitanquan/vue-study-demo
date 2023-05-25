<template>
  <div>
    <h3>hello,my name is message</h3>
    <ul v-for="msg in messageList" :key="msg.id">
      <!-- 路由传参方式1：这种基本是把变量当作字符串处理了 -->
      <router-link class="margin-right" to="/about/message/detail?id=msg.id&title=msg.title">{{
        msg.title
      }}</router-link>

      <!-- 路由传参方式2 -->
      <router-link
        class="margin-right"
        :to="`/about/message/detail?id=${msg.id}&title=${msg.title}`"
        >{{ msg.title }}</router-link
      >

      <!-- 路由传参方式3：以query对象的方式传递 -->
      <router-link
        class="margin-right"
        :to="{
          path: '/about/message/detail',
          query: {
            id: msg.id,
            title: msg.title,
          },
        }"
        >{{ msg.title }}</router-link
      >

      <!-- 路由传参方式4：以对象的方式传递 -->
      <router-link
        :to="{
          path: '/about/message/detail',
          params: {
            id: msg.id,
            title: msg.title,
          },
        }"
        >{{ msg.title }}</router-link
      >
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
      ],
    };
  },
};
</script>

<style scoped>
.margin-right {
  margin-right: 10px;
}
</style>
