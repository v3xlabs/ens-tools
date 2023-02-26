import { formatter } from '../../formatter';

export const formatWebsiteRules = formatter([
    (record) => record.replace(/^(.+:?\/\/)?(www\.)?/, ''),
    (record) => record.split('/')[0],
    (record) => (/^.+\..+$/.test(record) ? record : undefined),
]);
