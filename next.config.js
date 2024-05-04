module.exports = {
    webpack: (config, { isServer }) => {
      // Add a rule to handle MP4 files
      config.module.rules.push({
        test: /\.(mp4|mov|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/',
              outputPath: `${isServer ? '../' : ''}static/videos/`,
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  