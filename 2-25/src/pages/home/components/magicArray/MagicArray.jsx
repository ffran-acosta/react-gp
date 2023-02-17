import React from 'react'

function MagicArray() {

    const array = [
        {
            id: 1,
            name: 'Franco'
        },
        {
            id: 2,
            name: 'Augusto'
        }
    ]
    
    return (
        <ul>
            {array.map(i =>
                <li key={i.id}> {i.name} </li>
            )}
        </ul>
    )
}

export default MagicArray