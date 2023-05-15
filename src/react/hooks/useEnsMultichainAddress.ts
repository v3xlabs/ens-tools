/**
 * Supports ENSIP-9 & ENSIP-11
 */
export type EnsMultichainAddressConfig = {
    // ENS name (eg. "luc.eth")
    name: string;
    // SLIP-0044 coin type (eg. 60 for Ethereum)
    coinType: number;
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
    
};
