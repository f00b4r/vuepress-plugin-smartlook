"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_utils_1 = require("@vuepress/shared-utils");
module.exports = (options = {}) => {
    if (!options.id) {
        console.error('[vuepress-plugin-smartlook] requires smartlook id');
        return {};
    }
    return {
        define: {
            SMARTLOOK_ID: options.id
        },
        enhanceAppFiles: [
            shared_utils_1.path.resolve(__dirname, 'smartlook.js')
        ]
    };
};
