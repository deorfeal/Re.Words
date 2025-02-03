import type { ComputedRef } from '@vue/reactivity';

export interface FilterState {
    isShowed: boolean; // Показывать ли фильтр
    isActive: boolean | ComputedRef<boolean>; // Активен ли фильтр
}

export interface FilterSelect {
    isSelect: boolean; // Является ли элемент выбором (например, dropdown)
    optionsList?: string[]; // Опциональный список опций (для sortBy)
    startedSelectedOption?: string; // Опциональная выбранная опция (для sortBy)
}

export interface FilterItem {
    state: FilterState; // Состояние фильтра
    select: FilterSelect; // Выбор (dropdown или нет)
    icon: string; // Путь к иконке фильтра
    text: string | ComputedRef<string>;
}

export interface FiltersObjInterface {
    switchLanguage: FilterItem; // Фильтр для смены языка
    sortBy: FilterItem; // Фильтр для сортировки
    switchMix?: FilterItem; // Фильтр для перемешивания
}
