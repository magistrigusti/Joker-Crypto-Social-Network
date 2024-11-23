import Image from "next/image";

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image className="w-8 h-8 rounded-full"
          width={32} height={32} src="/stories-img.jpg" alt="" />

        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input className="bg-transparent outline-none flex-1"
            type="text" placeholder="Write a comment..." />

          <Image className="cursor-pointer" src="/emoji.png"
            width={16} height={16} alt="" />
        </div>
      </div>

      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image className="w-10 h-10 rounded-full m-4"
            width={40} height={40} src="https://pixels.com/assets/images/products/framedPrints002.jpg" alt="" />

          <div className=" flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spancer</span>
            <p>
              מאמר נהדר! תודה על העצות השימושיות. אשתמש בהם בפרויקט היישום שלי. המשך לחלוק את הידע שלך! בהצלחה לכולם!
            </p>

            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image className="cursor-pointer w-4 h-4" alt=""
                  width={12} height={12} src="/like.png" />
                
                <span className="text-gray-300">|</span>

                <span className="text-gray-500">123 Likes</span>
              </div>

              <div className="">Reply</div>
            </div>
          </div>

          <Image className="cursor-pointer w-4 h-4" alt=""
            width={16} height={16} src="/more.png" />
        </div>
      </div>
    </div>
  )
};

export default Comments;