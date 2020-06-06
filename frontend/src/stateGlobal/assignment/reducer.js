import * as assgnmentTypes from './types';
import { v4 as uuidv4 } from 'uuid';

export default function assgnmentReducer(state, action) {
    switch (action.type) {
        case assgnmentTypes.ADD_ASSIGNMENT:
            const data =    state.concat({
                id: uuidv4(),
                title: action.payload.title,
                date : action.payload.date,
                time: action.payload.time,
                completed: false

            });
          
            return data

        //OBJ ESTA DIFERENTE VOU DEIXAR ASSIM PRA VER O RESULTADO
        case assgnmentTypes.UPDADE_STATUS_ASSGNMENT:
            return state.map(assgnment => {
                const newassgnment = { ...assgnment };
                if (assgnment.id === action.payload.id) {
                    const { completed } = action.payload
                    newassgnment.completed = completed
                    return newassgnment;
                } else {
                    return newassgnment;
                }
            })

        case assgnmentTypes.UPDADE_ASSGNMENT_TITLE:
            return state.map(assgnment => {
                if (assgnment.id === action.payload.id) {
                    return { ...assgnment, title: action.payload.title };
                } else {
                    return assgnment;
                }
            });

        case assgnmentTypes.DELETE_ASSGNMENT:
            return state.filter(assgnment => {
                return assgnment.id !== action.payload.id
            })

        default:
            throw new Error()
    };

};