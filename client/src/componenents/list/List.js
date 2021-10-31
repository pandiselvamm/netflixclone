import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react';
import { ListItem } from '../listitem/Listitem'
import './list.scss'

export const List = ({ list }) => {

    const listRef = useRef();
    const [slideNumber, SetSlideNumber] = useState(0);
    const [isMoved, SetIsMoved] = useState(false);
    const [hideRight, SetHideRight] = useState(false);


    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left") {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right") {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        if (!isStartViewPort(listRef.current.querySelector('.firstitem'))) {
            SetIsMoved(true);
        } else {
            SetIsMoved(false);
        }
        if (isEndViewPort(listRef.current.querySelector('.lastitem'))) {
            SetHideRight(true);
        } else {
            SetHideRight(false);
        }
    };

    const listItemLen = list.content.length;

    function isStartViewPort(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }

    function isEndViewPort(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.right >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }
    return (
        <div className="list">
            <span className="listTitle">
                {list.title}
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved ? "none" : "block" }}
                />
                <div className="container" ref={listRef}>

                    {list.content.map((listItem, index) => (
                        <ListItem index={index} item={listItem} isStart={index === 0} isLast={listItemLen - 1 === index} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" style={{ display: hideRight ? "none" : "block" }} onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}
