import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://coffee-cart.app/',
    setupNodeEvents(on, config) {
      // node events
    },
    experimentalSessionAndOrigin: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      NO_PROXY: "localhost,127.0.0.1",
    }
  }
});
