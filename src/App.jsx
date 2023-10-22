
import './App.css'
import Container from './Container/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import RocketsProviders from './providers/RocketsProviders'

function App() {

  return (
    <div className='mx-auto bg-white lg:max-w-7xl'>
      <RocketsProviders>
        <Header />
        <Container />
        <Footer />
      </RocketsProviders>
    </div>
  )
}

export default App
