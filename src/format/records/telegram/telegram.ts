import { formatter } from '../formatter.js';

export const formatTelegramRules = formatter([
    (record) => record.replace(/^(https?:\/\/)?(www\.)?(mobile\.)?t\.me\//, ''),
    (record) => record.replace(/^(joinchat\/)/, ''),
    (record) => record.replace(/\/+$/, ''),
    (record) => (/^.+$/.test(record) ? record : undefined),
]);
