<template>
  <footer class="flex items-center justify-between w-full bottom-bar">
    <SongInfo />
    <PlayerControls />
    <div class="right-controls">right controls</div>
  </footer>
</template>

<script>
import SongInfo from "./SongInfo.vue";
import PlayerControls from "./PlayerControls.vue";

export default {
  name: "BottomBar",
  components: {
    SongInfo,
    PlayerControls,
  },
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  background-color: #181818;
  height: 90px;
  border-top: 1px solid #282828;
  padding: 0 16px;
}
</style>
