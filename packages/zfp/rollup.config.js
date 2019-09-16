
const typescript = require('rollup-plugin-typescript2')

export default {
    input: './src/index.ts',
    plugins: [
        typescript(/*{ plugin options }*/)
    ],
    output: {
      name: 'cjs',
      file: './dist/bundle.js',
      format: 'cjs',
    }
  };

 
   