import { types } from "../types"

const initialState = {
    inputValue: "",
    result: null,

}

export default function reducer( state = initialState, action ) {
    
    switch (action.type) {

        case types.INPUT_VALUE:

            return { ...state, inputValue: action.payload }
        
        case types.ADD_NUMBER:

            const sum = +state.result + +action.payload

            return { ...state, result: sum}

        case types.CLEAR_NUMBER:

            return { ...state, result: null, inputValue: ''}

        default: return state
    }
}