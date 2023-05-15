import { useRecords } from './useRecords';

type EnsPreferredNameConfig = {
    /** ENS name to look up */
    name: string;
    /** Fallback to use incase no `display` record */
    fallback?: string;
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
 * For more info see [ENSIP-5](https://docs.ens.domains/ens-improvement-proposals/ensip-5-text-records)
 */
export const usePreferredName = ({
    name,
    fallback = name,
}: EnsPreferredNameConfig): EnsPreferredNameResult => {
    const v = useRecords({
        name,
        records: ['display'],
        format: false,
    });

    if (!v.data) return { ...v, data: fallback };

    if (v.data.display?.toLowerCase() != name.toLowerCase())
        return { ...v, data: fallback };

    return { ...v, data: v.data.display };
};
