import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./NavComp";
import Student from './Student'
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingModuleComp from "./RoutingModuleComp";
import DetailsComp from './DetailsComp'

import Add from './Add'

import FooterComp from "./FooterComp";
import './External.css'
import BodyComp from "./BodyComp";
import NavbarComp from "./NavbarComp";
import StuComp from "./StuComp";


class MainComp extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="card border">
            <div className="card-header" style={{padding:'0px',margin:'0px'}}>
              <NavComp />
            </div>

            <div className="card-body" style={{padding:'0px',margin:'0px'}}>
              {/* Adjusted the height to account for the Navbar's height */}
              <Routes>
                <Route path="/" element={<RoutingModuleComp />} >
                    <Route path='/StuComp' element={<StuComp/>}/>
                    <Route path='/NavbarComp' element={<NavbarComp/>}/>
                    <Route path='/Details/:id' element={<DetailsComp></DetailsComp>}/>
                    <Route path='/Add' element={<Add></Add>}/>
                    <Route path='/Student/:id' element={<Student></Student>}/>
                
                  
                </Route>
                <Route path='/home' element={<BodyComp/>}></Route>          
                </Routes>
            </div>
            <div className="card-footer" style={{padding:'0px',margin:'0px'}}>
              <FooterComp />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainComp;
