import { formatRecord } from '../../src/index';

it('Twitter Default', () => {
    expect(formatRecord('com.twitter', 'lucemansnl')).toBe('@lucemansnl');
});

it('Twitter Default', () => {
    expect(formatRecord('com.twitter', '@lucemansnl')).toBe('@lucemansnl');
});

it('Twitter Default', () => {
    expect(formatRecord('com.twitter', 'twitter.com/lucemansnl')).toBe(
        '@lucemansnl'
    );
});

it('Twitter Default', () => {
    expect(formatRecord('com.twitter', 'https://twitter.com/lucemansnl')).toBe(
        '@lucemansnl'
    );
});

it('Twitter Default', () => {
    expect(formatRecord('com.twitter', 'www.twitter.com/lucemansnl')).toBe(
        '@lucemansnl'
    );
});
