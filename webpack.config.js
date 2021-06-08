const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 1. Especificando el archivo de entrada 
    mode: 'development',
    entry: './src/app/index.js',
    // 2.Especificar el archivo de salida  
    output: {
        path: path.join(__dirname, 'dist'), // 3. Ruta absoluta de la salida 
        filename: 'bundle.js', // 4. Nombre del archivo de salida 
    },
    devServer: {
        contentBase:"./dist",
        port: 3000,
        open: "edge"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

    ],   


};