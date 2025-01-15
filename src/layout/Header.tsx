import Navbar from '../components/Navbar'
import { ScrollRefs } from '../types/types'

const Header: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
  return (
    <header className="z-50 bg-black/80 py-2 fixed flex flex-col w-screen items-center">
      <Navbar scrollRefs={scrollRefs} />
    </header>
  )
}

export default Header
