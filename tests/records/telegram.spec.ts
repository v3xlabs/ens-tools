import { formatRecord } from '../../src/index';

it('Telegram Default', () => {
    expect(formatRecord('com.telegram', 'lucemansnl')).toBe('lucemansnl');
});

it('Telegram No Protocol', () => {
    expect(formatRecord('com.telegram', 't.me/lucemansnl')).toBe('lucemansnl');
});

it('Telegram Url', () => {
    expect(formatRecord('com.telegram', 'https://t.me/lucemansnl')).toBe('lucemansnl');
});
