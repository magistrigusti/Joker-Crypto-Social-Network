import Link from "next/link";
import MobileMenu from './MobileMenu';
import Image from "next/image";
import { ClerkLoading, 
  ClerkLoaded, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link className="font-bold text-xl text-blue-600" href='/'>
          <Image className="z-index-1 flex gap-6" src="/joker-logo-black.png" alt="" width={320} height={270} />
        </Link>
      </div>
      

      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link className="flex items-center gap-2" href="/">
            <Image className="w-4 h-4" src="/home.png" alt="Homepage" width={16} height={16} />
            <span>Home</span>
          </Link>

          <Link className="flex items-center gap-2" href="/">
            <Image className="w-4 h-4" src="/friends.png" alt="Friendspage" width={16} height={16} />
            <span>Friends</span>
          </Link>

          <Link className="flex items-center gap-2" href="/">
            <Image className="w-4 h-4" src="/stories.png" alt="Storiespage" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>

        

        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input className="bg-transparent outline-none"
            type="text" placeholder="search..." 
          />

          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      
      

      <div className="flex items-center gap-4 xl:gap-8 justify-end w-[30%]">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>

            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={24} height={24} />
            </div>

            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={24} height={24} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
};

export default Navbar;