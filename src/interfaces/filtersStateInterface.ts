export interface FiltersStateInterface {
    state: {
        isActive: boolean;
    };
    select?: {
        selectedOptions: Record<string, boolean>;
    };
}