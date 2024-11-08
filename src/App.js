import './App.css';
import {Provider} from "react-redux"
import Home from './Components/Home';
import appStore from './Components/utils/appStore';

function App() {
  return (

    <Provider store = {appStore}>
      <Home/>
    </Provider>

  );
}

export default App;
