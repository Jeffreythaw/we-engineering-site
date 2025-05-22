const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (process.env.NODE_ENV === 'production') {
        webpackConfig.plugins.push(
          new JavaScriptObfuscator(
            {
              compact: true,
              rotateStringArray: true,
              stringArray: true,
              stringArrayEncoding: ['rc4'],
              stringArrayThreshold: 0.75
            },
            ['vendor.js']
          )
        );
      }
      return webpackConfig;
    }
  }
};