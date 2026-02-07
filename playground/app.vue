<script setup lang="ts">
const collaborating = ref(false)
function changeCollaborating() {
  collaborating.value = !collaborating.value
}

function onChangeEvent(elements, appState, files) {
  console.log(elements, appState, files)
}
</script>

<template>
  <div class="app-container">
    <button @click="changeCollaborating">
      is-collaborating
    </button>
    <ExcalidrawWhiteboard
      :is-collaborating="collaborating"
      @change="onChangeEvent"
    />
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
