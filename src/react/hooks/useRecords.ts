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
 */
export const useRecords = <K extends string>({
    name,
    records,
}: EnsRecordsConfig<K>): EnsRecordsResult<K> => {
    const v = useSWR(
        records?.length > 0 ? `ens/r/${records.join(',')}` : null,
        async () => {
            const resolver = await fetchEnsResolver({ name });

            if (!resolver) return null;

            const _object_ = await Promise.allSettled(
                records.map(async (record) => {
                    const value = await resolver.getText(record);

                    return [record, value] as const;
                })
            );

            return Object.fromEntries(
                _object_
                    .map((result) => {
                        if (result && result.status === 'fulfilled')
                            return result.value;

                        return null;
                    })
                    .filter(Boolean) as Array<readonly [K, string]>
            ) as Record<K, string>;
        }
    );

    useEffect(() => {
        v.mutate();
    }, [records.join(',')]);

    return v;
};
