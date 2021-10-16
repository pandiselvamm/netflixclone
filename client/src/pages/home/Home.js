import './Home.scss'
import Navbar from '../../componenents/navbar/Navbar'
import { Featured } from '../../componenents/featured/Featured'
import { List } from '../../componenents/list/List'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
