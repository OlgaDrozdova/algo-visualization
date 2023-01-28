import {
    all,
    put,
    select,
    takeLatest
} from 'redux-saga/effects';
import { IAction } from '../common/reduxTypes';

function* resetArray(action: IAction) {
    yield all([
        put({ type: 'COMPARISON/RESET' }),
        put({ type: 'ARRAY/SET_ARRAY', value: action.value })
    ]);
}

export default [takeLatest('CONTROLS/RESET_ARRAY', resetArray)];