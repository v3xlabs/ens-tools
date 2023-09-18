/**
 * @type {import('tsup').Options}
 */
export const baseConfig = {
    splitting: true,
    sourcemap: true,
    dts: true,
    clean: true,
    format: ['cjs', 'esm'],
    minify: true,
    minifyIdentifiers: true,
    minifyWhitespace: true,
    minifySyntax: true,
};
