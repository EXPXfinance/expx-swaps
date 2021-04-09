import mainnet from './mainnet.json';
import testnet from './testnet.json';
import { tokensTestnet, tokensMainnet, Token } from '@/helpers/tokens';

interface Connector {
    id: string;
    name: string;
    options: any;
}

export interface AssetMetadata {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logo: string | undefined;
}

interface Config {
    network: string;
    chainId: number;
    precision: number;
    rpcUrl: string;
    poolsUrl: string;
    explorerUrl: string;
    backendUrl: string;
    addresses: {
        dsProxyRegistry: string;
        exchangeProxy: string;
        wbnb: string;
        multicall: string;
        poolsInfo: string;
    };
    assets: Record<string, AssetMetadata>;
    untrusted: string[];
    connectors: Record<string, Connector>;
    tokens: Array<Token>;
}

const configs = {
    'mainnet': {
        untrusted: [],
        tokens: tokensMainnet,
        ...mainnet,
    },
    'testnet':{
        untrusted: [],
        tokens: tokensTestnet,
        ...testnet,
    },
};
// eslint-disable-next-line no-undef
const network = process.env.VUE_APP_NETWORK || 'testnet';

const config: Config = configs[network];

export default config;
