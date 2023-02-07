const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@btn-primary-bg": "#fb5533",
              "@border-radius-base": "4px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
