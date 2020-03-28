import {
 ADD_FORM,
  
} from "../actions/actionTypes";

const initialState = []
const formreducer = (state = initialState, action) => {
  debugger;

  switch (action.type) {
    case ADD_FORM:
      return {
       ...state, ...action.payload

         
    
      };

    default:
      return state;
  }
};

export default formreducer;
