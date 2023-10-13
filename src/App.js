import './App.css';
import Data from './data'
import ReduxTest from './store/reduxTest'
import MobxTest from './mobx'

function App() {
  return (
    <div>
      <Data />
      <ReduxTest />
      <MobxTest />
    </div>
  );
}

export default App;
