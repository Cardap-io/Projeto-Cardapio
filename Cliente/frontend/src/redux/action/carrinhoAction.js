import serverCall from '../../services/serverCall'
import Auth from '../../services/auth';


export const getCartByUserId = () => dispatch => {
  let uid = Auth.getUserId()
  dispatch({
    type: GET_CART_BY_USERID_BEGIN
  })
  return serverCall({
    method: 'GET',
    url: `users/${uid}/carrinho`
  })
    .then(res => {
      dispatch({
        type: GET_CART_BY_USERID_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: GET_CART_BY_USERID_FAIL,
        payload: { error }
      })
      return error
    })
}

export const postCart = (pid, aumentar, diminuir) => (dispatch) => {
  let uid = Auth.getUserId()
  dispatch({
    type: POST_CART_BEGIN
  })
  return serverCall({
    method: 'POST',
    url: `users/${uid}/carrinho`,
    data: {
      uid,
      pid,
      aumentar,
      diminuir
    }
  })
    .then(res => {
      dispatch({
        type: POST_CART_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: POST_CART_FAIL,
        payload: { error }
      })
      return error
    })
}

export const POST_CART_BEGIN = 'POST_CART_BEGIN'
export const POST_CART_SUCCESS = 'POST_CART_SUCCESS'
export const POST_CART_FAIL = 'POST_CART_FAIL'

export const GET_CART_BY_USERID_BEGIN = 'GET_CART_BY_USERID_BEGIN'
export const GET_CART_BY_USERID_SUCCESS = 'GET_CART_BY_USERID_SUCCESS'
export const GET_CART_BY_USERID_FAIL = 'GET_CART_BY_USERID_FAIL'