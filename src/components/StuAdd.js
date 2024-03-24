import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'

const StuAdd = () => {
    const {id}=useParams
    //const nav = useNavigate();
    const [branch,setBranch] =useState({
        bName:"",
        bAdd:"",
        bCont:"",
        bMap:""
         
    })
    const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setBranch({...branch,[event.target.name]:event.target.value})
    }
    const addData = (event)=>{
        event.preventDefault();
         console.log("Data")
        axios.post(`https://localhost:7106/api/branch/Create`,branch).then(()=>{
            window.alert("Branch added Successfully");
            //nav("/table2");
        }).catch((err)=>{})
    }

    return (
        <div>
            <form onSubmit={addData}>
              <div className='form-group'>
              <h1 style={{textAlign:'center'}}>Add Branch</h1>
                   <label className='form-label'>Enter Branch Name</label>
                   <input type='text' name='bName' className='form-control' onChange={inputHandler} value={branch.bName}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Branch Address</label>
                   <input type='text' name='bAdd' className='form-control' onChange={inputHandler} value={branch.bAdd}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Branch Contact</label>
                   <input type='number' name='bCont' className='form-control' onChange={inputHandler} value={branch.bCont}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Branch Locaion</label>
                   <input type='text' name='bMap' className='form-control' onChange={inputHandler} value={branch.bMap}/>
              </div>
              
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}

export default StuAdd