import { all } from 'redux-saga/effects';
import controls from './controls';
import bubbleSort from './sorting/bubbleSorting';
import quickSort from './sorting/quickSorting';
import selectionSort from './sorting/selectionSorting';
import insertionSort from './sorting/insertionSorting';
import linearSearch from './searching/linearSearching';
import binarySearch from './searching/binarySearching';
import interpolationSearch from './searching/interpolationSearching';


export default function* rootSaga() {
  yield all([
    ...controls,
    ...bubbleSort,
    ...selectionSort,
    ...quickSort,
    ...insertionSort,
    ...linearSearch,
    ...binarySearch,
    ...interpolationSearch,
  ]);
};