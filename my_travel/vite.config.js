// vite.config.js
import babel from '@rollup/plugin-babel';

export default {
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    // Add other Vite plugins as needed
  ],
  // Other Vite configuration options...
};

