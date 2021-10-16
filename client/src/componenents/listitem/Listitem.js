import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './listitem.scss'

export const ListItem = ({index}) => {
    const [isHoverd , SetIsHover] = useState(false);
    const trailer = 
    "https://res.cloudinary.com/pandi-cnq-upload/video/upload/v1633280021/pexels-cottonbro-9731966_1_y5jbca.mp4";
    return (
        <div 
            className="lisitem"
            style={{left : isHoverd && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => SetIsHover(true)}
            onMouseLeave={() => SetIsHover(false)}
        >
            <img src="https://thumbor.forbes.com/thumbor/711x394/https://specials-images.forbesimg.com/imageserve/5d30c8e5eab9270008f9bd2a/Casa-de-Papel-3/960x0.jpg?fit=scale" alt=""/>
            {isHoverd && (
                 <>
                 <video src={trailer} autoPlay={true} loop/>
                 <div className="itemInfo">
                     <div className="icons">
                         <PlayArrow className="icon"/>
                         <Add className="icon"/>
                         <ThumbUpAltOutlined className="icon"/>
                         <ThumbDownAltOutlined className="icon"/>
                     </div>
                 </div>
                 <div className="itemInfoTop">
                     <span>1 hour 14 mins</span>
                     <span className="limit">+16</span>
                     <span>1999</span>
                 </div>
                 <div className="desc">
                 If you’re a fan of the hugely popular Spanish series Casa de Papel (Money Heist)
                 </div>
                 <div className="genre">
                     Action
                 </div>
                 </>
            )}
           
        </div>
    )
}
