export function capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function toTitleCase(sentence: string): string {
    return sentence.split(" ").map(word => 
        capitalize(word)).join(" ");
}

export function truncate(str: string, maxLength: number, suffix = '...'): string {
    return str.length > maxLength ? str.slice(0, maxLength).trim() + suffix : str;
}

export function removeExtraSpace(str: string): string {
    return str.trim().replace(/\s+/g, " ");
}

