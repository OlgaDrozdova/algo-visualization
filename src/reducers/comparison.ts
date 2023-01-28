import { IAction, IComparison } from "../common/reduxTypes";

const initial: IComparison = {
    inProgress: false,  //запущена ли сортировка
    sortingSpeed: 1,  //скорость алгоритма
    activeElements: [], //массив с элементами над, которыми совершается действие в данный момент
    sortedElements: [], //массив с уже отсортированными элементами
    auxiliaryElements: [] //массив со вспомогательными элементами
};

export default (state = initial, action: IAction) => {
    switch (action.type) {
        case 'COMPARISON/RESET':
            return { ...initial, sortingSpeed: state.sortingSpeed };
        case 'COMPARISON/TOGGLE_SORT':
            return { ...state, inProgress: action.value };
        case 'COMPARISON/SET_SORTING_SPEED':
            return { ...state, sortingSpeed: action.value };
        case 'COMPARISON/SET_ACTIVE_ELEMENTS':
            return { ...state, activeElements: action.value };
        case 'COMPARISON/SET_AUXILIARY_ELEMENTS':
            return { ...state, auxiliaryElements: action.value };
        case 'COMPARISON/SET_SORTED_ELEMENTS':
            return { ...state, sortedElements: action.value };
        default:
            return state;
    }
};