import { formatDiscordRules } from './records/discord/discord';
import { formatGithubRules } from './records/github/github';
import { formatLinkedinRules } from './records/linkedin/linkedin';
import { formatRedditRules } from './records/reddit/reddit';
import { formatTelegramRules } from './records/telegram/telegram';
import { formatTwitterRules } from './records/twitter/twitter';
import { formatWebsiteRules } from './records/website/website';
import { Rule } from './rule';

type Types =
    | 'com.twitter'
    | 'com.reddit'
    | 'com.github'
    | 'com.discord'
    | 'com.linkedin'
    | 'com.telegram'
    | 'website';

const socialFormatters: Record<Types, Rule> = {
    'com.twitter': formatTwitterRules,
    'com.reddit': formatRedditRules,
    'com.github': formatGithubRules,
    'com.discord': formatDiscordRules,
    'com.linkedin': formatLinkedinRules,
    'com.telegram': formatTelegramRules,
    website: formatWebsiteRules,
};

export const formatRecord = (record: Types, value: string | undefined) => {
    if (!value) return;

    return socialFormatters[record]?.(value);
};
