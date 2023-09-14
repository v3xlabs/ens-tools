import { formatDiscordRules } from './discord/discord.js';
import { formatGithubRules } from './github/github.js';
import { formatLinkedinRules } from './linkedin/linkedin.js';
import { formatRedditRules } from './reddit/reddit.js';
import type { Rule } from './rule.js';
import { formatTelegramRules } from './telegram/telegram.js';
import { formatTwitterRules } from './twitter/twitter.js';
import { formatWebsiteRules } from './website/website.js';

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
