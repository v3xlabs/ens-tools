import { formatDiscordRules } from './discord/discord';
import { formatGithubRules } from './github/github';
import { formatLinkedinRules } from './linkedin/linkedin';
import { formatRedditRules } from './reddit/reddit';
import { Rule } from './rule';
import { formatTelegramRules } from './telegram/telegram';
import { formatTwitterRules } from './twitter/twitter';
import { formatWebsiteRules } from './website/website';

type Types =
    | 'com.twitter'
    | 'com.reddit'
    | 'com.github'
    | 'com.discord'
    | 'com.linkedin'
    | 'org.telegram'
    | 'website';

const socialFormatters: Record<Types, Rule> = {
    'com.twitter': formatTwitterRules,
    'com.reddit': formatRedditRules,
    'com.github': formatGithubRules,
    'com.discord': formatDiscordRules,
    'com.linkedin': formatLinkedinRules,
    'org.telegram': formatTelegramRules,
    website: formatWebsiteRules,
};

export const formatRecord = (record: Types, value: string | undefined) => {
    if (!value) return;

    return socialFormatters[record]?.(value);
};
