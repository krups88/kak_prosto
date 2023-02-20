import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Accordion';
import Accordion from './components/Accordion';
 //import {Rating} from './components/Rating/Rating';


function hello() {
  alert('Hello IT KAMASUTRA')
}
 //hello();

const App = () => {
  console.log("App rendering")
  return (
    <div >
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering")
  return <>"This is App component"</>
}

function Star() {
  console.log("Star rendering")
  return <span>star</span>
}


function Rating () { 
console.log("Rating rendering")
  return(
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star /> 
    </div>
  );
}

export default App;
