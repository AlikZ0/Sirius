import {profileActions} from "../profile/actions";
const initialState = {
    profile: {
        
    }
  }
  export const ProfileList = (state = initialState, action) => {
   // console.log(action);
    switch (action.type) {
      case profileActions.MANAGE_LIST_GENDER: {
      //  console.log(action);
        return {...state, profile:action.payload}
      }
      default: {
       // console.log(state);
        return state
      }
    }
  
  }