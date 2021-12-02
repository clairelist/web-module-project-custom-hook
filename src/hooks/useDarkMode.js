 import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode,setDarkMode] = useLocalStorage(initialValue)
    return [darkMode,setDarkMode]
}

export default useDarkMode;