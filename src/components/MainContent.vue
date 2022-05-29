<template>
  <div class="main-content">
    <div class="header">
      <div class="navigation"></div>
      <div class="profile"></div>
    </div>
    <div class="recent">
      <h2>Good evening</h2>
      <div class="recent-container">
        <div
          v-for="(recent, index) in links.recents"
          :key="index"
          class="recent-tile"
        >
          <img class="art" :src="recent.image" />
          <span class="title">{{ recent.title }}</span>
          <div class="play-button"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { links } from "../data.js";

export default {
  name: "MainContent",
  data() {
    return {};
  },
  computed: {
    links: () => links,
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

  .navigation {
    background-color: rgb(0, 0, 0, 0);
    position: absolute;
    width: 100%;
    padding: 16px 32px;
  }

  .recent {
    background-color: rgb(160, 192, 200);
    background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
    text-align: left;
    height: 300px;
    padding: 90px 32px 32px 32px;
    h2 {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 20px;
    }

    .recent-container {
      display: grid;
      grid-gap: 16px 24px;
      grid-template: auto/repeat(auto-fill, minmax(max(270px, 25%), 1fr));

      .recent-tile {
        display: flex;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        align-items: center;
        .art {
          height: 80px;
          width: 80px;
          border-radius: 4px 0 0 4px;
        }
        .title {
          padding: 0 16px;
          font-weight: bold;
          color: #fff;
        }
        .play-button {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
