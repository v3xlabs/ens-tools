import { formatter } from '../../formatter';

export const formatRedditRules = formatter([
    (record) => record.replace(/^(https?:\/\/)?(www\.)?reddit\.com\//, ''),
    (record) => record.replace(/^(user\/)/, 'u/'),
    (record) => record.replace(/^(subreddit\/)/, 'r/'),
    (record) => record.replace(/\/+$/, ''),
    (record) => (/^.+$/.test(record) ? record : undefined),
]);
