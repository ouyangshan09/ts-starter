/**
 * Created by Ouyang on 2018/3/7.
 * 开发模式
 * @author Ouyang
 */
import baseConfig from './webpack.base';
import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';

const devConfig: Configuration = webpackMerge(baseConfig, {
    output: {
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'cheap-module-eval-source-map',

    mode: 'development'
});

export default devConfig;
