var elixir = require('laravel-elixir');
var theme = 'johnson';

elixir.config.assetsPath = './';
elixir.config.publicPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Statamic theme. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(theme + '.scss', 'css/' + theme + '.css')
        .browserSync({proxy: 'johnsonjonesgroup.test'});
    mix.version('css/' + theme + '.css');
    mix.scripts([
        'slick.js',
        'animations.js',
        'heroHeight.js',
        'fixedHeader.js',
        'links.js'
    ],  'js/' + theme + '.js');
});
