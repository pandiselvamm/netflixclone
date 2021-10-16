import {  InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export const Featured = ({type}) => {
    return (
        <div className="featured">
            { type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
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
            <img src="https://res.cloudinary.com/pandi-cnq-upload/image/upload/v1633330535/pexels-ricardo-ortiz-6447217_nm2tps.jpg" alt=""/>
            <div className="info">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/dd4itby-724c0c0a-a0b3-482b-b915-5c520a3adeba.png/v1/fill/w_1499,h_533,strp/spider_man_far_frome_home___title_transparent_by_asthonx1_dd4itby-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI5IiwicGF0aCI6IlwvZlwvZjM1OTg4MWQtNmJiMi00MzkxLWFiYTYtNzc5ZjcwODRlZGQ0XC9kZDRpdGJ5LTcyNGMwYzBhLWEwYjMtNDgyYi1iOTE1LTVjNTIwYTNhZGViYS5wbmciLCJ3aWR0aCI6Ijw9MjA0OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kHzi2t1Uw2pQP_Pt40j8KVVrB83IgE5yIVJTxAMGuF0" alt=""/>
                <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero justo, lacinia sit amet egestas in, feugiat non diam. Suspendisse potenti. Aenean ornare ante felis. Maecenas eget suscipit dui. Suspendisse ut ornare leo, nec egestas ante
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
