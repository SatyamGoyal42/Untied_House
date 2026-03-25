import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetPlugin(): Plugin {
  const FIGMA_ASSET_PREFIX = 'figma:asset/'
  const assetsDir = path.resolve(__dirname, './src/assets')

  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(id) {
      if (id.startsWith(FIGMA_ASSET_PREFIX)) {
        const filename = id.slice(FIGMA_ASSET_PREFIX.length)
        return path.join(assetsDir, filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
