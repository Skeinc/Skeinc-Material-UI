export function generateRandomName(prefix: string): string {
    const randomPart = Math.random().toString(36).substring(2, 10);

    return `name-${prefix}-${randomPart}`;
}