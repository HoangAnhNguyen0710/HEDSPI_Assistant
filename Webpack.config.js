module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        // other rules...
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };