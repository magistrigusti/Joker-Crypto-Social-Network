import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white roundedlg shadow-md text-sm 
      flex flex-col gap-6"
    >
      <div className="h-20 relative">
        <Image className="rounded-md object-cover" fill src="/joker-avatar.webp" alt="" />

        <Image className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 
          m-auto -bottom-6 ring-1 ring-white z-10"
          width={48} height={48} src="/stories-img.jpg" alt="" />
      </div>

      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Joker Gambit</span>

        <div className="flex items-center gap-4">
          <div className="flex">
            <Image className="rounded-full object-cover w-3 h-3" alt=""
              width={12} height={12} src="https://pixels.com/images/HomepageProductPoster.jpg" />

            <Image className="rounded-full object-cover w-3 h-3" alt=""
              width={12} height={12} src="https://pixels.com/images/overview/homeDecor/coffeeMugs001.jpg" />

            <Image className="rounded-full object-cover w-3 h-3" alt=""
              width={12} height={12} src="https://pixels.com/images/overview/apparel/tankTops001.jpg" />
          </div>

          <span className="text-xs text-gray-500">
            650 Folowers  
          </span>
        </div>

        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  )
}

export default ProfileCard;