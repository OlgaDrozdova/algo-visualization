const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const createRandomArray = (): string => {
    const array = [];

    for (let i = 0; i < 20; i++) {
        array.push(randomIntFromInterval(30, 600));
    }

    return array.join(' ');
}