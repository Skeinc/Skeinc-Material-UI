export function generateRandomID(prefix: string): string {
    const randomPart = Math.random().toString(36).substring(2, 10);

    return `id-${prefix}-${randomPart}`;
}