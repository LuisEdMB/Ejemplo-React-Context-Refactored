import React, { createContext } from 'react'
import { useReducer } from 'react'
import { CountReducer, initialState } from '../reducers/CountReducer'
import { Increment, Decrement } from '../actions/CountAction'

const CountContext = createContext(null)

export const CountProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CountReducer, initialState)
    const actions = {
        increment() { dispatch(Increment()) },
        decrement() { dispatch(Decrement()) }
    }
    return(
        <CountContext.Provider value={{ state, actions }}>
            { children }
        </CountContext.Provider>
    )
}

export const CountConsumer = CountContext.Consumer