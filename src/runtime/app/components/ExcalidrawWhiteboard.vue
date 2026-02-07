<script setup lang="ts">
import '@excalidraw/excalidraw/index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Excalidraw } from '@excalidraw/excalidraw'
import { onMounted, onBeforeUnmount, useTemplateRef, nextTick, watch } from 'vue'
import type { ExcalidrawProps } from '@excalidraw/excalidraw/types'
import type { Root } from 'react-dom/client'

const props = defineProps<ExcalidrawProps>()

const excalidrawRef = useTemplateRef('excalidrawRef')
let root: Root | null = null

const renderReactComponent = () => {
  if (!root) return

  root.render(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Excalidraw, { ...props }),
    ),
  )
}

onMounted(async () => {
  await nextTick()
  if (!excalidrawRef.value) return

  root = createRoot(excalidrawRef.value)
  renderReactComponent()
})

watch(() => props, () => {
  renderReactComponent()
}, { deep: true })

onBeforeUnmount(() => {
  if (root) {
    root.unmount()
  }
})
</script>

<template>
  <div
    ref="excalidrawRef"
    class="excalidraw-whiteboard"
  />
</template>

<style scoped>
.excalidraw-whiteboard {
  width: 100%;
  height: 100%;
}
</style>
