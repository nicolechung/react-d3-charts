module.exports = {
    entry: './main.js',
    devtool: 'source-map',
    output : {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true, // allows reload on the fly
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
}
