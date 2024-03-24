import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Link, useParams } from 'react-router-dom';

const DetailsComp = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllRows, setShowAllRows] = useState(false);
  const { id } = useParams();
  const show = 1;

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios.get(`https://localhost:7106/api/branch/getbranchesbyid/${id}`).then((res) => {
      setProduct(res.data);
      console.log(res.data);
    }).catch((err) => {});
  };

  const deleteProduct = (id) => {
    if (window.confirm(`Do you want to DELETE Branch with id: ${id}`)) {
      axios.delete(`https://localhost:7106/api/branch/delete/${id}`).then(() => {
        window.alert('Branch Deleted Successfully');
        fetchData();
      }).catch((err) => {});
    }
  };

  const filteredProducts = product.filter((val) =>
    val.bName && val.bName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleRows = showAllRows ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <div>
      {/* Table */}
      <table className="table table-hover table-bordered table-striped">
        <thead className="dark">
          <tr>
            <th>BNo</th>
            <th>City Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Map Link</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {product.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.bName}</td>
              <td>{val.bAdd}</td>
              <td>{val.bCont}</td>
              <td><a href={val.bMap} style={{ color: 'blue' }}>Map</a></td>
              <td><button onClick={() => deleteProduct(val.bId)} className="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsComp;
