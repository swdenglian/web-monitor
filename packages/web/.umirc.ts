import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  headScripts: [{ src: './init.js' }],
  copy: [{ from: '../monitor-collect/dist/index.js', to: 'init.js' }],
});
