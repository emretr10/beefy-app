export const pools = [
  {
    id: 'street-drugs-bnb-v2',
    logo: 'thugs/DRUGS-BNB',
    name: 'DRUGS-BNB LP v2',
    token: 'DRUGS-BNB LP',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0x421DF185Ff87bc5f19bd5a90102A51452b70c4A4',
    tokenDecimals: 18,
    tokenDescriptionUrl:'#',
    earnedToken: 'mooStreetDRUGS-BNBV2',
    earnedTokenAddress: '0x9D729179E429153a6aca26389e6a9b625431C79B',
    earnContractAddress: '0x9D729179E429153a6aca26389e6a9b625431C79B',
    defaultApy: 563.74286,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-drugs-bnb',
    oraclePrice: 0,
    fallbackPrice: 4.12346,
    depositsPaused: false,
    status: 'active',
    platform: 'thugs',
  },

  {
    id: 'street-thugs-bnb-v2',
    logo: 'thugs/THUGS-BNB',
    name: 'THUGS-BNB LP v2',
    token: 'THUGS-BNB LP',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0x9354caB0F1083135439B23aA6c364329e578F39a',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStreetTHUGS-BNBV2',
    earnedTokenAddress: '0xe789711992020575e07381fdb3dFDc251Ec4d027',
    earnContractAddress: '0xe789711992020575e07381fdb3dFDc251Ec4d027',
    defaultApy: 52.65007,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-thugs-bnb',
    oraclePrice: 0,
    fallbackPrice: 22.91525,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'street-cred-bnb-v1',
    logo: 'thugs/THUGS-BNB',
    name: 'CRED-BNB LP v1',
    token: 'CRED-BNB LP',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0x9CBE4F200b474a1C33bfFe7c6e531e1D47ECab46',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStreetCRED-BNB',
    earnedTokenAddress: '0x0adc208151e6b7AE1D884b64fDA662d10B4F6174',
    earnContractAddress: '0x0adc208151e6b7AE1D884b64fDA662d10B4F6174',
    defaultApy: 3.9535,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-cred-bnb',
    oraclePrice: 0,
    fallbackPrice: 22.9005,
    depositsPaused: false,
    status: 'active',
  },


  //
  // < ---- > OLD STRATS < ---- >
  //
  {
    id: 'street-thugs-bnb',
    logo: 'thugs/THUGS-BNB',
    name: 'THUGS-BNB LP v1',
    token: 'THUGS-BNB LP v1',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0x9354caB0F1083135439B23aA6c364329e578F39a',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-drugs-with-thugs-bnb-lp',
    earnedToken: 'mooStreetTHUGS-BNB',
    earnedTokenAddress: '0x938922808d98d6A9B130AEdAfF9F263c8C1830cA',
    earnContractAddress: '0x938922808d98d6A9B130AEdAfF9F263c8C1830cA',
    defaultApy: 31.7484,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-thugs-bnb',
    oraclePrice: 0,
    fallbackPrice: 19.7566,
    depositsPaused: true,
    status: 'active',
  },

  {
    id: 'street-drugs-bnb',
    logo: 'thugs/DRUGS-BNB',
    name: 'DRUGS-BNB LP v1',
    token: 'DRUGS-BNB LP v1',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0x5BcE5d58682f15541EFc72d8f56C7d6221d541f1',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-drugs-with-drugs-bnb-lp',
    earnedToken: 'mooStreetDRUGS-BNB',
    earnedTokenAddress: '0xa4aB709f5eB75f3213734fC227D9e27352d1DB6c',
    earnContractAddress: '0xa4aB709f5eB75f3213734fC227D9e27352d1DB6c',
    defaultApy: 37.119,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-drugs-bnb',
    oraclePrice: 0,
    fallbackPrice: 3.5434,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'street-guns-bnb',
    logo: 'thugs/GUNS-BNB',
    name: 'GUNS-BNB LP v1',
    token: 'GUNS-BNB LP v1',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0xa5e5eeB6b51fa0fDc59915C81d75C83470BFA4f0',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-drugs-with-guns-bnb-lp',
    earnedToken: 'mooStreetGUNS-BNB',
    earnedTokenAddress: '0xA2bcB1D7955AEa2F5B93C308E199337a77E7bAd4',
    earnContractAddress: '0xA2bcB1D7955AEa2F5B93C308E199337a77E7bAd4',
    defaultApy: 65.7197,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-guns-bnb',
    oraclePrice: 0,
    fallbackPrice: 3.9689,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'street-busd-bnb',
    logo: 'thugs/BUSD-BNB',
    name: 'BUSD-BNB LP v1',
    token: 'BUSD-BNB LP v1',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0xf2e4E3F9B58b3eDaC88Ad11D689a23f3119a782D',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-drugs-with-busd-bnb-lp',
    earnedToken: 'mooStreetBUSD-BNB',
    earnedTokenAddress: '0x26e6dA6AF638Df79a790911dAe6381d3e96B9DAc',
    earnContractAddress: '0x26e6dA6AF638Df79a790911dAe6381d3e96B9DAc',
    defaultApy: 0.5433,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-busd-bnb',
    oraclePrice: 0,
    fallbackPrice: 10.786,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'street-btc-bnb',
    logo: 'thugs/BTC-BNB',
    name: 'BTC-BNB LP v1',
    token: 'BTC-BNB LP v1',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0xdFb193940E1317f38e91568fdb05EFE18ee4A3c7',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-drugs-with-btc-bnb-lp',
    earnedToken: 'mooStreetBTC-BNB',
    earnedTokenAddress: '0x62C857Ae71Ad9ab671ca4F278eC28d89AcCf1bB2',
    earnContractAddress: '0x62C857Ae71Ad9ab671ca4F278eC28d89AcCf1bB2',
    defaultApy: 1.09829,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-btc-bnb',
    oraclePrice: 0,
    fallbackPrice: 1428.077,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'street-eth-bnb',
    logo: 'thugs/ETH-BNB',
    name: 'ETH-BNB LP v1',
    token: 'ETH-BNB LP v1',
    tokenDescription: 'Uses: StreetSwap',
    tokenAddress: '0x75115C644F9661A761A333Ba0A38e42B1649f143',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-drugs-with-eth-bnb-lp',
    earnedToken: 'mooStreetETH-BNB',
    earnedTokenAddress: '0xE17701b569C616cC636a07ece63e4A0f0Da60218',
    earnContractAddress: '0xE17701b569C616cC636a07ece63e4A0f0Da60218',
    defaultApy: 0.9913,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'thugs-lp',
    oracleId: 'street-eth-bnb',
    oraclePrice: 0,
    fallbackPrice: 236.7713,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'cake-cake',
    logo: 'cake/CAKE',
    name: 'CAKE',
    token: 'CAKE',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-cake',
    earnedToken: 'mooCake',
    earnedTokenAddress: '0xc713ca7cb8edfE238ea652D772d41dde47A9a62d',
    earnContractAddress: '0xc713ca7cb8edfE238ea652D772d41dde47A9a62d',
    defaultApy: 15.9508,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.29,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-smart',
    logo: 'cake/SMART',
    name: 'CAKE SMART',
    token: 'CAKE',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCakeSmart',
    earnedTokenAddress: '0xB0BDBB9E507dBF55f4aC1ef6ADa3E216202e06FD',
    earnContractAddress: '0xB0BDBB9E507dBF55f4aC1ef6ADa3E216202e06FD',
    defaultApy: 15.9508,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.29,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-twt',
    logo: 'cake/cakeTWT',
    name: 'CAKE TWT v2',
    token: 'CAKE',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-twt-with-cake',
    earnedToken: 'mooCakeTWTV2',
    earnedTokenAddress: '0x260879777DB293541DbC9a27c3C2fAD9c9bb48D3',
    earnContractAddress: '0x260879777DB293541DbC9a27c3C2fAD9c9bb48D3',
    defaultApy: 12.8048,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.29,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-hard',
    logo: 'cake/cakeHARD',
    name: 'CAKE HARD',
    token: 'CAKE',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-hard-with-cake',
    earnedToken: 'mooCakeHARD',
    earnedTokenAddress: '0x4B4e5F2CeEdfF00D2DD13874714C1Ef6Ea1Cd8a7',
    earnContractAddress: '0x4B4e5F2CeEdfF00D2DD13874714C1Ef6Ea1Cd8a7',
    defaultApy: 11.88685,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.57,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-broobee',
    logo: 'cake/cakebROOBEE',
    name: 'CAKE bROOBEE',
    token: 'CAKE',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-roobee-with-cake',
    earnedToken: 'mooCakebROOBEE',
    earnedTokenAddress: '0x836527F28Fd3A90ad0ed335E1a868932Bb28939E',
    earnContractAddress: '0x836527F28Fd3A90ad0ed335E1a868932Bb28939E',
    defaultApy: 17.26457,
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.0042,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'cake-cake-bnb',
    logo: 'cake/CAKE-BNB',
    name: 'CAKE-BNB LP',
    token: 'CAKE-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-cake-bnb-lp',
    earnedToken: 'mooPancakeCAKE-BNB',
    earnedTokenAddress: '0x502AB55Cf22f38c4fd8663dEE041A96B72264c53',
    earnContractAddress: '0x502AB55Cf22f38c4fd8663dEE041A96B72264c53',
    defaultApy: 14.68862,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-cake-bnb',
    oraclePrice: 0,
    fallbackPrice: 5.83,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-link-bnb',
    logo: 'cake/LINK-BNB',
    name: 'LINK-BNB LP',
    token: 'LINK-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-link-bnb-lp',
    earnedToken: 'mooPancakeLINK-BNB',
    earnedTokenAddress: '0xaB9C4a0fD179315b005a5f6D3793cb30Af718152',
    earnContractAddress: '0xaB9C4a0fD179315b005a5f6D3793cb30Af718152',
    defaultApy: 0.3498,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-link-bnb',
    oraclePrice: 0,
    fallbackPrice: 38.5021,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-usdt-bnb',
    logo: 'cake/USDT-BNB',
    name: 'USDT-BNB LP',
    token: 'USDT-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-usdt-bnb-lp',
    earnedToken: 'mooPancakeUSDT-BNB',
    earnedTokenAddress: '0x72F758cb79cA71CE9010dc9c0fA0155431435B72',
    earnContractAddress: '0x72F758cb79cA71CE9010dc9c0fA0155431435B72',
    defaultApy: 0.23628,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-usdt-bnb',
    oraclePrice: 0,
    fallbackPrice: 10.900750864365174,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-busd-bnb',
    logo: 'cake/BUSD-BNB',
    name: 'BUSD-BNB LP',
    token: 'BUSD-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-busd-bnb-lp',
    earnedToken: 'mooPancakeBNB-BUSD',
    earnedTokenAddress: '0x0c36Bee5cF5E5b1BE5371574cEBF9A5f01DE5Fc4',
    earnContractAddress: '0x0c36Bee5cF5E5b1BE5371574cEBF9A5f01DE5Fc4',
    defaultApy: 0.2998,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-busd-bnb',
    oraclePrice: 0,
    fallbackPrice: 10.58,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-usdt-busd',
    logo: 'cake/USDT-BUSD',
    name: 'USDT-BUSD LP',
    token: 'USDT-BUSD LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-usdt-busd-lp',
    earnedToken: 'mooPancakeUSDT-BUSD',
    earnedTokenAddress: '0x348039C69B5fD7b333CE0a17E8361E501D2e3fa8',
    earnContractAddress: '0x348039C69B5fD7b333CE0a17E8361E501D2e3fa8',
    defaultApy: 0.11449,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-usdt-busd',
    oraclePrice: 0,
    fallbackPrice: 2,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-eth-bnb',
    logo: 'cake/ETH-BNB',
    name: 'ETH-BNB LP',
    token: 'ETH-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-eth-bnb-lp',
    earnedToken: 'mooPancakeETH-BNB',
    earnedTokenAddress: '0x1CfEAef83Bb688Ac5926df1feEB8F05244054C07',
    earnContractAddress: '0x1CfEAef83Bb688Ac5926df1feEB8F05244054C07',
    defaultApy: 0.133684,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-eth-bnb',
    oraclePrice: 0,
    fallbackPrice: 232.19252,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-btcb-bnb',
    logo: 'cake/BTCB-BNB',
    name: 'BTCB-BNB LP',
    token: 'BTCB-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake-with-btcb-bnb-lp',
    earnedToken: 'mooPancakeBNB-BTCB',
    earnedTokenAddress: '0xd9542B833C6B0D9E4f882d2c4F01d5b5bd005Ac7',
    earnContractAddress: '0xd9542B833C6B0D9E4f882d2c4F01d5b5bd005Ac7',
    defaultApy: 0.21172,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake-lp',
    oracleId: 'cake-btcb-bnb',
    oraclePrice: 0,
    fallbackPrice: 1290,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fil',
    logo: 'fortube/FIL',
    name: 'FIL',
    token: 'FIL',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://filecoin.io/',
    earnedToken: 'mooForFIL',
    earnedTokenAddress: '0x5Bea18aBa4825bbE6450c280fBE8c22B1489cDd4',
    earnContractAddress: '0x5Bea18aBa4825bbE6450c280fBE8c22B1489cDd4',
    defaultApy: 0.24947,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'filecoin',
    oraclePrice: 0,
    fallbackPrice: 30,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'atom',
    logo: 'fortube/ATOM',
    name: 'ATOM',
    token: 'ATOM',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://cosmos.network/',
    earnedToken: 'mooForATOM',
    earnedTokenAddress: '0x6c98707D6F3e0909E377A0Db7ef7895098076ec3',
    earnContractAddress: '0x6c98707D6F3e0909E377A0Db7ef7895098076ec3',
    defaultApy: 0.06347,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'ATOM/USD',
    oraclePrice: 0,
    fallbackPrice: 4.5,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'xtz',
    logo: 'fortube/XTZ',
    name: 'XTZ',
    token: 'XTZ',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x16939ef78684453bfDFb47825F8a5F714f12623a',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://tezos.com/',
    earnedToken: 'mooForXTZ',
    earnedTokenAddress: '0x4480A061130c56b58E8Fa9adeC5BBbB9609122dB',
    earnContractAddress: '0x4480A061130c56b58E8Fa9adeC5BBbB9609122dB',
    defaultApy: 0.04544,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'XTZ/USD',
    oraclePrice: 0,
    fallbackPrice: 2,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fortube-busd',
    logo: 'fortube/BUSD',
    name: 'BUSD',
    token: 'BUSD',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://www.paxos.com/busd/',
    earnedToken: 'mooBUSD',
    earnedTokenAddress: '0xD6fca61Edb1cD0259320A6E0899E8aD1044BBCda',
    earnContractAddress: '0xD6fca61Edb1cD0259320A6E0899E8aD1044BBCda',
    defaultApy: 0.10576,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'BUSD/USD',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fortube-link',
    logo: 'fortube/LINK',
    name: 'ChainLink',
    token: 'LINK',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://chain.link/',
    earnedToken: 'mooLINK',
    earnedTokenAddress: '0x7bF55acDe006C398Bb605Ae564A8F832F80000ee',
    earnContractAddress: '0x7bF55acDe006C398Bb605Ae564A8F832F80000ee',
    defaultApy: 0.01773,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'LINK/USD',
    oraclePrice: 0,
    fallbackPrice: 12,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fortube-dot',
    logo: 'fortube/DOT',
    name: 'DOT',
    token: 'DOT',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://polkadot.network/',
    earnedToken: 'mooDOT',
    earnedTokenAddress: '0x63a2CEF28904956552714ddb226ceE96c3F0C9EF',
    earnContractAddress: '0x63a2CEF28904956552714ddb226ceE96c3F0C9EF',
    defaultApy: 0.02293,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'DOT/USD',
    oraclePrice: 0,
    fallbackPrice: 4.27,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fortube-usdt',
    logo: 'fortube/USDT',
    name: 'USDT',
    token: 'USDT',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x55d398326f99059fF775485246999027B3197955',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://tether.to',
    earnedToken: 'mooUSDT',
    earnedTokenAddress: '0xc16187F3eb15aEE949e7d784906d53fd7E364B26',
    earnContractAddress: '0xc16187F3eb15aEE949e7d784906d53fd7E364B26',
    defaultApy: 0.22468,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'USDT/USD',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fortube-eth',
    logo: 'fortube/ETH',
    name: 'ETH',
    token: 'ETH',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://ethereum.org/',
    earnedToken: 'mooETH',
    earnedTokenAddress: '0xc87049670329a82724e7135A26c73c3496a1Db23',
    earnContractAddress: '0xc87049670329a82724e7135A26c73c3496a1Db23',
    defaultApy: 0.03057,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'ETH/USD',
    oraclePrice: 0,
    fallbackPrice: 414,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fortube-btcb',
    logo: 'fortube/BTCB',
    name: 'BTCB',
    token: 'BTCB',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://coinmarketcap.com/currencies/bitcoin-bep2/',
    earnedToken: 'mooBTCB',
    earnedTokenAddress: '0x6F0Df0858542fC4A1c7f82c14fAA490d7763592F',
    earnContractAddress: '0x6F0Df0858542fC4A1c7f82c14fAA490d7763592F',
    defaultApy: 0.02463,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'BTC/USD',
    oraclePrice: 0,
    fallbackPrice: 12995,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fry-burger-v2',
    logo: 'fry/BURGER',
    name: 'BURGER v2',
    token: 'BURGER',
    tokenDescription: 'Uses: fryWorld',
    tokenAddress: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/fryworld#farming-fries-with-burgers',
    earnedToken: 'mooFryBURGERv2',
    earnedTokenAddress: '0x2fd5f579e2cF9e3cb8127BBAd1B52c25750b1aCE',
    earnContractAddress: '0x2fd5f579e2cF9e3cb8127BBAd1B52c25750b1aCE',
    defaultApy: 0.47506,
    unstableApy: false,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'burger-swap',
    oraclePrice: 0,
    fallbackPrice: 0.44,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'thugs-drugs-guns',
    logo: 'thugs/GUNS',
    name: 'DRUGS GUNS v1',
    token: 'DRUGS',
    tokenDescription: 'Refunds available',
    tokenAddress: '0xfD26889cd6454D8751562f1c0FcF88b18B46F7B7',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-guns-with-drugs',
    earnedToken: 'mooThugsGuns',
    earnedTokenAddress: '0x49263a1Ba199602a8Ef327B34a1AAe11a5FccaAf',
    earnContractAddress: '0x49263a1Ba199602a8Ef327B34a1AAe11a5FccaAf',
    defaultApy: 0,
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'DRUGS',
    oraclePrice: 0,
    fallbackPrice: 0.11,
    depositsPaused: true,
    status: 'refund',
    refundContractAddress: '0x9284403F066f9200c1Ad4A6B5b2Dd0195092803E',
  },

  {
    id: 'cake-syrup-twt',
    logo: 'cake/cakeTWT',
    name: 'CAKE TWT v1',
    token: 'CAKE',
    tokenDescription: 'Refunds available',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-twt-with-cake',
    earnedToken: 'mooCakeTWT',
    earnedTokenAddress: '0x214e640c638fbe68Fb24e11BfBd8Cd7d6cb8E37b',
    earnContractAddress: '0x214e640c638fbe68Fb24e11BfBd8Cd7d6cb8E37b',
    defaultApy: 0,
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'pancakeswap-token',
    oraclePrice: 0,
    fallbackPrice: 0,
    depositsPaused: true,
    status: 'refund',
    refundContractAddress: '0x2fd5caAB20191dcd4423F588e254CC298C7F66A1',
  },

  {
    id: 'cake-syrup-inj',
    logo: 'cake/INJ',
    name: 'CAKE INJ v1',
    token: 'CAKE',
    tokenDescription: 'Refunds available',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-inj-with-cake',
    earnedToken: 'mooCakeINJ',
    earnedTokenAddress: '0xD8bC83E80C88263b8494E8f48FdDEba6261C9B1c',
    earnContractAddress: '0xD8bC83E80C88263b8494E8f48FdDEba6261C9B1c',
    defaultApy: 0,
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'pancakeswap-token',
    oraclePrice: 0,
    fallbackPrice: 0.45,
    depositsPaused: true,
    status: 'refund',
    refundContractAddress: '0xc3EC78dc85D20D2CC0808C5a32B5556C7DD2d282',
  },

  {
    id: 'cake-syrup-ctk',
    logo: 'cake/CTK',
    name: 'CAKE CTK v1',
    token: 'CAKE',
    tokenDescription: 'Refunds available',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-ctk-with-cake',
    earnedToken: 'mooCakeCTK',
    earnedTokenAddress: '0x489afbAED0Ea796712c9A6d366C16CA3876D8184',
    earnContractAddress: '0x489afbAED0Ea796712c9A6d366C16CA3876D8184',
    defaultApy: 0,
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'pancakeswap-token',
    oraclePrice: 0,
    fallbackPrice: 0.45,
    depositsPaused: true,
    status: 'refund',
    refundContractAddress: '0x76A65f4C9a404561b88C43b4Aaf13258Aa1F1f26',
  },

  {
    id: 'cake-stax',
    logo: 'cake/cakeSTAX',
    name: 'CAKE STAX',
    token: 'CAKE',
    tokenDescription: 'EOL',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-stax-with-cake',
    earnedToken: 'mooCakeSTAX',
    earnedTokenAddress: '0xa72D14bec8c37f3A9487B057C7635e55f85f50c4',
    earnContractAddress: '0xa72D14bec8c37f3A9487B057C7635e55f85f50c4',
    defaultApy: 0,
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.035,
    depositsPaused: true,
    status: 'eol',
  },

  {
    id: 'fry-burger-v1',
    logo: 'fry/BURGER',
    name: 'BURGER v1',
    token: 'BURGER',
    tokenDescription: 'Please migrate to v2',
    tokenAddress: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://fry.world/',
    earnedToken: 'mooFryBURGER',
    earnedTokenAddress: '0x78d60Da18c09bdE41397010198F454021Ec810Ad',
    earnContractAddress: '0x78d60Da18c09bdE41397010198F454021Ec810Ad',
    defaultApy: '200.00',
    unstableApy: true,
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'burger-swap',
    oraclePrice: 0,
    fallbackPrice: 0.44,
    depositsPaused: true,
    status: 'eol',
  },
];
