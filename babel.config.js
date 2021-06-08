module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.jsx', '.js', '.json'],
          alias: {
            '@telas': './src/Telas',
            '@componentes': './src/Componentes',
            '@imagens': './Imagens',
            '@servicos': './src/Servicos',
          },
        },
      ],
    ],
  };
};
