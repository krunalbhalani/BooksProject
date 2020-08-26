import {combineReducers} from 'redux';
import reducerBooks from './reducerbooks.js';

const allReducers = combineReducers({
    books: reducerBooks,
});

export default allReducers
