import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const defaultItems = [
        { id: 1, name: 'John', age: 22, loc: 'New York', dept: 'Developer' },
        { id: 2, name: 'Jane', age: 30, loc: 'Los Angeles', dept: 'Musician' },
        { id: 3, name: 'Bob', age: 25, loc: 'Kolkata', dept: 'Photographer' },
        { id: 4, name: 'Alice', age: 28, loc: 'London', dept: 'Designer' },
        { id: 5, name: 'Mark', age: 35, loc: 'Toronto', dept: 'Engineer' },
        { id: 6, name: 'Emma', age: 27, loc: 'Sydney', dept: 'Data Scientist' },
        { id: 7, name: 'Oliver', age: 31, loc: 'Berlin', dept: 'Architect' },
        { id: 8, name: 'Sophia', age: 24, loc: 'Paris', dept: 'Writer' },
        { id: 9, name: 'Liam', age: 29, loc: 'Tokyo', dept: 'Chef' },
        { id: 10, name: 'Emily', age: 26, loc: 'San Francisco', dept: 'Product Manager' }
    ];

    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || []; // checking if there is anything
        setItems(storedItems.length > 0 ? storedItems : defaultItems); // fancy way of storing them in localstorage
    }, []);

    // Restore default items and update localStorage
    const restoreDefaults = () => {
        localStorage.setItem('items', JSON.stringify(defaultItems));
        setItems(defaultItems); // ignore it
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={restoreDefaults}>Restore Default Items</button>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Action-1</th>
                        <th>Action-2</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.loc}</td>
                                <td>{item.dept}</td>
                                <td>
                                    <Link to={`/delete/${item.id}`} className='links'>DELETE</Link>
                                </td>
                                <td>
                                    <Link to={`/edit/${item.id}`} className='links'>EDIT</Link>
                                </td>
                            </tr>
                            );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
