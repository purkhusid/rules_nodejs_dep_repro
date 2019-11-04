const rules = [
  {
    test: /\.js?$/,
    use: {
      loader: 'babel-loader',
      options: {
        "presets": [
          "@babel/preset-env",
        ],
        "plugins": [
        ]
      }
    },
    exclude: /node_modules/,
  },
];

module.exports = {
  mode: 'production',
  entry: "index.js",
  output: {
    path: "dist",
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
  },
};
