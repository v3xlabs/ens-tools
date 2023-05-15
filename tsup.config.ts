import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/react/index.ts'],
    splitting: true,
    sourcemap: true,
    dts: true,
    clean: true,
    format: ['cjs', 'esm'],
});
