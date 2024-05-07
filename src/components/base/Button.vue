<script lang="ts">
export default defineComponent({
    props: {
        type: String,
        href: String,
        icon: String,
        blank: Boolean,
    }
})
</script>

<template>
    <router-link 
        v-if="href"
        :class="'btn ' + type" 
        :to="href" 
        :target="blank ? '_blank' : ''">
        <baseIcon 
            v-if="icon"
            class="icon"
            :icon="icon"
            width="24" height="24"/>

        <slot />
    </router-link>

    <button v-else :class="'btn ' + type">
        <baseIcon 
            v-if="icon"
            class="icon"
            :icon="icon"
            width="24" height="24"/>
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.btn {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    color: var(--font-color);
    border-radius: 8px;
    padding: .7em 1em;
    transition: all .25s ease-in-out;
    cursor: pointer;

    .icon {
        margin-right: 8px;
    }

    &.primary {
        background-color: var(--primary);

        &:hover {
            background-color: var(--primary-hover);
        }
    }

    &.secondary {
        background-color: var(--primary-bg-hover);

        &:hover {
            background-color: var(--primary-bg-active);
        }
    }
}
</style>