<template>
    <img
        :src="assetIcon"
        @error="handleError"
    >
</template>

<script lang="ts">
import { defineComponent, computed, ref, toRefs, watch } from 'vue';
import { useStore } from 'vuex';

const DEFAULT_TOKEN_LOGO = 'defaultAssetIcon.svg'

import { RootState } from '@/store';

export default defineComponent({
    props: {
        address: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const store = useStore<RootState>();

        const loadingFailed = ref(false);

        const { address } = toRefs(props);

        watch(address, () => {
            loadingFailed.value = false;
        });

        const assetIcon = computed(() => {
            const address = props.address;
            const metadata = store.getters['assets/metadata'];
            const assetMetadata = metadata[address];

            if (!assetMetadata || loadingFailed.value) {
                return DEFAULT_TOKEN_LOGO;
            }

            const context = require.context('./../assets/images/tokens/', false, /\.png$/i)

            return context(`./${assetMetadata.logo}`).default;
        });

        function handleError(): void {
            loadingFailed.value = true;
        }

        return {
            assetIcon,
            handleError,
        };
    },
});
</script>
