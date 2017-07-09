require('redux');
require('redux-thunk');
import reducer from './reducer.js';

var  { createStore, applyMiddleware} = Redux;

//添加中间价以及串行化 增强dispatch
const createStoreWithMiddleware = applyMiddleware(ReduxThunk.default)(createStore);

//生成store
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}