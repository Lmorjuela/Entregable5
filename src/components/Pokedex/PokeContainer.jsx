import PokeCard from "./PokeCard"

const PokeContainer = ({ pokemons }) => {

    return (
        <div>
            {
                pokemons?.map(pokemon => (
                    <PokeCard
                        key={pokemon.url}
                        url={pokemon.url}
                    />
                ))
            }
        </div>
    )
}

export default PokeContainer