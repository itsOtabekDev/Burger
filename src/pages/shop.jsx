import React from 'react'
import Card from '../components/card'
import Cards from '../components/cards'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'

const Shop = () => {
    return (

        <div>
            <Navbar />
            <div className='mt-36 h-screen'>
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default Shop