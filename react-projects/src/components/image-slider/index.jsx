import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

export default function ImageSlider({url, limit, page}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);  

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }

        }catch(e){
            setErrorMessage(e.message);
            setLoading(false);
        }
    }

    function nextImage() {
        setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1);
    }
    
    function previousImage() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    
 
    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    console.log(images);

    if (loading) {
        return <div>Loading data</div>
    }

    if (errorMessage !== null) {
        return <div>Error! {errorMessage}</div>
    }
    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousImage} />
        {
            images && images.length ?
            images.map((imageItem, index) => (
                <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                />
            )) 
            : null
        }
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImage}/>
        <span className="circle-indicators">
            {
                images && images.length ?
                images.map((_, index)=> (
                <button
                    key={index}
                    className={currentSlide === index ? "current-indicator" : "current-indicator hide-current-indicator"}
                    onClick={() => setCurrentSlide(index)}>
                </button>))
                : null
            }
        </span>
    </div>
}