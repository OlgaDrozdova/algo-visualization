export const createArray = (value: string) => {
    const re = /[;\s]/g;
    const array = value.split(re).map(Number);
    return array;
}