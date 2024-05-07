<script lang="ts">
import icons from '@/assets/icons/icons.json';

export default defineComponent({
    props: {
        icon:       String,
        width:      String,
        height:     String,
        colors:     String,
        clickable:  Boolean
    },
    computed: {
        iconData() {
            return icons.find((item) => item.icon === this.icon) || null;
        },
        iconSource() {
            return this.iconData ? this.iconData.data : null;
        },
    }
})
</script>

<template>
    <i class="app-icon" v-if="iconSource" :style="{ backgroundImage: `url(${iconSource})`, width: `${width}px`, height: `${height}px` }" :class="colors"></i>
</template>

<style lang="scss" scoped>
.app-icon {
    background-size: 100%;
    display: flex;
    filter: invert(100%) sepia(0%) saturate(7478%) hue-rotate(40deg) brightness(105%) contrast(105%);

    &.primary {
        filter: invert(32%) sepia(96%) saturate(1618%) hue-rotate(207deg) brightness(78%) contrast(93%);
    }
}
</style>