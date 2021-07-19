export const toDate = (date) => {
    if (!date) {
        return
    }
    return new Intl.DateTimeFormat('ru-Ru', {
        minute: '2-digit',
        hour: '2-digit',
        day: '2-digit',
        year: 'numeric',
        month: 'short',
    }).format(new Date(date))
}
export function capitalize(string) {
    if (typeof string !== 'string') {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
