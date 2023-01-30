import { IAction, IArraySettings } from "../common/reduxTypes";

const initial: IArraySettings = {
    array: [],
    searchElement: null,
};

export default (state = initial, { type, value }) => {
    switch (type) {
        case 'ARRAY/SET_ARRAY':
            return { ...state, array: value };
        case 'ARRAY/SET_SEARCH_ELEMENT':
            return { ...state, searchElement: value };
        default:
            return state;
    }
};