import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/boudha.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div
                className='headerContainer'
                style={{ background: `url(${BannerImage})` }}
            >
                <h1>Taste of Nepal</h1>
                <p>"Spice up your day with a slice of Nepal!"</p>
                <Link to='/cuisine'>
                    <button> Menu awaits! </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
