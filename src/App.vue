<script lang="ts">
import { useThemeStore } from '@/stores/themeStore';

export default defineComponent({
	data() {
		return {
			currentTheme: useThemeStore().getTheme
		}
	},

	mounted() {
		document.documentElement.setAttribute('data-theme', this.currentTheme);
	},

	methods: {
		changeTheme() {
			if (this.currentTheme === 'light') {
				useThemeStore().setTheme('dark');
				this.currentTheme = 'dark';
			} else  {
				useThemeStore().setTheme('light');
				this.currentTheme = 'light';
			}
		}
	}
})
</script>

<template>
	<div class="bg-white dark:bg-gray-800 text-base">
		<RouterView />

		<button @click="changeTheme">changeTheme</button>
	</div>
</template>