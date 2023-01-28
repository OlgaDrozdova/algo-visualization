export const bubbleSortCode =
  `const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
}` as const;

export const bubbleSortText =
  `Сортировка простыми обменами, сортировка пузырьком — простой алгоритм сортировки. 
    Для понимания и реализации этот алгоритм — простейший, но эффективен он лишь для небольших массивов. 
    Сложность алгоритма: O(n^2).
    Принцип работы
    На каждом шаге мы находим наибольший элемент из двух соседних и ставим этот элемент в конец пары. 
    Получается, что при каждом прогоне цикла большие элементы будут всплывать к концу массива, 
    как пузырьки воздуха — отсюда и название.`;

export const insertionSortCode =
  `const insertionSort = arr => {
      for (let i = 1, l = arr.length; i < l; i++) {
          const current = arr[i];
          let j = i;
          while (j > 0 && arr[j - 1] > current) {
              arr[j] = arr[j - 1];
              j--;
          }
          arr[j] = current;
      }
      return arr;
  };` as const;

export const insertionSortText = `Сортировка вставочками такая пиздатая просто не могу`;

export const selectionSortCode =
  `const selectionSort = arr => {
      for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
          let indexMin = i;
          for (let j = i + 1; j < l; j++) {
              if (arr[indexMin] > arr[j]) {
                  indexMin = j;
              }
          }
          if (indexMin !== i) {
              [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
          }
      }
      return arr;
  };` as const;

export const selectionSortText = `Сортировка выбором ой какая замечательная`;