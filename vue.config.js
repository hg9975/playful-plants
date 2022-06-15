const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    "name": "Playful Plant",
  }
}
