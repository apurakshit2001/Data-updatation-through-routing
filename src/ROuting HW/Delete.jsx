import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);

    // Fetch items from localStorage on component mount
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        const storedDeletedItems = JSON.parse(localStorage.getItem('deletedItems')) || [];
        setItems(storedItems);
        setDeletedItems(storedDeletedItems);
    }, []);

    // Delete the item and update localStorage
    const handleDelete = () => {
        const remainingItems = items.filter(item => item.id !== parseInt(id));

        const deletedItem = items.find(item => item.id === parseInt(id)); //for storing the deleted items

        if (deletedItem) {
            const updatedDeletedItems = [...deletedItems, deletedItem];
            setDeletedItems(updatedDeletedItems);
            localStorage.setItem('deletedItems', JSON.stringify(updatedDeletedItems));
        }

        setItems(remainingItems);
        localStorage.setItem('items', JSON.stringify(remainingItems));

        navigate('/');
    };

    // Clear a specific deleted item
    const ClearFromHere = (deleteId) => {
        const remainingDeletedItems = deletedItems.filter(item => item.id !== deleteId);
        setDeletedItems(remainingDeletedItems);
        localStorage.setItem('deletedItems', JSON.stringify(remainingDeletedItems));
    };

    return (
        <div>
            <h1>Deleted Items</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {deletedItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.loc}</td>
                            <td>{item.dept}</td>
                            <td>
                                <button onClick={() => ClearFromHere(item.id)}>Clear</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Delete Item</h2>
            <p>Are you sure you want to delete this item?</p>
            
            <div className="options">
                <button onClick={handleDelete}>Confirm Delete</button>
                <Link to="/" className='links'>Cancel</Link>
            </div>
        </div>
    );
};

export default Delete;
