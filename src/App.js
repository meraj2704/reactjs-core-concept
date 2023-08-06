import logo from './logo.svg';
import './App.css';
const name = 'meraj hossain';
const singer = [{name : 'dr mahfuz', job: 'singer',salary:'000tk'},
{name : 'Eva Rahman', job : 'singer', salary:'-100000tk'},{name : 'alom hero', job : 'singer', salary:'-100000t00k'}];
const singerStyle = {
  color : 'black',
  backgroundcolor : 'white'
}
function App() {
  const games = ['football', 'cricket','batminton','table tennis', 'ludu'];
  return (
    
    <div className="App">
      {
      games.map(game=> <li>{game}</li>)
    }
    {
      games.map(game => <Sports name={game}></Sports>)
    }
    {
      singer.map(sing => <Singer name={sing.name}></Singer>)
    }
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
function Sports(props){
  return (
    <div className='person'>
      <h3>Game Name : {props.name}</h3>
    </div>
  );
}
function Singer(props){
  return (
    <div className='container'>
      <h3>Singer Name : {props.name}</h3>
    </div>
  )
}

export default App;
