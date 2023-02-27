import { formatRecord } from '../../src/index';

it('Telegram Default', () => {
    expect(formatRecord('org.telegram', 'lucemansnl')).toBe('lucemansnl');
});

it('Telegram No Protocol', () => {
    expect(formatRecord('org.telegram', 't.me/lucemansnl')).toBe('lucemansnl');
});

it('Telegram Url', () => {
    expect(formatRecord('org.telegram', 'https://t.me/lucemansnl')).toBe('lucemansnl');
});
