import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

export const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/> Home
            </div>
            <video className="video"
             autoPlay
              progress 
              controls src="https://res.cloudinary.com/pandi-cnq-upload/video/upload/v1633280021/pexels-cottonbro-9731966_1_y5jbca.mp4"/>
        </div>
    )
}
