import { useRef, useState } from "react";
import './Figure.css';


const Figure = () => {
    const [isDown, setIsDown] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const timerID = useRef();

    const handleMouseOver = () => {
        if (!isDown) {

            timerID.current = setTimeout(() => {
                setPosition({
                    x: Math.floor(Math.random() * (window.innerWidth - 100)),
                    y: Math.floor(Math.random() * (window.innerHeight - 100))
                });
            }, 300);
        };
    };

    const handleMouseDown = () => {
        clearTimeout(timerID.current);
        setIsDown(true);
    };

    const handleMouseMove = (event) => {
        if (isDown) {
            setPosition({ x: (event.pageX - 50), y: event.pageY - 50 });
            console.log('handleMouseMove');
        };
    };

    const handleMouseUp = () => {
        setIsDown(false);
        console.log('handleMouseUp');
    };

    return (
        <div className='container' onMouseMove={handleMouseMove}>
            <div className='divFigure'
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                onMouseOver={handleMouseOver}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}>
                Figure Component
            </div>
        </div>
    );
};


export default Figure;

