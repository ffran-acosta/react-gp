import { useState } from "react"
import { Suspense } from "react"

function AppNoSwr() {

    const [data, setData] = useState({ info: {}, results: [] })

    const fetchInfo = async () => {
        const fetchedData = await fetchRickAndMorty()
        setData(fetchedData)
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <Suspense fallback={<div> Loading...</div>} >
            <div className="App">
                Data:
                {data.results.map(characters => <div key={character.id}>{character.name}</div>)}
            </div>
        </Suspense>

    )
}
