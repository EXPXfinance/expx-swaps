import { ActionContext } from 'vuex';

import { RootState } from '@/store';
import { AssetMetadata } from '@/config';
import { TokenList, getTokenlist, getAssetsFromTokenlist } from '@/utils/list';

type Metadata = Record<string, AssetMetadata>;

const DEFAULT_LIST_ID = 'default'

export interface AssetState {
    listId: string;
    lists: Record<string, TokenList>;
    custom: Metadata;
}

interface AddListPayload {
    listId: string;
    list: TokenList;
}

const mutations = {
    selectList: (_state: AssetState, listId: string): void => {
        _state.listId = listId;
    },
    addList: (_state: AssetState, payload: AddListPayload): void => {
        _state.lists[payload.listId] = payload.list;
    },
};

const actions = {
    init: async({ commit }: ActionContext<AssetState, RootState>): Promise<void> => {
        const list = await getTokenlist();
        commit('addList', { listId: DEFAULT_LIST_ID, list });
    },
};

const getters = {
    metadata: (state: AssetState): Metadata => {
        const list = state.lists[state.listId];
        const listAssets = getAssetsFromTokenlist(list);
        const metadata = {
            ...listAssets,
            ...state.custom,
        };
        return metadata;
    },
};

function state(): AssetState {
    return {
        listId: DEFAULT_LIST_ID,
        lists: {},
        custom: {},
    };
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
