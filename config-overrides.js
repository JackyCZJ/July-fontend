/* config-overrides.js */
const {override, addWebpackExternals} = require("customize-cra");

module.exports = override(
    addWebpackExternals({
        'Config': JSON.stringify({
            baseURL:"http://localhost:2333",
            title: "什么鬼商城",

        })
    })
);
