import Image from 'next/image';

const Ad = ({size}:{size: "sm" | "md" | "lg"}) => {
  return (
    <div className="p-4 bg-wite rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between 
        text-gray-500 font-medium"
      >
        <span>Sponsored Ads</span>

        <Image src="/more.png" alt="" width={16} height={16} />
      </div>

      <div className={`flex flex-col mt-4 
        ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div className={`relative w-full ${
          size === "sm" ? "h-24" : size === "md" ? "h-36" : "-48"
        }`}>
          <Image className="rounded-lg object-cover"  fill
            src="https://pixels.com/images/homepage/ourProductsPrints001.jpg" alt="" />
        </div>

        <div className="flex items-center gap-4">
          <Image className="rounded-full w-6 h-6 object-cover" alt="" 
            width={24} height={24} src="https://pixels.com/images/HomepageProductToteBag.jpg" />

          <span className="text-blue-500 font-medium">BigGhef Lounge</span>
        </div>

        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size == "sm"
            ? "אנו מודים לנותני החסות שלנו על תמיכתם."
            : size === "md"
            ? "אנו מודים לנותני החסות שלנו על תמיכתם."
            : "אנו מודים לנותני החסות שלנו על תמיכתם."
          }
        </p>

        <button className="bg-gray-200 text-gray-500 p-2 rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  )
}

export default Ad;