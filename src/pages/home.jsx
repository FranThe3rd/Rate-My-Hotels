import './home.css'
import logo from '../assets/logo.png'
import hotel from '../assets/hotel-background.jpg'

export const Home = () => {
  return (
    <div className="home">

      <div className="hotel-img-container"
            style={{ backgroundImage: `url(${hotel})` }}

      >
        <div className='home-text-div'>
          <img className='home-img' src={logo}></img>
          <h1 className='home-title'>Enter your hotel to get started</h1>
          <input className='test-input' type="text" value="" />

        </div>

      </div>

    </div>
  )
}

export default Home;
