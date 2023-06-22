import PokeCard from "./PokeCard"
import './styles/PokeContainer.css'

const PokeContainer = ({ pokemons, initialItems, setInitialPage, initialPage, contentPerPage }) => {

    const previousPage = () => {
        setInitialPage((prevPage) => prevPage - 1)
    }

    const nextPage = () => {
        setInitialPage((prevPage) => prevPage + 1)
    }

    return (
        <div className="pokeContainer">
            <div div className="pokeCard_body" >
                {
                    initialItems?.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            url={pokemon.url}
                        />
                    ))
                }
            </div >
            <footer className="pagination_footer">
                <div className="pagination">
                    <button className="pagination_btn" onClick={previousPage}
                        disabled={initialPage === 1}
                    >
                        Previous
                    </button>
                </div>
                <span className="pagination__pages">{initialPage}</span>
                <div className="pagination">
                    <button
                        className="pagination_btn"
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