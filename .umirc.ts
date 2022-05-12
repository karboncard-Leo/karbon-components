import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'karbon-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  alias: {
    src: '/src',
    utils: '/src/utils',
    components: '/src/components',
  },
  menus: {
    '/components': [
      { title: 'PageContainer页面容器', path: '/components/page-container' },
      { title: 'Button 按钮', path: '/components/button' },
    ],
  },
  styles: ['https://cdnjs.cloudflare.com/ajax/libs/antd/4.20.4/antd.min.css', 'src/global.css'],
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
  },
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
  mode: 'site',
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
});
