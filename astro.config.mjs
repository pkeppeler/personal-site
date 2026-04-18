// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://pkepps.com',
  integrations: [
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: false,
      injectRegister: 'script',
      // SW lives under /tools/ so its scope is /tools/. The homepage and blog
      // are physically outside the scope and the browser will never run the
      // SW for them, even if a visitor previously installed a tool.
      filename: 'tools/sw.js',
      scope: '/tools/',
      workbox: {
        navigateFallback: null,
        // Glob from dist/tools so precache URLs (e.g. "viewer/index.html")
        // resolve correctly relative to the SW at /tools/sw.js. Skip the
        // tools index page itself: its URL would resolve to "/" against the
        // SW location and silently precache the homepage.
        globDirectory: fileURLToPath(new URL('./dist/tools', import.meta.url)),
        globPatterns: ['**/*.{html,js,css,svg,png,webmanifest,woff2}'],
        globIgnores: ['index.html'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: { cacheName: 'pages', networkTimeoutSeconds: 5 },
          },
          {
            urlPattern: ({ sameOrigin, request }) =>
              sameOrigin &&
              ['style', 'script', 'image', 'font'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'assets' },
          },
        ],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
