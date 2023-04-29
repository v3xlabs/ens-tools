import { formatRecord } from '../../../src/index';

it('Linkedin Default', () => {
    expect(formatRecord('com.linkedin', 'in/lucemans')).toBe('lucemans');
});

it('Linkedin Default', () => {
    expect(formatRecord('com.linkedin', 'in/lucemans')).toBe('lucemans');
});

it('Linkedin Default', () => {
    expect(formatRecord('com.linkedin', 'linkedin.com/in/lucemans')).toBe(
        'lucemans'
    );
});

it('Linkedin Default', () => {
    expect(formatRecord('com.linkedin', 'linkedin.com/lucemans')).toBe(
        'lucemans'
    );
});

it('Linkedin Default', () => {
    expect(formatRecord('com.linkedin', 'www.linkedin.com/in/lucemans')).toBe(
        'lucemans'
    );
});
