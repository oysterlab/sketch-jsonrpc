const path = require('path')

module.exports = function (config, entry) {
  config.node = entry.isPluginCommand ? false : {
    setImmediate: false
  };

  config.resolve.alias = {
    '@': path.resolve(__dirname, 'src'),
    '@sketch-jsonrpc': path.resolve(__dirname, "../sketch-jsonrpc/src")  
  }

  config.resolve.extensions = config.resolve.extensions.concat(['.js','.jsx','.ts', '.tsx']);
  
  config.module.rules = config.module.rules.concat([
    {
      include: [path.resolve("src"), path.resolve("../sketch-jsonrpc/src")]
    },
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    },
    {
      test: /\.(html)$/,
      use: [{
          loader: "@skpm/extract-loader",
        },
        {
          loader: "html-loader",
          options: {
            attributes: {
              list: [
                { tag: 'img', attribute: 'src', type: 'src' },
                { tag: 'link', attribute: 'href', type: 'src' }
              ]
            }
          },
        },
      ]
    },
    {
      test: /\.(css)$/,
      use: [{
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
      ]
    }
  ]);
}
