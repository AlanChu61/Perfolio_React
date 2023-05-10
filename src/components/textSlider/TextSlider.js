import React, { useState, useEffect } from 'react';

function TextSlider(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index + 1) % props.textList.length);
        }, props.interval || 2000);
        return () => clearInterval(intervalId);
    }, [index, props]);

    return <div>Hello This is Alan Chu. <br /><br />I am a {props.textList[index]}</div>;

}

export default TextSlider;
