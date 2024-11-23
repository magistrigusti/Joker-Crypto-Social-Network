import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full" width={40} height={40}
            src="https://pixels.com/images/overview/apparel/mensTshirts002.jpg" alt="" />

          <span className="font-medium">Jack McBride</span>
        </div>

        <Image src="/more.png" width={16} height={16} alt="" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image className="object-cover rounded-md" fill 
            src="https://pixels.com/assets/images/rooms/masterBedroom001.jpg" alt="Master Bedroom"
          />
        </div>

        <p>
          All networks support a text component as part of your posts. However,
          Instagram and TikTok require you to add at least one media file in addition to your copy.
          All other networks support plain text posts without any media attachments.
          Here is how you can add and customize your post copy for any type of post:
        </p>
      </div>

      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex gap-8">

          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image className="cursor-pointer" src="/like.png" width={16} height={16} alt="" />

            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl ">
            <Image className="cursor-pointer" src="/comment.png" width={16} height={16} alt="" />

            <span className="text-gray-300">|</span>

            <span className="text-gray-500">123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>

          

        </div>

        <div className="">
            <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
              <Image className="cursor-pointer" src="/share.png" width={16} height={16} alt="" />

              <span className="text-gray-300">|</span>

              <span className="text-gray-500">123
                <span className="hidden md:inline"> Shares</span>
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Post;












