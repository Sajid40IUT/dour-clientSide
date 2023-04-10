import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import backgroundTexture from '/imgs/bgTexture.jpg';
import { Footer } from './components/Footer'

function App() {

  const bgImageStyle = {
    backgroundImage: `url(${backgroundTexture})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <ShoppingCartProvider>
      <Navbar />
      <div style={bgImageStyle}>
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element = { <Home /> } />
            <Route path="/store" element = { <Store /> } />
            <Route path='/about' element = { <About /> } />
          </Routes>
        </Container>
      </div>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
