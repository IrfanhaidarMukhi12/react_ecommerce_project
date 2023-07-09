import { Navbar, Main, Product, Footer } from "../components";
import PolicyPoster from "../components/PolicyPoster";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
    
      <PolicyPoster/>
      <Product />
      <Footer />
    </>
  )
}

export default Home