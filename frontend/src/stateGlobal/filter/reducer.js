import * as filterTypes from './types';

export default function filerReducer(_, action) {
    switch (action.type) {
        case filterTypes.TOGGLE_FILTER:


            return action.payload.filter;

        default:
            throw new Error();
    }
}

