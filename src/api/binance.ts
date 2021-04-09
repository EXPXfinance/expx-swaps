import { Provider, Contract } from '@expx/multicall';

import dsProxyRegistryAbi from '../abi/DSProxyRegistry.json';
import bep20Abi from '../abi/BEP20.json';

import config from '@/config';
import { BSC_KEY } from '@/utils/helpers';
import provider from '@/utils/provider';

export type Allowances = Record<string, Record<string, string>>;

export type Balances = Record<string, string>;

export interface AccountState {
    allowances: Allowances;
    balances: Balances;
    proxy: string;
}

export default class Binance {
    static async fetchAccountState(address: string, assets: string[]): Promise<AccountState> {
        assets = assets.filter(asset => asset !== BSC_KEY);
        const bscCallProvider = new Provider(config.addresses.multicall);
        await bscCallProvider.init(provider);
        const calls = [];
        // Fetch balances and allowances
        const exchangeProxyAddress = config.addresses.exchangeProxy;
        for (const assetAddress of assets) {
            const assetContract = new Contract(assetAddress, bep20Abi);
            const balanceCall = assetContract.balanceOf(address);
            const allowanceCall = assetContract.allowance(address, exchangeProxyAddress);
            calls.push(balanceCall);
            calls.push(allowanceCall);
        }
        // Fetch bsc balance
        const bscBalanceCall = bscCallProvider.getBalance(address);
        calls.push(bscBalanceCall);
        // Fetch proxy
        const dsProxyRegistryAddress = config.addresses.dsProxyRegistry;
        const dsProxyRegistryContract = new Contract(
            dsProxyRegistryAddress,
            dsProxyRegistryAbi,
        );
        const proxyCall = dsProxyRegistryContract.proxies(address);
        calls.push(proxyCall);
        // Fetch data
        const data = await bscCallProvider.all(calls);
        const assetCount = assets.length;
        const allowances = {};
        allowances[exchangeProxyAddress] = {};
        const balances: Record<string, string> = {};
        let i = 0;
        for (const assetAddress of assets) {
            balances[assetAddress] = data[2 * i].toString();
            allowances[exchangeProxyAddress][assetAddress] = data[2 * i + 1].toString();
            i++;
        }
        balances[BSC_KEY] = data[2 * assetCount].toString();
        const proxy = data[2 * assetCount + 1];
        return { allowances, balances, proxy };
    }
}
