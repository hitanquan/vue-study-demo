<template>
  <div>
    <h2>hello,my name is about!</h2>
    <router-link to="/about/message">
      <button>
        About:二级路由
      </button>
    </router-link>

    <!-- <router-link to="/about/message">
      <button>
        About:二级路由2
      </button>
    </router-link> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
