<template>
  <div class="main-content">
    <div class="header">
      <div class="navigation"></div>
      <div class="profile"></div>
    </div>

    <div class="recent">
      <h2>Good evening</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.main-content {
  background-color: #121212;
  height: calc(100vh - 90px);
  overflow: hidden;
  position: relative;
  padding: 32px;
  .navigation {
    background-color: rgb(0, 0, 0, 0);
    position: absolute;
    width: 100%;
    padding: 16px 32px;
  }

  .recent {
    text-align: left;
    margin-top: 60px;

    h2 {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
    }
  }
}
</style>
