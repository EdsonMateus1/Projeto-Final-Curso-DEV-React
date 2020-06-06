import * as assgnmentTypes from './types';

/*
{
    id, number (forma de localizar as tarefas)
    title, string
    completed true/false
}
*/

export function addAssignment(title,date,time) {
    return {
        type: assgnmentTypes.ADD_ASSIGNMENT,
        payload: {
            title: title,
            date : date,
            time : time,
        }
    }
}

export function updadeAssgnment(id, completed) {

    return {
        type: assgnmentTypes.UPDADE_STATUS_ASSGNMENT,
        payload: {
            id: id,
            completed: completed
        }
    }
}

export function upadadeTitle(id, title) {
    return {
        type: assgnmentTypes.UPDADE_ASSGNMENT_TITLE,
        payload: {
            id: id,
            title: title
        }
    }
}

export function deleteAssignment(id) {
    return {
        type: assgnmentTypes.DELETE_ASSGNMENT,
        payload: {
            id: id,
        }
    }
}