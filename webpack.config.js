var config = {
    entry: "./src/main.tsx",

    output: {
        path: "./dist",
        filename: "index.js",
    },

    devServer: {
        inline: true,
        port: 8080
    },

    /*
     * resolve lets Webpack now in advance what file extensions you plan on
     * "require"ing into the web application, and allows you to drop them
     * in your code.
     */
    resolve: { extensions: ["", ".ts", ".tsx", ".js"] },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",

                query: { presets: ["es2015", "react"] }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    watch: true
};

module.exports = config;