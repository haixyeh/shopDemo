import { useState, useEffect, useRef } from 'react';

function useMouseY() {
    const [mousePosY, setMousePosY] = useState(0);

    const mouseListener = useRef((event) => {
        setMousePosY(event.pageY);
    })

    useEffect(() => {
        const callback = mouseListener.current;
        window.addEventListener('mousemove', callback);
        return () => {
            window.removeEventListener('mousemove', callback);
        }
    }, [])

    return mousePosY;
}

export default useMouseY;
