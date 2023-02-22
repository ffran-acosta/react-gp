import { fetchRickAndMorty, rickAndMortyUrl } from '../services/rickAndMorty'
import useSWR from 'swr'

const Characters = () => {
    const { data, error, isValidating } = useSWR(rickAndMortyUrl, fetchRickAndMorty, {
        suspense: true,
        // revalidateIfStaleigh: false,
        // revalidateOnFocus: false
    });

    return (

        <div>
            {/* {isValidating ? <span>Validating...</span> : <></>} */}
            {data.results.map(character => <div key={character.id}>{character.name}</div>)}  
        </div>
    )
}
export default Characters
