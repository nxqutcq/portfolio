import { RefObject, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Footer from '../layout/Footer'

const Contacts: React.FC<{ contactsRef: RefObject<HTMLDivElement> }> = ({
  contactsRef,
}) => {
  const buttonRef = useRef(null)
  const backgroundRef = useRef(null)

  const handleClick = () => {
    window.location.href = 'mailto:vnelipovich63@gmail.com'
  }

  useScrollAnimation('.mail-btn')

  return (
    <section
      ref={contactsRef}
      className="box relative items-center justify-center"
    >
      <button ref={buttonRef} onClick={handleClick} className="mail-btn">
        <span>Say hello</span>
        <div ref={backgroundRef} />
      </button>
      <Footer />
    </section>
  )
}

export default Contacts
