import logo from './logo.svg';

import RoutesFunc from './routes';
import Debug from './Components/Debugging/debug';
import Test from './Components/Debugging/test';
import { FormProvider } from "./Components/Redux/FormContext"
import { Provider } from 'react-redux';
import store from './Components/Redux/store';


function App() {
  return (
    <Provider store={store}>
      <RoutesFunc />
    </Provider>
  );
}

export default App;
