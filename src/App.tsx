import React from 'react';
import logo from './logo.svg';
import './App.css';


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
      <AccordionTitle/>
      <AccordionBody/>
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
  return <div>star</div>
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

function AccordionTitle () {
  console.log("AccordionTitle rendering")
  return <h3>start</h3>
}

function AccordionBody () {
  console.log("AccordionBody rendering")
  return(
    <ul>
      <li>1</li>
      <li>2</li> 
      <li>3</li>
    </ul>
  );
}

export default App;
