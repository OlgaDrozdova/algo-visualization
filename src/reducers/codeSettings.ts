import { IAction, IComparison } from "../common/reduxTypes";

const initial = {
    activeString: 0, //номер подсвечиваемой строки 
    comment: ''  //комментарий
};

export default (state = initial, action: IAction) => {
    switch (action.type) {
        case 'CODE/SET_ACTIVE_STRING':
            return { ...state, activeString: action.value };
        case 'CODE/SET_COMMENT':
            return { ...state, comment: action.value };
        default:
            return state;
    }
};