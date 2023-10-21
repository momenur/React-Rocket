
import './App.css'
import Container from './Container/Container'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className='mx-auto bg-white lg:max-w-7xl'>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App
