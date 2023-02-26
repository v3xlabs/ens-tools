import { formatRecord } from '../../src/index';

it('Discord Default', () => {
    expect(formatRecord('com.discord', 'Lucemans#2066')).toBe('Lucemans#2066');
});
