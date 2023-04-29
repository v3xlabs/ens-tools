import { formatter } from '../formatter';

export const formatTwitterRules = formatter([
    (record) =>
        record.replace(/^(https?:\/\/)?(www\.)?(mobile\.)?twitter\.com\//, ''),
    (record) => record.replace(/^@/, ''),
    (record) => record.replace(/\/$/, ''),
    (record) => (/^.{1,15}$/.test(record) ? `@${record}` : undefined),
]);
