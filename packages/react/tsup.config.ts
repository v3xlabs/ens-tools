import { baseConfig } from '@ens-tools/base/tsup';
import { defineConfig } from 'tsup';
export default defineConfig({
    ...baseConfig,
    entry: ['src/index.ts'],
});
