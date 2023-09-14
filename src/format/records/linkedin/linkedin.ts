import { formatter } from '../formatter.js';

export const formatLinkedinRules = formatter([
    (record) =>
        record.replace(/^(https?:\/\/)?([A-Za-z]+\.)?linkedin\.com/, ''),
    (record) => record.replace(/^\/?(in\/)?/, ''),
    (record) => record.replace(/\/+$/, ''),
]);
