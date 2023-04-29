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

Install ens-tools and thats about it.

```bash
npm install ens-tools
```

## Usage

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

## License

[LGPL-3.0](/LICENSE) License
