export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character'

export const fetchRickAndMorty = async (url) => {
    return fetch(url).then(res => res.json())
}
