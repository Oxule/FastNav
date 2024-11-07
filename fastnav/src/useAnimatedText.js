import {useEffect, useRef, useState} from "react";


export function useAnimatedText(initial = "", animationSpeed = 100) {
    const [displayedText, setDisplayedText] = useState("");
    const [text, setText] = useState(initial);
    const intervalRef = useRef(null);

    useEffect(() => {
        setDisplayedText("");
        let index = -1;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;

            if (index === text.length-1) {
                clearInterval(intervalRef.current);
            }
        }, animationSpeed);

        return () => clearInterval(intervalRef.current);
    }, [text, animationSpeed]);

    return [displayedText, setText];
}