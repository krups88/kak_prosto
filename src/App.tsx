import React from 'react';
import logo from './logo.svg';
import './App.css';


function hello() {
  alert('Hello IT KAMASUTRA')
}
 //hello();

const App = () => {
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
  return <>"This is App component"</>
}

function Star() {
  console.log("Star rendered")
  return <div>star</div>
}


function Rating () {

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

function Accordion () {
  return(
    <div>
      <h3>start</h3> 
      <ul>
        <li>1</li>
        <li>2</li> 
        <li>3</li>
      </ul>
    </div>
  );
}


export default App;
