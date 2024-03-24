import './App.css';
// import LmsComp from './components/LmsComp';
// import NavComp from './components/NavComp';
 import { Nav } from 'react-bootstrap';
//import Demo from './components/Demo';
//import Check from './components/Check';


// import Addfile from './components/Addfile';

import NavbarComp from './components/NavbarComp';
import BranchForm from './components/BranchForm';
import Routing from './components/Routing';
import DetailsComp from './components/DetailsComp';
import Add from './components/Add';

import Student from './components/Student';
import StuComp from './components/StuComp';
import MainComp from './components/MainComp';
// import NavComp from './components/LmsComp';


function App() {
  return (
    <div className="App">
      <MainComp/>
      {/* <DetailsComp></DetailsComp> */}
      {/* <Add/> */}
      {/* <Full></Full> */}
      {/* <Student/> */}
     
    </div>
  );
}
export default App;