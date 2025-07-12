const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30_000,
  webServer: {
    command: 'npm run start-prod',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080',
    headless: true,
  },
})
