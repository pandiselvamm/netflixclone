import './Home.scss'
import Navbar from '../../componenents/navbar/Navbar'
import { Featured } from '../../componenents/featured/Featured'
import { List } from '../../componenents/list/List'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);


    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "genre=" + genre : ""}`);
                setLists(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre])

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map(list => (
                <List list={list} />
            ))}
        </div>
    )
}

export default Home
