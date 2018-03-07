/**
 * Created by Ouyang on 2018/3/7.
 * webpack 配置文件
 * @author Ouyang
 */
import webpack, { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const _root = path.resolve(__dirname, '../');

const config: Configuration = {
    context: _root,

    entry: {
        app: [path.join(_root, 'src', 'index.ts')]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|libs)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        'presets': ['env']
                    }
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(_root, 'src', 'index.html'),
            title: '黑铁之堡',
            favicon: './favicon.ico'
            // inject: true,
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // }
        })
    ]
};

export default config;
