import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";



const AddPost = async () => {

  return (
    <div className="p-4 bg-white shadow-mb rounded-lg flex gap-4 justify-between text-sm">
      <Image className="w-12 h-12 object-cover rounded-full"
        width={48} height={48} src="https://pixels.com/assets/images/products/framedPrints002.jpg" alt=""></Image>

      <div className="flex-1">
        <form className="flex gap-4" action="" >
          <textarea className="flex-1 bg-slate-100 rounded-lg p-2"
            placeholder="What's on Your mind?" name="desc"
          ></textarea>

          <Image className="w-5 h-5 cursor-pointer self-end" alt=""
            width={20} height={20} src="/emoji.png"
          />

          <button>Send</button>
        </form>

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer" >
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>


        </div>
      </div>
    </div>
  )
}

export default AddPost;