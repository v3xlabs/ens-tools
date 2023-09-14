import { formatter } from '../formatter.js';

export const formatWebsiteRules = formatter([
    (record) => record.match(/^(.+?:\/\/)?(([^.]+\.)+[^./]+)/)?.[2],
]);
