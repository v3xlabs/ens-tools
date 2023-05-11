import { useRecords } from './useRecords';

type EnsPreferredNameConfig = {
    /** ENS name to look up */
    name: string;
};

type EnsPreferredNameResult = {
    /**
     * ENS name with capitalization following the `display` text record
     * For more info see [ENSIP-5](https://docs.ens.domains/ens-improvement-proposals/ensip-5-text-records)
     */
    data: string;
};

/**
 * Gets the user's preferred ENS capitalization respecting the `display` text record.
 * CURRENTLY INCOMPLETE IMPLEMENTATION
 * Based on: https://github.com/wagmi-dev/wagmi/blob/main/packages/react/src/hooks/ens/useEnsResolver.ts
 * For more info see [ENSIP-5](https://docs.ens.domains/ens-improvement-proposals/ensip-5-text-records)
 */
export const usePreferredName = ({
    name,
}: EnsPreferredNameConfig): EnsPreferredNameResult => {
    const { data } = useRecords({
        name,
        records: ['display'],
        format: false,
    });

    if (!data) return { data: name };

    if (data.display.toLowerCase() != name.toLowerCase()) return { data: name };

    return { data: data.display };
};
