import Burger from '../components/Burger'
import Card from '../components/card'
import Cards from '../components/cards'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Rounded from '../components/rounded'
import Section from '../components/section'
import Wrapper from '../components/Wrapper'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Card />
            <Wrapper />
            <Cards />
            <Section />
            <Burger />
            <Rounded />
            <Footer />
        </>
    )
}

export default Home