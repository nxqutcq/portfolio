import Navbar from '../components/Navbar'
import { ScrollRefs } from '../types/types'

const Header: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
  return (
    <header className="z-50 py-2 fixed flex flex-col w-full items-center">
      <Navbar scrollRefs={scrollRefs} />
    </header>
  )
}

export default Header
