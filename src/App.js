import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './About';
import Education from './Education';
import Project from './Project';
import Details from './Details';

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


  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <About setpers={setpers}/>
        </Route>
        <Route exact path="/education">
        <Education setedu={setedu}/>
        </Route>
        <Route exact path="/project">
        <Project setpro={setpro} />
        </Route>
        <Route exact path="/detail">
        <Details  firstname={pers.firstname} lastname={pers.lastname} email={pers.email} mobile={pers.mobile} university={edu.university} from={edu.from} to={edu.to} cgpa={edu.cgpa} city={edu.city} pname={pro.pname} fromp={pro.from} top={pro.to} mentor={pro.mentor} disc={pro.disc}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
