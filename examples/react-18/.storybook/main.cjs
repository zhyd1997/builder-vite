const path = require('node:path');

module.exports = {
  framework: '@storybook/react',
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
    // we don't want to muck up the data when we're working on the builder
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
    previewMdx2: true,
  },
  async viteFinal(config) {
    // because rollup does not respect NODE_PATH
    config.build.rollupOptions = {
      plugins: {
        resolveId: function (code, id) {
          if (code === 'react') return path.resolve(require.resolve('react'));
        },
      },
    };
    return config;
  },
};
