import { PluginOptionAPI } from "vuepress-types";

const { path } = require("@vuepress/shared-utils");

module.exports = (options: SmartlookOptions = {}): PluginOptionAPI => {
  if (!options.id) {
    console.error('[vuepress-plugin-smartlook] requires smartlook id');
    return {};
  }

  return {
    define: {
      SMARTLOOK_ID: options.id
    },
    enhanceAppFiles: [
      path.resolve(__dirname, 'smartlook.js')
    ]
  }
};
