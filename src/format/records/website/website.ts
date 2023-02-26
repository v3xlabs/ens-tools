import { formatter } from '../../formatter';

export const formatWebsiteRules = formatter([
    (record) => record.match(/^(.+?:\/\/)?(([^.]+\.)+[^./]+)/)?.[2],
]);
