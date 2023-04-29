import { useChainId, useEnsResolver, useQuery } from 'wagmi';

type _wagmiEnsResolverArguments = typeof useEnsResolver extends (
    arguments_: infer U
) => any
    ? U
    : never;

export type EnsRecordsConfig = {
    // ENS name (eg. "luc.eth")
    name: string;
    // Records (eg. ["com.github", "avatar", "com.discord"])
    records: string[];
    // Wether to format/normalize the records
    format: boolean;
} & _wagmiEnsResolverArguments;

const queryKey = ({
    chainId,
    name,
    scopeKey,
}: Pick<EnsRecordsConfig, 'chainId' | 'name' | 'scopeKey'>) => {
    return [
        {
            entity: 'ensRecords',
            chainId,
            name,
            scopeKey,
            persist: false,
        },
    ] as const;
};

/**
 * Gets the user's records for a given ENS.
 * CURRENTLY INCOMPLETE IMPLEMENTATION
 * Based on: https://github.com/wagmi-dev/wagmi/blob/main/packages/react/src/hooks/ens/useEnsResolver.ts
 */
export const useRecords = ({
    records,
    ...resolverConfig
}: EnsRecordsConfig): any => {
    const {
        name,
        chainId: _chainId,
        enabled,
        scopeKey,
        suspense,
        onError,
        onSettled,
        onSuccess,
        cacheTime,
    } = resolverConfig;

    const chainId = useChainId({ chainId: _chainId });
    const { data, ...resolverOutput } = useEnsResolver({
        ...resolverConfig,
    });

    return useQuery(
        queryKey({ chainId, name, scopeKey }),
        async ({ queryKey: [{ chainId, name }] }) => {
            return await Promise.all(
                records.map(async (record) => data?.getText(record))
            );
        },
        {
            cacheTime: cacheTime || 3600,
            enabled: Boolean(enabled && chainId && name),
            suspense,
            onError,
            onSettled,
            onSuccess,
        }
    );
};
