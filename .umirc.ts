import { defineConfig } from 'dumi';
import { menus } from './menus';
export default defineConfig({
  title: 'karbon-components',
  favicon:
    'https://s3-ap-south-1.amazonaws.com:443/bot-bkt/prod/38944/38944-imageonline-co-transparentimage%20%281%29.jpg',
  logo: 'https://s3-ap-south-1.amazonaws.com:443/bot-bkt/prod/38944/38944-imageonline-co-transparentimage%20%281%29.jpg',
  outputPath: 'docs-dist',
  alias: {
    src: '/src',
    utils: '/src/utils',
    components: '/src/components',
  },
  navs: [
    {
      title: 'Components',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/karboncard-Leo/karbon-components',
    },
  ],
  menus: menus,
  styles: ['https://cdnjs.cloudflare.com/ajax/libs/antd/4.20.4/antd.min.css', '/src/global.css'],
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  base: '/karbon-components/',
  publicPath: '/karbon-components/',
  mode: 'site',
  // mfsu: {}, 不要开启 mfsu，实测有 bug！！！
  exportStatic: {},
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
});
