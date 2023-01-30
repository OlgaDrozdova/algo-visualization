import {
    select,
    put,
    race,
    take,
    takeLatest,
    all
} from 'redux-saga/effects';
import { IAction, IArraySettings } from '../../common/reduxTypes';

import { startSorting, setNewParams, setPause } from "./sorting";

// множитель скорости сортировки
const SPEED_MULTIPLIER = 600;

// функция-помощник запускает процесс сортировки
// и следит за результатом его выполнения
export const getArray = (state: { array: any }) => state.array;
function* insertionSortHelper() {

    const array = yield select(({ arraySettings }) => arraySettings.array);

    yield startSorting();

    // гонка для возможности прерывания процесса сортировки
    const { success } = yield race({
        success: insertionSort(array, array.length),
        canceled: take('COMPARISON/RESET')
    });

    // завершаем при успешном выполнении
    if (success) {
        yield put({ type: 'COMPARISON/TOGGLE_SORT', value: false });
    }
}

// основная функция метода сортировки
function* insertionSort(array: number[], arrayLength: number) {

    // массив для индексов отсортированных элементов
    const completedElements = [];

    yield all([
        put({ type: 'CODE/SET_ACTIVE_STRING', value: 2 }),
        put({ type: 'CODE/SET_COMMENT', value: '//Внешний цикл for (повторяем вложенный цикл для каждого элемента массива)' })
    ]);

    for (let step = 0; step < arrayLength - 1; step++) {

        yield all([
            put({ type: 'CODE/SET_ACTIVE_STRING', value: 3 }),
            put({ type: 'CODE/SET_COMMENT', value: '//Внутренний цикл for (находим наибольший элемент из неотсортированных)' })
        ]);

        for (let compareIndex = 0; compareIndex < arrayLength - 1 - step; compareIndex++) {

            // в качестве активных выделяем индексы элементов,
            // которые сравниваются между собой в данный момент

            yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: [compareIndex, compareIndex + 1] });

            // добавляем задержку для восприятия анимации
            yield setPause(SPEED_MULTIPLIER);

            const left = array[compareIndex];
            const right = array[compareIndex + 1];

            yield all([
                put({ type: 'CODE/SET_ACTIVE_STRING', value: 4 }),
                put({ type: 'CODE/SET_COMMENT', value: '//Cравниваем элементы ' + left + ' и ' + right })
            ]);

            if (left > right) {
        
                const params = {
                    [compareIndex]: right,
                    [compareIndex + 1]: left
                };

                array[compareIndex] = right;

                yield all([
                    put({ type: 'CODE/SET_ACTIVE_STRING', value: 7 }),
                    put({ type: 'CODE/SET_COMMENT', value: '//Так как элемент ' + left + ' больше ' + right + ' , то меняем элементы местами'})
                ]);

                array[compareIndex + 1] = left;

                // изменяем состояние массива в хранилище путём перестановки элементов
                yield setNewParams(params);

                // добавляем задержку для восприятия анимации
                yield setPause(SPEED_MULTIPLIER);
            }
        }

        // в конце цикла сравнений добавляем новый элемент в список
        completedElements.push(arrayLength - 1 - step);

        // добавляем отсортированные элементы в хранилище
        yield put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: completedElements });
    }

    // в конце всего цикла добавляем нулевой элемент к отсортированным
    yield all([
        put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: [0, ...completedElements] }),
        put({ type: 'CODE/SET_ACTIVE_STRING', value: 11 }),
        put({ type: 'CODE/SET_COMMENT', value: '//Возвращаем отсортированный массив'})
    ]);
    // возвращаем true чтобы зафиксировать успешное завершение всего цикла
    return true
}

// запускаем bubbleSortHelper при отправленном действии SORTING/BUBBLE_SORT
export default [
    takeLatest('SORTING/INSERTION_SORT', insertionSortHelper),
];