const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Esta línea indica que el loader se aplica a archivos .js y .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Asegúrate de incluir @babel/preset-react
          },
        },
      },
      {
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/, // Agrega esta línea para asegurarte de que solo aplique a archivos SVG utilizados en archivos JS o TS
        use: [
          '@svgr/webpack',
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Puedes ajustar el límite según tus necesidades
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/, // Esta línea indica que el loader se aplica a archivos .css
        use: ['style-loader', 'css-loader'],
      },
      // ... otras reglas para diferentes tipos de archivos (como CSS) ...
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Esto ayuda a Webpack a resolver archivos .js y .jsx sin necesidad de especificar la extensión en los imports
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Asegúrate de que esta sea la ruta correcta a tu directorio de archivos estáticos
    },
    hot: true,
    open: true,
  },
};
