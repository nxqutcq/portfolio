import { useRef } from 'react'
import { gsap } from 'gsap'
const Contacts = () => {
  const buttonRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      backgroundSize: '100% 100%',
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      backgroundSize: '100% 0%',
      duration: 0.5,
      ease: 'power2.out',
    })
  }
  
  const handleClick = () => {
    window.location.href = 'mailto:vnelipovich63@gmail.com'
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-5 py-4 border rounded-md"
      style={{
        cursor: 'pointer',
        backgroundImage: 'linear-gradient(to top, #07c98863, #09771755)',
        backgroundSize: '100% 0%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        borderRadius: '5px',
        fontSize: '16px',
        transition: 'color 0.5s',
      }}
    >
      Say hello
    </button>
  )
}
export default Contacts
