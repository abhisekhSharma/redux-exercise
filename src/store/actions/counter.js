import * as actionTypes from '../actionsConstant'
export const increment = () => {
    return {
        type: actionTypes.INCRIMENT
    }
}
export const decrement = () => {
    return {
        type: actionTypes.DECRIMENT
    }
}
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
}
export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
}