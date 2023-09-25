/* eslint-disable unicorn/number-literal-case */
import { describe, expect, it } from 'vitest';

import {
    convertCoinTypeToEVMChainId,
    convertEVMChainIdToCoinType,
} from '../src/evm2SIP44';

describe('evm2SIP44', () => {
    it('convertEVMChainIdToCoinType converts chainId to coinType', () => {
        expect(convertEVMChainIdToCoinType(1)).toBe(0x80_00_00_01);
    });

    it('convertEVMChainIdToCoinType handles max chainId', () => {
        expect(convertEVMChainIdToCoinType(0x7f_ff_ff_ff)).toBe(0xff_ff_ff_ff);
    });

    it('convertCoinTypeToEVMChainId converts coinType to chainId', () => {
        expect(convertCoinTypeToEVMChainId(0x80_00_00_01)).toBe(1);
    });

    it('convertCoinTypeToEVMChainId handles max coinType', () => {
        expect(convertCoinTypeToEVMChainId(0xff_ff_ff_ff)).toBe(0x7f_ff_ff_ff);
    });
});
