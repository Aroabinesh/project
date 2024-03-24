import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Add = () => {
  const { id } = useParams;
  const [branch, setBranch] = useState({
    bName: '',
    bAdd: '',
    bCont: '',
    bMap: ''
  });

  const inputHandler = (event) => {
    setBranch({ ...branch, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    // Perform your custom validation here
    if (!branch.bName || !branch.bAdd || !branch.bCont || !branch.bMap) {
      window.alert('Please fill in all fields.');
      return false;
    }

    if (isNaN(branch.bCont) || branch.bCont <= 0) {
      window.alert('Please enter a valid contact number.');
      return false;
    }

    // Add more validation rules as needed

    return true;
  };

  const addData = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    axios
      .post(`https://localhost:7106/api/branch/Create`, branch)
      .then(() => {
        window.alert('Branch added Successfully');
      })
      .catch((err) => {});
  };

  return (
    <div>
      <form onSubmit={addData}>
        <div className="form-group">
          <h1 style={{ textAlign: 'center' }}>Add Branch</h1>
          <label className="form-label">Enter Branch Name</label>
          <input type="text" name="bName" className="form-control" onChange={inputHandler} value={branch.bName} required />
        </div>
        <div className="form-group">
          <label className="form-label">Enter Branch Address</label>
          <input type="text" name="bAdd" className="form-control" onChange={inputHandler} value={branch.bAdd} required />
        </div>
        <div className="form-group">
          <label className="form-label">Enter Branch Contact</label>
          <input type="text" name="bCont" className="form-control" pattern="[0-9]{eeeeeeeeee 10}" onChange={inputHandler} value={branch.bCont} required />
        </div>
        <div className="form-group">
          <label className="form-label">Branch Location</label>
          <input type="text" name="bMap" className="form-control" onChange={inputHandler} value={branch.bMap} required />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
