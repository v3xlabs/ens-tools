/* eslint-disable sonarjs/no-duplicate-string */
import { renderHook, waitFor } from '@testing-library/react';
import { FetchEnsResolverArgs } from '@wagmi/core';
import { describe, expect, it, vi } from 'vitest';

import { useRecords } from '../../src/hooks/useRecords';
import { makeFetchEnsResolverMock } from '../mocks';

describe('useRecords', async () => {
    vi.mock('@wagmi/core', async (importOriginal: () => Promise<object>) => ({
        ...(await importOriginal()),
        fetchEnsResolver: vi.fn((arguments_: FetchEnsResolverArgs) =>
            makeFetchEnsResolverMock()(arguments_)
        ),
    }));

    it('Fetch single record', async () => {
        const { result } = renderHook(() =>
            useRecords({
                name: 'helgesson.eth',
                records: ['com.github'],
                format: false,
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.error, 'Not to error').toEqual(undefined);

        expect(result.current.data).toEqual({
            'com.github': 'svemat01',
        });
    });

    it('Fetch multiple records', async () => {
        const { result } = renderHook(() =>
            useRecords({
                name: 'helgesson.eth',
                records: [
                    'org.telegram',
                    'com.discord',
                    'com.twitter',
                    'com.github',
                    'email',
                    'url',
                    'eth',
                ],
                format: false,
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.error, 'Not to error').toEqual(undefined);

        expect(result.current.data).toEqual({
            'org.telegram': 'helgesson',
            'com.discord': 'Svemat#5531',
            'com.twitter': 'Helgesson_',
            'com.github': 'svemat01',
            email: 'jakob@helgesson.dev',
            url: 'https://jakobhelgesson.com',
            eth: '0xd577D1322cB22eB6EAC1a008F6',
        });
    });

    it('Fetch no records', async () => {
        const { result } = renderHook(() =>
            useRecords({
                name: 'helgesson.eth',
                records: [],
                format: false,
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.error, 'Not to error').toEqual(undefined);

        expect(result.current.data).toEqual(undefined);
    });
});
