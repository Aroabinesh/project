import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BranchForm = ({ onClose, onAdd, onEdit, onDelete, selectedState, selectedBranch }) => {
  const [branchDetails, setBranchDetails] = useState({
    name: '',
    address: '',
    contact: '',
    mapLink: '',
  });

  useEffect(() => {
    if (selectedBranch) {
      setBranchDetails({
        name: selectedBranch.name,
        address: selectedBranch.address,
        contact: selectedBranch.contact,
        mapLink: selectedBranch.mapLink,
      });
    }
  }, [selectedBranch]);

  const handleChange = (e) => {
    setBranchDetails({
      ...branchDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent default form submission
    onAdd(selectedState, branchDetails);
    setBranchDetails({
      name: '',
      address: '',
      contact: '',
      mapLink: '',
    });
  };

  const handleEdit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onEdit(selectedState, selectedBranch.index, branchDetails);
  };

  const handleDelete = (e) => {
    e.preventDefault(); // Prevent default form submission
    onDelete(selectedState, selectedBranch.index);
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedBranch ? 'Edit Branch' : 'Add Branch'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBranchName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter branch name"
              name="name"
              value={branchDetails.name}
              onChange={handleChange}
              pattern=".{1,}"
              title="Please enter a branch name."
              required
            />
          </Form.Group>

          <Form.Group controlId="formBranchAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter branch address"
              name="address"
              value={branchDetails.address}
              onChange={handleChange}
              pattern=".{1,}"
              title="Please enter a branch address."
              required
            />
          </Form.Group>

          <Form.Group controlId="formBranchContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter branch contact"
              name="contact"
              value={branchDetails.contact}
              onChange={handleChange}
              pattern=".{1,}"
              title="Please enter a branch contact."
              required
            />
          </Form.Group>

          <Form.Group controlId="formBranchMapLink">
            <Form.Label>Map Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter branch map link"
              name="mapLink"
              value={branchDetails.mapLink}
              onChange={handleChange}
              pattern=".{1,}"
              title="Please enter a branch map link."
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {selectedBranch && (
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={selectedBranch ? handleEdit : handleAdd}>
          {selectedBranch ? 'Save Changes' : 'Add Branch'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BranchForm;
