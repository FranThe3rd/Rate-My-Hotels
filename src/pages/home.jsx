import './home.css'
import logo from '../assets/logo.png'
import hotel from '../assets/hotel-background.jpg'
import manage from '../assets/manage.png'
import privacy from '../assets/privacy.png'
import like from '../assets/like.png'

export const Home = () => {
  return (
    <div className="home">
      <div class="sun"></div>


      <div className="hotel-img-container"
            style={{ backgroundImage: `url(${hotel})` }}

      >
        <div className='home-text-div'>
          <img className='home-img' src={logo}></img>
          <h1 className='home-title'>Enter your <strong>hotel</strong> to get started</h1>
          <input className='test-input' type="text" value="" />
          <p className='caption'>I'd like to look up a hotel by name</p>
        </div>
        <h1 className='home-join'>Join the RMH Family</h1>
        <h1 className='home-join-caption'>Love RMP? Let's make it official.</h1>
        <div className='image-grid'>
          <img  src={manage}></img>
          <img  src={privacy}></img>
          <img  src={like}></img>



        </div>


      </div>

    </div>
  )
}

export default Home;
