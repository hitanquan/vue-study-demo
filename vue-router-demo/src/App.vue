<template>
  <div id="app">
    <h1>Vue Router Demo</h1>

    <router-link to="/home">
      <button>
        Home:一级路由
      </button>
    </router-link>

    <router-link to="/about">
      <button>
        About:一级路由
      </button>
    </router-link>

    <router-view />

    <!-- <Home/> -->
    <!-- <router-link to='/about/detail'>
      <button>
        Home-二级路由1
      </button>
    </router-link> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: "App",
  components: {
    // Home
  },
  computed: {},
  methods: {},
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
ul {
  list-style: none;
}
</style>
