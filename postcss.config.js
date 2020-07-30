module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
      content:[
        './src/**/*.js',
        './public/index.html'
      ],
      defaultExtractor: content => content.match(/[A-Za-zd0-9-_:/]+/g) || []
    }),
    // ...
  ]
}
