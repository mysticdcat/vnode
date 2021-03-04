const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        publicPath:"/",
        // path: path.join(__dirname, 'dist'),
        filename:'bundle.js',
    },
    devServer:{
        port:8099,
        contentBase:'www',
        hot:true,
        host:'0.0.0.0'
    }
}