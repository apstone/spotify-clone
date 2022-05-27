<template>
  <div class="song-info">
    <div class="flex items-center">
      <img class="h-14 w-14" src="../assets/wild-night.jpg" />
      <div class="flex flex-col items-start px-6">
        <span class="text-white song-name">Wild Night</span>
        <span class="artist">Michael, Calfan, Hannah Boleyn</span>
      </div>
      <HeartIcon color="#B3B3B3" size="16px" />
    </div>
  </div>
</template>

<script>
import { HeartIcon } from "@vue-icons/feather";

export default {
  name: "SongInfo",
  components: {
    HeartIcon,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.song-info {
  .song-name {
    font-size: 14px;
    line-height: 16px;
  }

  .artist {
    font-size: 11px;
    line-height: 25px;
    color: #b3b3b3;
  }
}
</style>
