/**
 * Created by Ouyang on 2018/3/12.
 * 项目开发配置
 * @author Ouyang
 */
import Path from 'path';
import Url from 'url';

const root = Path.resolve(__dirname, '../');

export default {
    info: {
        name: 'Ts-starter'
    },

    protocol: 'http',

    root: root,
    dir_src: Path.join(root, 'src'),
    dir_dist: Path.join(root, 'dist'),
    dir_libs: Path.join(root, 'libs'),
    dir_deploy: '/',

    // 通用扩展库
    vendors: []
};
