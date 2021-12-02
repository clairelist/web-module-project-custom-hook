//THIS is how we will persist the dark mode even across app restarts! by accessing the localStorage JSON object, given to us by browser...
// N O T E ABOUT PARSE ERROR YOU ARE GETTING:: HEY FUTURE CLAIRE!
//DELETE YOUR APPLICATION LOCAL STORAGE IN YOUR BROWSER!

//DATA SECTION
import {useState} from 'react';


//LOGIC section

const useLocalStorage = (key, initialValue) => {
    const [state,setState] = useState(()=>{
         //okay so this line says 'if there is something in local storage, return (set) it to our state
       
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        //else, if null, stringify and return initial val

        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    //next, we need to store state in a variable which will be returned, below--making sure to stringify the expected JSON !
    const setStoredState = (value)=>{
        localStorage.setItem(key,JSON.stringify(value));
        setState(value);
    }

    //finally, we return the storedState and state!

    return ([state,setStoredState]);
}

//RETURN PSEUD 'EXPORT' section
export default useLocalStorage;

//this is being EXPORTED TO useDarkMode, where it will replace useState there!!