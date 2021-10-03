import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './About';
import Education from './Education';
import Project from './Project';
import Details from './Details';
import Form from './Form';
import New from './New';
import ForgotPassword from './ForgotPassword';


function App() {

  const[pers,setpers]=useState({

    firstname:'',
        lastname:'',
        email:'',
        mobile:''
  });

  const[edu,setedu]=useState({

    university:'',
        from:'',
        to:'',
        cgpa:'',
        city:''
  });

  const[pro,setpro]=useState({

    pname:'',
        from:'',
        to:'',
        mentor:'',
        disc:''
  });
  const[cid,setcid]=useState();


  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/about">
      <About setpers={setpers} id = {cid}/>
        </Route>
        <Route exact path="/education">
        <Education setedu={setedu} id = {cid}/>
        </Route>
        <Route exact path="/project">
        <Project setpro={setpro} id = {cid}/>
        </Route>
        <Route exact path="/detail">
        <Details id = {cid} firstname={pers.firstname} lastname={pers.lastname} email={pers.email} mobile={pers.mobile} university={edu.university} from={edu.from} to={edu.to} cgpa={edu.cgpa} city={edu.city} pname={pro.pname} fromp={pro.from} top={pro.to} mentor={pro.mentor} disc={pro.disc}/>
        </Route>
        <Route exact path="/">
          <New />
        </Route>
        <Route exact path="/signin">
          <Form setcid={setcid}/>
        </Route>
        <Route exact path="/forgot_password">
          <ForgotPassword />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
