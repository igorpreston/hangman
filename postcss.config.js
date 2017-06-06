const path = require('path');
const autoprefixer = require('autoprefixer');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
      flexbox: 'no-2009',
    }),
  ],
};
