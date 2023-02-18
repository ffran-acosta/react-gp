const baseUrl = 'https://rickandmortyapi.com/api/'
const characterUrl = baseUrl + 'character/'

// Morty tiene la ruta: https://rickandmortyapi.com/api/character/2

export const getMorty = () => {
    return fetch(characterUrl + '2').then(res => res.json())
}