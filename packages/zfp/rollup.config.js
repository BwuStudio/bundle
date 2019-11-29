
const typescript = require('rollup-plugin-typescript2')

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

 
   