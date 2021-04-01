const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry : "./src/index.ts", /// or bundle js
    plugigns : [
        new HtmlWebpackPlugin({
            template : "../my-app/public/index.html"
        })
    ],
    module : {
        rules :[{
            test: /\.scss$/,
            use: ["style-loader", "css-loader","sass-loader"]
         },
         {
            test: /\.html$/,
            use : ["html-loader"]
         },
         {
             test : /\.(svg|png|jpg|gif)$/,
             use : {
                 loader : "file-loader",
                 ootions : {
                     name : "[name].[hash].[ext]",
                     outputPath: "imgs"
                 }
             }
         }

        ]
    }
}
