import Image from 'next/image'
import Login from './pages/login'
import Navigation from './components/navigation'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className='bg-white flex-column'>
      <Navigation/>
      <Footer/>
    </div>

  )
}
