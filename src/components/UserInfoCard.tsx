import Link from 'next/link';
import Image from 'next/image';

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm
      flex flex-col gap-4"
    >
      <div className="flex justify-between items-cente font-medium">
        <span className="text-gray-500">User Information</span>

        <Link href="/" className="text-blue-500 text-xs" >
          See all
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lloyd Fleming</span>

          <span className="text-sm">@jonathan</span>
        </div>

        <p>
          👋 Hello there! I am Lloyd Fleming, a passionate poker gamer based in Denver. 
          I strive to bring creativity and innovation to every project I tackle. 🌟 
          In my spare time, you all often find me Codding, exploring new places, and constantly learning something new. 
          I believe in the power of community and love connecting with like-minded individuals. 
        </p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>Living in <b>Denver</b> </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>Wen to <b>Edgar High school</b></span>
        </div>

        <div className="flex tems-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>Works at <b>Apple Inc.</b></span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href='/' className="text-blue-500 font-medium">
              Magistrigusti.dev
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>

        <button className="bg-blue-500 text-white text-sm rounded-md p-2" >
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  )
};

export default UserInfoCard