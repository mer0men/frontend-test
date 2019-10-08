module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-test/'
    : '/',
  productionSourceMap: false,
  filenameHashing: false,
  outputDir: 'docs',
  lintOnSave: process.env.NODE_ENV !== 'production'
}