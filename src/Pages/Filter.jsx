import {useState } from "react"
import axios from 'axios';
const Filter = () => {
    const [Items, setItems] = useState([]);
    const handleSubmit = async () => {

        let res = await axios.get(`http://localhost:3001/filter`)
        setItems(res.data)
        console.log(res.data);
    }
    const handleOnchange = (e) => {
    }
    return (
        <>
            <input type="search" name="search" id="search" onChange={handleOnchange} placeholder="Search Here..." />
            <input type="submit" onClick={handleSubmit} value="Submit" />
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>

                    {Items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Filter
