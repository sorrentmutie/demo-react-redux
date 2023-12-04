import { bindActionCreators } from 'redux';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './state';
import { State } from './state/reducers';

function App() {
  const state = useSelector((state: State) => state.bank);
  const dispatch = useDispatch();
  const {  depositMoney, withdrawMoney, bankrupt } = 
           bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>{state}</h1>
        <button onClick={ () => depositMoney(1000)}>Deposit</button>
        <button onClick={ () => withdrawMoney(500)} >Withdraw</button>
        <button onClick={ () => bankrupt()}>Bankrupt</button>

      </header>
    </div>
  );
}

export default App;
