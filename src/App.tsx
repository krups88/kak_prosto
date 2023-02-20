import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Accordion';
import Accordion from './components/Accordion';
import {Rating} from './components/Rating/Rating';


function sum(a: number, b: number) {
  alert(a + b)
}
 //sum(100, 300);

function App()  {
  console.log("App rendering")
  return (
    <div >


      <PageTitle title={"This is App component"}/>
      <PageTitle title={"My friends"}/>
      Article 1
      <Rating value={3}/>
      {/* <Accordion titleValue={"Menu"}/>
      <Accordion title={"Users"}/> */}
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}


type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
