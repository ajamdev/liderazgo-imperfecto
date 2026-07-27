import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://liderazgoimperfecto.com',
	vite: {
		plugins: [tailwindcss()]
	}
})
