/**
 * Convert EVM chainId to [SLIP-0044]() coinType as per [ENSIP-11](https://docs.ens.domains/ensip/11).
 * @param chainId EVM chainId
 * @returns SLIP-0044 coinType
 */
export const convertEVMChainIdToCoinType = (chainId: number) => {
    return (0x80_00_00_00 | chainId) >>> 0;
};

/**
 * Convert [SLIP-0044]() coinType to EVM chainId as per [ENSIP-11](https://docs.ens.domains/ensip/11).
 * @param coinType SLIP-0044 coinType (above range 0x80000000 (2147483648))
 * @returns EVM chainId
 */
export const convertCoinTypeToEVMChainId = (coinType: number) => {
    // eslint-disable-next-line prettier/prettier
    return Math.trunc(0x7F_FF_FF_FF & coinType);
};
