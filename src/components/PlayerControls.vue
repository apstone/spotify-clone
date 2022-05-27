<template>
  <div class="flex flex-col items-center player-controls">
    <div class="flex items-center mb-2 song-controls">
      <ShuffleIcon class="icon" />
      <SkipBackIcon class="icon" />
      <component
        :is="playing ? 'PauseCircleIcon' : 'PlayCircleIcon'"
        class="icon white"
        size="32px"
        @click="play"
      />
      <SkipForwardIcon class="icon" />
      <RepeatIcon class="icon" />
    </div>
    <div class="flex items-center song-progress">
      <span class="current-time">{{
        convertToReadableTime(currentTimeSeconds)
      }}</span>
      <div class="relative mx-2 progress-bar">
        <div
          class="overlay"
          :style="{
            width: percentDone + '%',
          }"
        />
        <div class="background" />
      </div>
      <span class="end-time">{{ convertToReadableTime(endTimeSeconds) }}</span>
    </div>
  </div>
</template>

<script>
import {
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  PauseCircleIcon,
  RepeatIcon,
  PlayCircleIcon,
} from "@vue-icons/feather";

export default {
  name: "PlayerControls",
  components: {
    ShuffleIcon,
    SkipBackIcon,
    SkipForwardIcon,
    PauseCircleIcon,
    RepeatIcon,
    PlayCircleIcon,
  },
  data() {
    return {
      startTimeSeconds: 0,
      endTimeSeconds: 169,
      currentTimeSeconds: 0,
      playing: false,
      timer: undefined,
    };
  },
  computed: {
    percentDone() {
      return (100 * this.currentTimeSeconds) / this.endTimeSeconds;
    },
  },
  methods: {
    convertToReadableTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      let _seconds = seconds - minutes * 60;
      return `${minutes}:${
        _seconds === 0
          ? "00"
          : _seconds.toString().split("").length === 1
          ? "0" + _seconds
          : _seconds
      }`;
    },
    play() {
      if (this.playing && this.timer !== undefined) {
        this.stop();
      } else {
        this.playing = true;
        this.timer = setInterval(() => {
          if (this.currentTimeSeconds < this.endTimeSeconds) {
            this.currentTimeSeconds += 1;
          } else {
            this.stop();
            this.reset();
          }
        }, 1000);
      }
    },
    stop() {
      this.playing = false;
      clearInterval(this.timer);
    },
    reset() {
      this.currentTimeSeconds = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.player-controls {
  .song-controls {
    .icon {
      color: #b3b3b3;
      margin: 0 8px;

      &.white {
        color: #fff;
      }
    }
  }
  .song-progress {
    .current-time,
    .end-time {
      color: #b3b3b3;
      font-size: 11px;
    }

    .progress-bar {
      width: 300px;
      height: 5px;

      .background {
        position: absolute;

        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: #5e5e5e;
      }

      .overlay {
        position: absolute;
        height: 100%;
        border-radius: 5px;
        background-color: #fff;
        z-index: 2;
      }
    }
  }
}
</style>
