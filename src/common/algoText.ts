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
Принцип работы:
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

export const insertionSortText = `Сортировка вставками – простой алгоритм сортировки, преимущественно использующийся в учебном программировании.
На каждом шаге алгоритма мы выбираем один из элементов входных данных и вставляем его на нужную позицию в уже отсортированном списке до тех пор, пока набор входных данных не будет исчерпан. Метод выбора очередного элемента из исходного массива произволен; может использоваться практически любой алгоритм выбора. Обычно (и с целью получения устойчивого алгоритма сортировки), элементы вставляются по порядку их появления во входном массиве.
Алгоритм работает за O(n+k), где k — число обменов элементов входного массива, равное числу инверсий. В среднем и в худшем случае — за O(n^2).
Минимальные оценки встречаются в случае уже упорядоченной исходной последовательности элементов, наихудшие — когда они расположены в обратном порядке.
`;

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

export const selectionSortText = `Сортировка выбором (англ. selection sort) — простой алгоритм сортировки со сложностью O(n^2), где n — количество элементов для сортировки.
Принцип работы:
На каждом i-ом шаге алгоритма находим i-ый минимальный элемент и меняем его местами с i-ым элементом в массиве. Таким образом будет получен массив, отсортированный по неубыванию.
`;

export const quickSortCode =
  `const quickSort = (
    unsortedArray,
    comparator = defaultComparator
  ) => {
  
    const sortedArray = [ ...unsortedArray ];
  
    const recursiveSort = (start, end) => {
  
      if (end - start < 1) {
        return;
      }
  
      const pivotValue = sortedArray[end];
      let splitIndex = start;
      for (let i = start; i < end; i++) {
        const sort = comparator(sortedArray[i], pivotValue);
  
        if (sort === -1) {

          if (splitIndex !== i) {
            const temp = sortedArray[splitIndex];
            sortedArray[splitIndex] = sortedArray[i];
            sortedArray[i] = temp;
          }
  
          splitIndex++;
        }
      }
  
      sortedArray[end] = sortedArray[splitIndex];
      sortedArray[splitIndex] = pivotValue;
  
      recursiveSort(start, splitIndex - 1);
      recursiveSort(splitIndex + 1, end);
    };
  
    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
  };` as const;

export const quickSortText = `Быстрая сортировка, сортировка Хоара, часто называемая qsort (по имени в стандартной библиотеке языка Си) — один из самых быстрых известных универсальных алгоритмов сортировки массивов: в среднем O(nlog n) обменов при упорядочении n элементов.
Быстрая сортировка относится к алгоритмам «разделяй и властвуй».
Алгоритм состоит из трёх шагов:
1)Выбрать элемент из массива. Назовём его опорным.
2)Разбиение: перераспределение элементов в массиве таким образом, что элементы, меньшие опорного, помещаются перед ним, а большие или равные - после.
3)Рекурсивно применить первые два шага к двум подмассивам слева и справа от опорного элемента. Рекурсия не применяется к массиву, в котором только один элемент или отсутствуют элементы.
`;

export const linearSearchCode =
  `const linearSearch = (searchItem, arr) => {
    const n = arr.length, i = 0;   
    arr[n] = searchItem;
    while (arr[ i ] !== searchItem) i++;           
    if (i < n) return i;         
    else return -1;
  };` as const;

export const linearSearchText = `Алгоритм линейного поиска просто по очереди сравнивает элементы заданного списка с ключом поиска до тех пор, пока не будет найден элемент с указанным значением ключа (успешный поиск) или весь список будет проверен, но требуемый элемент не найден (неудачный поиск). Зачастую применяется простой дополнительный прием: если добавить ключ поиска в конец списка, то поиск обязательно будет успешным, следовательно, можно убрать проверку завершения списка в каждой итерации алгоритма.
`;

export const binarySearchCode =
  `const linearSearch = (searchItem, arr) => {
    const n = arr.length, i = 0;   
    arr[n] = searchItem;
    while (arr[ i ] !== searchItem) i++;           
    if (i < n) return i;         
    else return -1;
  };` as const;

export const binarySearchText = `Алгоритм линейного поиска просто по очереди сравнивает элементы заданного списка с ключом поиска до тех пор, пока не будет найден элемент с указанным значением ключа (успешный поиск) или весь список будет проверен, но требуемый элемент не найден (неудачный поиск). Зачастую применяется простой дополнительный прием: если добавить ключ поиска в конец списка, то поиск обязательно будет успешным, следовательно, можно убрать проверку завершения списка в каждой итерации алгоритма.
`;

export const interpolationSearchCode =
  `const linearSearch = (searchItem, arr) => {
    const n = arr.length, i = 0;   
    arr[n] = searchItem;
    while (arr[ i ] !== searchItem) i++;           
    if (i < n) return i;         
    else return -1;
  };` as const;

export const interpolationSearchText = `Алгоритм линейного поиска просто по очереди сравнивает элементы заданного списка с ключом поиска до тех пор, пока не будет найден элемент с указанным значением ключа (успешный поиск) или весь список будет проверен, но требуемый элемент не найден (неудачный поиск). Зачастую применяется простой дополнительный прием: если добавить ключ поиска в конец списка, то поиск обязательно будет успешным, следовательно, можно убрать проверку завершения списка в каждой итерации алгоритма.
`;