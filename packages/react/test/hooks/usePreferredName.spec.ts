/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/no-duplicate-string */
import { renderHook, waitFor } from '@testing-library/react';
import { fetchEnsResolver, FetchEnsResolverArgs } from '@wagmi/core';
import { describe, expect, it, vi } from 'vitest';

import { usePreferredName } from '../../src/hooks/usePreferredName';
import { makeFetchEnsResolverMock } from '../mocks';

describe('usePreferredName', async () => {
    vi.mock('@wagmi/core', async (importOriginal: () => Promise<object>) => ({
        ...(await importOriginal()),
        fetchEnsResolver: vi.fn((arguments_: FetchEnsResolverArgs) =>
            makeFetchEnsResolverMock()(arguments_)
        ),
    }));

    it('returns name if no records', async () => {
        const { result } = renderHook(() =>
            usePreferredName({
                name: 'helgesson.eth',
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.data).toEqual('helgesson.eth');
    });

    it('returns fallback instead of name if no records', async () => {
        const { result } = renderHook(() =>
            usePreferredName({
                name: 'helgesson.eth',
                fallback: 'HELGESSON.eth',
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.data).toEqual('HELGESSON.eth');
    });

    it('returns name if display does not match name', async () => {
        vi.mocked(fetchEnsResolver).mockImplementationOnce(
            makeFetchEnsResolverMock({
                'helgesson.eth': {
                    display: 'vitalik.eth',
                },
            })
        );

        const { result } = renderHook(() =>
            usePreferredName({
                name: 'helgesson.eth',
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.data).toEqual('helgesson.eth');
    });

    it('returns display if it matches name', async () => {
        vi.mocked(fetchEnsResolver).mockImplementationOnce(
            makeFetchEnsResolverMock({
                'helgesson.eth': {
                    display: 'Helgesson.eth',
                },
            })
        );

        const { result } = renderHook(() =>
            usePreferredName({
                name: 'helgesson.eth',
            })
        );

        await waitFor(() => !result.current.isLoading);

        expect(result.current.data).toEqual('Helgesson.eth');
    });
});
