import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { useEffect, useState } from 'react';
import './featured.scss'
import axios from 'axios'

export const Featured = ({ type }) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`);
                setContent(res.data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        getRandomContent();
    }, [type]);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="animation">Drama</option>
                        <option value="documentry">Documentry</option>
                    </select>
                </div>
            )}
            <img src={content.image} alt="" />
            <div className="info">
                <img
                    src={content.thumbnail} alt="" />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
