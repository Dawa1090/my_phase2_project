import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='headerContainer'>
                <h1>Taste of Nepal</h1>
                <p>"A Flavorful Journey"</p>
                <Link to='/cuisine'>
                    <button> Menu awaits! </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
