import { formatter } from '../../formatter';

export const formatDiscordRules = formatter([
    (record) =>
        record.replace(
            /^(https?:\/\/)?(www\.)?discord(app)?\.((gg|me)\/|com\/invite\/)/,
            ''
        ),
    (record) => (/^.+#\d{4}/.test(record) ? record : undefined),
]);
