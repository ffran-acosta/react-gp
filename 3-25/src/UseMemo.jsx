import React, {useState, useMemo } from 'react'

function UseMemo() {

    const [name, setName] = useState('Franco')

    const changedName = useMemo(() => {
        return `Franco ${name}`
    }, [name])

    const handleClick = () => {
        setName('Augusto')
    }

    return (
        <div className="App">

            <h1>{name}</h1>

            <button onClick={handleClick}>Click here to change name</button>

            {changedName}

        </div>
    )
}

export default UseMemo