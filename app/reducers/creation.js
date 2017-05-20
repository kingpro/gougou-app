import * as types from '../actions/actionTypes'

const initialState = {
  videoTotal: 0,
  videoList: [],
  isLoadingTail: false,
  isRefreshing: false
}

let creationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CREATIONS_STAET:
      return {
        ...state,
        isLoadingTail: false,
        isRefreshing: false
      }
    case types.FETCH_CREATIONS_REJECTED:
      return {
        ...state,
        isLoadingTail: false,
        isRefreshing: false
      }
    case types.FETCH_CREATIONS_FULFILLED:
      return {
        ...state,
        videoList: action.payload.videoList,
        videoTotal: action.payload.videoTotal,
        isLoadingTail: false,
        isRefreshing: false
      }
    default:
      return state
  }
}

export default creationReducer