export interface PayloadInterface {
    id: string,
    word: string,
    translate: string,
    fromLanguage: string,
    fromLanguageCode: string,
    toLanguage: string,
    toLanguageCode: string
    directions: Record<string, boolean>,
    category: string,
    createdAt: Date
}