import { defineNuxtModule, createResolver, addComponent, addTemplate } from '@nuxt/kit'

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
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: resolver.resolve(nuxt.options.buildDir, 'types/nuxt-excalidraw.d.ts'),
      })
    })

    addTemplate({
      filename: 'types/nuxt-excalidraw.d.ts',
      getContents: () => `
        export type * from '@excalidraw/excalidraw/types'
        export type * from '@excalidraw/excalidraw/element/types'
        `,
    })

    addComponent({
      name: 'ExcalidrawWhiteboard',
      mode: 'client',
      filePath: resolver.resolve('runtime/app/components/ExcalidrawWhiteboard.vue'),
    })
  },
})
