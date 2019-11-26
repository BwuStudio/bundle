
const typescript = require('rollup-plugin-typescript2')
const config = require('./tsconfig.json')

config.compilerOptions.module= "ESNext"

export default {
    input: './src/index.ts',
    plugins: [
        typescript({
          tsconfig:'./tsconfig.rollup.json'
        })
    ],
    output: {
      name: 'cjs',
      file: './dist/index.js',
      format: 'cjs',
    }
  };

 
   