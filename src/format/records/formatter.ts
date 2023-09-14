import type { Rule } from './rule.js';

export const formatter = (rules: Rule[]): Rule => {
    return (value: string) => {
        return rules.reduce<string | undefined>((accumulator, rule) => {
            if (accumulator === undefined) return;

            return rule(accumulator);
        }, value);
    };
};
