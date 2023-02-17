import React from 'react'
import { useState, useEffect } from 'react'

function MagicButton() {
    //HOOK
    const [data, setData] = useState(1)
    // data = getter || setData = setter

    const handleClick = () => {
        setData(10)
    }

    useEffect(() => {
        console.log(data)
        return () => { console.log('bye bye') }
    }, [data]);
    return (
        <div>
            <span>{data}</span>
            <button onClick={handleClick}> Transformar A </button>
        </div>
    )
}

export default MagicButton