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
    <main className='px-2 md:px-8 relative'>
      <div className="welcome-container bg-transparent h-[700px] 2xl:h-[800px] px-4">
        <img src={erb} className="hidden xl:block welcome-image welcome-image-1 rounded-md shadow-xl w-[350px] h-[550px]" alt="David Erb"/>
        <img src={orchestra} className="welcome-image welcome-image-2 rounded-md shadow-xl w-full xl:w-[350px] xl:h-[550px]" alt="Choir"/>
        <img src={strings} className="hidden xl:block welcome-image welcome-image-3 rounded-md shadow-xl w-[350px] h-[550px]" alt="String Section"/>
        <img src={extras} className="hidden 2xl:block welcome-image welcome-image-4 rounded-md shadow-xl w-[350px] h-[550px]" alt="Orchestra"/>
        <div className="headline-div text-blue-50 absolute top-[15%] md:top-1/3 lg:top-1/2 left-1/2">
          <h1 id="animated-title" className='font-mont text-[14vw]'></h1>
          <h2 id="animated-subtitle" className='text-center text-[7vw] font-barlow font-light'><span className='text-[10vw]'>M</span>USICUM <span className='text-[10vw]'>M</span>OSCOW</h2>
        </div>
      </div>
    </main>
  )
}