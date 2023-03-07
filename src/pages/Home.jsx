import Burger from "../components/Burger"
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Rounded from "../components/Rounded"
import Section from "../components/Section"
import Wrapper from "../components/Wrapper"
import Card from "../components/card"

const Home = () => {
    return (
        <>
            <Card />
            <Navbar />
            <Header />
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