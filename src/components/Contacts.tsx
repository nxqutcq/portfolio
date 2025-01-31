import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contacts = () => {
  const buttonRef = useRef(null)
  const backgroundRef = useRef(null)

  const handleClick = () => {
    window.location.href = 'mailto:vnelipovich63@gmail.com'
  }

  useScrollAnimation('.mail-btn')

  return (
    <button ref={buttonRef} onClick={handleClick} className="mail-btn">
      <span>Say hello</span>
      <div ref={backgroundRef} />
    </button>
  )
}

export default Contacts
