module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~ui': './src/ui',
            '~screens': './src/app/screens',
            '~utils': './src/utils',
            '~styles': './src/styles',
          },
        },
      ],
      'macros'],
  }
}
