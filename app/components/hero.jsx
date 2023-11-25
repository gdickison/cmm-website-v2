import erb from '../images/erb_profile.jpg'
import orchestra from '../images/cmm_orchestra.jpeg'
import extras from '../images/extras_cover.jpeg'
import strings from '../images/strings.jpeg'
import { useEffect } from 'react';

export default function Hero () {
    useEffect(() => {
      const titleElement = document.getElementById('animated-title');
      const text = 'COLLEGIUM';
      titleElement.innerHTML = [...text].map((letter, i) => `<span style="animation-delay: ${(i + 1) * 250}ms">${letter}</span>`).join('');
    }, [])

  return (
    <main>
      <div className="welcome-container bg-transparent">
        <img src={erb} className="md:block welcome-image welcome-image-1 rounded-md shadow-xl" alt="David Erb"/>
        <img src={orchestra} className="welcome-image welcome-image-2 rounded-md shadow-xl" alt="Choir"/>
        <img src={strings} className="md:block welcome-image welcome-image-3 rounded-md shadow-xl" alt="String Section"/>
        <img src={extras} className="md:block welcome-image welcome-image-4 rounded-md shadow-xl" alt="Orchestra"/>
        <div className="headline-div text-blue-50">
          <h1 id="animated-title" className='font-mont md:text-8xl lg:text-[16rem]'></h1>
          <h2 id="animated-subtitle" className='text-center text-[7rem] font-barlow font-light'><span className='text-[10rem]'>M</span>USICUM <span className='text-[10rem]'>M</span>OSCOW</h2>
        </div>
      </div>
    </main>
  )
}