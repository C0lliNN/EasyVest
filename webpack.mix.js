const mix = require('laravel-mix');
require('laravel-mix-react-css-modules');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .setPublicPath('./public')
  .sass('resources/sass/home.scss', 'public/css')
  .sass('resources/sass/header.scss', 'public/css')
  .sass('resources/sass/form.scss', 'public/css')
  .sass('resources/sass/profile.scss', 'public/css')
  .react('resources/js/index.js', 'public/js')
  .reactCSSModules()
  .webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
  });

mix.browserSync('http://127.0.0.1:8000/');

mix.disableNotifications();
