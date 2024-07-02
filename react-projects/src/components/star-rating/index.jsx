
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function StarRating({total_stars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseClick(getCurrentIndex){
        rating === getCurrentIndex ? setRating(0) : setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(0);
    }

    return <div className="star-rating">
        {
            [...Array(total_stars)].map((_, index) => {
                index += 1


                return <FaStar 
                key={index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=> handleMouseClick(index)}
                onMouseEnter={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
}