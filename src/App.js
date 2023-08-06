import logo from './logo.svg';
import './App.css';
const name = 'meraj hossain';
const singer = {name : 'dr mahfuz', job: 'singer',salary:'000tk'};
const singer2 = {name : 'Eva Rahman', job : 'singer', salary:'-100000tk'};
const singerStyle = {
  color : 'black',
  backgroundcolor : 'white'
}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <h1>Bujen na ami ai khane achi ar ki</h1>
      <Friend></Friend>
    </div>
  );
}
function Person(){
  return (
    <div className='person'>
      <h1>Shakib Al Hasab</h1>
      <p>Profesiion : crickter</p>
    </div>
  );
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name : zayed</h3>
    <p>Ostro: gulli</p>
    </div>
  );
}

export default App;
