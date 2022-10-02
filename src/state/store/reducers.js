import {combineReducers} from 'redux'
// import {ProductReducer } from '../state/product';
import {ProfileReducer} from "../profile";
import {ProfileList} from "../praduct"
// Added all reducers in  project  and  generate  one main reducer for Store
const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  
  profileReducer:ProfileReducer,
  profileList:ProfileList
 // productReducer:ProductReducer,
  
  
  // globalSlice: GlobalSlice,
  // globalData: GlobalReducer,
})

export default rootReducer