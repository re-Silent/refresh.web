// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-primevue",
    "nuxt-mdi",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  mdi: {
    cache: false,
    componentName: "Icon",
    defaultSize: "1em",
  },
  dirs: [
    // Scan top-level modules
    "composables",
    // ... or scan modules nested one level deep with a specific name and file extension
    "composables/*/index.{ts,js,mjs,mts}",
    // ... or scan all modules within given directory
    "composables/**",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  devtools: { enabled: true },
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  css: ["@/assets/fonts.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
