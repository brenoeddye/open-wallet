import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
    id: 'theme',

    state: () => ({
        theme: localStorage.getItem('data-theme') || 'light',
    }),

    getters: {
        getTheme(): string {
            return this.theme as any;
        },
    },

    actions: {
        setTheme(newTheme: string) {
            localStorage.setItem('data-theme', newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            this.theme = newTheme;
        },
    },
});