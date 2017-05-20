import * as types from '../actions/actionTypes'

const initialState = {
  booted: false,
  entered: false,
  logined: false,
  sliderLoop: true,
  user: null,
  popup: null,
  banners: [
    require('../static/images/s1.jpg'),
    require('../static/images/s2.jpg'),
    require('../static/images/s3.jpg')
  ]
}

export default rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENTER_SLIDE:
      return {
        ...state,
        entered: true
      }
    case types.AFTER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        logined: true
      }
    case types.APP_BOOTED:
      return {
        ...state,
        booted: true
      }
    case types.USER_LOGINED:
      return {
        ...state,
        logined: true,
        user: action.payload.user
      }
    case types.USER_UPDATED:
      return {
        ...state,
        logined: true,
        popup: action.payload.popup,
        user: action.payload.user
      }
    case types.USER_LOGOUT:
      return {
        ...state,
        logined: false,
        user: null
      }
    case types.WILL_ENTER_APP:
      let userData = action.payload.user
      let entered = action.payload.entered
      let newState = {booted: true}

      if (entered === 'yes') {
        newState.entered = true
      }

      if (userData && userData[1]) {
        let user = JSON.parse(userData[1])

        if (user.accessToken) {
          newState.logined = true
          newState.user = user
        }
      }

      if (entered && entered[1] === 'yes') {
        newState.entered = true
      }

      return {
        ...state,
        ...newState
      }
    case types.SHOW_ALERT:
      return {
        ...state,
        popup: {
          title: action.payload.title,
          content: action.payload.content
        }
      }
    case types.HIDE_ALERT:
      return {
        ...state,
        popup: null
      }
    default:
      return state
  }
}