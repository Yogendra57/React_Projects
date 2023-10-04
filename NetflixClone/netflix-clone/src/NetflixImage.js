import React from 'react'
// import NetflixImage from './NetflixImage';

const NetflixImage = () => {
  return (
    <div>
      <img className='mainimage' src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
    <div className='heading'>
      <h2 className='head'>Unlimited movies, TV shows and more</h2>
      <p className='head-2'>Watch anywhere. Cancel anytime.</p>
      <p className='head-2'>Ready to watch? Enter your email to create or restart your membership.</p>
      <input type='text'></input><button>Get started</button>
      </div>
      <hr></hr>
      <div className='tv'><div className='enjoytv'><h1>Enjoy on your TV  </h1>
      <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.

      </h5>
      </div>
      </div>
      <>

      <img className='tvimage' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'>
      </img>
      </>
      
      < >
      <div>
      <img className='Boxx' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'></img>
      <div className='black'></div>
      </div>
      </>
      
       
       
    </div>
  )
}

export default NetflixImage
