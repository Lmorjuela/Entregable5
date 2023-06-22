import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import PokeContainer from '../components/Pokedex/PokeContainer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../components/Pokedex/styles/Pokedex.css'

const Pokedex = () => {

  const [selectValue, setSelectValue] = useState('all-pokemons')

  const { trainerName } = useSelector(states => states)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url)

  const urlTypes = 'https://pokeapi.co/api/v2/type'
  const [types, getAllTypes] = useFetch(urlTypes)


  useEffect(() => {
    if (selectValue === 'all-pokemons') {
      getAllPokemons()
    } else {
      axios.get(selectValue)
        .then(res => {
          const data = {
            results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
          }
          setPokemons(data)
        })
        .catch(err => console.log(err))
    }
  }, [selectValue])


  useEffect(() => {
    getAllTypes()
  }, [])

  const searchPokemon = useRef()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = searchPokemon.current.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)
  }

  const handleChangeType = e => {
    setSelectValue(e.target.value)
  }



  return (
    <div className='Pokedex'>
      <header className='header_pokedex'>
        <img className='header_pokedex_img' src="/headerpokedex.svg" alt="" />
        <img className='header_logo_img' src="/logopokedex.svg" alt="" />
        <img className='header_pokebola_img' src="/pokebola.svg" alt="" />
      </header>
      <div className='body'>
        <p className='body_p'><span className='body_p_span'>Welcome {trainerName}!</span> Here you can find your favorite pokemon. </p>
        <div className='body_form'>
        <form className= 'form' onSubmit={handleSubmit}>
          <input placeholder='Look for a pokemon'className='form_input' ref={searchPokemon} type="text" />
          <button className='search_btn'>Search</button>
        </form>
        <select className='select' onChange={handleChangeType}>
          <option className='option_all_pokemons' value="all-pokemons">All pokemons</option>
          {
            types?.results.map(typeInfo => (
              <option value={typeInfo.url} key={typeInfo.url} >
                {typeInfo.name}
              </option>
            ))
          }
        </select>
        </div>
      </div>
      <PokeContainer pokemons={pokemons?.results} />
    </div>
  )
}

export default Pokedex