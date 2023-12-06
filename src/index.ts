// eslint-disable-next-line no-console
const log = console.log

log('Hello, world!')

// top level await
const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/1')
log(pokemon)
