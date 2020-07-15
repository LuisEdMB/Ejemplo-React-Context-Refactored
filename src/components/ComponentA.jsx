import React from 'react'
import { CountConsumer } from '../contexts/CountContext'

export const ComponentA = () => {
    return(
        <CountConsumer>
            {({ actions: { increment, decrement } }) => (
                <div>
                    <button onClick={ () => increment() }>Increment</button>
                    <button onClick={ () => decrement() }>Decrement</button>
                </div>
            )}
        </CountConsumer>
    )
}