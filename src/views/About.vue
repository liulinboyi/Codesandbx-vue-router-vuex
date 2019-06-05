<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{count}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: this.$store.state.count
    };
  },
  mounted() {
    console.log(this.$store.state.count);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.about{
  h1{
    margin: 0;
    padding: 0.67em 0;
  }
}
</style>


