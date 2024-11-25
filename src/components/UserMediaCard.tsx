import Link from 'next/link';
import Image from 'next/image';

const UserMediaCard = ({userId}:{userId:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm
      flex flex-col gap-4"
    >
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>  

        <Link href="/" className="text-blue-500 text-xs" >
          See all
        </Link>
      </div>  
      
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/images/overview/overviewGalaxyCase001.jpg' alt="" fill/>
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/images/overview/homeDecor/throwPillows002.jpg' alt="" fill/>
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/images/homepage/ourProductsAcrylic002.jpg' alt="" fill/>
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/assets/images/products/framedPrints003.jpg' alt="" fill/>
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/images/homepage/homepageProductBatteryCharger.jpg' alt="" fill/>
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/images/overview/overviewLifestyle004.jpg' alt="" fill/>
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/images/overview/overviewYogaMat002.jpg' alt="" fill/>
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
           src='https://pixels.com/assets/images/rooms/masterBedroom001.jpg' alt="" fill/>
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard;