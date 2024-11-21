import Link from "next/link";
import MobileMenu from './MobileMenu';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link className="font-bold text-xl text-blue-600" href='/'>
          JOKER NETWORK
        </Link>
      </div>

      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link className="flex items-center gap-2" href="/">
            <Image className="w-4 h-4" src="/home.png" alt="Homepage" width={16} height={16} />
            <span>Homepage</span>
          </Link>

          <Link className="flex items-center gap-2" href="/">
            <Image className="w-4 h-4" src="/friends.png" alt="Friendspage" width={16} height={16} />
            <span>Friendspage</span>
          </Link>

          <Link className="flex items-center gap-2" href="/">
            <Image className="w-4 h-4" src="/stories.png" alt="Storiespage" width={16} height={16} />
            <span>Storiespage</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:gap-8 justify-end w-[30%]">
        <MobileMenu />
      </div>
    </div>
  )
};

export default Navbar;