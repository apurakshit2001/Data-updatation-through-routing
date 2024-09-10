import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const locRef = useRef(null);
    const deptRef = useRef(null);

    useEffect(() => {
        // Fetch items from localStorage
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        const itemToEdit = storedItems.find(item => item.id === parseInt(id));

        if (itemToEdit) {
            nameRef.current.value = itemToEdit.name;
            ageRef.current.value = itemToEdit.age;
            locRef.current.value = itemToEdit.loc;
            deptRef.current.value = itemToEdit.dept;
        }
    }, [id]);

    // Handle update button click
    const handleUpdateClick = () => {

        const updatedItem = {
            id: parseInt(id),
            name: nameRef.current.value,
            age: parseInt(ageRef.current.value),
            loc: locRef.current.value,
            dept: deptRef.current.value
        };

        // Fetch items from localStorage
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        const updatedItems = [];

        for (let item of storedItems) {
            // Check if the item's ID matches the ID we want to update
            if (item.id === parseInt(id)) {
                updatedItems.push(updatedItem);
            } else {
                updatedItems.push(item);
            }
        }

        localStorage.setItem('items', JSON.stringify(updatedItems)); // Update localStorage with the updatedItems

        navigate('/'); // Redirect to the dashboard

    };

    return (
<div class="edit-container">
    <h1>Edit Item</h1>
    <form>
        <div class="form-group">
            <label>Name:</label>
            <input type="text" ref={nameRef} class="form-input" />
        </div>
        <div class="form-group">
            <label>Age:</label>
            <input type="number" ref={ageRef} class="form-input" />
        </div>
        <div class="form-group">
            <label>Location:</label>
            <input type="text" ref={locRef} class="form-input" />
        </div>
        <div class="form-group">
            <label>Department:</label>
            <input type="text" ref={deptRef} class="form-input" />
        </div>
        <br />
        <button type="button" onClick={handleUpdateClick} class="update-button">Update</button>
    </form>
</div>



    );
};

export default Edit;
