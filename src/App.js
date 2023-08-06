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
      <Person name="shakib vai" job="all rounder"></Person>
      <Person name="tamim vai" job="batsman"></Person>
      <h1>Bujen na ami ai khane achi ar ki</h1>
      <Friend name="Zayed" talent="good lerner"></Friend>
    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Role : {props.job}</p>
    </div>
  );
}

function Friend(props){
  return (
    <div className='container'>
      <h3>Name : {props.name}</h3>
    <p>talent: {props.talent}</p>
    </div>
  );
}

export default App;
