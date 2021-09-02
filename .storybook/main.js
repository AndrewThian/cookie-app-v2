module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // babel: async (options) => ({
  //   ...options,
  //   plugins: [
  //     ...options.plugins,
  //     ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
  //   ]
  // }),
}