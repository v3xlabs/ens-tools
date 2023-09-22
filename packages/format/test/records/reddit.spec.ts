/* eslint-disable sonarjs/no-duplicate-string */
import { expect, it } from 'vitest';

import { formatRecord } from '../../src/index';

it('Reddit Default', () => {
    expect(formatRecord('com.reddit', 'robi0t')).toBe('robi0t');
});

it('Reddit with R', () => {
    expect(formatRecord('com.reddit', 'r/ethereum')).toBe('r/ethereum');
});

it('Reddit with subreddit', () => {
    expect(formatRecord('com.reddit', 'subreddit/ethereum')).toBe('r/ethereum');
});

it('Reddit with U', () => {
    expect(formatRecord('com.reddit', 'u/robi0t')).toBe('u/robi0t');
});

it('Reddit with user', () => {
    expect(formatRecord('com.reddit', 'user/robi0t')).toBe('u/robi0t');
});
