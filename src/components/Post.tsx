import Image from "next/image";
import Comments from "./Comments";

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
          🚀 We are Launching a Unique Social Network! 🌐

          Dear friends!

          We are excited to announce our new project — a social network built on blockchain technology! 💡 Why us? Here are a few reasons why our platform is special:

          Decentralization: Forget about censorship and control! Our social network ensures complete freedom of expression thanks to its decentralized structure.

          Data Security: All your data is stored on the blockchain, providing absolute protection against leaks and unauthorized use.

          Transparency: We value honesty, which is why every user can see how the platform operates and how their data is handled.

          Community Without Borders: Connect with like-minded individuals from all over the world. Our social network makes communication easy and accessible!

          We are confident that, with your help, we will make this world better and safer! Join us and be part of the future! 🌍💬

          Stay tuned for news and don’t miss the chance to be one of the first users of our unique platform!

          With love,
          The [Your Social Network] Team
        </p>
      </div>

      <div className="flex items-center justify-between text-sm my-4">
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

      <Comments />
    </div>
  )
}

export default Post;












