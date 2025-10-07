export function capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}


export function toTitleCase(sentence: string): string {
    return sentence.split(" ").map(word => 
        capitalize(word)).join(" ");
}