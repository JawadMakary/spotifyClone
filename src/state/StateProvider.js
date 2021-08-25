import {createContext,useContext,useReducer} from 'react'
// prepare the data layer
export const StateContext=createContext()
// create the data layer
// children=>whats wrapped inside->app.js
export const StateProvider=({initialState,reducer,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {
            children
        }
    </StateContext.Provider>
)