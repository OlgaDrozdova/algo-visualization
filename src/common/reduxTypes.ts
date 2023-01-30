// import {
//     select
// } from 'redux-saga/effects';

export interface IAction {
    type: string,
    value: string | number[]
}

export interface IActionSort {
    type: string,
    array: number[],
    searchItem: number,
}

export interface IArraySettings {
    array: string | number[],
    searchElement: number | null,
}

export interface IComparison {
    inProgress: boolean,
    sortingSpeed: number,
    activeElements: number[],
    sortedElements: number[],
    auxiliaryElements: number[]
}

export interface IParams {
    [x: number]: number;
}

// export function* appSelect<TSelected>(selector: (state: IArraySettings) => TSelected,): Generator<any, TSelected, TSelected> { return yield select(selector); }

