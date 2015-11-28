/**
 * webpack.config.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 27 Nov 2015
 */
const webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry: "./actuals-tracking.js",
    output: {
        path: __dirname + "/bin",
        filename: "actuals-tracking"
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
        new webpack.BannerPlugin(
            "#!/usr/bin/env osascript -l JavaScript\n" +
            "ObjC.import(\"stdlib\");\n" +
            "ObjC.import(\"AppKit\");\n" +
            "window = this;\n",
            {
                raw: true,
                entryOnly: true
            }
        )
    ]
};
