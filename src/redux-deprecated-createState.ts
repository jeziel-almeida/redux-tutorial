import { createStore } from "redux";

export interface typeState {
    counter: {
        value: number
    }
}

interface typeAction {
    type: string,
    payload: number
}

const initialState: typeState = {
    counter: {
        value: 0
    }
}

function reducer(state = initialState, action: typeAction) {
    switch(action.type) {
        case "counter/increment": {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1,
                },
            };
        }
        case "counter/incrementAmout": {
            return {
                ...state,
                counter: {
                    value: state.counter.value + action.payload
                }
            }
        }
        default:
            return state;
    }
}

export const store = createStore(reducer);