[![ens-tools](https://raw.githubusercontent.com/v3xlabs/ens-tools/master/.github/banner1.png)](https://www.npmjs.com/package/ens-tools)

<br>

> **Note**
>
> This project aims to extend the functionality of [wagmi](https://wagmi.sh/) as well as provide additional utility for the ENS ecosystem.

## Features

-   🪝 React Hook for Multichain Addresses
-   💾 React Hook for getting Records
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

### React Hook for getting Records
    
```tsx
import { useRecords } from 'ens-tools/react';

export const Records = () => {
    const { data } = useRecords({
        name: 'vitalik.eth',
        records: ['com.twitter', 'com.github'],
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

### Format Ethereum Addresses

```tsx
import { formatAddress } from 'ens-tools';

// outputs 0x1234...7890

const address = formatAddress('0x1234567890123456789012345678901234567890');
```


### React Hook for Multichain Addresses

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
```

## License

[LGPL-3.0](/LICENSE) License
