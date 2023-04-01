import { createContext ,useState} from "react";
import { INITIAL_EVENTS } from "./data";




export const MyContext=createContext()

const  MyContextProvider =({children})=> {

const [state,setState]=useState(INITIAL_EVENTS)
return <MyContext.Provider value={{state,setState}}>
    {children}
</MyContext.Provider>


}

export default MyContextProvider