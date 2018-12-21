import { createStore } from 'redux';
import constants from '../redux/Constants';

// const READ_MORE_EXPERTIS = "READ_MORE_EXPERTIS"

const initialState = {
  expertise: false,
  fleet: false,
  whatwedo: false,
  services: false
}

const reducer = (state = initialState, action) => {
  console.log('state i reducer:', state)
  switch (action.type) {
    case constants.READ_MORE_EXPERTIS:
    return Object.assign({}, state, {expertise: true}
    );
    case constants.READ_MORE_FLEET:
    return Object.assign({}, state, {fleet: true}
    );
    case constants.READ_MORE_WHAT_WE_DO:
    return Object.assign({}, state, {whatwedo: true}
    );
    case constants.READ_MORE_SERVICES:
    return Object.assign({}, state, {services: true}
    );

    default:
    return state;
  }

}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
