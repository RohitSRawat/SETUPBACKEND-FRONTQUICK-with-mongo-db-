import { combineReducers } from "redux";
// import _ from "lodash";

const ticket = (state = [],action) => {
    switch(action.type){
  
      case 'getthedata':
        return action.payload
        default:
         return state ;
    }
  }
  
  export default combineReducers({
    productget:ticket
  });
  
  