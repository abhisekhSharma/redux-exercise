export const updateStateOject = (oldObject, UpdatedOject) => {
    return {
        ...oldObject,
        ...UpdatedOject
    }
}