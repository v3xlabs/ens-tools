import { FetchEnsResolverArgs } from '@wagmi/core';
import { vi } from 'vitest';

export const ensLocalResolver: Record<string, Record<string, string>> = {
    'helgesson.eth': {
        'org.telegram': 'helgesson',
        'com.discord': 'Svemat#5531',
        'com.twitter': 'Helgesson_',
        'com.github': 'svemat01',
        email: 'jakob@helgesson.dev',
        url: 'https://jakobhelgesson.com',
        eth: '0xd577D1322cB22eB6EAC1a008F6',
    },
};

export class MockError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'MockError';
    }
}

export const wagmiCoreMock: (
    importOriginal: <T = unknown>() => Promise<T>
) => any = async (importOriginal) => {
    const module_: object = await importOriginal();

    return {
        ...module_,
        fetchEnsResolver: vi
            .fn()
            .mockImplementation(({ chainId, name }: FetchEnsResolverArgs) => {
                const resolver = ensLocalResolver[name];

                if (!resolver)
                    throw new MockError(
                        `${name} does not have a mock resolver`
                    );

                return {
                    async getText(record: string) {
                        const value = resolver[record];

                        return value
                            ? Promise.resolve(value)
                            : Promise.reject(new Error('Record not found'));
                    },
                };
            }),
    };
};
