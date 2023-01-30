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
const SPEED_MULTIPLIER = 600;

// функция-помощник запускает процесс сортировки
// и следит за результатом его выполнения
export const getArray = (state: { array: any }) => state.array;
function* linearSearchHelper() {

    const { array, searchElement } = yield select(({ arraySettings }) => ({
        array: arraySettings.array,
        searchElement: arraySettings.searchElement
      }));

    yield startSorting();

    // гонка для возможности прерывания процесса сортировки
    const { success } = yield race({
        success: linearSearch(array, searchElement),
        canceled: take('COMPARISON/RESET')
    });

    // завершаем при успешном выполнении
    if (success) {
        yield put({ type: 'COMPARISON/TOGGLE_SORT', value: false });
    }
}

// основная функция 
function* linearSearch(array: number[], searchElement: number) {

    const arrayLength = array.length;
    let i= 0; 
    array[arrayLength] = searchElement;
    // yield all([
    //     put({ type: 'CODE/SET_ACTIVE_STRING', value: 2 }),
    //     put({ type: 'CODE/SET_COMMENT', value: '//lalaal' })
    // ]);
    while (array[i] !== searchElement) {
        yield put({ type: 'COMPARISON/SET_ACTIVE_ELEMENTS', value: array[i] });
        yield setPause(SPEED_MULTIPLIER);
        i++;} 
    if (i < arrayLength) return i;         
    else return -1;
}

export default [
    takeLatest('SEARCHING/LINEAR_SEARCH', linearSearchHelper),
];