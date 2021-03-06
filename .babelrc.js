module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: '10' }
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'h.Fragment'
      }
    ]
  ]
}
