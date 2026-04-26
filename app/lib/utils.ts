/**
 * Formats a size in bytes to a human-readable string (e.g., KB, MB, GB).
 * @param bytes The size in bytes.
 * @param decimals The number of decimal places to include (default: 2).
 * @returns A formatted string representing the size.
 */
export function formatSize(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const generateUUID= () =>crypto.randomUUID();
