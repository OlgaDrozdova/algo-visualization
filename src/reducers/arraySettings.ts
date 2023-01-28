import { IAction, IArraySettings } from "../common/reduxTypes";

const initial: IArraySettings = {
    array: []
};

export default (state = initial, { type, value }) => {
    switch (type) {
        case 'ARRAY/SET_ARRAY':
            return { ...state, array: value };
        default:
            return state;
    }
};