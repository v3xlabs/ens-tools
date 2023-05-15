import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    dts: true,
    clean: true,
    format: ['cjs', 'esm'],
    minify: true,
    minifyIdentifiers: true,
    minifyWhitespace: true,
    minifySyntax: true,
});
