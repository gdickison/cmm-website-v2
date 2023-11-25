import erb from '../images/erb_profile.jpg'
import orchestra from '../images/cmm_orchestra.jpeg'
import extras from '../images/extras_cover.jpeg'
import strings from '../images/strings.jpeg'
import { useEffect } from 'react';

export default function Hero () {
  // document.addEventListener('DOMContentLoaded', () => {
  //   const titleElement = document.getElementById('animated-title');
  //   const text = 'COLLEGIUM';
  //   titleElement.innerHTML = [...text].map((letter, i) => `<span style="animation-delay: ${(i + 1) * 250}ms">${letter}</span>`).join('');
  // });

  // function animateTitle () {
    useEffect(() => {
      const titleElement = document.getElementById('animated-title');
      const text = 'COLLEGIUM';
      titleElement.innerHTML = [...text].map((letter, i) => `<span style="animation-delay: ${(i + 1) * 250}ms">${letter}</span>`).join('');
    }, [])
  // }


  return (
    <main>
      <div class="welcome-container">
        <img src={erb} class="welcome-image welcome-image-1" alt="David Erb"/>
        <img src={extras} class="welcome-image welcome-image-2" alt="Choir"/>
        <img src={strings} class="welcome-image welcome-image-3" alt="String Section"/>
        <img src={orchestra} class="welcome-image welcome-image-4" alt="Orchestra"/>
        <div class="headline-div">
          <h1 id="animated-title"></h1>
          <h2 id="animated-subtitle" className='font-mont'>Musicum Moscow</h2>
        </div>
      </div>
    </main>
  )
}