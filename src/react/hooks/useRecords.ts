import { fetchEnsResolver } from '@wagmi/core';
import { useEffect } from 'react';
import useSWR from 'swr';

export type EnsRecordsConfig<K extends string> = {
    /** ENS name (eg. "luc.eth") */
    name: string;
    /** Records (eg. ["com.github", "avatar", "com.discord"]) */
    records: K[];
    /** Wether to format/normalize the records */
    format: boolean;
};

type EnsRecordsResult<K extends string> = ReturnType<
    typeof useSWR<Record<K, string> | null>
>;

/**
 * Gets the user's records for a given ENS.
 * CURRENTLY INCOMPLETE IMPLEMENTATION
 * Based on: https://github.com/wagmi-dev/wagmi/blob/main/packages/react/src/hooks/ens/useEnsResolver.ts
 */
export const useRecords = <K extends string>({
    name,
    records,
}: EnsRecordsConfig<K>): EnsRecordsResult<K> => {
    const v = useSWR(`ens/r/${records.join(',')}`, async () => {
        const resolver = await fetchEnsResolver({ name });

        if (!resolver) return null;

        const _object_ = await Promise.allSettled(
            records.map(async (record) => {
                const value = await resolver.getText(record);

                return [record, value] as const;
            })
        );

        console.log(_object_);

        const entries = _object_
            .map((current) => {
                if (current.status === 'fulfilled') {
                    const [record, value] = current.value;

                    return { [record]: value };
                }

                return false;
            })
            .filter(Boolean);

        return Object.fromEntries(entries as any[]) as Record<K, any>;
    });

    useEffect(() => {
        v.mutate();
    }, [records.join(',')]);

    return v;
};
