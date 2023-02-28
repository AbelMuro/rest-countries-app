const path = require('path');               
const HtmlWebpackPlugin = require("html-webpack-plugin"); 


module.exports = {

    entry: './src/index.js',                  
    output: {                                       
        path: path.join(__dirname, '/dist'),  
        filename: 'bundle.js'                 
    },
    plugins: [                      
        new HtmlWebpackPlugin({               
            filename: 'index.html',           //our production html file will be named index.html
            template: './src/index.html'      //this is a template for our production html file, we are defining how the html will look like before we make our production html file
        })
    ],
    devServer: {                              
        port: 3000,                           
        historyApiFallback: true,             //this property helps with routing in our react app, everytime we refresh the page, react router will send a request to a server, but this property will make sure it searches for an index file first

    },
    
    module: {
        rules: [                               
            {                                   //loaders are transformations that are applied to files (typescript to javascript, sass to css)
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',  //for all .js files, we will load the babel transpiler
                    options: {presets: ['@babel/preset-env', '@babel/preset-react']} //preset-env is a group of babel plugins that will transpile all the new features of javascript 
                    }                                                                 //preset-react is also a group of babel plugins, but it will transpile jsx with other new features of javascript
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]             //using style loader and css loader to load css onto application
            },
            {
                test: /\.(png|jpg|webp|mp4|wav|svg)$/,
                type: 'asset/resource'                                              //asset/resource loads files such as images, audio and videos
            },                                                                     
        ]
    },
}