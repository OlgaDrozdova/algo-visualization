import { all } from 'redux-saga/effects';
import controls from './controls';
import bubbleSort from './sorting/bubbleSorting';
import selectionSort from './sorting/selectionSorting';

export default function* rootSaga() {
  yield all([
    ...controls,
    ...bubbleSort,
    ...selectionSort,
  ]);
};