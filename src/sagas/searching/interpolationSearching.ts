import {
    select,
    put,
    race,
    take,
    takeLatest,
    all
} from 'redux-saga/effects';
//import { IAction, IArraySettings } from '../../common/reduxTypes';
import { startSorting, setNewParams, setPause } from '../sorting/sorting';

// множитель скорости сортировки
const SPEED_MULTIPLIER = 800;

// функция-помощник запускает процесс сортировки
// и следит за результатом его выполнения
export const getArray = (state: { array: any }) => state.array;
function* interpolationSearchHelper() {

    const { array, searchElement } = yield select(({ arraySettings }) => ({
        array: arraySettings.array,
        searchElement: arraySettings.searchElement
    }));

    array.sort(function (a: number, b: number) {
        return a - b;
    })

    yield startSorting();

    // гонка для возможности прерывания процесса сортировки
    const { success } = yield race({
        success: interpolationSearch(array, searchElement),
        canceled: take('COMPARISON/RESET')
    });

    // завершаем при успешном выполнении
    if (success) {
        yield put({ type: 'COMPARISON/TOGGLE_SORT', value: false });
    }
}

// основная функция 
function* interpolationSearch(array: number[], searchElement: number) {

    // let i = 0;
    // let arrayLength = array.length;
    // let k;
    // while (i < arrayLength) {
    //     k = Math.floor((i + arrayLength) / 2);
    //     if (searchElement <= array[k]) {
    //         arrayLength = k;
    //         const indexArr = array.slice(i, arrayLength).map((num) => array.indexOf(num));
    //         yield setPause(SPEED_MULTIPLIER);
    //         yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: i + 1 === arrayLength ? [i, arrayLength] : indexArr });
    //     }
    //     else {
    //         i = k + 1;
    //         const indexArr = array.slice(i, arrayLength).map((num) => array.indexOf(num));
    //         yield setPause(SPEED_MULTIPLIER);
    //         yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: i + 1 === arrayLength ? [i, arrayLength] : indexArr });
    //     }
    // }
    // if (array[i] === searchElement) {
    //     yield put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: [i] });
    //     return i;
    // }
    // else return -1;


    let mid;
    let low = 0;
    let high = array.length - 1;

    while (array[low] < searchElement && array[high] > searchElement) {
        mid = low + Math.floor(((searchElement - array[low]) * (high - low)) / (array[high] - array[low]));
        yield put({ type: 'COMPARISON/SET_AUXILIARY_ELEMENTS', value: [mid] });
        if (array[mid] < searchElement) {
            low = mid + 1;
            yield setPause(SPEED_MULTIPLIER);
            yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: [low] });
        }
        else if (array[mid] > searchElement) {
            high = mid - 1;
            yield setPause(SPEED_MULTIPLIER);
            yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: [high] });
        }
        else {
            yield setPause(SPEED_MULTIPLIER);
            yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: [mid] });
            return mid;
        }
    }

    if (array[low] === searchElement) {
        yield put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: [low] });
        return low;
    }
    else if (array[high] === searchElement) {
        yield put({ type: 'COMPARISON/SET_SORTED_ELEMENTS', value: [high] });
        return high;
    }
    else {
        return -1;
    }
}

export default [
    takeLatest('SEARCHING/INTERPOLATION_SEARCH', interpolationSearchHelper),
];