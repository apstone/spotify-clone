<template>
  <div class="flex flex-col h-full sidebar">
    <div class="logo">
      <img src="../assets/Spotify_Logo_RGB_White.png" />
    </div>

    <ul class="navigation">
      <li v-for="(link, index) in links.main" :key="index" class="flex">
        <a
          class="flex items-center"
          :class="{
            active: activeLink === link,
          }"
          @click="onClickNavigation(link)"
          ><component
            :is="determineIcon(link)"
            :color="activeLink === link ? '#fff' : 'B3B3B3'"
          />
          <p class="pl-4 text-sm font-bold">{{ link }}</p>
        </a>
      </li>
    </ul>

    <ul class="navigation actions">
      <li class="flex">
        <a class="flex items-center"
          ><PlusSquareIcon color="#B3B3B3" />
          <p class="pl-4 text-sm font-bold">Create Playlist</p>
        </a>
      </li>
      <li class="flex">
        <a class="flex items-center"
          ><HeartIcon color="#B3B3B3" />
          <p class="pl-4 text-sm font-bold">Liked Songs</p>
        </a>
      </li>
    </ul>

    <div class="divider">
      <hr class="border-none bg-spotify-black-400" />
    </div>

    <ul class="navigation playlists">
      <li v-for="(link, index) in links.playlists" :key="index" class="flex">
        <a class="flex items-center">
          <p class="pl-4 text-sm">{{ link }}</p>
        </a>
      </li>
    </ul>

    <div class="mt-auto install">
      <a class="flex items-center"
        ><ArrowDownCircleIcon color="#B3B3B3" />
        <p class="pl-4 text-sm font-bold">Install App</p>
      </a>
    </div>
  </div>
</template>

<script>
import {
  HomeIcon,
  SearchIcon,
  BookIcon,
  PlusSquareIcon,
  HeartIcon,
  ArrowDownCircleIcon,
} from "@vue-icons/feather";
import { links } from "../data.js";

export default {
  name: "Sidebar",
  components: {
    HomeIcon,
    PlusSquareIcon,
    HeartIcon,
    ArrowDownCircleIcon,
  },
  data: function () {
    return {
      activeLink: "Home",
    };
  },
  computed: {
    links: () => links,
  },
  mounted() {},
  methods: {
    determineIcon: function (icon) {
      if (icon === "Home") {
        return HomeIcon;
      } else if (icon === "Search") {
        return SearchIcon;
      } else if (icon === "Your library") {
        return BookIcon;
      }
    },

    onClickNavigation: function (link) {
      this.activeLink = link;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 240px;
  .logo {
    padding: 24px;
    img {
      height: 40px;
      max-width: 131px;
      width: 100%;
    }
  }

  .navigation {
    &.actions {
      margin-top: 24px;
    }
    &.playlists {
      p {
        padding-left: 0;
      }
    }
    li {
      padding: 0 8px;
      cursor: pointer;
      a {
        color: #b3b3b3;
        display: flex;
        padding: 0 16px;
        height: 40px;

        &.active {
          color: #fff;
        }
      }
    }
  }

  .install {
    margin-top: auto;
    a {
      color: #b3b3b3;
      cursor: pointer;
      height: 40px;
      padding: 0 24px;
    }
  }

  .divider {
    hr {
      height: 1px;
      min-height: 1px;
      margin: 8px 24px;
    }
  }
}
</style>
