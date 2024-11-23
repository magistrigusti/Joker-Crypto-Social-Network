import Image from "next/image";
// import StoriesImg from "../images/stories-img.jpg";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-mb overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image className="w-20 h-20 rounded-full ring-2" 
            width={80} height={80} src="https://pixels.com/images/HomepageProductPoster.jpg" alt="" />
            <span className="font-medium">Ricky</span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image className="w-20 h-20 rounded-full ring-2" 
            width={80} height={80} src="https://pixels.com/images/overview/homeDecor/coffeeMugs001.jpg" alt="" />
            <span className="font-medium">Mary</span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image className="w-20 h-20 rounded-full ring-2" 
            width={80} height={80} src="https://pixels.com/images/overview/apparel/tankTops001.jpg" alt="" />
            <span className="font-medium">Andry</span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image className="w-20 h-20 rounded-full ring-2" 
            width={80} height={80} src="https://pixels.com/images/homepageProductCanvasPrint002.jpg" alt="" />
            <span className="font-medium">Sara</span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image className="w-20 h-20 rounded-full ring-2" 
            width={80} height={80} src="https://pixels.com/images/overview/apparel/mensTshirts002.jpg" alt="" />
            <span className="font-medium">Jack McBride</span>
        </div>
      </div>
    </div>
  )
}

export default Stories;