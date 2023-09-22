/* eslint-disable sonarjs/no-duplicate-string */
import { expect, it } from 'vitest';

import { formatRecord } from '../../src/index';

it('Github Default', () => {
    expect(formatRecord('com.github', 'lucemans')).toBe('lucemans');
});

it('Github Default', () => {
    expect(formatRecord('com.github', '@lucemans')).toBe('lucemans');
});

it('Github Default', () => {
    expect(formatRecord('com.github', 'github.com/lucemans')).toBe('lucemans');
});

it('Github Default', () => {
    expect(formatRecord('com.github', 'https://github.com/lucemans')).toBe(
        'lucemans'
    );
});

it('Github Default', () => {
    expect(formatRecord('com.github', 'www.github.com/lucemans')).toBe(
        'lucemans'
    );
});
