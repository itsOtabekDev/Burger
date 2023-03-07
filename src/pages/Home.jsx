import Burger from "../components/Burger"
import Cards from "../components/cards"
import Footer from "../components/footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Rounded from "../components/rounded"
import Section from "../components/section"
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