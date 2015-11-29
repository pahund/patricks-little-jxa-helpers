/**
 * webpack.config.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 27 Nov 2015
 */
const JxaPlugin = require("./src/plugin/jxa-plugin");

module.exports = {
    context: __dirname + "/src",
    entry: {
        "toggle-app-window": "./toggle-app-window.js",
        "app-info": "./app-info.js"
    },
    output: {
        path: __dirname + "/bin",
        filename: "[name]"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new JxaPlugin()
    ]
};
