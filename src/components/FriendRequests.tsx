import Image from 'next/image';
import Link from 'next/link';

const FriendRequests = () => {
  return (
    <div className="p-4 bgwhite rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>

        <Link className="text-blue-500 text-xs" href="/">See all</Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover" 
            width={40} height={40} alt="" src="https://pixels.com/images/overview/overviewYogaMat002.jpg" />

          <span className="font-semibold">Wayne Burton</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image className="cursor-pointer" src="/accept.png" 
            width={20} height={20} alt="" />

          <Image className="cursor-pointer" src="/reject.png"
            width={20} height={20} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover"
            width={40} height={40} alt="" src="https://pixels.com/images/overview/overviewLifestyle004.jpg" />

          <span className="font-semibold">Anrea Poluchi</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image className="cursor-pointer" src="/accept.png"
            width={20} height={20} alt="" />

          <Image className="cursor-pointer" src="/reject.png"
            width={20} height={20} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover"
            width={40} height={40} alt="" src="https://pixels.com/images/overview/apparel/mensTshirts002.jpg" />

          <span className="font-semibold">Jack McBride</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image className="cursor-pointer" src="/accept.png"
            width={20} height={20} alt="" />

          <Image className="cursor-pointer" src="/reject.png"
            width={20} height={20} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests;