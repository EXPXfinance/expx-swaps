import { AssetMetadata } from '@/config';
import { Transaction } from '@/store/modules/account';
import config from '@/config';

const PREFERENCES = 'preferences';
const TRANSACTIONS = 'transactions';
const ASSETS = 'assets';

interface Preferences {
    connector: string | null;
    slippage: number;
    pair: Pair;
    darkmode: boolean;
}

interface Pair {
    inputAsset: string;
    outputAsset: string;
}

type Transactions = Record<string, Record<number, Record<string, Transaction>>>;
type Assets = Record<number, Record<string, AssetMetadata>>;

export default class Storage {
    static getConnector(): string | null {
        const preferences = getPreferences();
        return preferences.connector;
    }

    static getSlippage(): number {
        const preferences = getPreferences();
        return preferences.slippage;
    }

    static getPair(): Pair {
        const preferences = getPreferences();
        return preferences.pair;
    }

    static getTransactions(account: string, chainId: number): Record<string, Transaction> {
        const transactionString = localStorage.getItem(TRANSACTIONS);
        const transactions: Transactions = transactionString
            ? JSON.parse(transactionString)
            : {};
        if (!transactions ||
            !transactions[account] ||
            !transactions[account][chainId]
        ) {
            return {};
        }
        return transactions[account][chainId];
    }

    static getAssets(chainId: number): Record<string, AssetMetadata> {
        const assetString = localStorage.getItem(ASSETS);
        const assets: Assets = assetString
            ? JSON.parse(assetString)
            : {};
        if (!assets[chainId]) {
            return {};
        }
        return assets[chainId];
    }

    static isDarkmode(): boolean {
        const preferences = getPreferences();
        return preferences.darkmode;
    }

    static saveConnector(connector: string): void {
        const preferences = getPreferences();
        preferences.connector = connector;
        localStorage.setItem(PREFERENCES, JSON.stringify(preferences));
    }

    static saveSlippage(slippage: number): void {
        const preferences = getPreferences();
        preferences.slippage = slippage;
        localStorage.setItem(PREFERENCES, JSON.stringify(preferences));
    }

    static saveInputAsset(asset: string): void {
        const preferences = getPreferences();
        preferences.pair.inputAsset = asset;
        localStorage.setItem(PREFERENCES, JSON.stringify(preferences));
    }

    static saveOutputAsset(asset: string): void {
        const preferences = getPreferences();
        preferences.pair.outputAsset = asset;
        localStorage.setItem(PREFERENCES, JSON.stringify(preferences));
    }

    static saveTransaction(account: string, chainId: number, transaction: Transaction): void {
        const transactionString = localStorage.getItem(TRANSACTIONS);
        const transactions: Transactions = transactionString
            ? JSON.parse(transactionString)
            : {};
        if (!transactions[account]) {
            transactions[account] = {};
        }
        if (!transactions[account][chainId]) {
            transactions[account][chainId] = {};
        }
        transactions[account][chainId][transaction.hash] = transaction;
        localStorage.setItem(TRANSACTIONS, JSON.stringify(transactions));
    }

    static toggleMode(): boolean {
        const preferences = getPreferences();
        preferences.darkmode = !preferences.darkmode;
        localStorage.setItem(PREFERENCES, JSON.stringify(preferences));
        return preferences.darkmode;
    }

    static clearConnector(): void {
        const preferences = getPreferences();
        preferences.connector = null;
        localStorage.setItem(PREFERENCES, JSON.stringify(preferences));
    }

    static clearTransactions(): void {
        localStorage.removeItem(TRANSACTIONS);
    }

    static clearAssets(): void {
        localStorage.removeItem(ASSETS);
    }
}

function getPreferences(): Preferences {
    const defaultPreferences: Preferences = {
        connector: null,
        slippage: 0.005,
        pair: {
            inputAsset: config.tokens[0].address,
            outputAsset: config.tokens[1].address,
        },
        darkmode: true,
    };
    const preferenceString = localStorage.getItem(PREFERENCES);
    const preferences = JSON.parse(preferenceString || '{}');
    return {
        ...defaultPreferences,
        ...preferences,
    };
}
