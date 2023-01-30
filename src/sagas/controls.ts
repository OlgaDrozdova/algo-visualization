import {
    all,
    put,
    select,
    takeLatest
} from 'redux-saga/effects';
import { IAction, IActionSort } from '../common/reduxTypes';

function* resetArray(action: IAction) {
    yield all([
        put({ type: 'COMPARISON/RESET' }),
        put({ type: 'ARRAY/SET_ARRAY', value: action.value })
    ]);
}

function* resetData() {
    yield all([
        put({ type: 'COMPARISON/RESET' }),
        put({ type: 'CODE/SET_ACTIVE_STRING', value: 0 }),
        put({ type: 'CODE/SET_COMMENT', value: '' }),
        put({ type: 'ARRAY/SET_ARRAY', value: [] }),
    ]);
}

function* resetSortParams(action: IActionSort) {
    yield all([
        put({ type: 'COMPARISON/RESET' }),
        put({ type: 'ARRAY/SET_ARRAY', value: action.array }),
        put({ type: 'ARRAY/SET_SEARCH_ELEMENT', value: action.searchItem }),
    ]);
}

export default [takeLatest('CONTROLS/RESET_ARRAY', resetArray),
takeLatest('CONTROLS/RESET_DATA', resetData),
takeLatest('CONTROLS/RESET_SEARCH', resetSortParams)
];