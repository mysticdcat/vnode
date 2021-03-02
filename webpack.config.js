const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        publicPath:"/",
        // path: path.join(__dirname, 'dist'),
        filename:'bundle.js',
    },
    devServer:{
        port:1000,
        contentBase:'www',
        hot:true,
        host:'127.0.0.1'
    }
}