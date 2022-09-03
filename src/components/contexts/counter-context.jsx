import { createContext , useReducer } from "react";
import { reducer } from "../../store/reducers/counter-reducer";
export const counterContext = createContext()
const {firstSatate,dispatch}=useReducer(counterContext)
const counterProvider = ({children})=>{
    return(
    <counterContext.Provider value={{ firstSatate , dispatch }}>
    {children}
    </counterContext.Provider>
    )
}
export default counterProvider
