import { allLangs } from "../constants/allLangs"

export function sortLangs(value: string, first: boolean): string[] {
    if (first) {
        return [...Object.keys(allLangs)].filter(item => item !== value)
    } else {
        return [...Object.keys(allLangs)].filter(item => item !== value)
    }
}

