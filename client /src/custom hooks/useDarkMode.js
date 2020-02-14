import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

    console.log(darkMode);

    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").classList.add("dark");
            // document.querySelector(".App").style.color = "white";
        } else {
            document.querySelector("body").classList.remove("dark");
            // document.querySelector(".App").style.color = "black";
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
}