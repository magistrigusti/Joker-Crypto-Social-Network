import Link from "next/link";
import MobileMenu from './MobileMenu';
import JokerLogo from '../../public/img/joker-lettering.png';

const Navbar = () => {
  return (
    <div className="">
      <div className="">
        <Link href="/">Joker Social Network</Link>
      </div>

      <div className="hidden"></div>

      <div className="">
        <MobileMenu />
      </div>
    </div>
  )
};

export default Navbar;