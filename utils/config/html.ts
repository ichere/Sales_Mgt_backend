/**
 * Strips html tags
 * https://stackoverflow.com/a/8632453
 */
export function stripHtml(text: string): string {
    return text.replace(/<[^>]*>?/gm, '');
}
  