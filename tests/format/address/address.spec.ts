import { formatAddress } from '../../../src/index';

it('Address Default', () => {
    expect(formatAddress('0x225f137127d9067788314bc7fcc1f36746a3c3B5')).toBe('0x225...c3B5');
});

it('ENS Name', () => {
    expect(formatAddress('luc.eth')).toBe('luc.eth');
});
