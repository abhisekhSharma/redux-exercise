import * as actionTypes from '../actionsConstant';
import { updateStateOject } from '../utility'
const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCRIMENT:
            return updateStateOject(state, { counter: state.counter + 1 })

        case actionTypes.DECRIMENT:
            //updated with utility function
            return updateStateOject(state, { counter: state.counter - 1 })

        case actionTypes.ADD: return {
            //updated without utility function
            ...state,
            counter: state.counter + action.val
        }
        case actionTypes.SUBTRACT: return {
            ...state,
            counter: state.counter - action.val
        }

        default: return state;
    }
}

export default reducer;