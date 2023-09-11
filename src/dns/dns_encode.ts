/**
 * Encodes a domain name into its binary representation according to the DNS
 * wire format. Each label (i.e., substring separated by dots) in the domain
 * is prefixed with its length, and the encoded domain name is terminated
 * with a root label (length 0).
 *
 * @param domain - A domain name as a string (e.g., "tanrikulu.eth").
 *
 * @returns A Uint8Array containing the encoded domain name on success, or throws an error
 * if any of the labels in the domain name are too long (exceeding 63 characters).
 *
 * @example
 *
 * ```typescript
 * const encoded = dnsEncode("tanrikulu.eth");
 * console.log(encoded); // Uint8Array [ 9, 116, 97, 110, 114, 105, 107, 117, 108, 117, 3, 101, 116, 104, 0 ]
 * ```
 */
export const dns_encode = (domain: string): string => {
    const encoded: number[] = [];
    const labels = domain.split('.');

    for (const label of labels) {
        const labelLength = label.length;

        if (labelLength > 63) {
            throw new Error(`Label is too long: ${label}`);
        }

        encoded.push(labelLength);

        for (const char of label) {
            const x = char.codePointAt(0);

            if (x) encoded.push(x);
        }
    }

    // Append the root label (length 0)
    encoded.push(0);

    return new Uint8Array(encoded).toString();
};
