const curves = [
  {
    id: 'BUSDv3',
    name: 'BUSD',
    symbol: 'BUSD',
    description: 'Binance USD',
    investSymbol: 'yBUSD',
    erc20address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    iEarnContract: '0x04bC0Ab673d88aE9dbC9DA2380cB6B79C4BCa9aE',
    apr: 0,
    maxApr: 0,
    balance: 0,
    investedBalance: 0,
    price: 0,
    decimals: 18,
    poolValue: 0,
    abi: config.IEarnErc20ABIv2,
    version: 3,
    disabled: false,
    invest: 'deposit',
    redeem: 'withdraw',
    curve: true,
    price_id: 'binance-usd'
  },
  {
    id: 'DAIv2',
    name: 'DAI',
    symbol: 'DAI',
    description: 'DAI Stablecoin',
    investSymbol: 'yDAI',
    erc20address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    iEarnContract: '0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01',
    lastMeasurement: 9465912,
    measurement: 1000037230456849197,
    maxApr: 0,
    balance: 0,
    investedBalance: 0,
    decimals: 18,
    price: 0,
    poolValue: 0,
    abi: config.IEarnErc20ABIv2,
    version: 2,
    disabled: false,
    invest: 'deposit',
    redeem: 'withdraw',
    curve: true,
    price_id: 'dai'
  },
  {
    id: 'USDCv2',
    name: 'USD Coin',
    symbol: 'USDC',
    description: 'USD//C',
    investSymbol: 'yUSDC',
    erc20address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    iEarnContract: '0xd6aD7a6750A7593E092a9B218d66C0A814a3436e',
    lastMeasurement: 9465880,
    measurement: 1139534904703193728,
    apr: 0,
    maxApr: 0,
    balance: 0,
    investedBalance: 0,
    price: 0,
    decimals: 6,
    poolValue: 0,
    abi: config.IEarnErc20ABIv2,
    version: 2,
    disabled: false,
    invest: 'deposit',
    redeem: 'withdraw',
    curve: true,
    price_id: 'usd-coin'
  },
  {
    id: 'USDTv2',
    name: 'USDT',
    symbol: 'USDT',
    description: 'Tether USD',
    investSymbol: 'yUSDT',
    erc20address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    iEarnContract: '0x83f798e925BcD4017Eb265844FDDAbb448f1707D',
    lastMeasurement: 9465880,
    measurement: 1000030025124779312,
    apr: 0,
    maxApr: 0,
    balance: 0,
    investedBalance: 0,
    price: 0,
    decimals: 6,
    poolValue: 0,
    abi: config.IEarnErc20ABIv2,
    version: 2,
    disabled: false,
    invest: 'deposit',
    redeem: 'withdraw',
    curve: true,
    price_id: 'tether',
  },
  {
    id: 'TUSDv2',
    name: 'TUSD',
    symbol: 'TUSD',
    description: 'TrueUSD',
    investSymbol: 'yTUSD',
    erc20address: '0x0000000000085d4780B73119b644AE5ecd22b376',
    iEarnContract: '0x73a052500105205d34Daf004eAb301916DA8190f',
    lastMeasurement: 9479531,
    measurement: 1000197346651007837,
    apr: 0,
    maxApr: 0,
    balance: 0,
    investedBalance: 0,
    price: 0,
    decimals: 18,
    poolValue: 0,
    abi: config.IEarnErc20ABIv2,
    version: 2,
    disabled: false,
    invest: 'deposit',
    redeem: 'withdraw',
    curve: true,
    price_id: 'true-usd',
  }
]

const curveContracts = [
  {
    id: 'crvV1',
    symbol: 'compound.curve.fi',
    version: 1,
    erc20address: '0x3740fb63ab7a09891d7c0d4299442a551d06f5fd',
    decimals: 18,
    balance: 0
  },
  {
    id: 'crvV2',
    symbol: 'usdt.curve.fi',
    version: 2,
    erc20address: '0x9fc689ccada600b6df723d9e47d84d76664a1f23',
    decimals: 18,
    balance: 0
  },
  {
    id: 'crvV3',
    symbol: 'y.curve.fi',
    version: 3,
    erc20address: '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8',
    decimals: 18,
    balance: 0
  },
  {
    id: 'crvV4',
    symbol: 'busd.curve.fi',
    version: 4,
    erc20address: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
    decimals: 18,
    balance: 0
  }
]