import { fetchEnsResolver, FetchEnsResolverArgs } from '@wagmi/core';

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

export const makeFetchEnsResolverMock =
    (...overrides: Record<string, Record<string, string>>[]) =>
    async ({ chainId, name }: FetchEnsResolverArgs) => {
        const resolver = Object.assign(
            {},
            ensLocalResolver[name],
            ...overrides.map((override) => override[name])
        );

        if (!resolver)
            throw new MockError(`${name} does not have a mock resolver`);

        return {
            async getText(record: string) {
                const value = resolver[record];

                return value
                    ? Promise.resolve(value)
                    : Promise.reject(new Error('Record not found'));
            },
        } as Awaited<ReturnType<typeof fetchEnsResolver>>;
    };
