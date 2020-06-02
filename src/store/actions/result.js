import * as actionTypes from '../actionsConstant'
export const saveresult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}
//changed this fucntion as Async for thunk,
export const storeResult = (res) => {
    return (dispatch, getState) => {
        console.log(getState().res);
        setTimeout(() => {
            // First way to dispatch action
            // dispatch({ type: actionTypes.STORE_RESULT, result: res })
            // Second way to dispatch action
            dispatch(saveresult(res));

        }, 2000)
    }
}