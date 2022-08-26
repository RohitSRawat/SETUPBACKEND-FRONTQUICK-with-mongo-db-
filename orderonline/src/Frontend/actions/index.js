import formapi from '../api/api'

export const productaction = (values) => async (dispatch) => {
    const response = await formapi.get(`/getproduct/${values}`)
    dispatch({type:'getthedata',payload:response.data})
    }

// //     import formapi from '../api/formapi'
// export const create = (values) => async (dispatch) => {
// const response = await formapi.post('/',values)
// dispatch({type:'create',payload:response.data})
// }
