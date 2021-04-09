export interface Token {
	address: string;
	symbol: string;
	name: string;
	decimals: number;
	logo?: string;
}

export const tokensTestnet = [
	{
		address: '0x5eCa0c9D8Ca1bae7cA6a3CC592c61966D7133FC8',
		symbol: 'CAKE',
		name: 'PancakeSwap',
		decimals: 18,
		logo: 'cake.png'
	},
	{
		address: '0xc92808e1D74Bc795fC3a9A4396d15dA1F23190DA',
		symbol: 'BUSD',
		name: 'Binance-Peg BUSD',
		decimals: 18,
		logo: 'busd.png'
	},
	{
		address: '0x065C77e9A8F0FBE475f88a3511fB6b3e5c000d94',
		symbol: 'BURGER',
		name: 'Burger Swap',
		decimals: 18,
		logo: 'burger.png'
	},
	{
		address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
		name: 'Wrapped BNB',
		symbol: 'WBNB',
		decimals: 18,
		logo: 'wbnb.png'
	},
];

export const tokensMainnet = [
	{
		address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
		symbol: 'CAKE',
		name: 'PancakeSwap',
		decimals: 18,
		logo: 'cake.png'
	},
	{
		address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
		symbol: 'BUSD',
		name: 'Binance-Peg BUSD',
		decimals: 18,
		logo: 'busd.png'
	},
	{
		address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
		symbol: 'WBNB',
		name: 'Wrapped BNB',
		decimals: 18,
		logo: 'wbnb.png'
	},
	{
		address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
		symbol: 'ADA',
		name: 'Binance-Peg Cardano',
		decimals: 18,
		logo: 'ada.png'
	},
	{
		address: '0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18',
		symbol: 'BAND',
		name: 'Binance-Peg Band Protocol',
		decimals: 18,
		logo: 'band.png'
	},
	{
		address: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
		symbol: 'BCH',
		name: 'Binance-Peg Bitcoin Cash',
		decimals: 18,
		logo: 'bch.png'
	},
	{
		address: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587',
		symbol: 'BSCX',
		name: 'BSCX',
		decimals: 18,
		logo: 'bscx.png'
	},
	{
		address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
		symbol: 'BTCB',
		name: 'Binance-Peg BTCB',
		decimals: 18,
		logo: 'btcb.png'
	},
	{
		address: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
		symbol: 'BURGER',
		name: 'Burger Swap',
		decimals: 18,
		logo: 'burger.png'
	},
	{
		address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
		symbol: 'DAI',
		name: 'Binance-Peg Dai',
		decimals: 18,
		logo: 'dai.png'
	},
	{
		address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
		symbol: 'DOT',
		name: 'Binance-Peg Polkadot',
		decimals: 18,
		logo: 'dot.png'
	},
	{
		address: '0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6',
		symbol: 'EOS',
		name: 'Binance-Peg EOS',
		decimals: 18,
		logo: 'eos.png'
	},
	{
		address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
		symbol: 'ETH',
		name: 'Binance-Peg Ethereum',
		decimals: 18,
		logo: 'eth.png'
	},
	{
		address: '0xd944f1D1e9d5f9Bb90b62f9D45e447D989580782',
		symbol: 'IOTA',
		name: 'Binance-Peg IOTA',
		decimals: 6,
		logo: 'iota.png'
	},
	{
		address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
		symbol: 'LINK',
		name: 'Binance-Peg ChainLink',
		decimals: 18,
		logo: 'link.png'
	},
	{
		address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
		symbol: 'LTC',
		name: 'Binance-Peg Litecoin',
		decimals: 18,
		logo: 'ltc.png'
	},
	{
		address: '0xFd7B3A77848f1C2D67E05E54d78d174a0C850335',
		symbol: 'ONT',
		name: 'Binance-Peg Ontology',
		decimals: 18,
		logo: 'ont.png'
	},
	{
		address: '0x55d398326f99059fF775485246999027B3197955',
		symbol: 'USDT',
		name: 'Binance-Peg BUSD-T',
		decimals: 18,
		logo: 'usdt.png'
	},
	{
		address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
		symbol: 'XRP',
		name: 'Binance-Peg XRP',
		decimals: 18,
		logo: 'xrt.png'
	},
	{
		address: '0x16939ef78684453bfDFb47825F8a5F714f12623a',
		symbol: 'XTZ',
		name: 'Binance-Peg Tezos',
		decimals: 18,
		logo: 'xtz.png'
	},
];