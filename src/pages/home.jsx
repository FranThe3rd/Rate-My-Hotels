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
        
        
        
      </div>
              <h1 className='home-join'>Join the RMH Family</h1>
        <h1 className='home-join-caption'>Love RMH? Let's make it official.</h1>


      <div className='image-grid'>
          <div className='grid-info-home'>
            <img src={manage}></img>
            <p>Manage and edit your ratings</p>
          </div>
          <div className='grid-info-home'>
            <img src={privacy}></img>
            <p>Your ratings<br /> are always anonymous</p>
          </div>
          <div className='grid-info-home'>
            <img src={like}></img>
            <p> Like or dislike ratings</p>
          </div>
        </div>

        
        <button className='sign-up-now-btn'>Sign up now!</button>
        <div className='banner'>
          <p className='banner-text'>Help
Site Guidelines
Terms & Conditions
Privacy Policy
Copyright Compliance Policy
CA Notice at Collection</p>
<p className='banner-text-rights'>© 2025 Rate My Hotels, LLC. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Home;
