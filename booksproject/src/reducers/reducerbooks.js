import { BookActionTypes } from "../util/api";
export const initialState = [];
  
  const reducerBooks = (state = initialState, action) => {
    switch(action.type)
      {
        case BookActionTypes.FETCH_LIST_BOOKS_SUCESS:
            return action;
        default:
            return state;
        }
    }
  export default reducerBooks;