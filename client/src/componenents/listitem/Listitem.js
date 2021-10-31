import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import './listitem.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const ListItem = ({ index, item, isStart, isLast }) => {
    const [isHoverd, SetIsHover] = useState(false);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`movies/find/${item}`);
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    }, [item])
    const itemClass = "lisitem" + (isLast ? " lastitem" : "") + (isStart ? " firstitem" : "");
    return (

        <div
            className={itemClass}
            style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => SetIsHover(true)}
            onMouseLeave={() => SetIsHover(false)}
        >
            <img src={movie.image} alt="" />
            {isHoverd && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <Link to={{ pathname: "/watch", movie: movie }}>
                                <PlayArrow className="icon" />
                            </Link>
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                    </div>
                    <div className="itemInfoTop">
                        <span>{movie.duration}</span>
                        <span className="limit">+{movie.limit}</span>
                        <span>{movie.year}</span>
                    </div>
                    <div className="desc">
                        {movie.desc}
                    </div>
                    <div className="genre">
                        {movie.genre}
                    </div>
                </>
            )}

        </div >
    )
}
