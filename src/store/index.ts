import { createStore } from 'vuex';

import account, { AccountState } from './modules/account';
import assets, { AssetState } from './modules/assets';
import gas, { GasState } from './modules/gas';
import ui, { UIState } from './modules/ui';

export interface RootState {
	account: AccountState;
	assets: AssetState;
    gas: GasState;
	ui: UIState;
}

const store = createStore({
    modules: {
        account,
        assets,
        gas,
        ui,
    },
});

export default store;
