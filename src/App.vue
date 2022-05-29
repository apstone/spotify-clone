<script setup>
import Sidebar from "./components/Sidebar.vue";
import BottomBar from "./components/BottomBar.vue";
import MainContent from "./components/MainContent.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="h-screen">
    <div class="flex w-full">
      <div class="bg-black"><Sidebar /></div>
      <div class="w-full overflow-hidden">
        <MainContent />
      </div>
    </div>
    <div class="w-full">
      <BottomBar />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
