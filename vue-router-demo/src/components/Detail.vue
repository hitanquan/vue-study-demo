<template>
  <div>
    <h2>my name is detail</h2>
    <ul>
      <p>query传参</p>
      <li><span>id:</span>{{ this.$route.query.id }}</li>
      <li><span>title:</span>{{ this.$route.query.title }}</li>

      <p>params传参</p>
      <li><span>id:</span>{{ this.$route.params.id }}</li>
      <li><span>title:</span>{{ this.$route.params.title }}</li>
    </ul>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Detail",
};
</script>
