/**
 * Created by Ouyang on 2018/3/7.
 * webpack 配置文件
 * @author Ouyang
 */
import { Configuration } from 'webpack';
import Path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Config from './config';


const config: Configuration = {
    context: Config.root,

    entry: {
        app: [Path.join(Config.dir_src, 'index.ts')]
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
            template: Path.join(Config.dir_src, 'index.html'),
            title: '黑铁之堡'
            // favicon: './favicon.ico'
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
