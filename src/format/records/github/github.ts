import { formatter } from '../formatter.js';

export const formatGithubRules = formatter([
    (record) => record.replace(/^(https?:\/\/)?(www\.)?github\.com\//, ''),
    (record) => record.replace(/^@/, ''),
    (record) => record.replace(/\/+$/, ''),
]);
