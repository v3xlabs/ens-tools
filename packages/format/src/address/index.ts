export const AddressRegex = /^0x[\dA-Fa-f]{40}$/;

/**
 * Formats the address from 0x225f137127d9067788314bc7fcc1f36746a3c3B5 to 0x225f...c3B5
 * Returns the address if it doesn't match the address pattern
 * @param address The address to format
 */
export const formatAddress = (address: string) => {
    if (!address) return address;

    if (address.match(AddressRegex) === null) return address;

    return `${address.slice(0, 5)}...${address.slice(-4)}`;
};
