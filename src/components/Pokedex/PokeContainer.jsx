import PokeCard from "./PokeCard"

const PokeContainer = ({ pokemons, initialItems, setInitialPage, initialPage, contentPerPage }) => {

    const previousPage = () => {
        setInitialPage((prevPage) => prevPage - 1)
    }

    const nextPage = () => {
        setInitialPage((prevPage) => prevPage + 1)
    }

    return (
        <div>
            {
                initialItems?.map(pokemon => (
                    <PokeCard
                        key={pokemon.url}
                        url={pokemon.url}
                    />
                ))
            }
            <footer className="pagination__footer">
                <div className="pagination">
                    <button className="pagination__btn-prev" onClick={previousPage}
                        disabled={initialPage === 1}
                    >
                        Previous
                    </button>
                </div>
                <span className="pagination__pages">{initialPage}</span>
                <div className="pagination">
                    <button
                        className="pagination__next"
                        onClick={nextPage}
                        disable={initialItems?.length < contentPerPage}
                    >
                        Next
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default PokeContainer