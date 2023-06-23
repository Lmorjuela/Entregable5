import React, { useRef } from 'react'
import { setTrainerNameG } from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css'

const Home = () => {

  const trainerNameRef = useRef();

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { trainerName } = useSelector(states => states)


  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
    navigate('/pokedex')
  }


  return (
    <div className='home'>
      <header className='header'>
        <img className='header_img' src="/logopokedex.svg" alt="" />
      </header>
      <section className='section'>
      <h2 className='title'>Hi Trainer!</h2>
      <p className='paragraph'>To start, give me your trainer name</p>
      <form className='form' onSubmit={handleSubmit}>
        <input className='input_form' placeholder='Your name...' ref={trainerNameRef} type="text" name="" id="" />
        <button className='start_btn'>
          Start
        </button>
      </form>
      </section>
    <footer className='footer'>
      <img className='footer_img' src="/footerpokedex.svg" alt="" />
    </footer>



    </div>
  )
}

export default Home