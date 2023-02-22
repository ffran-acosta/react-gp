export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character'

export const fetchRickAndMorty = async () => {
    const resposne = await fetch(rickAndMortyUrl);
    const data = await resposne.json();
    return data
}

