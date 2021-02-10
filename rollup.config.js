import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'

const commonConfig = {
  input: 'lib/browser.js',
  output: {
    name: '{fileName}',
    sourcemap: true
  },
  plugins: [
    resolve({}),
    commonjs({
      // transformMixedEsModules: true,
    }),
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      plugins: [
        '@babel/plugin-transform-runtime'
      ],
    }),
  ]
};

// ESM config
// const esmConfig = Object.assign({}, commonConfig);
// esmConfig.output = Object.assign({}, commonConfig.output, {
//     file: 'dist/mjs/{fileName}.mjs',
//     format: 'esm'
// });

// UMD config
const umdConfig = Object.assign({}, commonConfig)
umdConfig.output = Object.assign({}, commonConfig.output, {
  file: 'doc/demo/tern-browser.js',
  format: 'umd',
  name: 'window',
  extend: true,
})
umdConfig.plugins = [
  ...commonConfig.plugins,
]

let configurations = [
  umdConfig,
]

export default configurations
