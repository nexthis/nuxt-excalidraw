# Nuxt Excalidraw Whiteboard

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module for integrating Excalidraw - a virtual collaborative whiteboard tool that makes it easy to sketch diagrams with a hand-drawn feel.

## Features

- 🎨 Full Excalidraw integration in Nuxt 3/4 applications
- ⚡ Client-side rendering with automatic component registration
- 🔄 Reactive props support with Vue's reactivity system
- 📦 Zero configuration - works out of the box
- 🎯 TypeScript support with full type definitions
- 🖌️ All Excalidraw features: drawing, shapes, arrows, text, and more

## Quick Setup

Install the module to your Nuxt application:

```bash
npm install nuxt-excalidraw-whiteboard
```

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-excalidraw-whiteboard']
})
```

That's it! You can now use the Excalidraw component in your Nuxt app.

## Usage

The module automatically registers the `<ExcalidrawWhiteboard>` component globally. Use it in any of your pages or components:

```vue
<template>
  <div class="container">
    <ExcalidrawWhiteboard
      :is-collaborating="isCollaborating"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
const isCollaborating = ref(false)

function handleChange(elements, appState, files) {
  console.log('Canvas updated:', elements, appState, files)
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
```

### Component Props

The `<ExcalidrawWhiteboard>` component accepts all props from the official Excalidraw component. Here are some commonly used props:

- `isCollaborating` - Enable/disable collaboration mode
- `initialData` - Set initial canvas data
- `onChange` - Callback triggered when canvas changes
- `viewModeEnabled` - Enable view-only mode
- `zenModeEnabled` - Enable zen mode
- `gridModeEnabled` - Show/hide grid
- `theme` - Set theme ('light' or 'dark')
- And many more from [Excalidraw Props](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props)

### Events

All Excalidraw events are available:

- `@change` - Emitted when elements, app state, or files change
- Plus all other events from the Excalidraw API

## Module Options

Configure the module in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-excalidraw-whiteboard'],
  excalidraw: {
    css: true // Include Excalidraw CSS (default: true)
  }
})
```

### Options

- `css` (boolean, default: `true`) - Automatically include Excalidraw styles

## How It Works

This module bridges React-based Excalidraw with Vue/Nuxt by:

1. Rendering the Excalidraw React component using React's `createRoot`
2. Wrapping it in a Vue component with reactive props
3. Automatically registering it as a client-only component
4. Watching for prop changes and re-rendering when needed

## Development

### Local Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run tests
npm run test
npm run test:watch

# Type check
npm run test:types
```

### Playground

The module includes a playground for testing and development. Run `npm run dev` to start the development server and test the component.

## Requirements

- Nuxt 3.x or 4.x
- Node.js 18+

## License

[MIT License](./LICENSE)

## Credits

Built with [Excalidraw](https://excalidraw.com/) - an open source virtual hand-drawn style whiteboard.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-excalidraw-whiteboard/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-excalidraw-whiteboard

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-excalidraw-whiteboard.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-excalidraw-whiteboard

[license-src]: https://img.shields.io/npm/l/nuxt-excalidraw-whiteboard.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-excalidraw-whiteboard

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
