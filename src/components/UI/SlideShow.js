import React from "react";
import './slideShow.css';

const colors = ["#D76B69", "#EFD957", "#8FB264"];
const delay = 2500;
const heading1 = "20% discount on weekdays"
const heading2 = "Us in the press"
const heading3 = "Save endangered animals by ordering"


function SlideShow(props) {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={`slideshow ${props.className}`}>
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }}
                    >
                        <div className="slide-p">
                        {backgroundColor === colors[0] && <div>{heading1}</div>}
                        {backgroundColor === colors[1] && <div>{heading2}</div>}
                        {backgroundColor === colors[2] && <div>{heading3}</div>}
                        </div>  
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
