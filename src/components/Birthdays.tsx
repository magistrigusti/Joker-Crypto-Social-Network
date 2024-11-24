import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rouned-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover" alt=""
            width={40} height={40} src="https://pixels.com/images/homepageProductCanvasPrint002.jpg" />

          <span className="font-semibold">Sara</span>
        </div>

        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>

      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image width={40} height={40} src="/gift.png" alt="" />

        <Link href="/" className="flex flex-col gap-1 text-xs" >
          <span className="text-gray-700">Upcoming Birthdays</span>

          <span className="text-gray-500">See other 12 have upcoming birthdays</span>
        </Link>
      </div>
    </div>
  )
}

export default Birthdays;