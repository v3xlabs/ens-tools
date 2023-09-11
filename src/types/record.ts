export type SuggestedRecords =
    | 'url'
    | 'mail'
    | 'name'
    | 'email'
    | 'header'
    | 'avatar'
    | 'location'
    | 'timezone'
    | 'language'
    | 'pronouns'
    | 'org.matrix'
    | 'io.keybase'
    | 'com.twitter'
    | 'description'
    | 'com.discord'
    | 'org.telegram'
    | 'com.linkedin'
    | 'social.bluesky'
    | 'social.mastadon'
    | 'network.dm3.profile'
    | 'network.dm3.deliveryService';

export type RecordType = SuggestedRecords | (string & {});
