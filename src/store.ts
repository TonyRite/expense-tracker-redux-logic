import { createStore } from 'redux';
import reducer from './reducers/reducer';

//@ts-ignore
const store = createStore(reducer);
export default store;