import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  css: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-excalidraw',
    configKey: 'excalidraw',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true,
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'ExcalidrawWhiteboard',
      mode: 'client',
      filePath: resolver.resolve('runtime/app/components/ExcalidrawWhiteboard.vue'),
    })
  },
})
