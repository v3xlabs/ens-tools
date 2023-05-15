[![ens-tools](https://raw.githubusercontent.com/v3xlabs/ens-tools/master/.github/banner1.png)](https://www.npmjs.com/package/ens-tools)

> **Note**
>
> This project aims to extend the functionality of [wagmi](https://wagmi.sh/),<br />
> in addition to providing utility to the ENS ecosystem.

## Features

-   🪝 React Hook for Multichain Addresses
-   💾 React Hook for getting Records
-   🔠 React Hook for preferred name Capitalization
-   💼 Easily Normalize Records
-   📝 Easily truncate Ethereum Addresses

...and a lot more.

## Documentation

For documentation. Stick to the Typescript Intellisense.

## Installation

Install ens-tools and let the magic happen.

```bash
npm install ens-tools
```

## Usage

This library thingiemajig contains the following bits and bobs:

-   [⚛️🪝 useMultichainAddress](##%EF%B8%8F-react-hook-for-multichain-addresses)
-   [⚛️🪝 useRecords](##%EF%B8%8F-react-hook-for-getting-records)
-   [⚛️🪝 usePreferredName](##%EF%B8%8F-react-hook-for-name-capitalization)
-   [📝 formatAddress](#-format-ethereum-addresses)
-   [📝 formatRecords](#-format-records)

### ⚛️🪝 React Hook for Multichain Addresses

The `coinType` variable supports all the coins following the [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) specification.

```tsx
import { useMultichainAddress } from 'ens-tools/react';

export const BtcAddress = () => {
    const { address } = useMultichainAddress({
        name: 'vitalik.eth',
        coinType: 2,
    });

    return <div>BTC Address: {address}</div>;
};
```

### ⚛️🪝 React Hook for getting Records

This react hook lets you easily get records from an ENS name.
Simply specify the records and wether you would like them normalized and you're good to go.

```tsx
import { useRecords } from 'ens-tools/react';

export const Records = () => {
    const { data } = useRecords({
        name: 'vitalik.eth',
        records: ['com.twitter', 'com.github'],
        normalize: true,
    });

    return (
        <div>
            {data.map((record) => (
                <div key={record.key}>
                    {record.key}: {record.value}
                </div>
            ))}
        </div>
    );
};
```

### ⚛️🪝 React Hook for name Capitalization

This react hook lets you easily get the preferred capitalization for an ENS name.
It does this by reading the `display` record of the ENS name and defaults to the inputted validation.
Optionally you can specify a fallback name to use in case the ENS name does not have a `display` record.
Simply specify the name you're good to go.

```tsx
import { usePreferredName } from 'ens-tools/react';

export const Name = () => {
    const { data } = usePreferredName({
        name: 'vitalik.eth',
        fallback: 'vItAlIk.eth',
    });

    return (
        <div>
            Hey there <b>{data}</b>!
        </div>
    );
};
```

### 📝 Format Ethereum Addresses

Easily truncate Ethereum Addresses to 10 characters.

```ts
import { formatAddress } from 'ens-tools';

const address = formatAddress('0x1234567890123456789012345678901234567890');
// Outputs: 0x1234...7890
```

### 📝 Format Records

Easily normalize records.

| Record Type  | Output                            | Rules Applied                                                                                        |
| ------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| com.twitter  | `@lucemansnl`                     | [Twitter](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/twitter/twitter.ts)    |
| com.github   | `lucemans`                        | [Github](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/github/github.ts)       |
| com.linkedin | `lucemans`                        | [LinkedIn](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/linkedin/linkedin.ts) |
| org.reddit   | `u/lucemans`, `r/oddlysatisfying` | [Reddit](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/reddit/reddit.ts)       |
| org.telegram | `lucemans`                        | [Telegram](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/telegram/telegram.ts) |
| com.discord  | `Lucemans#2066`, `discord.gg/v3x` | [Discord](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/discord/discord.ts)    |
| website      | `https://luc.computer`            | [Website](https://github.com/v3xlabs/ens-tools/blob/master/src/format/records/website/website.ts)    |

```ts
import { formatRecord } from 'ens-tools';

const cleanTwitter = formatRecord(
    'com.twitter',
    'https://mobile.twitter.com/lucemansnl'
);
// Outputs: @lucemansnl
```

## ⚖️ License

[LGPL-3.0](/LICENSE) License
