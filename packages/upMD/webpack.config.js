const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: 'inline-source-map',
    output: {
        // path: path.resolve(__dirname, "dist"),
        filename: "./dist/bundle.js",
    }, // 模块规则（配置 loader、解析器等选项）

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        // 关于模块配置

        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            }
        ]
    },
    devServer: {
        port: 9000
    }
}