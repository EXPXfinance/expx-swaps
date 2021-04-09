import config, { AssetMetadata } from '@/config';
import { Token } from '@/helpers/tokens';

export interface TokenList {
    name: string;
    logo?: string;
    tokens: Token[];
}

export async function getTokenlist(): Promise<TokenList> {
    return {
        name: 'default',
        tokens: config.tokens,
    };
}

export function getAssetsFromTokenlist(list: TokenList): Record<string, AssetMetadata> {
    const assets: Record<string, AssetMetadata> = {};
    if (list.tokens.findIndex(token => token.address === config.addresses.wbnb) !== -1) {
        assets.bsc = {
            address: 'bsc',
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
            logo: 'wbnb.png',
        };
    }

    for (const token of list.tokens) {
        assets[token.address] = {
            address: token.address,
            name: token.name,
            symbol: token.symbol,
            decimals: token.decimals,
            logo: token.logo,
        };
    }
    return assets;
}
