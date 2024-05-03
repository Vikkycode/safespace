const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // Set mode to 'production' for optimization
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JSX and ES6
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Use PostCSS loader for handling CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
      filename: 'index.html', // Output HTML file name
    }),
  ],
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [
      new TerserPlugin(), // Use TerserPlugin for minifying JavaScript
      new CssMinimizerPlugin(), // Use CssMinimizerPlugin for minifying CSS
    ],
  },
  devServer: {
    contentBase: './dist', // Serve files from the dist directory
    port: 3000, // Port for development server
  },
};
