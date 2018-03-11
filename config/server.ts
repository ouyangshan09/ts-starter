/**
 * Created by Ouyang on 2018/3/7.
 * @author Ouyang
 */
import Webpack from 'webpack';
import WebpackServer, { Configuration } from 'webpack-dev-server';
import webpackDevConfig from './webpack.dev';
import Opn from 'opn';

const compiler = Webpack(webpackDevConfig);
const options: Configuration = {
    historyApiFallback: true,
    compress: true,
    hot: true,
    publicPath: '/',
    inline: true,
    stats: {
        colors: true,
        cached: true
    }
};

const server = new WebpackServer(compiler, options);

server.listen(80, '127.0.0.1', function () {
    console.log('server is staring, please open 127.0.0.1:80');
    Opn('http://127.0.0.1:80');
});
