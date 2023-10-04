import React from 'react'
import PrimeDropDown from './PrimeDropDown'


const BoxX = () => {
  return (
    <div>
      <div className='black'>
      <div>
      <h2>Download your shows to watch offline</h2>
      <p>Save your favourites easily and always have something to watch.</p>
      </div>
      
      </div>
      <div className='another'>
      <div className='anotherdiv'>
      <h2>Watch everywhere</h2>
      <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <img className='laptop'src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'></img>
      </div>
      \<div className='another-2'>
      <div className='anotherdiv-2'>
      <h2>Create profiles for kids</h2>
      <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
      </div>
      <img className='laptop-2'src='https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'></img>
      </div>
     <PrimeDropDown/>
    </div>
  )
}

export default BoxX
