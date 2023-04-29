import { useChainId, useEnsResolver, useQuery } from 'wagmi';

type _wagmiEnsResolverArguments = typeof useEnsResolver extends (
    arguments_: infer U
) => any
    ? U
    : never;

export type EnsMultichainAddressConfig = {
    // ENS name (eg. "luc.eth")
    name: string;
    // SLIP-0044 coin type (eg. 60 for Ethereum)
    coinType: number;
} & _wagmiEnsResolverArguments;

const queryKey = ({
    chainId,
    name,
    scopeKey,
}: Pick<EnsMultichainAddressConfig, 'chainId' | 'name' | 'scopeKey'>) => {
    return [
        {
            entity: 'ensMultichainAddress',
            chainId,
            name,
            scopeKey,
            persist: false,
        },
    ] as const;
};

/**
 * Gets the user's address for a given ENS name and coin type.
 * CURRENTLY INCOMPLETE IMPLEMENTATION
 * Based on: https://github.com/wagmi-dev/wagmi/blob/main/packages/react/src/hooks/ens/useEnsResolver.ts
 */
export const useEnsMultichainAddress = ({
    coinType,
    ...resolverConfig
}: EnsMultichainAddressConfig): any => {
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
            return await data?.getAddress(coinType);
        },
        {
            cacheTime: cacheTime || 36_000,
            enabled: Boolean(enabled && chainId && name),
            suspense,
            onError,
            onSettled,
            onSuccess,
        }
    );
};
