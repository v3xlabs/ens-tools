import { RecordType } from '@/types';

export type ENStateProfile = {
    name: string;
    address: string; // address
    avatar: string; // url
    display: string; // ens name
    records: Record<RecordType, string>;
    chains: Record<string, string>;
    fresh: number; // timestamp
    resolver: string; // address of resolver
    errors: Record<string, string>;
};
