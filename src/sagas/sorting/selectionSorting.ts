import {
  select,
  put,
  race,
  take,
  takeLatest,
  all
} from 'redux-saga/effects';

import { startSorting, setNewParams, setPause } from "./sorting";

const SPEED_MULTIPLIER = 600;

function* selectionSortHelper() {
  const array = yield select(({ arraySettings }) => arraySettings.array);

  yield startSorting();

  const mainArray = array.slice();

  // гонка для возможности прерывания процесса сортировки
  const { success } = yield race({
    success: selectionSort(mainArray, array.length),
    canceled: take('COMPARISON/RESET')
});

  if (success) {
    yield put({ type: 'COMPARISON/TOGGLE_SORT', value: false });
  }
}

function* selectionSort(array: number[], arrayLength: number) {
  const completedElements = [];

  yield all([
    put({ type: 'CODE/SET_ACTIVE_STRING', value: 2 }),
    put({ type: 'CODE/SET_COMMENT', value: '//Внешний цикл for (повторяем вложенный цикл для каждого элемента массива)' })
  ]);

  for (let step = 0; step < arrayLength; step++) {
    let minElement = array[step];
    let minIdx = step;

    // yield all([
    //   put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: completedElements }),
    //   put({ type: 'CODE/SET_ACTIVE_STRING', value: 3 }),
    //   put({ type: 'CODE/SET_COMMENT', value: '//Внешний цикл for (повторяем вложенный цикл для каждого элемента массива)' })
    // ]);

    yield put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: completedElements });

    for (let compareIndex = step; compareIndex < arrayLength; compareIndex++) {
      yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: [minIdx, compareIndex] });

      const activeElement = array[compareIndex];

      if (activeElement < minElement) {
        minElement = activeElement;
        minIdx = compareIndex
      }

      yield setPause(SPEED_MULTIPLIER);
    }

    const params = {
      [step]: minElement,
      [minIdx]: array[step]
    }

    const temp = array[step];
    array[step] = minElement;
    array[minIdx] = temp;

    yield setNewParams(params);
    yield setPause(SPEED_MULTIPLIER);

    completedElements.push(step);
  }

  yield put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: [...completedElements, arrayLength - 1] });

  return true
}

export default [
  takeLatest('SORTING/SELECTION_SORT', selectionSortHelper),
];