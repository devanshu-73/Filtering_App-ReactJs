import { useState, useEffect } from "react";
import axios from 'axios';

const Filter = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/filter`);
                setItems(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <input type="search" name="search" id="search" onChange={handleOnChange} placeholder="Search Here..." />
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Filter;
