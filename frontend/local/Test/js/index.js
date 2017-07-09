import App from './counter.js';
import configureStore from './store.js';

require('react');
require('react-dom');
require('react-redux');
var render = ReactDOM.render;
var Provider = ReactRedux.Provider;

const store = configureStore();

var rootInstance = render(
	//此处的store究竟传至何处
    // 将createStore返回的store放入context中，
    // 使子集可以获取到store 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactBox')
)

//热更新
if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            return [rootInstance];
        }
    });
}