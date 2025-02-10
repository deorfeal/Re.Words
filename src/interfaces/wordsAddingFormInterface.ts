interface FormItem {
    value: string,
    error?: boolean,
    placeholder: string
}

interface LanguagesState {
    from: {
        langs: string[],
        chosenValue: Record<string, string>,
        placeholder: string,
        error: boolean
    },
    to: {
        langs: string[],
        chosenValue: Record<string, string>,
        placeholder: string,
        error: boolean
    }
}

interface AddTo {
    directions: string[],
    chosenValue: string,
    placeholder: string,
    error: boolean
}

export interface WordsAddingFormInterface {
    languagesState: LanguagesState,
    word: FormItem,
    translate: FormItem,
    category: FormItem,
    addTo: AddTo
}