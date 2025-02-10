import type { ComputedRef } from '@vue/reactivity';

export interface MenuItem {
    icon: string;
    count: ComputedRef<number>;
    title: string;
    router: string;
}