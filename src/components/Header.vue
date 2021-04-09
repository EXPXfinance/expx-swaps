<template>
    <div class="header">
        <div class="header-left">
            <a
                href="https://expx.finance/"
                target="_blank"
                class="brand"
            >
                <Icon class="logo" title="expx"/>
                <span class="title">expX</span>
            </a>
            <div class="page-links">
                <div class="link active">Trade</div>
                <a
                    class="link"
                    :href="configs.poolsUrl"
                    target="_blank"
                >Invest</a>
            </div>
        </div>
        <div class="header-right">
            <Icon
                class="mode-icon"
                :title="modeLogo"
                @click="toggleMode"
            />
            <Account class="account"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import config from '@/config';
import Storage from '@/utils/storage';

import Account from '@/components/Account.vue';
import Icon from '@/components/Icon.vue';

export default defineComponent({
    components: {
        Account,
        Icon,
    },
    setup() {
        const mode = ref(Storage.isDarkmode());
        const modeLogo = computed(() => getLogo(mode.value));

        function toggleMode(): void {
            mode.value = Storage.toggleMode();
            if (mode.value) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        }

        function getLogo(isDarkmode: boolean): string {
            return isDarkmode ? 'moon' : 'sun';
        }

        const configs = config

        return {
            modeLogo,
            toggleMode,

            configs,
        };
    },
});
</script>

<style scoped>
.header {
    height: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background-primary);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid var(--border);
}

.header-left {
    display: flex;
    align-items: center;
}

.header-right {
    display: flex;
    align-items: center;
}

a {
    text-decoration: none;
    color: var(--text-primary);
}

.brand {
    margin-left: 20px;
    display: flex;
    align-items: center;
}

.logo {
    height: 32px;
    width: 32px;
}

.title {
    margin-left: 12px;
    font-size: var(--font-size-large);
}

.page-links {
    display: flex;
    align-items: flex-end;
    margin-left: 48px;
}

.link {
    margin-right: 20px;
    color: var(--text-secondary);
    cursor: pointer;
}

.link.active {
    color: var(--text-primary);
}

.mode-icon {
    height: 24px;
    width: 24px;
    cursor: pointer;
}

.account {
    margin: 0 16px;
}

@media only screen and (max-width: 768px) {
    .brand {
        margin-left: 16px;
    }

    .title,
    .link {
        display: none;
    }
}
</style>
