export const Tokens = [
  {
    id: 0,
    name: "Bitcoin",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/BTC.svg",
    symbol: "BTC",
  },
  {
    id: 1,
    name: "Etherum",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/ETH.svg",
    symbol: "ETH",
  },
  {
    id: 2,
    name: "Tether",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/USDT.svg",
    symbol: "USDT",
  },
  {
    id: 3,
    name: "BNB",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/BNB.svg",
    symbol: "BNB",
  },
  {
    id: 4,
    name: "USD Coin",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/USDC.svg",
    symbol: "USDC",
  },
  {
    id: 5,
    name: "XRP",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/XRP.svg",
    symbol: "XRP",
  },
  {
    id: 6,
    name: "Carano",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/ADA.svg",
    symbol: "ADA",
  },
  {
    id: 7,
    name: "Polkadot",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/DOT.svg",
    symbol: "DOT",
  },
  {
    id: 8,
    name: "Polygon",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/MATIC.svg",
    symbol: "MATIC",
  },
  {
    id: 9,
    name: "Dogecoin",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/DOGE.svg",
    symbol: "DOGE",
  },
  {
    id: 10,
    name: "Solana",
    imageUrl:
      "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies/SOL.svg",
    //   "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljk3NyAxNy45NDJMLjAyOSAxMy44NGw2Ljk0OCA5Ljc5MiA2Ljk1Mi05Ljc5Mi02Ljk1MyA0LjEwM3pNNy4wODIuOTlMLjEzNCAxMi41Mmw2Ljk0OCA0LjEwOCA2Ljk0Ny00LjEwNEw3LjA4Mi45OXoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=",
    symbol: "SOL",
  },
];

const test = {
  bids: {
    total: 9,
    page: 1,
    perPage: 20,
    records: [
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xd350b26e77da91e95daee3d6d687c360f6682ba1dd993e6158a38ae4ec51b88d",
            s: "0x3aafda0c5f6282a0930a69bbe62923c00b33528aed632e8ef029c754c85996d0",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x7daac88c492c641a0ac8d08420b6a7d78764615d",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "120976800",
          makerAmount: "30320000000000000000",
          takerAmount: "48390720000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "1678025953",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678285153",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x96fea9dbaabb83f9b7ace0f13799f1f04aa222262de604d8a5daa852e6b67bf6",
          remainingFillableTakerAmount: "48390720000",
          createdAt: "2023-03-05T14:20:01.692Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xa2a7b9037421e2c8565ebb2ea9ee3d2720bd3a0960baf0b05562b7037f080df5",
            s: "0x1b5c1fb0f811ecf74d96eefc71739ec556088ca68d6a7e4d0fc1e545788a5020",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x1b8c03a679c02b9aae8c62e4a9a0626e69595135",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "134237068",
          makerAmount: "33268170654318067540",
          takerAmount: "53694827400",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "1677827637",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678086837",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xf6f675ef70568b8005c832e019a640ef0e7ba54af8ee5edfe52cf9f709f1a6bb",
          remainingFillableTakerAmount: "0",
          createdAt: "2023-03-03T07:14:11.248Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xa3b8d76158e0a8dbeb0df7a606f926338425816a51a3608b58bd8affc1401342",
            s: "0x64578e7849d03ba71deb124968e9b4520ebae0f654b5b3f6122af3649b8c4816",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0xe14dc1c13027b41c9f256bdf5524f5fa08cc3bb5",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "209802362",
          makerAmount: "50000000000000000000",
          takerAmount: "83920945000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "1677706321",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678311121",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xcdbf3732204b6bcd868ceea3f4e2b6273719ccb1840475e32c85e3fc7d948ab9",
          remainingFillableTakerAmount: "83920945000",
          createdAt: "2023-03-01T21:32:08.139Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xcc3d475eefd89885765a8c14887e0d1ee2be3096575f5cb8ea136cb0dceec5f9",
            s: "0x0bacab430a07704a7f2bf917917306dc8a5b131c2ba995e9744a214c79339b3c",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x7daac88c492c641a0ac8d08420b6a7d78764615d",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "8440000",
          makerAmount: "2000000000000000000",
          takerAmount: "3376000000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "1677787937",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678047137",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xbda7a00dce5e42c094d53b7599be59e225b6f866b72302acf8d4fd7a612aacdb",
          remainingFillableTakerAmount: "3376000000",
          createdAt: "2023-03-02T20:13:09.586Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x02202950c5dbfdb93f24ee85edac22e82f68fd199b862eee8347149ba2da900d",
            s: "0x3921c060999807689037e937a206abe3a873980526fd3a3e4256c75ddb42f536",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0xe14dc1c13027b41c9f256bdf5524f5fa08cc3bb5",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "211074900",
          makerAmount: "50000000000000000000",
          takerAmount: "84429960000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "1677706351",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678311151",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x1d855e66abe6c52316c23b8c07a783fe44c8664ff086d63aa301f2948983bb32",
          remainingFillableTakerAmount: "78454348320",
          createdAt: "2023-03-01T21:32:35.332Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 3,
            r: "0x497ce36a2b1aa5cb5c1fd21a74c5e481d431e165785b286793755af089221511",
            s: "0x5855f3fdcb9a3d6445552f89f3b5417f6f3468d9c7db2bd153121eb1f9ee87cc",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x7b500b700e23b307de0baed11dfaf3f3fc2c47a3",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "0",
          makerAmount: "12222490437526514243",
          takerAmount: "20949348609",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "1677777769443",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x0000000000000000000000000000000000000000",
          expiry: "1678209769",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x1d51fe95ee3f7f428d2bd6fcf54a15d3d57268aed32389262e6663e7dff08645",
          remainingFillableTakerAmount: "20949348609",
          createdAt: "2023-03-02T17:23:18.301Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xdeae53ae77d5b43c96802b777d0506fb54bf97c473c001034e7087d5d69b2afa",
            s: "0x124205fe936bb168e0dcf1a72854ea3e86ad1701471161c4fc0b802b4fcfe351",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x6b3086cd6ebc90f6f8a9e6e7636c547a294f924c",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "0",
          makerAmount: "700000000000000",
          takerAmount: "2000000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "96032194803036340",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x0000000000000000000000000000000000000000",
          expiry: "1623059982503",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x004741d16e4d6ee8fe8d65c36f7fd7a0a50520f5bd71ba5cd8b37b80869952ea",
          remainingFillableTakerAmount: "41919",
          createdAt: "2021-05-31T09:59:46.206Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x4cedd4848b393c4f9bf841cc749119863918f02880bbc97a741f09b60eb3df2c",
            s: "0x57596f08603a83b95e5a0a01f66b6c64976cb763c604fe5379c50a7daa40c201",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x8a6bfcae15e729fd1440574108437dea281a9b3e",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "0",
          makerAmount: "10000000000000000",
          takerAmount: "50000000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "9411",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1676357951873",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x20b9de310d245f8d5e855c0f1ec1aee5819a9df2e66f3ddad55502ad7c7e5179",
          remainingFillableTakerAmount: "50000000",
          createdAt: "2023-02-14T06:59:23.366Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xa439f6d13adc97b09b8d05c3c138c6e78f19ae1aeadf13ad1ae51d6835fb3f95",
            s: "0x01a2d42ae4bc654498a113e48f6a530490542bbacc01636f85de1f1262563fbd",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x8a6bfcae15e729fd1440574108437dea281a9b3e",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "0",
          makerAmount: "10000000000000000",
          takerAmount: "50000000",
          makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          takerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          salt: "3173",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1676360300133",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x7edce565dd294087bf32e338bf89971d9fe8dc4ae1d4087ba648cc3188f529d1",
          remainingFillableTakerAmount: "50000000",
          createdAt: "2023-02-14T07:38:25.584Z",
        },
      },
    ],
  },
  asks: {
    total: 14,
    page: 1,
    perPage: 20,
    records: [
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xa23719e5a3522b7afc02770e0127ac91f9e9d6d76c5360f2cd14e6984bc08668",
            s: "0x283f6e8f63d69cb85195a68dc9e441c4e54318f0266415f2d0c61c65bb4b6e33",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x79392c571e254f57dd2a3e045268374e393636a4",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "2594372500000000",
          makerAmount: "1702500000",
          takerAmount: "1037749000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677598731",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678203531",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xac0731be9ed95e7bf3e8a81a48f06a93d92a88021f5767315b15919fda898b45",
          remainingFillableTakerAmount: "277098793186491",
          createdAt: "2023-02-28T15:38:58.735Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x8b6d7009562231d0ce996a5ea0c9c75fc1c1decce3146993deb8e45f456afe64",
            s: "0x789ec16c4133cf9c321f486b88b09c75d6c51eec84c6f64d3ac193c6a933ab0e",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x79392c571e254f57dd2a3e045268374e393636a4",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "2595715000000000",
          makerAmount: "1702500000",
          takerAmount: "1038286000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677598223",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678203023",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x55471d22503c0be74791cfc8612a2f633acbf86c32c757241642023873dc1585",
          remainingFillableTakerAmount: "0",
          createdAt: "2023-02-28T15:30:33.299Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x0ceacce94be7e82dc25c5c9e4c06990b8f4ceff26ce69c74715bd691ec36a61b",
            s: "0x74e74c82adf7c20701a3ccb28c8b801a7ba0afdd2f1a5c3836347e06c94d07bc",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x79392c571e254f57dd2a3e045268374e393636a4",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "2601340000000000",
          makerAmount: "1702500000",
          takerAmount: "1040536000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677597647",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678202447",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x89ddbe4fd1e99fb536247ec3211c89b4299afaf4f73540c0fa31ffe32cdccbf9",
          remainingFillableTakerAmount: "277842975389134",
          createdAt: "2023-02-28T15:21:43.970Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xc4ecdb78d646c2a95d196061b469297503294268417184d86a91499789770f99",
            s: "0x52f2eabb1ec798b7fc839928dde85985a54a97239e4388dbf23c99e2aa0728be",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x290900d81991f05fee872b7b877f51d85051a3d1",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "30769230000000000",
          makerAmount: "20000000001",
          takerAmount: "12307692000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677525248",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678130048",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x05c8acdf54e73bd34cc4e5c6b0574e7ccd398290d01d0adb489e4540b1e5723c",
          remainingFillableTakerAmount: "615384600",
          createdAt: "2023-02-27T19:14:14.803Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xd2fae132b95a525cae270e96ae1d06ea5960cc0e6ac9ea78e3b962a585ccecfb",
            s: "0x4e7537a1644b952cd5e4f1740471ff7625a1fabb2ad0f944f84c16eb56b3b064",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x290900d81991f05fee872b7b877f51d85051a3d1",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "30959750000000000",
          makerAmount: "20000000000",
          takerAmount: "12383900000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677525088",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678129888",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xede67d8c2902cc2171011fc0d3833d60205ee1ab879b3a32f6328704f26dd04d",
          remainingFillableTakerAmount: "1238390000",
          createdAt: "2023-02-27T19:11:34.972Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xc332a24f6313e30ba3573587179f4f708d31ce003df4303431f835efa21bc871",
            s: "0x6f1e9620716e8a843d6d329a56ffe8a1fd53225b7e5623bb0d397640ffcd837d",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0xe14dc1c13027b41c9f256bdf5524f5fa08cc3bb5",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "138769715000000000",
          makerAmount: "89293194610",
          takerAmount: "55507886000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677746552",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678351352",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x411b6605c4b92b1a722212a8f016ba8c69766d0e250723b47306ead082e0769c",
          remainingFillableTakerAmount: "0",
          createdAt: "2023-03-02T08:42:50.359Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x6813cc1f30f77a2f5de76f24343960dfa781f04cb8f9388741a08c6e67edfb41",
            s: "0x5c2f8121615aa7e72a2b167164ce0e02145dd8f0019218f74063c0a78976b403",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x626a7976d5256d12b4e503c053b043eccc674ddf",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "46875000000000",
          makerAmount: "30000000",
          takerAmount: "18750000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677488929",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678093729",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x1434569cd1931529b1fbe669bf78996a0ed8ea2e43026b393a91345a7261f320",
          remainingFillableTakerAmount: "9456125000000000",
          createdAt: "2023-02-27T09:09:37.335Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x3f7fcba3f21e8523de1914dca1fd6bd74960303ac8b79588739f60fd7663a820",
            s: "0x029bc7558e2e592a9abc1c146a3e922c9181d7697d5d549b80dcf006438946ec",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x361c74be781164574771bcaaee6b233314d9d657",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "3267972500000000",
          makerAmount: "2000000000",
          takerAmount: "1307189000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677826805",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678431605",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xab5a73afdbf05331fde17616fe6b7ff7a22f66fb1d2db8e0925ba329a2cbad82",
          remainingFillableTakerAmount: "1307189000000000000",
          createdAt: "2023-03-03T07:00:19.703Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x279908b06a1684f5c2b4747e78fa4969aba3fecbf6e5b8102635099669fe6e16",
            s: "0x5be320fd049355021de8704fde25dd55d36a08c4c5eefb140357799197b8122b",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x7a0a3061964756d1f94f369a47cf525f861da335",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "1748995000000000",
          makerAmount: "1049397750",
          takerAmount: "699598000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1678038086",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678642886",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xbbb2f476d3952a577205aecd4b1edce50871e0825cc77ecbbdf86736e96bfe96",
          remainingFillableTakerAmount: "699598000000000000",
          createdAt: "2023-03-05T17:41:36.576Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x344a527bc99c5f7ca7cad8c1687ed3b09a1e8714d29202ab24d02cc24bcc697f",
            s: "0x36f7e2277767675f740f1e76d3a70ddad4df443c9c1423fe9a5a71561ae1123d",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x25b15c491255f7fcb1a615ee6341fd514c9880a3",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "83333332500000000",
          makerAmount: "50000000000",
          takerAmount: "33333333000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677977789",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678582589",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x4e62dac1c19c59f3e8faec686ea7097461ad146c2dafcc302eda63493de3becd",
          remainingFillableTakerAmount: "33333333000000000000",
          createdAt: "2023-03-05T00:56:40.958Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0xa02f9850fbed25f0134b9e687e13f386cdb0d525ff935da981463bb9d0ce5c9c",
            s: "0x1abc61fee14548d90244fe0e1530ab845dc3561af8b56474b681ade01f6bf5f0",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x25b15c491255f7fcb1a615ee6341fd514c9880a3",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "83948957500000000",
          makerAmount: "50000000000",
          takerAmount: "33579583000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677977831",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678582631",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x971fb0ecfc016a1e7e5b830b5a4d0baaa4750e5a8662492a9211913671700b5f",
          remainingFillableTakerAmount: "33579583000000000000",
          createdAt: "2023-03-05T00:57:23.080Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x542df8a0356d91a9dbe4ddf6e2bc483e3210c35b330abbcbb00e6922193f5641",
            s: "0x3088d450f4c98a60f7e627e47e989948814d2c2a6f7a7538d5090daa474cb86f",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x52b31788abc6f4831977b4b879929590ef66282c",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "100000000000000000",
          makerAmount: "53200000000",
          takerAmount: "40000000000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1678031243",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678636043",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0x88f1cca54b5ebfd826f995518479eae71e1c3ced7a312434b874928cf5c618fd",
          remainingFillableTakerAmount: "40000000000000000000",
          createdAt: "2023-03-05T15:47:38.895Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 2,
            r: "0x679b74a27101ec5d65c0baaae8a3c6396582d8010db78fc678370952f8ab1243",
            s: "0x332f63c05ea66cfb97ac15d1b074d0f7528dfbfdd0f24799086f1469cce1dd8a",
            v: 27,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0xf48d2dda5dd5a7248588b22d59777d36dd335119",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "35145817500000000",
          makerAmount: "9559662915",
          takerAmount: "14058327000000000000",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "1677779774",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
          expiry: "1678384574",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
        metaData: {
          orderHash:
            "0xe90f089fd72db6c6137b666414f3f7724024ed5295edc6c28c03a54874c532e5",
          remainingFillableTakerAmount: "0",
          createdAt: "2023-03-02T17:56:46.482Z",
        },
      },
      {
        order: {
          signature: {
            signatureType: 3,
            r: "0x2b98edac793db8ba571febfb897d57a241e25c533fdc7d9b68af470e6373123b",
            s: "0x3c3ad709e2bf19107fceb67a407d8789c970b95d1dd08412df2756b16761ebcd",
            v: 28,
          },
          sender: "0x0000000000000000000000000000000000000000",
          maker: "0x3e1b77ab58f231211cc761e4f6caacd37ae40f0f",
          taker: "0x0000000000000000000000000000000000000000",
          takerTokenFeeAmount: "152972197693071575",
          makerAmount: "2002559040",
          takerAmount: "50990732564357191963",
          makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          salt: "30184873555390001752019547668239962869598437003403518006782966107912124500193",
          verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
          feeRecipient: "0x52427b0035f494a21a0a4a1abe04d679f789c821",
          expiry: "1693599780",
          chainId: 1,
          pool: "0x0000000000000000000000000000000000000000000000000000000000000037",
        },
        metaData: {
          orderHash:
            "0x8b81b5c9fdcb76fa29a405c39fb070864fdd1e320c69cedaf352d0dcb5f17cf9",
          remainingFillableTakerAmount: "0",
          createdAt: "2021-09-09T20:25:58.734Z",
        },
      },
    ],
  },
};

const socket = {
  payload: [
    {
      order: {
        maker: "0x0cbe093d7dce6f3b66023c92551b5593bc20837c",
        taker: "0x0000000000000000000000000000000000000000",
        makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        takerToken: "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
        makerAmount: "20000000000",
        takerAmount: "14421058077367205542725",
        expiry: "1678057600",
        salt: "3565189491753483508381870369729152346958438989730798484581455249550982144326",
        feeRecipient: "0x0000000000000000000000000000000000000000",
        pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
        takerTokenFeeAmount: "0",
        sender: "0x0000000000000000000000000000000000000000",
        verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
        chainId: 1,
        signature: {
          signatureType: 2,
          v: 27,
          r: "0x2f5f69f0d1aed395b2e0656399d3abd4c71ea4908754e199f32c3fae927891f8",
          s: "0x50beef26d31ea75610b58cbe4012188fc1e57b54515d89eb93d0b683f2dfaa19",
        },
      },
      metaData: {
        orderHash:
          "0x6d9d57c57822b13f266150adeac6264225e0f104af05ce2fb68b9522cdd9b799",
        remainingFillableTakerAmount: "14421058077367205542725",
        state: "ADDED",
      },
    },
  ],
  requestId: "123e4567-e89b-12d3-a456-426655440000",
};

// Number(asks.order.takerAmount) /
//                             Number(asks.order.makerAmount) /
//                             (Number(asks.order.takerAmount) / 1000000000000)
                            
                            //14421058077367205542725
                            //14421058077.367205542725
                            //50
                            //1.386860790151628

